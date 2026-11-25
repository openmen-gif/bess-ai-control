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
const ipBudget = { date: '2026-11-25', used: 5, limit: 5, remaining: 0 };
const item = (id, status = 'done', extra = {}) => ({ candidate_id: id, status, attempts: 1, updated_at: '2026-11-25T10:00:00+09:00', ...extra });
const summary = { title_ko: '요약 제목', background: '<img src=x onerror=alert(1)>', key: ['핵심 1'], detail: '상세', implication: '시사점', has_body: true };
const response = (body, status = 200, headers = {}) => ({ ok: status >= 200 && status < 300, status, json: async () => body, headers: { get: key => headers[key] ?? null } });
const flush = async () => { for (let i = 0; i < 15; i++) await Promise.resolve(); };
function setup(ids, api, options = {}) {
  const doc = new Document(options.preexisting ? ids : []), calls = [], timers = new Map(), timerDelays = []; let nextTimer = 0;
  const controller = initFreshSummary({ document: doc, now: options.now || now, fetch: async (url, options) => { calls.push({url, options}); return api(url, options, calls.length); }, setTimeout: (cb, ms) => { const id = ++nextTimer; timers.set(id, cb); timerDelays.push(ms); return id; }, clearTimeout: id => timers.delete(id) });
  if (!options.preexisting && ids.length) { doc.cards=ids.map(id=>doc.card(id)); doc.dispatch('briefing:fresh-rendered'); }
  return {doc, calls, timers, timerDelays, controller};
}

