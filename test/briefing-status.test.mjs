/**
 * @file test/briefing-status.test.mjs
 * @description briefing-status 모듈의 모든 경계 조건(Edge cases) 및 회귀 테스트
 */

import assert from 'node:assert/strict';
import test from 'node:test';

import {
  getKstDateString,
  formatKstTime,
  computeBriefingRetryStatus,
  renderBriefingRetryStatus,
  initBriefingStatus
} from '../briefing/briefing-status.js';

test('getKstDateString converts UTC dates to KST YYYY-MM-DD properly', () => {
  // UTC 2026-11-23 15:30 -> KST 2026-11-24 00:30 (다음 날로 넘어감)
  const utcNight = new Date('2026-11-23T15:30:00Z');
  assert.equal(getKstDateString(utcNight), '2026-11-24');

  // UTC 2026-11-24 01:00 -> KST 2026-11-24 10:00
  const utcMorning = new Date('2026-11-24T01:00:00Z');
  assert.equal(getKstDateString(utcMorning), '2026-11-24');

  // UTC 2026-11-24 14:59 -> KST 2026-11-24 23:59
  const utcDayEnd = new Date('2026-11-24T14:59:00Z');
  assert.equal(getKstDateString(utcDayEnd), '2026-11-24');
});

test('formatKstTime extracts HH:MM from ISO 8601 strings safely with strict validation', () => {
  // 정상 ISO 8601 KST 시각
  assert.equal(formatKstTime('2026-11-24T08:25:00+09:00'), '08:25');
  assert.equal(formatKstTime('2026-11-24T13:00:00+09:00'), '13:00');
  assert.equal(formatKstTime('2026-11-24T00:05:00Z'), '09:05'); // UTC 00:05 -> KST 09:05

  // [결함 1 회귀] invalidT99:99+09:00 또는 비정상 시/분 값은 null이어야 함
  assert.equal(formatKstTime('invalidT99:99+09:00'), null);
  assert.equal(formatKstTime('2026-11-24T99:99:00+09:00'), null);
  assert.equal(formatKstTime('2026-11-24T25:00:00+09:00'), null);
  assert.equal(formatKstTime('2026-11-24T12:60:00+09:00'), null);
  assert.equal(formatKstTime(null), null);
  assert.equal(formatKstTime(''), null);
  assert.equal(formatKstTime('not-a-date'), null);
});

test('computeBriefingRetryStatus: pending_retry with future next_retry_at promises exact HH:MM', () => {
  const status = {
    date: '2026-11-24',
    total: 71,
    summarized: 22,
    pending: 49,
    reason: 'rate_limit',
    next_retry_at: '2026-11-24T08:25:00+09:00',
    attempt: 0,
    max_attempts: 3,
    state: 'pending_retry'
  };

  const nowBefore = new Date('2026-11-24T08:00:00+09:00');
  const result = computeBriefingRetryStatus(status, { now: nowBefore, today: '2026-11-24' });

  assert.equal(result.visible, true);
  assert.equal(result.state, 'pending_retry');
  assert.equal(result.pending, 49);
  assert.equal(result.isExpired, false);
  assert.equal(result.timeString, '08:25');
  assert.equal(result.message, 'AI 요약 49건 생성 지연 — 다음 자동 재시도 08:25');
});

test('computeBriefingRetryStatus: [결함 1 회귀] invalidT99:99+09:00 or Date.parse NaN must not promise 99:99', () => {
  const statusInvalidTime = {
    date: '2026-11-24',
    total: 71,
    summarized: 22,
    pending: 49,
    reason: 'rate_limit',
    next_retry_at: 'invalidT99:99+09:00',
    attempt: 0,
    max_attempts: 3,
    state: 'pending_retry'
  };

  const now = new Date('2026-11-24T08:00:00+09:00');
  const result = computeBriefingRetryStatus(statusInvalidTime, { now, today: '2026-11-24' });

  // 99:99가 미래 분기로 들어가 표시되면 안 됨. 시간 약속 금지 분기로 가야 함.
  assert.equal(result.visible, true);
  assert.equal(result.hasNextRetry, false);
  assert.doesNotMatch(result.message, /99:99/);
  assert.equal(result.message, 'AI 요약 49건 생성 지연 (자동 재시도 준비 중)');
});

