import assert from 'node:assert/strict';
import test from 'node:test';
import { initFreshSummary, validTimestamp, formatRetryTime } from '../briefing/fresh-summary.js';

// 실제 모듈이 읽고 쓰는 DOM 표면만 제공하며 API 응답은 호출 경계에서 대체한다.
class Element {
  constructor(tag = 'div') { this.tagName = tag; this.children = []; this.dataset = {}; this.attributes = {}; this._text = ''; }
  set textContent(value) { this._text = String(value); this.children = []; }
  get textContent() { return this._text + this.children.map(c => c.textContent).join(''); }
  appendChild(child) { child.parentNode = this; this.children.push(child); return child; }
  setAttribute(key, value) { this.attributes[key] = value; }
  querySelector(selector) { return this.children.find(c => selector === '.fresh-summary' && c.className === 'fresh-summary') || null; }
  remove() { if (this.parentNode) this.parentNode.children = this.parentNode.children.filter(c => c !== this); }
}
class Document {
  constructor(ids = []) { this.hidden = false; this.listeners = new Map(); this.cards = ids.map(id => this.card(id)); this.live = new Element(); this.live.id = 'live-status'; this.host = new Element(); this.host.appendChild(this.live); }
  card(id, status, requested) { const e = new Element(); if (id) e.dataset.candidateId = id; if (status) e.dataset.summaryStatus = status; if (requested !== undefined) e.dataset.summaryRequested = requested; e.appendChild(Object.assign(new Element('a'), {textContent: '원문 보존'})); return e; }
  createElement(tag) { return new Element(tag); }
  querySelectorAll() { return this.cards.filter(c => c.dataset.candidateId); }
  getElementById(id) { return id === 'live-status' ? this.live : this.host.children.find(e => e.id === id); }
  addEventListener(name, cb) { if (!this.listeners.has(name)) this.listeners.set(name, new Set()); this.listeners.get(name).add(cb); }
  removeEventListener(name, cb) { this.listeners.get(name)?.delete(cb); }
  dispatch(name, detail = {updated: '2026-11-25 10:00'}) { for (const cb of this.listeners.get(name) || []) cb({detail}); }
}
const now = () => new Date('2026-11-25T01:00:00Z');
const budget = { date: '2026-11-25', used: 1, limit: 30 };
const item = (id, status = 'done', extra = {}) => ({ candidate_id: id, status, attempts: 1, updated_at: '2026-11-25T10:00:00+09:00', ...extra });
const summary = { title_ko: '요약 제목', background: '<img src=x onerror=alert(1)>', key: ['핵심 1'], detail: '상세', implication: '시사점', has_body: true };
const response = (body, status = 200, headers = {}) => ({ ok: status >= 200 && status < 300, status, json: async () => body, headers: { get: key => headers[key] ?? null } });
const flush = async () => { for (let i = 0; i < 15; i++) await Promise.resolve(); };
function setup(ids, api, options = {}) {
  const doc = new Document(ids), calls = [], timers = new Map(), timerDelays = []; let nextTimer = 0;
  const controller = initFreshSummary({ document: doc, now: options.now || now, fetch: async (url, options) => { calls.push({url, options}); return api(url, options, calls.length); }, setTimeout: (cb, ms) => { const id = ++nextTimer; timers.set(id, cb); timerDelays.push(ms); return id; }, clearTimeout: id => timers.delete(id) });
  return {doc, calls, timers, timerDelays, controller};
}

test('기존 DOM을 즉시 처리하고 중복 id는 한 번 요청하며 재클릭·재렌더에도 재요청하지 않는다', async () => {
  const s = setup(['a', 'a'], () => response({ jobs: [{candidate_id: 'a', status: 'queued'}], budget }, 202));
  await flush();
  assert.deepEqual(JSON.parse(s.calls[0].options.body), {candidate_ids: ['a']});
  s.doc.dispatch('briefing:fresh-rendered'); await flush();
  assert.equal(s.calls.filter(c => c.options?.method === 'POST').length, 1);
  s.doc.cards = [s.doc.card('a')]; s.doc.dispatch('briefing:fresh-rendered'); await flush();
  assert.equal(s.doc.cards[0].querySelector('.fresh-summary').textContent.includes('요약 대기'), true);
  assert.equal(s.doc.cards[0].children.length, 2);
  s.controller.destroy();
});

