import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ORIGIN = 'https://bess-ai-control.work';
const DATED_BRIEFING = /^\d{4}-\d{2}-\d{2}\.(html|json)$/;
const JSON_BRIEFING_START_DATE = '2026-07-21';

async function readText(rootDir, relativePath) {
  return readFile(path.join(rootDir, relativePath), 'utf8');
}

async function writeIfChanged(rootDir, relativePath, content) {
  const filePath = path.join(rootDir, relativePath);
  const current = await readFile(filePath, 'utf8').catch(() => null);
  if (current !== content) await writeFile(filePath, content);
}

async function listDatedBriefings(rootDir) {
  const entries = await readdir(path.join(rootDir, 'briefing'));
  return entries.filter((name) => DATED_BRIEFING.test(name)).sort();
}

function withCanonical(html, canonicalUrl) {
  const tag = `<link rel="canonical" href="${canonicalUrl}" />`;
  if (/<link\s+[^>]*rel=["']canonical["'][^>]*>/i.test(html)) {
    return html.replace(/<link\s+[^>]*rel=["']canonical["'][^>]*>/i, tag);
  }
  return html.replace(/\s*<\/head>/i, `\n    ${tag}\n  </head>`);
}

function buildSitemap(datedHtmlFiles) {
  const routes = [
    ['/', 'weekly'],
    ['/llms.txt', 'weekly'],
    ['/llms-full.txt', 'weekly'],
    ['/growth/', 'daily'],
    ['/briefing/', 'daily'],
    ['/ai/', 'weekly'],
    ...datedHtmlFiles.map((name) => [`/briefing/${name.slice(0, -5)}`, 'never']),
  ];
  const urls = routes
    .map(([route, frequency]) => `  <url><loc>${ORIGIN}${route}</loc><changefreq>${frequency}</changefreq></url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export async function hardenSite(rootDir) {
  const datedFiles = await listDatedBriefings(rootDir);
  const datedHtmlFiles = datedFiles.filter((name) => name.endsWith('.html'));
  const pages = [
    ['briefing/index.html', `${ORIGIN}/briefing/`],
    ['growth/index.html', `${ORIGIN}/growth/`],
    ['ai/index.html', `${ORIGIN}/ai/`],
    ...datedHtmlFiles.map((name) => [`briefing/${name}`, `${ORIGIN}/briefing/${name.slice(0, -5)}`]),
  ];

  for (const [relativePath, canonicalUrl] of pages) {
    const html = await readText(rootDir, relativePath);
    await writeIfChanged(rootDir, relativePath, withCanonical(html, canonicalUrl));
  }
  await writeIfChanged(rootDir, 'sitemap.xml', buildSitemap(datedHtmlFiles));
}

async function parseJson(rootDir, relativePath, issues) {
  try {
    return JSON.parse(await readText(rootDir, relativePath));
  } catch (error) {
    issues.push(`${relativePath}: invalid JSON (${error.message})`);
    return null;
  }
}

export async function validateSite(rootDir) {
  const issues = [];
  const rootHtml = await readText(rootDir, 'index.html');
  if (!/<meta\s+[^>]*name=["']theme-color["'][^>]*>/i.test(rootHtml)) {
    issues.push('index.html: missing theme-color metadata');
  }
  if (!/<noscript[\s>]/i.test(rootHtml)) {
    issues.push('index.html: missing noscript fallback');
  }

  const headers = await readText(rootDir, '_headers').catch(() => '');
  const requiredHeaders = [
    'X-Content-Type-Options:',
    'Referrer-Policy:',
    'X-Frame-Options:',
    'Permissions-Policy:',
    'Strict-Transport-Security:',
  ];
  for (const header of requiredHeaders) {
    if (!headers.includes(header)) issues.push(`_headers: missing ${header.slice(0, -1)}`);
  }
  if (!/\/assets\/\*[\s\S]*Cache-Control:[^\n]*immutable/i.test(headers)) {
    issues.push('_headers: missing immutable asset cache policy');
  }

  const datedFiles = await listDatedBriefings(rootDir);
  const htmlDates = new Set(datedFiles.filter((name) => name.endsWith('.html')).map((name) => name.slice(0, -5)));
  const jsonDates = new Set(datedFiles.filter((name) => name.endsWith('.json')).map((name) => name.slice(0, -5)));

  for (const date of htmlDates) {
    if (date >= JSON_BRIEFING_START_DATE && !jsonDates.has(date)) {
      issues.push(`briefing/${date}.json: missing pair for HTML briefing`);
    }
  }
  for (const date of jsonDates) {
    if (!htmlDates.has(date)) issues.push(`briefing/${date}.html: missing pair for JSON briefing`);
  }

  const canonicalPages = [
    ['briefing/index.html', `${ORIGIN}/briefing/`],
    ['growth/index.html', `${ORIGIN}/growth/`],
    ['ai/index.html', `${ORIGIN}/ai/`],
    ...[...htmlDates].map((date) => [`briefing/${date}.html`, `${ORIGIN}/briefing/${date}`]),
  ];
  for (const [relativePath, canonicalUrl] of canonicalPages) {
    const html = await readText(rootDir, relativePath);
    const matches = html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*>/gi) ?? [];
    if (matches.length !== 1 || !matches[0].includes(canonicalUrl)) {
      issues.push(`${relativePath}: expected one canonical URL ${canonicalUrl}`);
    }
  }

  const sitemap = await readText(rootDir, 'sitemap.xml');
  for (const date of htmlDates) {
    const expected = `${ORIGIN}/briefing/${date}`;
    if (!sitemap.includes(expected)) issues.push(`sitemap.xml: missing ${expected}`);
  }

  const graph = await parseJson(rootDir, 'graph.json', issues);
  if (graph) {
    const nodeIds = new Set();
    const seen = new Set();
    for (const node of graph.nodes ?? []) {
      const id = node.id;
      if (!id) issues.push('graph.json: node missing id');
      if (seen.has(id)) issues.push(`graph.json: duplicate node id ${id}`);
      seen.add(id);
      nodeIds.add(id);
    }
    for (const [index, link] of (graph.links ?? []).entries()) {
      if (!nodeIds.has(link.source) || !nodeIds.has(link.target)) {
        issues.push(`graph.json: link ${index} references missing node`);
      }
    }
  }

  for (const file of ['agents.json', 'knowledge/recent.json', 'knowledge/graph-knowledge.json']) {
    await parseJson(rootDir, file, issues);
  }
  const stats = await parseJson(rootDir, 'knowledge/stats.json', issues);

  const events = [];
  const eventLines = (await readText(rootDir, 'knowledge/events.jsonl')).split(/\r?\n/);
  for (const [index, line] of eventLines.entries()) {
    if (!line.trim()) continue;
    try {
      events.push(JSON.parse(line));
    } catch (error) {
      issues.push(`knowledge/events.jsonl:${index + 1}: invalid JSON (${error.message})`);
    }
  }
  if (stats) {
    if (stats.totals?.all !== events.length) {
      issues.push(`knowledge/stats.json: totals.all is ${stats.totals?.all}, expected ${events.length}`);
    }
    const counts = new Map();
    for (const event of events) counts.set(event.type, (counts.get(event.type) ?? 0) + 1);
    const totalTypes = new Set([
      ...counts.keys(),
      ...Object.keys(stats.totals ?? {}).filter((type) => type !== 'all'),
    ]);
    for (const type of totalTypes) {
      const expected = counts.get(type) ?? 0;
      if (stats.totals?.[type] !== expected) {
        issues.push(`knowledge/stats.json: totals.${type} is ${stats.totals?.[type]}, expected ${expected}`);
      }
    }
  }

  return issues;
}

async function main() {
  const [command, root = '.'] = process.argv.slice(2);
  const rootDir = path.resolve(root);
  if (command === 'harden') {
    await hardenSite(rootDir);
    console.log(`Hardened static site at ${rootDir}`);
    return;
  }
  if (command === 'validate') {
    const issues = await validateSite(rootDir);
    if (issues.length) {
      for (const issue of issues) console.error(`- ${issue}`);
      process.exitCode = 1;
      return;
    }
    console.log(`Validated static site at ${rootDir}: no issues`);
    return;
  }
  console.error('Usage: node scripts/site-tools.mjs <harden|validate> [root]');
  process.exitCode = 2;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await main();
}
