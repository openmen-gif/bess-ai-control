import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { hardenSite, validateSite } from '../scripts/site-tools.mjs';

async function write(root, relativePath, content) {
  const filePath = path.join(root, relativePath);
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, content);
}

async function makeSite() {
  const root = await mkdtemp(path.join(os.tmpdir(), 'bess-site-'));
  await write(root, 'index.html', '<html><head><meta name="theme-color" content="#020617"><title>Home</title></head><body><noscript>JavaScript required</noscript></body></html>');
  await write(root, 'growth/index.html', '<html><head><title>Growth</title></head><body></body></html>');
  await write(root, 'ai/index.html', '<html><head><title>AI</title></head><body></body></html>');
  await write(root, 'briefing/index.html', '<html><head><title>Briefing</title></head><body></body></html>');
  await write(root, 'briefing/2026-10-01.html', '<html><head><title>Daily</title></head><body></body></html>');
  await write(root, 'briefing/2026-10-01.json', '{"date":"2026-10-01"}');
  await write(root, 'agents.json', '[{"id":"A"}]');
  await write(root, 'graph.json', '{"nodes":[{"id":"A"}],"links":[]}');
  await write(root, 'knowledge/events.jsonl', '{"type":"skill"}\n');
  await write(root, 'knowledge/stats.json', '{"totals":{"all":1,"skill":1}}');
  await write(root, 'knowledge/recent.json', '{"updated":"2026-10-01","events":[]}');
  await write(root, 'knowledge/graph-knowledge.json', '{"nodes":[],"links":[]}');
  await write(root, 'sitemap.xml', '<?xml version="1.0"?><urlset><url><loc>https://bess-ai-control.work/</loc></url></urlset>');
  await write(root, '_headers', `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: DENY
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains

/assets/*
  Cache-Control: public, max-age=31536000, immutable
`);
  return root;
}

test('hardening is idempotent and adds canonical URLs plus dated sitemap entries', async () => {
  const root = await makeSite();

  await hardenSite(root);
  await hardenSite(root);

  const daily = await readFile(path.join(root, 'briefing/2026-10-01.html'), 'utf8');
  const sitemap = await readFile(path.join(root, 'sitemap.xml'), 'utf8');
  assert.equal((daily.match(/rel="canonical"/g) ?? []).length, 1);
  assert.match(daily, /https:\/\/bess-ai-control\.work\/briefing\/2026-10-01/);
  assert.doesNotMatch(daily, /2026-10-01\.html/);
  assert.equal((sitemap.match(/briefing\/2026-10-01</g) ?? []).length, 1);
  assert.doesNotMatch(sitemap, /2026-10-01\.html/);
});

test('validation accepts a complete generated site', async () => {
  const root = await makeSite();
  await hardenSite(root);
  assert.deepEqual(await validateSite(root), []);
});

test('validation reports a missing briefing JSON pair', async () => {
  const root = await makeSite();
  await write(root, 'briefing/2026-10-02.html', '<html><head></head><body></body></html>');
  await hardenSite(root);
  const issues = await validateSite(root);
  assert(issues.some((issue) => issue.includes('2026-10-02.json')));
});

test('validation permits HTML-only archives before JSON publishing began', async () => {
  const root = await makeSite();
  await write(root, 'briefing/2026-07-20.html', '<html><head></head><body></body></html>');
  await hardenSite(root);
  assert.deepEqual(await validateSite(root), []);
});

test('validation does not move the JSON boundary when the earliest JSON is deleted', async () => {
  const root = await makeSite();
  await write(root, 'briefing/2026-10-02.html', '<html><head></head><body></body></html>');
  await write(root, 'briefing/2026-10-02.json', '{"date":"2026-10-02"}');
  await rm(path.join(root, 'briefing/2026-10-01.json'));
  await hardenSite(root);
  const issues = await validateSite(root);
  assert(issues.some((issue) => issue.includes('2026-10-01.json')));
});

test('validation reports missing JSON files when no JSON briefings remain', async () => {
  const root = await makeSite();
  await rm(path.join(root, 'briefing/2026-10-01.json'));
  await hardenSite(root);
  const issues = await validateSite(root);
  assert(issues.some((issue) => issue.includes('2026-10-01.json')));
});

test('validation identifies the malformed JSONL line', async () => {
  const root = await makeSite();
  await write(root, 'knowledge/events.jsonl', '{"type":"skill"}\nnot-json\n');
  await hardenSite(root);
  const issues = await validateSite(root);
  assert(issues.some((issue) => issue.includes('events.jsonl:2')));
});

test('validation reports graph links that reference missing nodes', async () => {
  const root = await makeSite();
  await write(root, 'graph.json', '{"nodes":[{"id":"A"}],"links":[{"source":"A","target":"missing"}]}');
  await hardenSite(root);
  const issues = await validateSite(root);
  assert(issues.some((issue) => issue.includes('missing node')));
});

test('validation reports duplicate graph node IDs', async () => {
  const root = await makeSite();
  await write(root, 'graph.json', '{"nodes":[{"id":"A"},{"id":"A"}],"links":[]}');
  await hardenSite(root);
  const issues = await validateSite(root);
  assert(issues.some((issue) => issue.includes('duplicate node id A')));
});

test('validation reports stats totals that disagree with event data', async () => {
  const root = await makeSite();
  await write(root, 'knowledge/stats.json', '{"totals":{"all":2,"skill":2}}');
  await hardenSite(root);
  const issues = await validateSite(root);
  assert(issues.some((issue) => issue.includes('totals.all')));
  assert(issues.some((issue) => issue.includes('totals.skill')));
});

test('validation reports positive stats for event types absent from the log', async () => {
  const root = await makeSite();
  await write(root, 'knowledge/stats.json', '{"totals":{"all":1,"skill":1,"activity":1}}');
  await hardenSite(root);
  const issues = await validateSite(root);
  assert(issues.some((issue) => issue.includes('totals.activity')));
});

test('validation reports missing hosting protections and root fallback metadata', async () => {
  const root = await makeSite();
  await write(root, 'index.html', '<html><head><title>Home</title></head><body></body></html>');
  await write(root, '_headers', '/*\n  X-Content-Type-Options: nosniff\n');
  await hardenSite(root);
  const issues = await validateSite(root);
  assert(issues.some((issue) => issue.includes('theme-color')));
  assert(issues.some((issue) => issue.includes('noscript')));
  assert(issues.some((issue) => issue.includes('Referrer-Policy')));
  assert(issues.some((issue) => issue.includes('immutable asset cache')));
});
