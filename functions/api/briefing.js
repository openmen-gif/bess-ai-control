// 온디맨드 일일 브리핑 수집 — Cloudflare Pages Function (GET /api/briefing)
// bess_briefing_publisher.py(매일 07:30 정적 발행)의 섹션 정의·정제 규칙을 미러링해
// 구글뉴스 RSS 6부문을 라이브 수집한다. 엣지 캐시 15분(RSS 과다 호출 방지).
// 설계: docs/superpowers/specs/2026-07-21-브리핑-온디맨드-갱신-design.md

const SECTIONS = [
  ["배터리·셀", "🔋", "ESS 배터리 OR LFP OR 리튬이온 OR 열폭주 when:2d"],
  ["PCS·전력변환", "⚡", "ESS PCS OR 인버터 전력변환 OR SiC 전력반도체 when:2d"],
  ["계통연계·그리드", "🔌", "ESS 계통연계 OR 그리드포밍 OR 전력계통 주파수 when:2d"],
  ["안전·소방", "🚨", "ESS 화재 OR 배터리 화재 안전 OR 소방 기준 when:2d"],
  ["규격·인허가·정책", "🏛️", "ESS 정책 OR 입찰 OR 전력시장 제도 OR 보조금 when:2d"],
  ["시장·프로젝트", "🌍", "BESS 수주 OR ESS 프로젝트 OR 에너지저장 시장 when:2d"],
];
const MAX_ITEMS = 6;
const CACHE_TTL = 900; // 초

function decodeXml(s) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&");
}

function kstStamp(ms) {
  const k = new Date(ms + 9 * 3600 * 1000);
  const p = (n) => String(n).padStart(2, "0");
  return {
    date: `${k.getUTCFullYear()}-${p(k.getUTCMonth() + 1)}-${p(k.getUTCDate())}`,
    time: `${p(k.getUTCHours())}:${p(k.getUTCMinutes())}`,
    md: `${p(k.getUTCMonth() + 1)}/${p(k.getUTCDate())}`,
  };
}

// RSS XML → 항목 배열 (발행기와 동일: 제목 말미 " - 매체명" 제거·정규화 중복 제거·최대 6건)
export function parseRss(xml) {
  const items = [];
  const seen = new Set();
  const blocks = xml.match(/<item>[\s\S]*?<\/item>/g) || [];
  for (const b of blocks) {
    const pick = (tag) => {
      const m = b.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
      return m ? decodeXml(m[1]).trim() : "";
    };
    const title = pick("title").replace(/\s*-\s*[^-]{2,25}$/, "").trim();
    const link = pick("link");
    const key = title.replace(/\s+/g, "").slice(0, 40);
    if (!title || !link || seen.has(key)) continue;
    seen.add(key);
    let when = "";
    const d = new Date(pick("pubDate"));
    if (!Number.isNaN(d.getTime())) {
      const k = kstStamp(d.getTime());
      when = `${k.md} ${k.time}`;
    }
    items.push({ title, link, source: pick("source"), when });
    if (items.length >= MAX_ITEMS) break;
  }
  return items;
}

// 6부문 라이브 수집 — 부문별 8초 타임아웃, 실패 부문은 빈 목록(부분 성공 허용)
export async function collectBriefing(fetchImpl) {
  const results = await Promise.allSettled(
    SECTIONS.map(async ([, , q]) => {
      const url = `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=ko&gl=KR&ceid=KR:ko`;
      const res = await fetchImpl(url, {
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return parseRss(await res.text());
    }),
  );
  const sections = SECTIONS.map(([name, icon], i) => ({
    name, icon,
    items: results[i].status === "fulfilled" ? results[i].value : [],
  }));
  const total = sections.reduce((n, s) => n + s.items.length, 0);
  const k = kstStamp(Date.now());
  return { updated: `${k.date} ${k.time}`, total, sections };
}

export async function onRequestGet(context) {
  const cacheKey = new Request(new URL("/api/briefing", context.request.url).toString());
  const cache = caches.default;
  const hit = await cache.match(cacheKey);
  if (hit) {
    const r = new Response(hit.body, hit);
    r.headers.set("x-briefing-cache", "HIT");
    return r;
  }
  const data = await collectBriefing(fetch);
  const res = new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": `public, max-age=0, s-maxage=${CACHE_TTL}`,
      "x-briefing-cache": "MISS",
    },
  });
  // 0건(전 부문 실패)은 캐시하지 않는다 — 일시 장애가 15분간 고정되는 것 방지
  if (data.total > 0) context.waitUntil(cache.put(cacheKey, res.clone()));
  return res;
}
