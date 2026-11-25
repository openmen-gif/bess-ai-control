// 고정 운영 소스의 DO를 메모리 저장소에서만 실행한다. 외부 fetch·인증·유료 생성은 없다.
import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';

const [source] = process.argv.slice(2);
if (!source) throw new Error('조회 사본 briefing-queue.js 경로가 필요합니다');
let externalRequests = 0;
globalThis.fetch = () => { externalRequests++; throw new Error('모의 검사에서 외부 호출은 차단합니다'); };
const { BriefingQueue } = await import(pathToFileURL(source).href);
const data = new Map();
const storage = {
  async get(key) { return structuredClone(data.get(key)); },
  async put(key, value) { data.set(key, structuredClone(value)); },
  async delete(key) { data.delete(key); },
  async list() { return new Map(data); },
  async transaction(callback) { return callback(storage); },
};
const queue = new BriefingQueue({storage});
let clock = Date.parse('2026-11-25T01:00:00Z'); queue.now = () => clock;
async function call(path, body) {
  const response = await queue.fetch(new Request(`https://fixture.invalid${path}`, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}));
  return {status:response.status,body:await response.json()};
}
const ids = Array.from({length:10}, (_,i)=>(i+1).toString(16).padStart(16,'0'));
await call('/register',{ip:'fixture-a',items:ids.map(candidate_id=>({candidate_id,title:'모의 기사',link:`https://example.invalid/${candidate_id}`,source:'모의',published_at:new Date(clock).toISOString()}))});
const first = await call('/enqueue',{ip:'fixture-a',candidate_ids:ids});
assert.equal(first.status,202);assert.deepEqual(first.body.jobs.map(j=>j.status),[...Array(5).fill('queued'),...Array(5).fill('ip_limited')]);
assert.deepEqual(first.body.ip_budget,{date:'2026-11-25',used:5,limit:5,remaining:0});assert.equal(first.body.budget.used,0);
const again = await call('/enqueue',{ip:'fixture-a',candidate_ids:ids});
assert.equal(again.body.ip_budget.used,5);
const reused = await call('/enqueue',{ip:'fixture-b',candidate_ids:ids.slice(0,5)});
assert.equal(reused.body.ip_budget.used,0);assert.ok(reused.body.jobs.every(j=>j.status==='queued'));
const unknown = await call('/status',{ip:'fixture-a',candidate_ids:[ids[0],'ffffffffffffffff']});
assert.equal(unknown.status,200);assert.deepEqual(unknown.body.jobs[1],{candidate_id:'ffffffffffffffff',status:'unknown'});
clock += 86400000;
const nextDay = await call('/enqueue',{ip:'fixture-a',candidate_ids:ids.slice(5)});
assert.ok(nextDay.body.jobs.every(j=>j.status==='queued'));assert.equal(nextDay.body.ip_budget.date,'2026-11-26');
assert.equal(externalRequests,0);
console.log(JSON.stringify({accepted:5,ip_limited:5,enqueue_global_used:0,reclick_ip_used:5,other_ip_reuse_used:0,unknown_per_item:true,next_kst_day_accepted:5,external_requests:externalRequests}));