test('후보 id 없는 구 API는 원문을 보존하고 요약 API를 호출하지 않는다', async () => {
  const s = setup([undefined], () => { throw new Error('호출 금지'); }); await flush();
  assert.equal(s.calls.length, 0); assert.equal(s.doc.cards[0].textContent, '원문 보존'); s.controller.destroy();
});

test('한 번에 최대10개를 요청하고 나머지 개수를 명확히 안내한다', async () => {
  const s = setup(Array.from({length: 12}, (_, i) => `c${i}`), (url, opts) => response({jobs: JSON.parse(opts.body).candidate_ids.map(candidate_id => ({candidate_id, status: 'queued'})), budget}, 202));
  await flush(); assert.equal(JSON.parse(s.calls[0].options.body).candidate_ids.length, 10);
  assert.match(s.doc.host.textContent, /10건.*2건/); s.controller.destroy();
});

test('숨김 탭에서 polling을 중단하고 복귀하면 조회하며 종결 후 타이머를 제거한다', async () => {
  const s = setup(['a'], (url, opts) => opts?.method === 'POST' ? response({jobs: [{candidate_id:'a',status:'queued'}],budget},202) : response({items:[item('a','done',{summary})],budget}));
  await flush(); assert.equal(s.timers.size, 1);
  s.doc.hidden = true; s.doc.dispatch('visibilitychange'); assert.equal(s.timers.size, 0);
  s.doc.hidden = false; s.doc.dispatch('visibilitychange'); await flush();
  assert.match(s.doc.cards[0].textContent, /상세/); assert.equal(s.timers.size, 0);
  assert.equal(s.doc.cards[0].querySelector('.fresh-summary').children.some(e => e.tagName === 'img'), false);
  assert.match(s.doc.cards[0].textContent, /<img src=x onerror=alert\(1\)>/); s.controller.destroy();
});

test('429는 Retry-After와 함께 안내하고 즉시 재클릭으로 POST를 반복하지 않는다', async () => {
  const s = setup(['a'], () => response({},429,{'Retry-After':'120'})); await flush();
  assert.match(s.doc.cards[0].textContent, /10:02/);
  s.doc.dispatch('briefing:fresh-rendered'); await flush(); assert.equal(s.calls.length,1); assert.equal(s.timers.size,0); s.controller.destroy();
});

test('오늘 예산과 중복·한도 상태를 표시하고 종결 상태를 poll하지 않는다', async () => {
  const s = setup(['a','b'], (url,opts) => opts?.method === 'POST' ? response({jobs:[{candidate_id:'a',status:'duplicate'},{candidate_id:'b',status:'over_budget'}],budget:{...budget,used:30}},202) : response({items:[item('a','duplicate')],budget:{...budget,used:30}})); await flush();
  assert.match(s.doc.cards[0].textContent,/중복/); assert.match(s.doc.cards[1].textContent,/오늘.*한도/); assert.match(s.doc.host.textContent,/30.*30/); assert.equal(s.timers.size,0); s.controller.destroy();
});

test('달력·오프셋·시각을 엄격히 검증하여 잘못된 재시도 시각을 약속하지 않는다', () => {
  for (const bad of ['2026-11-31T10:00:00+09:00','2026-11-25T99:99:00+09:00','2026-11-25T10:00:00','2026-11-25T10:00:00+25:00']) assert.equal(validTimestamp(bad), false);
  assert.equal(validTimestamp('2028-02-29T00:00:00Z'),true);
  assert.equal(formatRetryTime('2026-11-31T10:00:00+09:00',now()),null);
});

test('복귀 이벤트는 종결된 배치 다음의 후보를 자동 생성하지 않는다', async () => {
  const s = setup(Array.from({length:12},(_,i)=>`v${i}`), (url, opts) => response({jobs:JSON.parse(opts.body).candidate_ids.map(candidate_id=>({candidate_id,status:'failed'})),budget},202));
  await flush(); s.doc.hidden=true; s.doc.dispatch('visibilitychange'); s.doc.hidden=false; s.doc.dispatch('visibilitychange'); await flush();
  assert.equal(s.calls.length,1); s.controller.destroy();
});