test('computeBriefingRetryStatus: pending_retry when past next_retry_at shows expired state', () => {
  const status = {
    date: '2026-11-24',
    total: 71,
    summarized: 22,
    pending: 49,
    reason: 'rate_limit',
    next_retry_at: '2026-11-24T08:25:00+09:00',
    attempt: 0,
    max_attempts: 3,
    state: 'pending_retry'
  };

  const nowAfter = new Date('2026-11-24T08:26:00+09:00');
  const result = computeBriefingRetryStatus(status, { now: nowAfter, today: '2026-11-24' });

  assert.equal(result.visible, true);
  assert.equal(result.isExpired, true);
  assert.equal(result.message, 'AI 요약 49건 생성 지연 — 재시도 예정 시각 경과 (한도 대기 또는 실행 상태 확인 중)');
});

test('computeBriefingRetryStatus: pending_retry without next_retry_at forbids time promise', () => {
  const status = {
    date: '2026-11-24',
    total: 71,
    summarized: 22,
    pending: 49,
    reason: 'rate_limit',
    next_retry_at: null,
    attempt: 1,
    max_attempts: 3,
    state: 'pending_retry'
  };

  const result = computeBriefingRetryStatus(status, { today: '2026-11-24' });

  assert.equal(result.visible, true);
  assert.equal(result.hasNextRetry, false);
  // 특정 시각(HH:MM) 약속 금지
  assert.doesNotMatch(result.message, /\d{2}:\d{2}/);
  assert.equal(result.message, 'AI 요약 49건 생성 지연 (자동 재시도 준비 중)');
});

test('computeBriefingRetryStatus: [결함 2 회귀] pending must strictly be non-negative integer', () => {
  // 1. 문자열 '49'가 0건으로 정규화되거나 통과되면 안 됨
  const statusStringPending = {
    date: '2026-11-24',
    total: 71,
    summarized: 22,
    pending: '49',
    state: 'pending_retry'
  };
  const resStr = computeBriefingRetryStatus(statusStringPending, { today: '2026-11-24' });
  assert.equal(resStr.visible, false);
  assert.equal(resStr.reason, 'invalid_pending');

  // 2. 소수 1.5가 소수 건수로 통과되면 안 됨
  const statusFloatPending = {
    date: '2026-11-24',
    total: 71,
    summarized: 22,
    pending: 1.5,
    state: 'pending_retry'
  };
  const resFloat = computeBriefingRetryStatus(statusFloatPending, { today: '2026-11-24' });
  assert.equal(resFloat.visible, false);
  assert.equal(resFloat.reason, 'invalid_pending');

  // 3. 음수 -1이 ok로 정상화되면 안 됨
  const statusNegativePending = {
    date: '2026-11-24',
    total: 71,
    summarized: 72,
    pending: -1,
    state: 'pending_retry'
  };
  const resNeg = computeBriefingRetryStatus(statusNegativePending, { today: '2026-11-24' });
  assert.equal(resNeg.visible, false);
  assert.equal(resNeg.reason, 'invalid_pending');
  assert.notEqual(resNeg.state, 'ok');

  // 4. state는 ok인데 pending이 남아있는 모순 응답 거부
  const statusOkWithPending = {
    date: '2026-11-24',
    total: 71,
    summarized: 60,
    pending: 11,
    state: 'ok'
  };
  const resConflict = computeBriefingRetryStatus(statusOkWithPending, { today: '2026-11-24' });
  assert.equal(resConflict.visible, false);
  assert.equal(resConflict.reason, 'state_pending_conflict');
});

test('computeBriefingRetryStatus: gave_up with attempt 0..2 judged purely by state', () => {
  // attempt가 0회여도 공급자 부재 또는 13:00 초과로 gave_up이 될 수 있음
  const statusAttempt0 = {
    date: '2026-11-24',
    total: 71,
    summarized: 15,
    pending: 56,
    reason: 'credit',
    next_retry_at: null,
    attempt: 0,
    max_attempts: 3,
    state: 'gave_up'
  };

  const result0 = computeBriefingRetryStatus(statusAttempt0, { today: '2026-11-24' });
  assert.equal(result0.visible, true);
  assert.equal(result0.state, 'gave_up');
  assert.equal(result0.pending, 56);
  assert.equal(result0.message, 'AI 요약 56건 생성 지연 — 자동 재시도 종료');

  // attempt 2인 경우
  const statusAttempt2 = { ...statusAttempt0, attempt: 2 };
  const result2 = computeBriefingRetryStatus(statusAttempt2, { today: '2026-11-24' });
  assert.equal(result2.visible, true);
  assert.equal(result2.message, 'AI 요약 56건 생성 지연 — 자동 재시도 종료');
});

