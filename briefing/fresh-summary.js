// 기준일: 2026-11-25 · 기준 커밋: ad89756
// TSM DOM 계약: .fresh .item[data-candidate-id], briefing:fresh-rendered.
const STATUSES = new Set(['queued', 'running', 'done', 'waiting_limit', 'failed', 'over_budget', 'duplicate', 'unknown', 'ip_limited']);
const ACTIVE = new Set(['queued', 'running', 'waiting_limit']);
const INSTANCES = new WeakMap();
const UNAVAILABLE_DOCUMENTS = new WeakSet();
const FORBIDDEN_DOCUMENTS = new WeakSet();
const POLL_MS = 30000;
const MAX_BACKOFF_MS = 300000;
const MAX_TIMER_CHUNK_MS = 3600000;
const validId = value => typeof value === 'string' && /^[A-Za-z0-9._:-]{1,200}$/.test(value);
const kstDate = value => new Date(value.getTime() + 9 * 3600000).toISOString().slice(0, 10);

function validDay(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const d = new Date(`${value}T00:00:00Z`);
  return Number.isFinite(d.getTime()) && d.toISOString().slice(0, 10) === value;
}

export function validTimestamp(value) {
  if (typeof value !== 'string') return false;
  const m = value.match(/^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,9})?(Z|([+-])(\d{2}):(\d{2}))$/);
  return !!m && validDay(m[1]) && +m[2] < 24 && +m[3] < 60 && +m[4] < 60 &&
    (m[5] === 'Z' || (+m[7] <= 14 && +m[8] < 60 && (+m[7] !== 14 || +m[8] === 0))) && Number.isFinite(Date.parse(value));
}

export function formatRetryTime(value, now = new Date()) {
  if (!validTimestamp(value)) return null;
  const date = new Date(value);
  const k = new Date(date.getTime() + 9 * 3600000).toISOString();
  return (kstDate(date) === kstDate(now) ? '' : `${k.slice(5, 10)} `) + k.slice(11, 16);
}

function validSummary(value) {
  return !!value && typeof value === 'object' &&
    ['title_ko', 'background', 'detail', 'implication'].every(key => typeof value[key] === 'string') &&
    Array.isArray(value.key) && value.key.every(key => typeof key === 'string') && typeof value.has_body === 'boolean';
}

function retryAfter(response, now) {
  const raw = response.headers?.get('Retry-After');
  if (typeof raw !== 'string') return null;
  if (/^\d{1,8}$/.test(raw)) return Number(raw) > 0 ? now.getTime() + Math.max(POLL_MS, Number(raw) * 1000) : null;
  // HTTP-date는 날짜 rollover도 허용하지 않는다.
  const stamp = Date.parse(raw);
  return Number.isFinite(stamp) && new Date(stamp).toUTCString() === raw && stamp > now.getTime() ? Math.max(stamp, now.getTime() + POLL_MS) : null;
}