test('기존 DOM을 즉시 처리하고 중복 id는 한 번 요청하며 재클릭·재렌더에도 재요청하지 않는다', async () => {
  const s = setup(['a', 'a'], url => url === '/api/briefing' ? response({sections:[],sections_global:[],summary_available:true}) : response({ jobs: [{candidate_id: 'a', status: 'queued'}], budget }, 202), {preexisting:true});
  await flush();
  assert.deepEqual(JSON.parse(s.calls.find(c=>c.options.method==='POST').options.body), {candidate_ids: ['a']});
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

test('400은 요청 확인 실패로 안내하고 polling을 멈춘 뒤 새 목록 이벤트에서만 재요청한다', async () => {
  const s=setup([], (url,opts)=>opts?.method==='POST'?response({jobs:[{candidate_id:'a',status:'queued'}],budget},202):response({},400));
  s.doc.cards=[s.doc.card('a','queued')];s.doc.dispatch('briefing:fresh-rendered');await flush();
  assert.match(s.doc.cards[0].textContent,/요청.*확인/);assert.equal(s.timers.size,0);
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

test('처음 보는 기사 status는 해당 기사만 종결하고 오인 queued나 반복 조회를 남기지 않는다', async () => {
  const s=setup([],()=>response({items:[item('a','future_schema_status')],budget}));
  s.doc.cards=[s.doc.card('a','queued')];s.doc.dispatch('briefing:fresh-rendered');await flush();
  assert.match(s.doc.cards[0].textContent,/요약 후보.*확인/);assert.doesNotMatch(s.doc.cards[0].textContent,/요약 대기/);assert.equal(s.timers.size,0);s.doc.dispatch('briefing:fresh-rendered');await flush();assert.equal(s.calls.length,1);s.controller.destroy();
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

test('v1.2 최소 unknown 객체와 처음 보는 상태는 해당 기사만 종결하고 다른 기사를 완료한다', async () => {
  let clock=now();let reads=0;
  const s=setup([],url=>{reads++;const ids=decodeURIComponent(url.split('ids=')[1]).split(',');return response({items:ids.map(id=>id==='a'?{candidate_id:id,status:'unknown'}:id==='b'?{candidate_id:id,status:'future_status'}:item(id,reads===1?'running':'done',reads===1?{}:{summary})),budget});},{now:()=>clock});
  s.doc.cards=['a','b','c'].map(id=>s.doc.card(id,'running','true'));s.doc.dispatch('briefing:fresh-rendered');await flush();
  assert.match(s.doc.cards[0].textContent,/요약 후보.*확인/);assert.match(s.doc.cards[1].textContent,/요약 후보.*확인/);assert.match(s.doc.cards[2].textContent,/생성 중/);assert.equal(s.timers.size,1);
  clock=new Date(clock.getTime()+30000);await fireTimer(s);assert.match(s.doc.cards[2].textContent,/AI 요약 보기/);assert.equal(decodeURIComponent(s.calls[1].url.split('ids=')[1]),'c');assert.equal(s.timers.size,0);s.controller.destroy();
});

test('unknown은 같은 DOM 이벤트에서 재요청하지 않고 새로 발급된 DOM false일 때만 요청한다', async () => {
  const s=setup([], (url,opts)=>opts?.method==='POST'?response({jobs:[{candidate_id:'a',status:'queued'}],budget},202):response({items:[{candidate_id:'a',status:'unknown'}],budget}));
  s.doc.cards=[s.doc.card('a','queued','true')];s.doc.dispatch('briefing:fresh-rendered');await flush();s.doc.dispatch('briefing:fresh-rendered');await flush();assert.equal(s.calls.length,1);
  s.doc.cards=[s.doc.card('a','queued','false')];s.doc.dispatch('briefing:fresh-rendered');await flush();assert.equal(s.calls.at(-1).options.method,'POST');s.controller.destroy();
});

test('POST403은 명확히 미접수 안내하고 재클릭·신규 후보로 POST를 반복하지 않는다', async () => {
  const s=setup(['a'],()=>response({},403));await flush();assert.match(s.doc.cards[0].textContent,/요약 요청.*허용되지/);assert.equal(s.timers.size,0);
  for(let i=0;i<10;i++){s.doc.cards=[s.doc.card('a','queued','false'),s.doc.card(`new${i}`,'queued','false')];s.doc.dispatch('briefing:fresh-rendered');await flush();}
  assert.equal(s.calls.length,1);assert.match(s.doc.cards[1].textContent,/요약 요청.*허용되지/);s.controller.destroy();
});

test('403은 기존 작업 GET을 차단하지 않으며 전역 예산을 소진했다고 오인하지 않는다', async () => {
  const s=setup([], (url,opts)=>opts?.method==='POST'?response({},403):response({items:[item('b','done',{summary})],budget:{...budget,used:5}}));
  s.doc.cards=[s.doc.card('a','queued','false'),s.doc.card('b','queued','true')];s.doc.dispatch('briefing:fresh-rendered');await flush();assert.equal(s.calls.length,2);assert.match(s.doc.cards[1].textContent,/AI 요약 보기/);assert.match(s.doc.host.textContent,/오늘 전체 요약 5\/30/);assert.doesNotMatch(s.doc.cards[0].textContent,/전체 요약 한도 도달/);s.controller.destroy();
});

test('DOM unknown·처음 보는 status도 신규 POST 없이 해당 기사만 종결한다', async () => {
  const s=setup([],()=>{throw Error('호출 금지');});s.doc.cards=[s.doc.card('a','unknown','false'),s.doc.card('b','future_status','false')];s.doc.dispatch('briefing:fresh-rendered');await flush();assert.equal(s.calls.length,0);s.doc.cards.forEach(card=>assert.match(card.textContent,/요약 후보.*확인/));assert.equal(s.timers.size,0);s.controller.destroy();
});

test('POST의 미지 상태도 해당 기사만 종결하고 정상 작업은 계속 조회한다', async () => {
  let clock=now();const s=setup([], (url,opts)=>opts?.method==='POST'?response({jobs:[{candidate_id:'a',status:'future_status'},{candidate_id:'b',status:'queued'}],budget},202):response({items:[item('b','done',{summary})],budget}),{now:()=>clock});
  s.doc.cards=[s.doc.card('a','queued','false'),s.doc.card('b','queued','false')];s.doc.dispatch('briefing:fresh-rendered');await flush();assert.match(s.doc.cards[0].textContent,/요약 후보.*확인/);clock=new Date(clock.getTime()+30000);await fireTimer(s);assert.equal(decodeURIComponent(s.calls[1].url.split('ids=')[1]),'b');assert.match(s.doc.cards[1].textContent,/AI 요약 보기/);s.controller.destroy();
});

test('다른 기사 unknown 응답과 DOM 교체가 이미 완료한 요약을 없애지 않는다', async () => {
  let clock=now(),reads=0;const s=setup([],()=>response({items:++reads===1?[item('b','done',{summary})]:[{candidate_id:'a',status:'unknown'}],budget}),{now:()=>clock});
  s.doc.cards=[s.doc.card('b','done','true')];s.doc.dispatch('briefing:fresh-rendered');await flush();
  s.doc.cards=[s.doc.card('b','done','true'),s.doc.card('a','queued','true')];s.doc.dispatch('briefing:fresh-rendered');await flush();
  clock=new Date(clock.getTime()+30000);await fireTimer(s);
  assert.equal(reads,2);assert.equal(decodeURIComponent(s.calls[1].url.split('ids=')[1]),'a');assert.match(s.doc.cards[0].textContent,/AI 요약 보기/);assert.match(s.doc.cards[1].textContent,/요약 후보.*확인/);assert.equal(s.timers.size,0);s.controller.destroy();
});

test('v1.3 10개 혼합202는5개 queued와5개 ip_limited를 처리하고 접수 작업만 GET한다', async () => {
  let clock=now();const ids=Array.from({length:10},(_,i)=>`mix${i}`);
  const s=setup(ids,(url,opts)=>opts?.method==='POST'?response({jobs:ids.map((candidate_id,i)=>({candidate_id,status:i<5?'queued':'ip_limited'})),budget:{...budget,used:5},ip_budget:ipBudget},202):response({items:decodeURIComponent(url.split('ids=')[1]).split(',').map(id=>item(id,'done',{summary})),budget:{...budget,used:5}}),{now:()=>clock});await flush();
  assert.equal(JSON.parse(s.calls[0].options.body).candidate_ids.length,10);assert.match(s.doc.host.textContent,/오늘 전체 요약 5\/30/);assert.match(s.doc.host.textContent,/남은 0건/);
  s.doc.cards.slice(5).forEach(card=>assert.match(card.textContent,/오늘 요청 한도/));clock=new Date(clock.getTime()+30000);await fireTimer(s);
  assert.deepEqual(decodeURIComponent(s.calls[1].url.split('ids=')[1]).split(','),ids.slice(0,5));assert.equal(s.timers.size,0);s.doc.cards.slice(0,5).forEach(card=>assert.match(card.textContent,/AI 요약 보기/));s.controller.destroy();
});

test('이벤트 ip_budget은 서버 remaining과 limit을 사용하고 누락은 구 계약을 유지한다', async () => {
  const s=setup([],()=>response({jobs:[{candidate_id:'a',status:'queued'}],budget},202));s.doc.cards=[s.doc.card('a','queued','false')];s.doc.dispatch('briefing:fresh-rendered',{ip_budget:{...ipBudget,used:2,limit:7,remaining:5}});await flush();assert.match(s.doc.host.textContent,/2\/7/);assert.match(s.doc.host.textContent,/남은 5건/);s.controller.destroy();
  const old=setup(['a'],()=>response({jobs:[{candidate_id:'a',status:'queued'}],budget},202));await flush();assert.doesNotMatch(old.doc.host.textContent,/남은|이 접속/);old.controller.destroy();
});

test('ip_budget의 날짜·정수·합계 오류는 표시하지 않으며 정상 jobs 수락을 버리지 않는다', async () => {
  for(const bad of [{...ipBudget,date:'2026-11-24'},{...ipBudget,date:'2026-11-31'},{...ipBudget,remaining:-1},{...ipBudget,used:1.5},{...ipBudget,remaining:2},{...ipBudget,limit:0}]) {
    const s=setup(['a'],()=>response({jobs:[{candidate_id:'a',status:'queued'}],budget,ip_budget:bad},202));await flush();assert.match(s.doc.cards[0].textContent,/요약 대기 중/);assert.doesNotMatch(s.doc.host.textContent,/남은|이 접속/);s.controller.destroy();
  }
});

test('ip_limited는 당일 DOM 갱신에도 멱등이며 다음 KST 상호작용에서 해제한다', async () => {
  let clock=new Date('2026-11-25T14:59:59Z'),posts=0;
  const s=setup(['a'],()=>{const date=new Date(clock.getTime()+9*3600000).toISOString().slice(0,10);posts++;return response({jobs:[{candidate_id:'a',status:posts===1?'ip_limited':'queued'}],budget:{date,used:posts===1?5:1,limit:30},ip_budget:{date,used:posts===1?5:1,limit:5,remaining:posts===1?0:4}},202);},{now:()=>clock});await flush();assert.equal(s.timers.size,0);
  s.doc.cards=[s.doc.card('a','queued','false')];for(let i=0;i<3;i++){s.doc.dispatch('briefing:fresh-rendered');await flush();}assert.equal(posts,1);
  clock=new Date(clock.getTime()+2000);s.doc.dispatch('visibilitychange');await flush();assert.equal(posts,1);assert.doesNotMatch(s.doc.cards[0].textContent,/오늘 요청 한도/);assert.doesNotMatch(s.doc.host.textContent,/남은 0건/);
  s.doc.dispatch('briefing:fresh-rendered');await flush();assert.equal(posts,2);assert.match(s.doc.host.textContent,/남은 4건/);s.controller.destroy();
});

test('ip_limited 뒤 다른 사람이 접수한 requested=true DOM은 추가POST 없이 조회한다', async () => {
  const s=setup(['a'],(url,opts)=>opts?.method==='POST'?response({jobs:[{candidate_id:'a',status:'ip_limited'}],budget,ip_budget:ipBudget},202):response({items:[item('a','done',{summary})],budget}));await flush();
  s.doc.cards=[s.doc.card('a','done','true')];s.doc.dispatch('briefing:fresh-rendered');await flush();assert.equal(s.calls.length,2);assert.equal(s.calls[1].options.method,undefined);assert.match(s.doc.cards[0].textContent,/AI 요약 보기/);assert.equal(s.timers.size,0);s.controller.destroy();
});

test('전역30·IP잔여0이어도 기존 작업 반환을 서버가 판정하며 기존 요약을 보존한다', async () => {
  let clock=now();const full={...budget,used:30};const s=setup([], (url,opts)=>opts?.method==='POST'?response({jobs:[{candidate_id:'a',status:'done'}],budget:full,ip_budget:ipBudget},202):response({items:decodeURIComponent(url.split('ids=')[1]).split(',').map(id=>item(id,'done',{summary})),budget:full,ip_budget:ipBudget}),{now:()=>clock});
  s.doc.cards=[s.doc.card('b','done','true')];s.doc.dispatch('briefing:fresh-rendered');await flush();s.doc.cards=[s.doc.card('b','done','true'),s.doc.card('a','queued','false')];s.doc.dispatch('briefing:fresh-rendered');await flush();assert.equal(s.calls[1].options.method,'POST');clock=new Date(clock.getTime()+30000);await fireTimer(s);s.doc.cards.forEach(card=>assert.match(card.textContent,/AI 요약 보기/));assert.match(s.doc.host.textContent,/남은 0건/);assert.equal(s.calls.filter(c=>c.options.method==='POST').length,1);s.controller.destroy();
});

test('혼합202에서 일부 id가 누락되면 예산·수락 상태를 원자적으로 거부한다', async () => {
  const ids=Array.from({length:10},(_,i)=>`bad${i}`);const s=setup(ids,()=>response({jobs:ids.slice(0,5).map(candidate_id=>({candidate_id,status:'queued'})),budget,ip_budget:ipBudget},202));await flush();s.doc.cards.forEach(card=>assert.doesNotMatch(card.textContent,/요약 대기 중/));assert.equal(s.timers.size,0);assert.doesNotMatch(s.doc.host.textContent,/남은/);s.controller.destroy();
});

test('module보다 먼저 렌더된 DOM은 availability/IP 예산을 GET1회 복원한 뒤에만 요청한다', async () => {
  const s=setup(['a'],url=>url==='/api/briefing'?response({sections:[],summary_available:true,ip_budget:{...ipBudget,used:2,remaining:3}}):response({jobs:[{candidate_id:'a',status:'queued'}],budget},202),{preexisting:true});await flush();assert.deepEqual(s.calls.map(c=>c.options.method||'GET'),['GET','POST']);assert.match(s.doc.host.textContent,/남은 3건/);s.controller.destroy();
});

test('선행 이벤트의 false가 유실되어도 초기 복원 GET은 POST 없이 조용히 비활성화한다', async () => {
  const s=setup(['a'],()=>response({sections:[],summary_available:false}),{preexisting:true});await flush();assert.equal(s.calls.length,1);assert.equal(s.calls[0].options.method,undefined);assert.equal(s.doc.cards[0].textContent,'원문 보존');assert.equal(s.timers.size,0);s.doc.dispatch('briefing:fresh-rendered',{summary_available:true});await flush();assert.equal(s.calls.length,1);s.controller.destroy();
});

test('초기 연결정보 GET 오류에서는 접수로 오인하거나 생성하지 않고 원문을 보존한다', async () => {
  const s=setup(['a'],()=>response({},503),{preexisting:true});await flush();assert.equal(s.calls.length,1);assert.equal(s.calls[0].options.method,undefined);assert.doesNotMatch(s.doc.cards[0].textContent,/요약 대기|생성 중/);assert.match(s.doc.host.textContent,/연결 정보.*확인/);assert.equal(s.timers.size,0);s.controller.destroy();
});

test('부트스트랩 응답의 새 후보는 추가하지 않고 대기 중 교체된 DOM id만 접수한다', async () => {
  let finish;const pending=new Promise(resolve=>{finish=resolve;});
  const s=setup(['old'],(url,opts)=>url==='/api/briefing'?pending:response({jobs:[{candidate_id:'current',status:'queued'}],budget},202),{preexisting:true});
  s.doc.cards=[s.doc.card('current','queued','false')];s.doc.dispatch('briefing:fresh-rendered');finish(response({sections:[{items:[{candidate_id:'not-in-dom'}]}],summary_available:true}));await flush();
  assert.equal(s.calls.length,2);assert.deepEqual(JSON.parse(s.calls[1].options.body).candidate_ids,['current']);s.controller.destroy();
});

test('부트스트랩 대기 중 destroy 또는 false 신호 뒤 늦은 true는 요청을 만들지 않는다', async () => {
  for(const stop of ['destroy','false']) {
    let finish;const pending=new Promise(resolve=>{finish=resolve;});const s=setup(['a'],()=>pending,{preexisting:true});
    if(stop==='destroy')s.controller.destroy();else s.doc.dispatch('briefing:fresh-rendered',{summary_available:false});
    finish(response({sections:[],summary_available:true}));await flush();assert.equal(s.calls.length,1);assert.equal(s.doc.cards[0].textContent,'원문 보존');assert.equal(s.timers.size,0);s.controller.destroy();
  }
});

test('부트스트랩 중 숨김이면 생성하지 않고 복귀 때 현재 DOM을 한 번만 접수한다', async () => {
  let finish;const pending=new Promise(resolve=>{finish=resolve;});const s=setup(['a'],url=>url==='/api/briefing'?pending:response({jobs:[{candidate_id:'a',status:'queued'}],budget},202),{preexisting:true});
  s.doc.hidden=true;s.doc.dispatch('visibilitychange');finish(response({sections:[],summary_available:true}));await flush();assert.equal(s.calls.length,1);
  s.doc.hidden=false;s.doc.dispatch('visibilitychange');s.doc.dispatch('visibilitychange');await flush();assert.equal(s.calls.length,2);assert.equal(s.calls.filter(c=>c.options.method==='POST').length,1);s.controller.destroy();
});

test('JSON 복원 대기 중의 false latch도 늦은 JSON 결과가 우회하지 못한다', async () => {
  let finish;const pending=new Promise(resolve=>{finish=resolve;});const s=setup(['a'],()=>({...response({}),json:()=>pending}),{preexisting:true});await flush();
  s.doc.dispatch('briefing:fresh-rendered',{summary_available:false});finish({sections:[],summary_available:true});await flush();assert.equal(s.calls.length,1);assert.equal(s.doc.cards[0].textContent,'원문 보존');s.controller.destroy();
});

test('정상 리스너 선행 경로는 부트스트랩 GET을 추가하지 않는다', async () => {
  const s=setup(['a'],()=>response({jobs:[{candidate_id:'a',status:'queued'}],budget},202));await flush();assert.equal(s.calls.length,1);assert.equal(s.calls[0].options.method,'POST');s.controller.destroy();
});

test('다른 POST 실패가 이미 종결된 ip_limited·unknown의 멱등 상태를 초기화하지 않는다', async () => {
  for(const status of ['ip_limited','unknown']){
    let posts=0;const s=setup(['a'],()=>++posts===1?response({jobs:[{candidate_id:'a',status}],budget,ip_budget:ipBudget},202):response({},500));await flush();
    s.doc.cards=[s.doc.card('a',status,status==='unknown'?'true':'false'),s.doc.card('b','queued','false')];s.doc.dispatch('briefing:fresh-rendered');await flush();
    assert.match(s.doc.cards[0].textContent,status==='ip_limited'?/오늘 요청 한도/:/요약 후보.*확인/);
    s.doc.dispatch('briefing:fresh-rendered');await flush();assert.deepEqual(JSON.parse(s.calls.at(-1).options.body).candidate_ids,['b']);s.controller.destroy();
  }
});