test('기존 작업 21개 조회는10개씩 분할하고 생성 POST 없이 완료한다', async () => {
  const s = setup([], url => response({items:decodeURIComponent(url.split('ids=')[1]).split(',').map(id=>item(id,'done',{summary})),budget}));
  s.doc.cards=Array.from({length:21},(_,i)=>s.doc.card(`r${i}`,'queued')); s.doc.dispatch('briefing:fresh-rendered'); await flush();
  assert.deepEqual(s.calls.map(c=>decodeURIComponent(c.url.split('ids=')[1]).split(',').length),[10,10,1]);
  assert.equal(s.timers.size,0); assert.match(s.doc.cards[20].textContent,/상세/); s.controller.destroy();
});

test('POST 중복 상태는 GET으로 안전한 기존 기사 링크를 얻는다', async () => {
  const s=setup(['a'],(url,opts)=>opts?.method==='POST'?response({jobs:[{candidate_id:'a',status:'duplicate'}],budget},202):response({items:[item('a','duplicate',{duplicate_of:'/briefing/2026-11-25#kr:0:1'})],budget}));
  await flush(); assert.equal(s.calls.length,2);
  const link=s.doc.cards[0].querySelector('.fresh-summary').children.find(e=>e.tagName==='a');
  assert.equal(link.attributes.href,'/briefing/2026-11-25#kr:0:1'); assert.equal(s.timers.size,0);s.controller.destroy();
});

test('잘못된 summary 필드 타입과 부분응답은 완료 카드로 인정하지 않는다', async () => {
  const s=setup([],()=>response({items:[item('a','done',{summary}),item('b','done',{summary:{...summary,key:'문자열 오류'}})],budget}));
  s.doc.cards=[s.doc.card('a','queued'),s.doc.card('b','queued')];s.doc.dispatch('briefing:fresh-rendered');await flush();
  assert.doesNotMatch(s.doc.cards[0].textContent,/AI 요약 보기/);assert.doesNotMatch(s.doc.cards[1].textContent,/AI 요약 보기/);assert.match(s.doc.host.textContent,/확인하지 못|확인 실패/);s.controller.destroy();
});

test('400은 만료 안내 후 polling을 멈추고 새 후보 발급 이벤트에서만 재요청한다', async () => {
  const s=setup([], (url,opts)=>opts?.method==='POST'?response({jobs:[{candidate_id:'a',status:'queued'}],budget},202):response({},400));
  s.doc.cards=[s.doc.card('a','queued')];s.doc.dispatch('briefing:fresh-rendered');await flush();
  assert.match(s.doc.cards[0].textContent,/만료/);assert.equal(s.timers.size,0);
  s.doc.cards=[s.doc.card('a')];s.doc.dispatch('briefing:fresh-rendered');await flush();assert.equal(s.calls.at(-1).options.method,'POST');s.controller.destroy();
});

test('등록 중복·id 형식 오류·외부 중복 링크는 추가 요청이나 실행 가능한 링크를 만들지 않는다', async () => {
  const s=setup([],()=>response({items:[item('a','duplicate',{duplicate_of:'javascript:alert(1)'})],budget}));
  s.doc.cards=[s.doc.card('a','duplicate'),s.doc.card('a,b'),s.doc.card('<img>')];s.doc.dispatch('briefing:fresh-rendered');await flush();
  const again=initFreshSummary({document:s.doc});assert.equal(again,s.controller);assert.equal(s.calls.length,1);
  assert.equal(s.doc.cards[0].querySelector('.fresh-summary').children.some(e=>e.tagName==='a'),false);s.controller.destroy();
});

test('상태 GET 429는 Retry-After 이전에 재조회하지 않고 poll 간격은 기본30초이다', async () => {
  const s=setup([],()=>response({},429,{'Retry-After':'120'}));
  s.doc.cards=[s.doc.card('a','running')];s.doc.dispatch('briefing:fresh-rendered');await flush();
  assert.equal(s.timerDelays.at(-1),120000);s.doc.hidden=true;s.doc.dispatch('visibilitychange');s.doc.hidden=false;s.doc.dispatch('visibilitychange');await flush();assert.equal(s.calls.length,1);s.controller.destroy();
  const p=setup(['a'],()=>response({jobs:[{candidate_id:'a',status:'queued'}],budget},202));await flush();assert.equal(p.timerDelays[0],30000);p.controller.destroy();
});