function duplicateHref(value) {
  if (typeof value !== 'string') return null;
  const m = value.match(/^\/briefing\/(\d{4}-\d{2}-\d{2})#(?:kr|global|notice):\d+:\d+$/);
  return m && validDay(m[1]) ? value : null;
}

export function initFreshSummary(options = {}) {
  const doc = options.document || globalThis.document;
  if (!doc) return { destroy() {} };
  if (INSTANCES.has(doc)) return INSTANCES.get(doc);
  const request = options.fetch || globalThis.fetch.bind(globalThis);
  const now = options.now || (() => new Date());
  const later = options.setTimeout || globalThis.setTimeout;
  const cancel = options.clearTimeout || globalThis.clearTimeout;
  const states = new Map();
  const views = new WeakMap();
  let cards = [], timer = null, busy = false, stopped = false, budget = null, ipInfo = null, noticeHint = '', retryUntil = 0, pendingScan = false;
  let unavailable = UNAVAILABLE_DOCUMENTS.has(doc);
  let submissionForbidden = FORBIDDEN_DOCUMENTS.has(doc);
  let readFailures = 0, readNotBefore = 0, readNotice = '';

  function clearTimer() { if (timer !== null) cancel(timer); timer = null; }
  function activeIds() { return [...states].filter(([, s]) => s.accepted && (ACTIVE.has(s.status) || s.needsRead)).map(([id]) => id).filter(id => cards.some(c => c.dataset.candidateId === id)); }
  function schedule() {
    clearTimer();
    if (!stopped && !unavailable && !doc.hidden && activeIds().length) {
      // 긴 deadline은 보존하되 setTimeout의 32bit 지연 한도 아래에서 나눠 기다린다.
      const delay = Math.max(POLL_MS, retryUntil - now().getTime(), readNotBefore - now().getTime());
      timer = later(() => { timer = null; poll(); }, Math.min(MAX_TIMER_CHUNK_MS, delay));
    }
  }
  function settle() {
    busy = false; render();
    if (pendingScan && !stopped && !unavailable && !doc.hidden) { pendingScan = false; void refresh(); }
    else schedule();
  }
  function disableSummary() {
    // 배포 순서상 API가 없으면 페이지를 다시 열 때까지 조용히 기능을 비활성화한다.
    UNAVAILABLE_DOCUMENTS.add(doc);
    unavailable = true; pendingScan = false; clearTimer(); budget = null; ipInfo = null; noticeHint = ''; readNotice = '';
    cards.forEach(card => {
      const state = states.get(card.dataset.candidateId);
      if (state?.status !== 'done' || !validSummary(state.summary)) card.querySelector('.fresh-summary')?.remove();
    });
    doc.getElementById('fresh-summary-notice')?.remove();
  }
  function unsupported(response) {
    const type = response.headers?.get('Content-Type');
    return [404, 405, 501].includes(response.status) ||
      (response.ok && !!type && !/^application\/(?:[\w.+-]+\+)?json(?:\s*;|$)/i.test(type));
  }
  function forbidSubmissions() {
    submissionForbidden = true; FORBIDDEN_DOCUMENTS.add(doc);
    states.forEach(state => {
      if (!state.accepted && state.status !== 'unknown') Object.assign(state, {status:null,requested:true,submitting:false,needsRead:false,summary:null,next_retry_at:null,duplicate_of:null,error:'요약 요청이 허용되지 않았어요 — 이 페이지에서는 새 요청을 보내지 않습니다'});
    });
    noticeHint = '이 페이지에서는 새 요약 요청이 허용되지 않아요';
  }
  function readBudget(value) {
    if (value && validDay(value.date) && value.date === kstDate(now()) &&
      Number.isSafeInteger(value.used) && value.used >= 0 && Number.isSafeInteger(value.limit) && value.limit === 30 && value.used <= value.limit) budget = value;
  }
  function readIpBudget(value) {
    if (value === undefined) return;
    ipInfo = value && validDay(value.date) && value.date === kstDate(now()) &&
      Number.isSafeInteger(value.used) && value.used >= 0 && Number.isSafeInteger(value.limit) && value.limit > 0 &&
      Number.isSafeInteger(value.remaining) && value.remaining >= 0 && value.used + value.remaining === value.limit ? value : null;
  }
  function quotaDate(payload, status) {
    const date = status === 'ip_limited' ? payload.ip_budget?.date : payload.budget?.date;
    return validDay(date) ? date : kstDate(now());
  }
  function expireDailyLimits() {
    states.forEach(state => {
      if (['over_budget','ip_limited'].includes(state.status) && state.budgetDate !== kstDate(now())) Object.assign(state, {status:null,requested:false,accepted:false,needsRead:false,error:null,summary:null,next_retry_at:null,duplicate_of:null,budgetDate:kstDate(now())});
    });
  }
  function notice() {
    if (budget?.date !== kstDate(now())) budget = null;
    if (ipInfo?.date !== kstDate(now())) ipInfo = null;
    let el = doc.getElementById('fresh-summary-notice');
    if (!el) {
      const host = doc.getElementById('live-status')?.parentNode;
      if (!host) return;
      el = doc.createElement('span'); el.id = 'fresh-summary-notice'; el.className = 'st'; el.setAttribute('role', 'status'); host.appendChild(el);
    }
    el.textContent = [noticeHint, readNotice, budget ? `오늘 전체 요약 ${budget.used}/${budget.limit}건` : '', ipInfo ? `이 접속의 오늘 요청 ${ipInfo.used}/${ipInfo.limit}건 · 남은 ${ipInfo.remaining}건` : ''].filter(Boolean).join(' · ');
  }
  function text(parent, tag, value, className) {
    const el = doc.createElement(tag); el.textContent = value; if (className) el.className = className; parent.appendChild(el); return el;
  }
  function render() {
    if (stopped || unavailable) return;
    expireDailyLimits();
    for (const card of cards) {
      const state = states.get(card.dataset.candidateId);
      if (!state) continue;
      const view = JSON.stringify([state.status, state.accepted, state.submitting, state.error, state.summary, state.next_retry_at, state.duplicate_of, state.next_retry_at ? Date.parse(state.next_retry_at) <= now().getTime() : false]);
      if (views.get(card) === view) continue;
      let box = card.querySelector('.fresh-summary');
      if (!box) { box = doc.createElement('div'); box.className = 'fresh-summary'; box.setAttribute('aria-live', 'polite'); card.appendChild(box); }
      box.textContent = '';
      if (state.error) text(box, 'p', state.error, 'meta');
      if (state.status === 'done' && validSummary(state.summary)) {
        const details = doc.createElement('details'); box.appendChild(details);
        text(details, 'summary', 'AI 요약 보기');
        const body = doc.createElement('div'); body.className = 'sum'; details.appendChild(body);
        const s = state.summary;
        if (s.title_ko) text(body, 'p', s.title_ko);
        text(body, 'b', '1. 배경'); text(body, 'p', s.background);
        text(body, 'b', '2. 핵심 사항'); const list = doc.createElement('ul'); body.appendChild(list); s.key.forEach(key => text(list, 'li', key));
        text(body, 'b', '3. 상세 내용'); text(body, 'p', s.detail);
        text(body, 'b', '4. 시사점 · AI 분석'); text(body, 'p', s.implication);
        text(body, 'p', s.has_body ? 'AI 요약 · 본문 기반 · 원문과 다를 수 있어요' : 'AI 요약 · 제목 기반(본문 확보 실패) · 원문 확인이 필요해요', 'meta');
      } else {
        let message = {queued: '요약 대기 중', running: '요약 생성 중', done: '요약 결과 확인 중', failed: '요약 생성 실패 — 원문을 확인해 주세요', over_budget: '오늘 전체 요약 한도 도달 — 다음 날 다시 확인해 주세요', ip_limited:'오늘 요청 한도로 이 기사 요약을 요청할 수 없어요 — 다음 날 다시 확인해 주세요', duplicate: '중복 기사 — 기존 요약을 확인해 주세요', unknown:'요약 후보를 확인할 수 없어요 — 새 소식 확인으로 목록을 갱신해 주세요'}[state.status] || (state.error ? '원문은 계속 볼 수 있어요' : state.needsRead ? '요약 상태 확인 중' : '이번 확인은 최대 10건 — 다음 새 소식 확인 때 요청해 주세요');
        if (state.status === 'waiting_limit') {
          const time = formatRetryTime(state.next_retry_at, now());
          message = time ? `요약 한도 대기 — ${time} ${state.accepted ? '재시도 예정' : '이후 새 소식 확인으로 다시 요청'}` : (state.accepted ? '요약 한도 대기 — 재시도 시각 확인 중' : '요약 요청 한도 대기 — 잠시 후 새 소식 확인으로 다시 요청해 주세요');
          if (time && Date.parse(state.next_retry_at) <= now().getTime()) message = state.accepted ? '요약 재시도 예정 시각 경과 — 상태 확인 중' : '요약 요청이 접수되지 않았어요 — 새 소식 확인으로 다시 요청해 주세요';
        }
        text(box, 'p', state.submitting ? '요약 요청 확인 중' : message, 'meta');
        const href = duplicateHref(state.duplicate_of);
        if (state.status === 'duplicate' && href) { const link = text(box, 'a', '기존 발행 기사 보기'); link.setAttribute('href', href); }
      }
      views.set(card, view);
    }
    notice();
  }
  function scanDom() {
    cards = [...doc.querySelectorAll('.fresh .item[data-candidate-id]')].filter(validCard);
    for (const card of cards) {
      const id = card.dataset.candidateId;
      const rawStatus = card.dataset.summaryStatus;
      const status = STATUSES.has(rawStatus) ? rawStatus : rawStatus ? 'unknown' : null;
      const existing = states.get(id);
      const returnedToWork = existing?.status === 'ip_limited' && !['unknown','ip_limited'].includes(status) && card.dataset.summaryRequested === 'true' && !views.has(card);
      if (!existing || returnedToWork || (existing.status === 'unknown' && status !== 'unknown' && card.dataset.summaryRequested === 'false' && !views.has(card))) {
        const unaccepted = ['unknown','ip_limited'].includes(status);
        const requested = unaccepted || (card.dataset.summaryRequested === undefined ? !!status : card.dataset.summaryRequested === 'true');
        states.set(id, { status:requested ? status : null, accepted:requested && !unaccepted, requested, needsRead:requested && !unaccepted, budgetDate:kstDate(now()) });
      }
    }
  }
  function validCard(card) {
    return validId(card.dataset.candidateId) && (card.dataset.summaryRequested === undefined || ['true','false'].includes(card.dataset.summaryRequested));
  }
  async function restoreInitialMetadata() {
    if (stopped || unavailable) return;
    if (![...doc.querySelectorAll('.fresh .item[data-candidate-id]')].some(validCard)) { void refresh(); return; }
    // 초기 DOM이 이미 있으면 선행 이벤트의 availability/IP 정보를 읽기 GET으로 복원한다.
    // 응답의 후보 목록은 POST 대상으로 사용하지 않는다.
    busy = true;
    let restored = false;
    try {
      const response = await request('/api/briefing', {cache:'no-store',signal:AbortSignal.timeout(15000)});
      if (stopped || unavailable) return;
      if (unsupported(response)) { disableSummary(); return; }
      if (!response.ok) throw new Error('연결 정보 조회 실패');
      const payload = await response.json();
      if (stopped || unavailable) return;
      if (payload?.summary_available === false) { scanDom(); disableSummary(); return; }
      if (!Array.isArray(payload?.sections) && !Array.isArray(payload?.sections_global)) throw new Error('연결 정보 형식 오류');
      readBudget(payload.budget); readIpBudget(payload.ip_budget); restored = true;
    } catch {
      noticeHint = '요약 연결 정보를 확인하지 못했어요 — 새 소식 확인으로 다시 시도해 주세요';
    } finally {
      busy = false;
      if (!stopped && !unavailable) {
        pendingScan = restored && doc.hidden;
        if (restored && !doc.hidden) void refresh();
        else { if (restored) scanDom(); render(); }
      }
    }
  }
  async function fetchItems(ids) {
    for (let i = 0; i < ids.length && !stopped && !unavailable; i += 10) {
      const batch = ids.slice(i, i + 10);
      const response = await request(`/api/briefing/summary?ids=${encodeURIComponent(batch.join(','))}`, {cache: 'no-store', signal: AbortSignal.timeout(15000)});
      if (stopped || unavailable) return false;
      if (unsupported(response)) { disableSummary(); return false; }
      if (response.status === 429) {
        const at = retryAfter(response, now());
        retryUntil = at || now().getTime() + POLL_MS;
        readNotice = at ? `요약 상태 조회 한도 대기 — ${formatRetryTime(new Date(at).toISOString(), now())} 이후 재확인` : '요약 상태 조회 한도 대기 — 재시도 시각 확인 중'; return false;
      }
      if (response.status === 400) {
        batch.forEach(id => Object.assign(states.get(id), {status: 'failed', requested: false, accepted: false, needsRead: false, error: '요약 조회 요청을 확인하지 못했어요 — 새 소식 확인으로 목록을 갱신해 주세요'})); continue;
      }
      if (!response.ok) throw new Error('조회 실패');
      const payload = await response.json();
      if (stopped || unavailable) return false;
      if (!Array.isArray(payload?.items)) throw new Error('상태 형식 오류');
      const seen = new Set();
      const updates = [];
      for (const result of payload.items) {
        if (!result || !batch.includes(result.candidate_id) || seen.has(result.candidate_id) || typeof result.status !== 'string') throw new Error('기사 식별 형식 오류');
        seen.add(result.candidate_id);
        const previous = states.get(result.candidate_id);
        if (['unknown','ip_limited'].includes(result.status) || !STATUSES.has(result.status)) {
          updates.push([previous, {candidate_id:result.candidate_id,status:result.status === 'ip_limited' ? 'ip_limited' : 'unknown',attempts:0,updated_at:null}]); continue;
        }
        if (
          !Number.isSafeInteger(result.attempts) || result.attempts < 0 || !validTimestamp(result.updated_at) ||
          (result.next_retry_at != null && !validTimestamp(result.next_retry_at)) ||
          (result.status === 'done' && !validSummary(result.summary)) ||
          (result.duplicate_of != null && typeof result.duplicate_of !== 'string')) throw new Error('기사 상태 형식 오류');
        if (previous.updated_at && Date.parse(previous.updated_at) > Date.parse(result.updated_at)) continue;
        updates.push([previous, result]);
      }
      if (seen.size !== batch.length) throw new Error('기사 상태 누락');
      readBudget(payload.budget); readIpBudget(payload.ip_budget);
      updates.forEach(([previous, result]) => Object.assign(previous, {next_retry_at:null, duplicate_of:null, summary:null}, result, {accepted:!['unknown','ip_limited'].includes(result.status), requested:true, needsRead:false, error:null, budgetDate:quotaDate(payload,result.status)}));
    }
    return true;
  }
  async function readItems(ids) {
    try {
      if (await fetchItems(ids)) {
        readFailures = 0; readNotBefore = now().getTime() + POLL_MS; readNotice = '';
      }
    } catch {
      readFailures = Math.min(readFailures + 1, 5);
      readNotBefore = now().getTime() + Math.min(MAX_BACKOFF_MS, POLL_MS * 2 ** (readFailures - 1));
      readNotice = '요약 상태 확인 실패 — 잠시 후 다시 확인합니다';
    }
  }
  async function poll() {
    if (busy || stopped || unavailable || doc.hidden) return;
    if (Math.max(retryUntil, readNotBefore) > now().getTime()) { schedule(); return; }
    busy = true;
    try { await readItems(activeIds()); }
    finally { settle(); }
  }
  async function refresh() {
    if (stopped || unavailable) return;
    const previousIds = new Set(cards.map(c => c.dataset.candidateId));
    scanDom(); render();
    if (busy || doc.hidden) { if (cards.some(c => !previousIds.has(c.dataset.candidateId))) pendingScan = true; return; }
    busy = true; clearTimer();
    try {
      if (budget?.date !== kstDate(now())) budget = null;
      const ids = [...new Set(cards.map(c => c.dataset.candidateId))].filter(id => !states.get(id).requested);
      const batch = ids.slice(0, 10);
      noticeHint = ids.length > 10 ? `이번 확인은 최대 10건 요청 · 나머지 ${ids.length - 10}건은 다음 새 소식 확인 때 요청` : '';
      if (submissionForbidden) forbidSubmissions();
      else if (batch.length && now().getTime() >= retryUntil) {
        // 기존 작업의 무료 재사용 여부도 서버가 항목별로 최종 판정한다.
          batch.forEach(id => Object.assign(states.get(id), {requested:true,status:null,submitting:true,error:null})); render();
          const response = await request('/api/briefing/summarize', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({candidate_ids:batch}), cache:'no-store', signal:AbortSignal.timeout(15000)});
          if (stopped || unavailable) return;
          if (unsupported(response)) { disableSummary(); return; }
          if (response.status === 403) forbidSubmissions();
          else if (response.status === 429) {
            const at = retryAfter(response, now()); retryUntil = at || now().getTime() + POLL_MS;
            batch.forEach(id => Object.assign(states.get(id), {requested:false,accepted:false,submitting:false,status:'waiting_limit',next_retry_at:at ? new Date(at).toISOString() : null}));
          } else {
            if (response.status !== 202) throw new Error('요청 실패');
            const payload = await response.json();
            if (stopped || unavailable) return;
            if (!Array.isArray(payload?.jobs) || payload.jobs.length !== batch.length || new Set(payload.jobs.map(j => j?.candidate_id)).size !== batch.length || payload.jobs.some(j => !batch.includes(j?.candidate_id) || typeof j.status !== 'string')) throw new Error('요청 결과 형식 오류');
            readBudget(payload.budget); readIpBudget(payload.ip_budget);
            payload.jobs.forEach(job => {
              const status = STATUSES.has(job.status) ? job.status : 'unknown';
              Object.assign(states.get(job.candidate_id), {summary:null,next_retry_at:null,duplicate_of:null,status,accepted:!['unknown','ip_limited'].includes(status),submitting:false,needsRead:['done','waiting_limit','duplicate'].includes(status),budgetDate:quotaDate(payload,status)});
            });
          }
      }
      // 기존 작업/캐시 완료 상태는 새 생성 없이 조회하며 POST는 한 번에 10개만 보낸다.
      const initialReads = [...states].filter(([id,s]) => s.needsRead && cards.some(c => c.dataset.candidateId === id)).map(([id]) => id);
      if (initialReads.length && now().getTime() >= Math.max(retryUntil, readNotBefore)) await readItems(initialReads);
    } catch {
      states.forEach(s => { if (s.submitting && !s.accepted) Object.assign(s, {requested:false,status:null,submitting:false,error:'요약 요청 실패 — 새 소식 확인으로 다시 요청해 주세요'}); });
      noticeHint = '요약 응답을 확인하지 못했어요 — 원문은 계속 볼 수 있어요';
    } finally { settle(); }
  }
  const onFresh = event => {
    if (stopped || unavailable) return;
    if (event?.detail?.summary_available === false) { scanDom(); disableSummary(); return; }
    readIpBudget(event?.detail?.ip_budget);
    void refresh();
  };
  const onVisibility = () => { if (doc.hidden) clearTimer(); else if (pendingScan) { pendingScan = false; void refresh(); } else if (activeIds().length) void poll(); else render(); };
  doc.addEventListener('briefing:fresh-rendered', onFresh);
  doc.addEventListener('visibilitychange', onVisibility);
  const controller = { refresh, destroy() { stopped = true; clearTimer(); doc.removeEventListener('briefing:fresh-rendered', onFresh); doc.removeEventListener('visibilitychange', onVisibility); INSTANCES.delete(doc); } };
  INSTANCES.set(doc, controller);
  void restoreInitialMetadata();
  return controller;
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => initFreshSummary(), {once:true});
  else initFreshSummary();
}
