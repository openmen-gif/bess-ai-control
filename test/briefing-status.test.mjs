/**
 * @file test/briefing-status.test.mjs
 * @description briefing-status 모듈의 모든 경계 조건(Edge cases) 및 회귀 테스트
 */

import assert from 'node:assert/strict';
import test from 'node:test';

import {
  getKstDateString,
  formatKstTime,
  isValidCalendarDate,
  computeBriefingRetryStatus,
  renderBriefingRetryStatus,
  initBriefingStatus,
  getPageDate
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

test('isValidCalendarDate strictly validates calendar limits and leap years', () => {
  // 월별 일수 검증
  assert.equal(isValidCalendarDate(2026, 11, 30), true);
  assert.equal(isValidCalendarDate(2026, 11, 31), false); // 11월은 30일까지
  assert.equal(isValidCalendarDate(2026, 4, 31), false);  // 4월은 30일까지
  assert.equal(isValidCalendarDate(2026, 12, 31), true);  // 12월은 31일까지

  // 윤년 검증 (2024 윤년 vs 2026 평년)
  assert.equal(isValidCalendarDate(2026, 2, 28), true);
  assert.equal(isValidCalendarDate(2026, 2, 29), false); // 2026년은 평년이므로 29일 없음
  assert.equal(isValidCalendarDate(2024, 2, 29), true);  // 2024년은 윤년이므로 29일 존재
  assert.equal(isValidCalendarDate(2000, 2, 29), true);  // 400 배수 윤년
  assert.equal(isValidCalendarDate(1900, 2, 29), false); // 100 배수 평년

  // 범위 외 입력 방어
  assert.equal(isValidCalendarDate(2026, 0, 1), false);
  assert.equal(isValidCalendarDate(2026, 13, 1), false);
  assert.equal(isValidCalendarDate(2026, 5, 0), false);
});

test('formatKstTime extracts HH:MM safely with strict ISO and calendar validation', () => {
  // 정상 ISO 8601 KST 시각
  assert.equal(formatKstTime('2026-11-24T08:25:00+09:00'), '08:25');
  assert.equal(formatKstTime('2026-11-24T13:00:00+09:00'), '13:00');
  assert.equal(formatKstTime('2026-11-24T00:05:00Z'), '09:05'); // UTC 00:05 -> KST 09:05
  assert.equal(formatKstTime('2024-02-29T14:30:00+09:00'), '14:30'); // 윤년 2월 29일 정상

  // [P2 결함 회귀] 11월 31일 등 달력상 불가능한 일자가 JS rollover(12월 1일)되지 않고 null 처리되어야 함
  assert.equal(formatKstTime('2026-11-31T08:25:00+09:00'), null);
  assert.equal(formatKstTime('2026-02-29T08:25:00+09:00'), null); // 평년 2월 29일

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

test('computeBriefingRetryStatus: [P2 결함 회귀] 2026-11-31 rollover must not promise 08:25', () => {
  const statusInvalidCalendar = {
    date: '2026-11-24',
    total: 71,
    summarized: 22,
    pending: 49,
    reason: 'rate_limit',
    next_retry_at: '2026-11-31T08:25:00+09:00', // 11월 31일은 존재하지 않음
    attempt: 0,
    max_attempts: 3,
    state: 'pending_retry'
  };

  const now = new Date('2026-11-24T08:00:00+09:00');
  const result = computeBriefingRetryStatus(statusInvalidCalendar, { now, today: '2026-11-24' });

  // 12월 1일로 rollover되어 다음 08:25가 표시되면 안 됨. 시간 약속 금지 분기로 처리되어야 함.
  assert.equal(result.visible, true);
  assert.equal(result.hasNextRetry, false);
  assert.doesNotMatch(result.message, /08:25/);
  assert.equal(result.message, 'AI 요약 49건 생성 지연 (자동 재시도 준비 중)');
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
  assert.doesNotMatch(result.message, /\d{2}:\d{2}/);
  assert.equal(result.message, 'AI 요약 49건 생성 지연 (자동 재시도 준비 중)');
});

test('computeBriefingRetryStatus: [결함 2 회귀] pending must strictly be non-negative integer', () => {
  // 1. 문자열 '49' 거부
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

  // 2. 소수 1.5 거부
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

  // 3. 음수 -1 거부 (ok 오인 방지)
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

  // 4. state는 ok인데 pending 남아있는 모순 거부
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
  assert.notEqual(result.state, 'ok');
});

test('computeBriefingRetryStatus: invalid or corrupt payloads are safely rejected', () => {
  assert.equal(computeBriefingRetryStatus(null).visible, false);
  assert.equal(computeBriefingRetryStatus(undefined).visible, false);
  assert.equal(computeBriefingRetryStatus('string-payload').visible, false);
  assert.equal(computeBriefingRetryStatus({}).visible, false);
  // date가 비정상 달력 날짜인 경우
  assert.equal(computeBriefingRetryStatus({ date: '2026-11-31', pending: 10, state: 'pending_retry' }).visible, false);
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

test('initBriefingStatus handles 404, network failure, and verifies 60000ms callback banner non-revival', async () => {
  const originalWindow = globalThis.window;
  const originalDocument = globalThis.document;
  const originalFetch = globalThis.fetch;
  const originalSetInterval = globalThis.setInterval;
  const originalClearInterval = globalThis.clearInterval;

  let bannerText = '';
  let bannerRemoved = false;
  let captured60kCallback = null;

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

  // 실제 60000ms 등록 callback을 포착하기 위해 setInterval 모킹
  globalThis.setInterval = (cb, ms) => {
    if (ms === 60000) {
      captured60kCallback = cb;
    }
    return 123;
  };
  globalThis.clearInterval = () => {};

  const fixedNow = new Date('2026-11-24T08:00:00+09:00');
  const kstToday = '2026-11-24';

  try {
    // 1. 200 정상 응답 테스트
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
      checkIntervalMs: 60000,
      pollIntervalMs: 0,
      now: fixedNow
    });
    await monitor.refresh();
    assert.match(bannerText, /AI 요약 41건 생성 지연 — 다음 자동 재시도 12:00/);
    assert.ok(captured60kCallback, '60000ms 주기 콜백이 정상 등록되어야 함');

    // 2. [P2 회귀] 유효 상태 다음 404 발생 시 배너 제거 및 포착된 60000ms 콜백 실행 시 배너 미부활 영구 검증
    globalThis.fetch = async () => ({
      ok: false,
      status: 404,
      json: async () => ({})
    });
    bannerRemoved = false;
    await monitor.refresh();
    assert.equal(bannerRemoved, true);
    assert.equal(bannerText, '');

    // 실제로 포착한 60000ms 콜백(checkExpiredTick)을 직접 실행!
    captured60kCallback();

    // currentData가 초기화되었으므로 배너 텍스트가 다시 생성되거나 부활하지 않아야 함
    assert.equal(bannerText, '', '404 이후 60000ms tick 콜백이 실행되어도 배너가 재등장하지 않아야 함');

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
    globalThis.setInterval = originalSetInterval;
    globalThis.clearInterval = originalClearInterval;
  }
});

test('getPageDate extracts valid YYYY-MM-DD from .date, title, or pathname', () => {
  // 1. .date 요소에서 추출
  const docWithDate = {
    querySelector: (sel) => (sel === '.date' ? { textContent: '2026-11-24 (화) 07:30 발행' } : null)
  };
  assert.equal(getPageDate(docWithDate), '2026-11-24');

  // 2. <title>에서 추출
  const docWithTitle = {
    querySelector: () => null,
    title: 'BESS 일일 기술 브리핑 — 2026-11-24'
  };
  assert.equal(getPageDate(docWithTitle), '2026-11-24');

  // 3. 비정상 달력 날짜(예: 2026-11-31)는 무시
  const docInvalidDate = {
    querySelector: (sel) => (sel === '.date' ? { textContent: '2026-11-31 브리핑' } : null),
    title: ''
  };
  assert.equal(getPageDate(docInvalidDate), null);

  // 4. 빈 DOM
  assert.equal(getPageDate(null), null);
  assert.equal(getPageDate({}), null);
});

test('computeBriefingRetryStatus: rejects status if pageDate does not match status date', () => {
  const statusToday = {
    date: '2026-11-24',
    total: 71,
    summarized: 30,
    pending: 41,
    reason: 'rate_limit',
    next_retry_at: '2026-11-24T12:00:00+09:00',
    attempt: 1,
    max_attempts: 3,
    state: 'pending_retry'
  };

  // 과거 날짜 페이지(2026-11-23) 열람 중 오늘의 status.json 도착 시 거부
  const resMismatch = computeBriefingRetryStatus(statusToday, {
    today: '2026-11-24',
    pageDate: '2026-11-23'
  });
  assert.equal(resMismatch.visible, false);
  assert.equal(resMismatch.reason, 'page_date_mismatch');
  assert.notEqual(resMismatch.state, 'ok');

  // 오늘 페이지와 일치할 때는 정상 노출
  const resMatch = computeBriefingRetryStatus(statusToday, {
    today: '2026-11-24',
    pageDate: '2026-11-24'
  });
  assert.equal(resMatch.visible, true);
  assert.equal(resMatch.pending, 41);
});

test('renderBriefingRetryStatus: verifies static fallback (#briefing-retry-fallback) interaction contract', () => {
  class MockElement {
    constructor(tagName, id = '') {
      this.tagName = tagName;
      this.id = id;
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
      this.hidden = false;
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

  function createMockEnv(includeFallback = true) {
    const root = new MockElement('div', 'root');
    const tabs = new MockElement('nav');
    tabs.className = 'tabs';
    tabs.parentNode = root;
    root.children.push(tabs);

    let fallback = null;
    if (includeFallback) {
      fallback = new MockElement('div', 'briefing-retry-fallback');
      fallback.className = 'retry-status';
      fallback.textContent = 'AI 요약 N건 생성 지연 — 다음 자동 재시도 ...';
      fallback.hidden = false; // 발행기 기본 표시 상태
      fallback.parentNode = root;
      root.children.push(fallback);
    }

    const doc = {
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

    return { root, doc, fallback };
  }

  // 1. 유효 status 반영 성공(pending_retry): 동적 배너 1개 + fallback 숨김 (총 안내 1개)
  const env1 = createMockEnv(true);
  const pendingResult = {
    visible: true,
    state: 'pending_retry',
    nextRetryAt: '2026-11-24T12:00:00+09:00',
    message: 'AI 요약 41건 생성 지연 — 다음 자동 재시도 12:00'
  };
  renderBriefingRetryStatus(pendingResult, env1.doc);
  const banner1 = env1.doc.getElementById('briefing-retry-status');
  assert.ok(banner1, '동적 배너가 생성되어야 함');
  assert.equal(banner1.textContent, 'AI 요약 41건 생성 지연 — 다음 자동 재시도 12:00');
  assert.equal(env1.fallback.hidden, true, '동적 배너 표시 시 fallback은 hidden=true여야 함 (안내 총 1개)');

  // 2. gave_up 전환: 동적 배너 1개 + fallback 숨김 (총 안내 1개)
  const gaveUpResult = {
    visible: true,
    state: 'gave_up',
    message: 'AI 요약 41건 생성 지연 — 자동 재시도 종료'
  };
  renderBriefingRetryStatus(gaveUpResult, env1.doc);
  assert.equal(banner1.textContent, 'AI 요약 41건 생성 지연 — 자동 재시도 종료');
  assert.equal(env1.fallback.hidden, true, 'gave_up 상태에서도 fallback은 hidden=true 유지');

  // 3. ok 상태: 동적 배너 제거 + fallback 숨김 (총 안내 0개)
  const okResult = { visible: false, state: 'ok' };
  renderBriefingRetryStatus(okResult, env1.doc);
  assert.equal(env1.doc.getElementById('briefing-retry-status'), null, '동적 배너는 제거되어야 함');
  assert.equal(env1.fallback.hidden, true, 'ok 상태 시 fallback도 hidden=true로 안내 0개여야 함');

  // 4. 실패/오류 상태 (404/500/네트워크 실패): 동적 배너 제거 + fallback 복원 (정적 안내 1개)
  const failResult = { visible: false, reason: 'http_404' };
  renderBriefingRetryStatus(failResult, env1.doc);
  assert.equal(env1.doc.getElementById('briefing-retry-status'), null, '동적 배너 없음');
  assert.equal(env1.fallback.hidden, false, '실패 시 fallback은 hidden=false로 복원되어야 함 (정적 안내 1개)');

  // 5. fallback 요소가 없는 기존 DOM 환경 하위 호환성 검증
  const envNoFallback = createMockEnv(false);
  assert.doesNotThrow(() => {
    renderBriefingRetryStatus(pendingResult, envNoFallback.doc);
    assert.ok(envNoFallback.doc.getElementById('briefing-retry-status'));
    renderBriefingRetryStatus(okResult, envNoFallback.doc);
    assert.equal(envNoFallback.doc.getElementById('briefing-retry-status'), null);
  });
});

test('initBriefingStatus: complete lifecycle test (pending_retry -> 404/failure -> tick -> retry recovery -> ok)', async () => {
  const originalWindow = globalThis.window;
  const originalDocument = globalThis.document;
  const originalFetch = globalThis.fetch;
  const originalSetInterval = globalThis.setInterval;
  const originalClearInterval = globalThis.clearInterval;

  class MockElement {
    constructor(tagName, id = '') {
      this.tagName = tagName;
      this.id = id;
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
      this.hidden = false;
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

  const root = new MockElement('div', 'root');
  const fallback = new MockElement('div', 'briefing-retry-fallback');
  fallback.hidden = false;
  fallback.parentNode = root;
  root.children.push(fallback);

  const mockDoc = {
    readyState: 'complete',
    getElementById(id) {
      return root.children.find((c) => c.id === id) || null;
    },
    querySelector(sel) {
      if (sel === '.date') return { textContent: '2026-11-24' };
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

  globalThis.document = mockDoc;
  globalThis.window = { document: mockDoc };

  let captured60kCallback = null;
  globalThis.setInterval = (cb, ms) => {
    if (ms === 60000) captured60kCallback = cb;
    return 999;
  };
  globalThis.clearInterval = () => {};

  const fixedNow = new Date('2026-11-24T08:00:00+09:00');
  const kstToday = '2026-11-24';

  try {
    // 1단계: 정상 pending_retry 응답
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

    const monitor = initBriefingStatus({
      checkIntervalMs: 60000,
      pollIntervalMs: 0,
      now: fixedNow,
      pageDate: kstToday
    });

    await monitor.refresh();

    let dynamicBanner = mockDoc.getElementById('briefing-retry-status');
    assert.ok(dynamicBanner, '동적 배너가 존재해야 함');
    assert.equal(fallback.hidden, true, '동적 배너 표시 시 정적 fallback은 hidden=true (총 안내 1개)');

    // 2단계: 404 발생 시 동적 배너 제거 + 정적 fallback 복원
    globalThis.fetch = async () => ({
      ok: false,
      status: 404,
      json: async () => ({})
    });

    await monitor.refresh();
    dynamicBanner = mockDoc.getElementById('briefing-retry-status');
    assert.equal(dynamicBanner, null, '404 시 동적 배너 제거');
    assert.equal(fallback.hidden, false, '404 시 정적 fallback 복원 (정적 안내 1개)');

    // 3단계: 실패 후 60초 tick 실행 시 동적 배너 미부활 (0개 유지)
    assert.ok(captured60kCallback, '60초 tick 콜백 존재 확인');
    captured60kCallback();
    dynamicBanner = mockDoc.getElementById('briefing-retry-status');
    assert.equal(dynamicBanner, null, '실패 후 tick이 과거 배너를 부활시키지 않아야 함');
    assert.equal(fallback.hidden, false, 'fallback은 계속 표시 상태 유지');

    // 4단계: 재조회 성공 시 다시 동적 배너 노출 + fallback 숨김
    globalThis.fetch = async () => ({
      ok: true,
      status: 200,
      json: async () => ({
        date: kstToday,
        total: 71,
        summarized: 50,
        pending: 21,
        reason: 'rate_limit',
        next_retry_at: `${kstToday}T13:00:00+09:00`,
        attempt: 2,
        max_attempts: 3,
        state: 'pending_retry'
      })
    });

    await monitor.refresh();
    dynamicBanner = mockDoc.getElementById('briefing-retry-status');
    assert.ok(dynamicBanner, '재조회 성공 시 동적 배너 부활');
    assert.match(dynamicBanner.textContent, /AI 요약 21건 생성 지연 — 다음 자동 재시도 13:00/);
    assert.equal(fallback.hidden, true, '재조회 성공 시 fallback 재숨김 (총 안내 1개)');

    // 5단계: 완료(ok) 응답 시 동적 배너 제거 + fallback 숨김 (총 안내 0개)
    globalThis.fetch = async () => ({
      ok: true,
      status: 200,
      json: async () => ({
        date: kstToday,
        total: 71,
        summarized: 71,
        pending: 0,
        reason: null,
        next_retry_at: null,
        attempt: 2,
        max_attempts: 3,
        state: 'ok'
      })
    });

    await monitor.refresh();
    dynamicBanner = mockDoc.getElementById('briefing-retry-status');
    assert.equal(dynamicBanner, null, 'ok 상태 시 동적 배너 제거');
    assert.equal(fallback.hidden, true, 'ok 상태 시 fallback도 hidden=true (총 안내 0개)');

    // 6단계: 네트워크 예외 발생 시 동적 배너 제거 + fallback 복원
    globalThis.fetch = async () => {
      throw new Error('Network offline');
    };

    await monitor.refresh();
    dynamicBanner = mockDoc.getElementById('briefing-retry-status');
    assert.equal(dynamicBanner, null, '네트워크 예외 시 동적 배너 없음');
    assert.equal(fallback.hidden, false, '네트워크 예외 시 fallback 복원');

    monitor.destroy();
  } finally {
    globalThis.window = originalWindow;
    globalThis.document = originalDocument;
    globalThis.fetch = originalFetch;
    globalThis.setInterval = originalSetInterval;
    globalThis.clearInterval = originalClearInterval;
  }
});