test('한도대기 시각은 KST로 표시하고 유효하지 않은 날짜가 오면 재시각을 약속하지 않는다', async () => {
  const s=setup([],()=>response({items:[item('a','waiting_limit',{next_retry_at:'2026-11-25T03:00:00Z'})],budget}));
  s.doc.cards=[s.doc.card('a','waiting_limit')];s.doc.dispatch('briefing:fresh-rendered');await flush();assert.match(s.doc.cards[0].textContent,/12:00 재시도 예정/);s.controller.destroy();
  const p=setup([],()=>response({items:[item('a','waiting_limit',{next_retry_at:'2026-11-31T12:00:00+09:00'})],budget}));
  p.doc.cards=[p.doc.card('a','waiting_limit')];p.doc.dispatch('briefing:fresh-rendered');await flush();assert.doesNotMatch(p.doc.cards[0].textContent,/12:00/);p.controller.destroy();
});

test('어제 예산과 잘못된 달력 날짜는 오늘 한도로 표시하지 않는다', async () => {
  for(const date of ['2026-11-24','2026-11-31']) {
    const s=setup(['a'],()=>response({jobs:[{candidate_id:'a',status:'queued'}],budget:{date,used:30,limit:30}},202));await flush();assert.doesNotMatch(s.doc.host.textContent,/30\/30/);s.controller.destroy();
  }
});

test('깨진 JSON·잘못된 POST jobs·네트워크 실패는 원문을 보존하고 재클릭 복구를 허용한다', async () => {
  for(const api of [()=>{throw Error('네트워크');},()=>({...response({},202),json:async()=>{throw Error('JSON');}}),()=>response({jobs:[{candidate_id:'other',status:'queued'}]},202)]){
    const s=setup(['a'],api);await flush();assert.match(s.doc.cards[0].textContent,/원문 보존/);assert.match(s.doc.cards[0].textContent,/요청 실패/);assert.equal(s.timers.size,0);s.doc.dispatch('briefing:fresh-rendered');await flush();assert.equal(s.calls.length,2);s.controller.destroy();
  }
});

test('destroy 이후 늦은 요청 결과가 도착해도 카드나 타이머를 다시 만들지 않는다', async () => {
  let finish;const pending=new Promise(resolve=>{finish=resolve;});
  const s=setup(['a'],()=>pending);const before=s.doc.cards[0].textContent;s.controller.destroy();finish(response({jobs:[{candidate_id:'a',status:'queued'}],budget},202));await flush();assert.equal(s.doc.cards[0].textContent,before);assert.equal(s.timers.size,0);
});

test('날짜가 바뀌면 로컬 오늘한도 차단이 해제되어 새 클릭에서만 요청한다', async () => {
  let clock=new Date('2026-11-25T14:59:00Z'),posts=0;
  const doc=new Document(['a']);
  const c=initFreshSummary({document:doc,now:()=>clock,fetch:async()=>{posts++;return response({jobs:[{candidate_id:'a',status:'over_budget'}],budget:{date:posts===1?'2026-11-25':'2026-11-26',used:30,limit:30}},202);}});
  await flush();clock=new Date('2026-11-25T15:01:00Z');doc.dispatch('briefing:fresh-rendered');await flush();assert.equal(posts,2);c.destroy();
});

test('이전 요청 중 새 후보 DOM 이벤트가 오면 직렬 처리하고 같은 DOM 이벤트는 추가 배치를 만들지 않는다', async () => {
  let finish; const first=new Promise(resolve=>{finish=resolve;});
  const s=setup(['a'],(url,opts,n)=>n===1?first:response({jobs:JSON.parse(opts.body).candidate_ids.map(candidate_id=>({candidate_id,status:'queued'})),budget},202));
  s.doc.cards=[s.doc.card('b')];s.doc.dispatch('briefing:fresh-rendered');
  finish(response({jobs:[{candidate_id:'a',status:'queued'}],budget},202));await flush();
  assert.equal(s.calls.length,2);assert.deepEqual(JSON.parse(s.calls[1].options.body).candidate_ids,['b']);s.controller.destroy();
  let end;const pending=new Promise(resolve=>{end=resolve;});
  const p=setup(Array.from({length:12},(_,i)=>`d${i}`),()=>pending);p.doc.dispatch('briefing:fresh-rendered');end(response({jobs:Array.from({length:10},(_,i)=>({candidate_id:`d${i}`,status:'queued'})),budget},202));await flush();assert.equal(p.calls.length,1);p.controller.destroy();
});