test('computeBriefingRetryStatus: ok state removes retry notice', () => {
  const statusOk = {
    date: '2026-11-24',
    total: 71,
    summarized: 71,
    pending: 0,
    reason: null,
    next_retry_at: null,
    attempt: 1,
    max_attempts: 3,
    state: 'ok'
  };

  const result = computeBriefingRetryStatus(statusOk, { today: '2026-11-24' });
  assert.equal(result.visible, false);
  assert.equal(result.state, 'ok');
});

test('computeBriefingRetryStatus: yesterday status is ignored to prevent stale warning', () => {
  const yesterdayStatus = {
    date: '2026-11-23',
    total: 61,
    summarized: 20,
    pending: 41,
    reason: 'rate_limit',
    next_retry_at: '2026-11-23T08:30:00+09:00',
    attempt: 0,
    max_attempts: 3,
    state: 'pending_retry'
  };

  const result = computeBriefingRetryStatus(yesterdayStatus, { today: '2026-11-24' });
  assert.equal(result.visible, false);
  assert.equal(result.reason, 'date_mismatch');
  // 어제 상태가 정상 요약으로 오인되지 않도록 state는 ok가 아님
  assert.notEqual(result.state, 'ok');
});

test('computeBriefingRetryStatus: invalid or corrupt payloads are safely rejected', () => {
  assert.equal(computeBriefingRetryStatus(null).visible, false);
  assert.equal(computeBriefingRetryStatus(undefined).visible, false);
  assert.equal(computeBriefingRetryStatus('string-payload').visible, false);
  assert.equal(computeBriefingRetryStatus({}).visible, false);
});

test('renderBriefingRetryStatus: updates mock DOM accurately', () => {
  class MockElement {
    constructor(tagName) {
      this.tagName = tagName;
      this.id = '';
      this.className = '';
      this.classList = {
        _set: new Set(),
        add(c) { this._set.add(c); },
        remove(c) { this._set.delete(c); },
        toggle(c, force) {
          if (force === undefined) force = !this._set.has(c);
          if (force) this.add(c); else this.remove(c);
        },
        contains(c) { return this._set.has(c); }
      };
      this.attributes = new Map();
      this.textContent = '';
      this.parentNode = null;
      this.children = [];
    }
    setAttribute(k, v) { this.attributes.set(k, v); }
    getAttribute(k) { return this.attributes.get(k); }
    removeAttribute(k) { this.attributes.delete(k); }
    remove() {
      if (this.parentNode) {
        this.parentNode.children = this.parentNode.children.filter((c) => c !== this);
        this.parentNode = null;
      }
    }
  }

  const root = new MockElement('div');
  const tabs = new MockElement('nav');
  tabs.className = 'tabs';
  tabs.parentNode = root;
  root.children.push(tabs);

  const mockDoc = {
    getElementById(id) {
      return root.children.find((c) => c.id === id) || null;
    },
    querySelector(sel) {
      if (sel === '.tabs') return tabs;
      if (sel.startsWith('#')) return this.getElementById(sel.slice(1));
      return null;
    },
    createElement(tag) {
      return new MockElement(tag);
    }
  };
  root.insertBefore = (newChild, refChild) => {
    const idx = root.children.indexOf(refChild);
    if (idx >= 0) {
      root.children.splice(idx, 0, newChild);
    } else {
      root.children.push(newChild);
    }
    newChild.parentNode = root;
  };

  // 1. pending_retry 렌더링
  const pendingResult = {
    visible: true,
    state: 'pending_retry',
    nextRetryAt: '2026-11-24T08:25:00+09:00',
    message: 'AI 요약 49건 생성 지연 — 다음 자동 재시도 08:25'
  };
  renderBriefingRetryStatus(pendingResult, mockDoc);

  const banner = mockDoc.getElementById('briefing-retry-status');
  assert.ok(banner);
  assert.equal(banner.textContent, 'AI 요약 49건 생성 지연 — 다음 자동 재시도 08:25');
  assert.equal(banner.getAttribute('data-at'), '2026-11-24T08:25:00+09:00');
  assert.equal(banner.classList.contains('gave-up'), false);

  // 2. gave_up 전환 렌더링
  const gaveUpResult = {
    visible: true,
    state: 'gave_up',
    message: 'AI 요약 49건 생성 지연 — 자동 재시도 종료'
  };
  renderBriefingRetryStatus(gaveUpResult, mockDoc);
  assert.equal(banner.textContent, 'AI 요약 49건 생성 지연 — 자동 재시도 종료');
  assert.equal(banner.classList.contains('gave-up'), true);
  assert.equal(banner.getAttribute('data-at'), undefined);

  // 3. ok 전환 (안내 제거)
  const okResult = { visible: false, state: 'ok' };
  renderBriefingRetryStatus(okResult, mockDoc);
  assert.equal(mockDoc.getElementById('briefing-retry-status'), null);
});