test('요약 POST API가404·405·501이면 조용히 비활성화하고 재클릭·복귀에도 요청하지 않는다', async () => {
  for (const status of [404,405,501]) {
    const s=setup(['a'],()=>response({},status));await flush();
    assert.equal(s.doc.cards[0].textContent,'원문 보존');assert.equal(s.timers.size,0);
    s.doc.cards=[s.doc.card('a'),s.doc.card('b')];s.doc.dispatch('briefing:fresh-rendered');s.doc.hidden=true;s.doc.dispatch('visibilitychange');s.doc.hidden=false;s.doc.dispatch('visibilitychange');await flush();
    assert.equal(s.calls.length,1);assert.equal(s.doc.cards[1].textContent,'원문 보존');assert.equal(s.doc.host.textContent,'');s.controller.destroy();
  }
});

test('상태 GET API가 미배포이거나 HTML fallback이면 기존 목록을 보존하고 무한 polling하지 않는다', async () => {
  for(const reply of [response({},404),response({},405),response({},501),response({},200,{'Content-Type':'text/html'})]) {
    const s=setup([],()=>reply);s.doc.cards=[s.doc.card('a','queued')];s.doc.dispatch('briefing:fresh-rendered');await flush();
    assert.equal(s.doc.cards[0].textContent,'원문 보존');assert.equal(s.timers.size,0);s.doc.dispatch('briefing:fresh-rendered');await flush();assert.equal(s.calls.length,1);s.controller.destroy();
  }
});

test('미지원 작업 status는 오인 queued나 반복 조회를 남기지 않는다', async () => {
  const s=setup([],()=>response({items:[item('a','future_schema_status')],budget}));
  s.doc.cards=[s.doc.card('a','queued')];s.doc.dispatch('briefing:fresh-rendered');await flush();
  assert.equal(s.doc.cards[0].textContent,'원문 보존');assert.equal(s.timers.size,0);s.doc.dispatch('briefing:fresh-rendered');await flush();assert.equal(s.calls.length,1);s.controller.destroy();
});

async function fireTimer(s) {
  const [id, callback] = s.timers.entries().next().value;
  s.timers.delete(id); callback(); await flush();
}

test('GET 연속오류는30초부터5분까지 지수 백오프하고 복구 후 오류 안내를 제거한다', async () => {
  let clock=now();let reads=0;
  const s=setup([],()=>++reads<=6?response({},500):response({items:[item('a','done',{summary})],budget}),{now:()=>clock});
  s.doc.cards=[s.doc.card('a','running')];s.doc.dispatch('briefing:fresh-rendered');await flush();
  const delays=[];
  for(let i=0;i<6;i++){delays.push(s.timerDelays.at(-1));clock=new Date(clock.getTime()+s.timerDelays.at(-1));await fireTimer(s);}
  assert.deepEqual(delays,[30000,60000,120000,240000,300000,300000]);
  assert.match(s.doc.cards[0].textContent,/AI 요약 보기/);assert.doesNotMatch(s.doc.host.textContent,/실패|확인하지 못/);assert.equal(s.timers.size,0);s.controller.destroy();
});

test('GET 백오프 deadline은 탭 복귀와 재클릭으로 우회하지 못한다', async () => {
  let clock=now();const s=setup([],()=>response({},500),{now:()=>clock});
  s.doc.cards=[s.doc.card('a','running')];s.doc.dispatch('briefing:fresh-rendered');await flush();
  s.doc.hidden=true;s.doc.dispatch('visibilitychange');s.doc.hidden=false;s.doc.dispatch('visibilitychange');s.doc.dispatch('briefing:fresh-rendered');await flush();assert.equal(s.calls.length,1);s.controller.destroy();
});

test('Retry-After3000000초는1시간 이하 chunk로 기다리며 원래 deadline 전에 GET하지 않는다', async () => {
  let clock=now();const s=setup([],()=>response({},429,{'Retry-After':'3000000'}),{now:()=>clock});
  s.doc.cards=[s.doc.card('a','running')];s.doc.dispatch('briefing:fresh-rendered');await flush();
  assert.equal(s.timerDelays.at(-1),3600000);
  for(let i=0;i<3;i++){clock=new Date(clock.getTime()+3600000);await fireTimer(s);assert.equal(s.calls.length,1);assert.equal(s.timerDelays.at(-1),3600000);}
  s.controller.destroy();
});

test('POST429의 과거 HTTP-date·0초는 최소30초 동안 재요청을 막는다', async () => {
  for(const header of ['Mon, 25 Nov 2024 00:00:00 GMT','0']) {
    let clock=now();const s=setup(['a'],()=>response({},429,{'Retry-After':header}),{now:()=>clock});await flush();
    s.doc.dispatch('briefing:fresh-rendered');await flush();assert.equal(s.calls.length,1);
    clock=new Date(clock.getTime()+29999);s.doc.dispatch('briefing:fresh-rendered');await flush();assert.equal(s.calls.length,1);
    clock=new Date(clock.getTime()+1);s.doc.dispatch('briefing:fresh-rendered');await flush();assert.equal(s.calls.length,2);s.controller.destroy();
  }
});

test('POST429 미수락은 대기시간이 지나도 허위 상태 확인 중을 표시하지 않는다', async () => {
  let clock=now();const s=setup(['a'],()=>response({},429,{'Retry-After':'120'}),{now:()=>clock});await flush();clock=new Date(clock.getTime()+120001);
  s.doc.hidden=true;s.doc.dispatch('visibilitychange');s.doc.hidden=false;s.doc.dispatch('visibilitychange');await flush();
  assert.doesNotMatch(s.doc.cards[0].textContent,/상태 확인 중/);assert.match(s.doc.cards[0].textContent,/다시 요청/);assert.equal(s.calls.length,1);assert.equal(s.timers.size,0);s.controller.destroy();
});

test('Python ISO 소수초6자리와9자리를 수용하면서 달력 검증을 유지한다', async () => {
  assert.equal(validTimestamp('2026-11-25T01:00:00.123456Z'),true);
  assert.equal(validTimestamp('2026-11-25T10:00:00.123456789+09:00'),true);
  assert.equal(validTimestamp('2026-11-31T10:00:00.123456+09:00'),false);
  const s=setup([],()=>response({items:[item('a','done',{summary,updated_at:'2026-11-25T10:00:00.123456+09:00'})],budget}));s.doc.cards=[s.doc.card('a','done')];s.doc.dispatch('briefing:fresh-rendered');await flush();assert.match(s.doc.cards[0].textContent,/AI 요약 보기/);s.controller.destroy();
});

test('새 GET에서 생략한 선택 필드는 이전 재시도 시각과 중복 링크를 제거한다', async () => {
  let clock=now(),reads=0;const s=setup([],()=>response({items:++reads===1?[item('a','waiting_limit',{next_retry_at:'2026-11-25T12:00:00+09:00'}),item('b','running',{duplicate_of:'/briefing/2026-11-25#kr:0:0',summary})]:[item('a','waiting_limit'),item('b','duplicate')],budget}),{now:()=>clock});
  s.doc.cards=[s.doc.card('a','running'),s.doc.card('b','running')];s.doc.dispatch('briefing:fresh-rendered');await flush();assert.match(s.doc.cards[0].textContent,/12:00/);clock=new Date(clock.getTime()+30000);await fireTimer(s);
  assert.doesNotMatch(s.doc.cards[0].textContent,/12:00/);assert.match(s.doc.cards[0].textContent,/시각 확인 중/);assert.equal(s.doc.cards[1].querySelector('.fresh-summary').children.some(e=>e.tagName==='a'),false);s.controller.destroy();
});

test('종결 마크업도 예산·최신 결과를 한 번 조회하되 이후 polling과 생성 요청은 하지 않는다', async () => {
  for (const status of ['failed','over_budget']) {
    const s=setup([],()=>response({items:[item('a',status)],budget:{...budget,used:status==='over_budget'?30:1}}));
    s.doc.cards=[s.doc.card('a',status)];s.doc.dispatch('briefing:fresh-rendered');await flush();
    assert.equal(s.calls.length,1);assert.equal(s.calls[0].options?.method,undefined);assert.equal(s.timers.size,0);assert.match(s.doc.host.textContent,/오늘 전체 요약/);s.controller.destroy();
  }
});