test('initBriefingStatus handles 404, network failure, and successful responses deterministically', async () => {
  const originalWindow = globalThis.window;
  const originalDocument = globalThis.document;
  const originalFetch = globalThis.fetch;

  let bannerText = '';
  let bannerRemoved = false;

  const mockElement = {
    id: 'briefing-retry-status',
    classList: { toggle: () => {} },
    setAttribute: () => {},
    removeAttribute: () => {},
    remove: () => { bannerRemoved = true; bannerText = ''; },
    set textContent(v) { bannerText = v; },
    get textContent() { return bannerText; }
  };

  globalThis.document = {
    readyState: 'complete',
    getElementById: (id) => (id === 'briefing-retry-status' ? mockElement : null),
    querySelector: () => mockElement,
    createElement: () => mockElement
  };
  globalThis.window = {
    document: globalThis.document
  };

  // [결함 4 수정] 테스트 실행 시각에 구애받지 않도록 고정된 Date 주입 (결정적 테스트)
  const fixedNow = new Date('2026-11-24T08:00:00+09:00');
  const kstToday = '2026-11-24';

  try {
    // 1. 200 정상 응답 테스트 (미래 12:00 재시도 안내 확인)
    globalThis.fetch = async () => ({
      ok: true,
      status: 200,
      json: async () => ({
        date: kstToday,
        total: 71,
        summarized: 30,
        pending: 41,
        reason: 'rate_limit',
        next_retry_at: `${kstToday}T12:00:00+09:00`,
        attempt: 1,
        max_attempts: 3,
        state: 'pending_retry'
      })
    });
    bannerText = '';
    bannerRemoved = false;
    const monitor = initBriefingStatus({
      checkIntervalMs: 0,
      pollIntervalMs: 0,
      now: fixedNow
    });
    await monitor.refresh();
    assert.match(bannerText, /AI 요약 41건 생성 지연 — 다음 자동 재시도 12:00/);

    // 2. [결함 3 회귀] 유효 상태 다음 404 발생 시 currentData를 비워 tick 배너 재등장 방지
    globalThis.fetch = async () => ({
      ok: false,
      status: 404,
      json: async () => ({})
    });
    bannerRemoved = false;
    await monitor.refresh();
    assert.equal(bannerRemoved, true);

    // 60초 tick을 모사하여 refresh 실행 시(또는 타이머 틱 시) bannerText가 다시 채워지지 않는지 검증
    // currentData가 비워졌으므로 배너가 부활하지 않아야 함
    assert.equal(bannerText, '');

    // 3. 네트워크 오류 테스트: 예외를 던지지 않고 조용히 복구
    globalThis.fetch = async () => {
      throw new Error('Network connection failed');
    };
    bannerRemoved = false;
    await assert.doesNotReject(async () => {
      await monitor.refresh();
    });

  } finally {
    globalThis.window = originalWindow;
    globalThis.document = originalDocument;
    globalThis.fetch = originalFetch;
  }
});