test('v1.1 queued여도 requested=false는 신규 POST하고 중복 섹션 후보는 한 번만 접수한다', async () => {
  const s=setup([],()=>response({jobs:[{candidate_id:'a',status:'queued'}],budget},202));
  s.doc.cards=[s.doc.card('a','queued','false'),s.doc.card('a','queued','false')];s.doc.dispatch('briefing:fresh-rendered');await flush();
  assert.equal(s.calls.length,1);assert.equal(s.calls[0].options.method,'POST');assert.deepEqual(JSON.parse(s.calls[0].options.body).candidate_ids,['a']);s.controller.destroy();
});

test('v1.1 requested=true는 status가 없어도 기존 결과를 조회하고 누락 속성은 v0처럼 처리한다', async () => {
  for(const requested of ['true',undefined]) {
    const s=setup([],()=>response({items:[item('a','done',{summary})],budget}));
    s.doc.cards=[s.doc.card('a',requested?'': 'queued',requested)];s.doc.dispatch('briefing:fresh-rendered');await flush();assert.equal(s.calls.length,1);assert.equal(s.calls[0].options.method,undefined);assert.match(s.doc.cards[0].textContent,/AI 요약 보기/);s.controller.destroy();
  }
});

test('잘못된 requested 문자열은 접수로 오인하지 않고 해당 카드만 요약 연결에서 제외한다', async () => {
  const s=setup([],()=>response({jobs:[{candidate_id:'good',status:'queued'}],budget},202));
  s.doc.cards=['','FALSE','True','yes','0','null'].map((flag,i)=>s.doc.card(`bad${i}`,'queued',flag));s.doc.cards.push(s.doc.card('good','queued','false'));
  s.doc.dispatch('briefing:fresh-rendered');await flush();assert.equal(s.calls.length,1);assert.deepEqual(JSON.parse(s.calls[0].options.body).candidate_ids,['good']);s.doc.cards.slice(0,-1).forEach(card=>assert.equal(card.textContent,'원문 보존'));s.controller.destroy();
});

test('명시적 summary_available=false 뒤 true와 재초기화는 같은 페이지에서 기능을 재개하지 않는다', async () => {
  const s=setup([],()=>{throw Error('호출 금지');});s.doc.cards=[s.doc.card('a','queued','false')];
  s.doc.dispatch('briefing:fresh-rendered',{summary_available:false});await flush();assert.equal(s.calls.length,0);assert.equal(s.doc.cards[0].textContent,'원문 보존');
  s.doc.dispatch('briefing:fresh-rendered',{summary_available:true});await flush();assert.equal(s.calls.length,0);s.controller.destroy();
  const second=initFreshSummary({document:s.doc,fetch:async()=>{s.calls.push('재초기화 요청');throw Error('호출 금지');}});await flush();assert.equal(s.calls.length,0);second.destroy();
});

test('summary_available 누락·문자열 false·null은 v0 호환을 유지한다', async () => {
  for(const value of [undefined,'false',null,true]) {
    const s=setup([],()=>response({jobs:[{candidate_id:'a',status:'queued'}],budget},202));s.doc.cards=[s.doc.card('a')];s.doc.dispatch('briefing:fresh-rendered',{summary_available:value});await flush();assert.equal(s.calls.length,1);s.controller.destroy();
  }
});

test('비활성 신호 뒤 늦은 응답은 추가 GET을 만들지 않으며 새 document에서만 복구한다', async () => {
  let finish;const pending=new Promise(resolve=>{finish=resolve;});const s=setup([],()=>pending);
  s.doc.cards=[s.doc.card('a','queued','false')];s.doc.dispatch('briefing:fresh-rendered');
  s.doc.dispatch('briefing:fresh-rendered',{summary_available:false});finish(response({jobs:[{candidate_id:'a',status:'done'}],budget},202));await flush();
  assert.equal(s.calls.length,1);assert.equal(s.timers.size,0);assert.equal(s.doc.cards[0].textContent,'원문 보존');s.controller.destroy();
  const fresh=setup(['a'],()=>response({jobs:[{candidate_id:'a',status:'queued'}],budget},202));await flush();assert.equal(fresh.calls.length,1);fresh.controller.destroy();
});
