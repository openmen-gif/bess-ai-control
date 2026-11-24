/**
 * @file briefing-status.js
 * @description BESS 일일 브리핑 요약 생성 지연 상태(/briefing/status.json) 연동 모듈
 * 
 * [운영 계약 준수 사항]
 * 1. 대상: /briefing/status.json (최신 발행일 단일 객체)
 * 2. 필드: date, total, summarized, pending, reason, next_retry_at, attempt, max_attempts, state
 * 3. KST 오늘 날짜만 사용: 어제 상태나 과거 날짜 데이터는 화면에 노출하지 않음
 * 4. pending_retry: "AI 요약 N건 생성 지연 — 다음 자동 재시도 HH:MM", next_retry_at 부재 시 시간 약속 금지
 * 5. 재시도 시각 경과 시: "재시도 예정 시각 경과"로 안내 갱신
 * 6. gave_up: attempt 수치(0~2 포함)와 무관하게 state로 판단하여 "자동 재시도 종료" 및 누락 건수 표시
 * 7. ok: 지연 안내 제거
 * 8. 404/네트워크 오류/손상 응답: 기존 UI를 해치거나 거짓 요약 정상으로 오인하지 않도록 안전 처리
 */

/**
 * 주어진 시각(또는 현재 시각)의 한국 표준시(KST, UTC+9) 기준 날짜 문자열(YYYY-MM-DD)을 반환합니다.
 * 브라우저나 시스템의 로컬 타임존과 무관하게 항상 KST 날짜를 산출하기 위해 사용합니다.
 * 
 * @param {Date} [now=new Date()]
 * @returns {string} YYYY-MM-DD
 */
export function getKstDateString(now = new Date()) {
  try {
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Seoul',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    return formatter.format(now);
  } catch (_e) {
    // Intl timeZone 미지원 등 극단적 예외 환경을 위한 안전 fallback (UTC+9 오프셋 계산)
    const kstTime = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    return kstTime.toISOString().slice(0, 10);
  }
}

/**
 * 연/월/일의 달력 유효성(월별 일수 및 윤년 계산)을 엄격하게 검증합니다.
 * JS Date.parse의 비정상 일자 자동 rollover(예: 11월 31일 -> 12월 1일) 방지를 위해 사용합니다.
 * 
 * @param {number} year
 * @param {number} month 1~12
 * @param {number} day 1~31
 * @returns {boolean} 유효한 달력 날짜이면 true
 */
export function isValidCalendarDate(year, month, day) {
  if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) return false;
  if (year < 1 || month < 1 || month > 12 || day < 1) return false;
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  const daysInMonths = [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return day <= daysInMonths[month - 1];
}

/**
 * ISO 8601 시각 문자열에서 KST 기준 시/분(HH:MM) 문자열을 엄격하고 안전하게 추출합니다.
 * 달력상 존재하지 않는 날짜(예: 11월 31일, 평년 2월 29일), 유효하지 않은 ISO 형식,
 * 파싱 불가능한 시각, 비정상적인 시/분(예: 99:99)은 null을 반환합니다.
 * 
 * @param {string} isoString
 * @returns {string|null} HH:MM 형식의 문자열 또는 유효하지 않을 경우 null
 */
export function formatKstTime(isoString) {
  if (!isoString || typeof isoString !== 'string') return null;

  // 엄격한 ISO 8601 패턴 검증: YYYY-MM-DDTHH:MM[:SS][.mmm](Z|±HH:MM)
  const ISO_REGEX = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?(?:\.\d+)?(?:Z|[+-]\d{2}:?\d{2})$/;
  const match = isoString.match(ISO_REGEX);
  if (!match) return null;

  const year = parseInt(match[1], 10);
  const month = parseInt(match[2], 10);
  const day = parseInt(match[3], 10);
  const hour = parseInt(match[4], 10);
  const minute = parseInt(match[5], 10);
  const second = match[6] ? parseInt(match[6], 10) : 0;

  // 1. 달력 유효성 검증 (월별 일수 및 윤년 계산, 예: 2026-11-31 또는 2026-02-29 방어)
  if (!isValidCalendarDate(year, month, day)) return null;

  // 2. 시(0~23), 분(0~59), 초(0~59) 범위 검증
  if (hour < 0 || hour > 23 || minute < 0 || minute > 59 || second < 0 || second > 59) return null;

  // 3. Date.parse로 타임스탬프 유효성 검증 (NaN 방지)
  const timeMs = Date.parse(isoString);
  if (Number.isNaN(timeMs)) return null;

  try {
    const d = new Date(timeMs);
    const formatter = new Intl.DateTimeFormat('ko-KR', {
      timeZone: 'Asia/Seoul',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
    const parts = formatter.formatToParts(d);
    const hourStr = parts.find((p) => p.type === 'hour')?.value ?? '';
    const minuteStr = parts.find((p) => p.type === 'minute')?.value ?? '';
    const h = parseInt(hourStr, 10);
    const m = parseInt(minuteStr, 10);
    // 시(0~23) 및 분(0~59) 범위 검증
    if (Number.isNaN(h) || h < 0 || h > 23 || Number.isNaN(m) || m < 0 || m > 59) {
      return null;
    }
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  } catch (_e) {
    return null;
  }
}

/**
 * HTML 문서 또는 DOM 노드에서 현재 브리핑 페이지의 발행일자(YYYY-MM-DD)를 안전하게 감지합니다.
 * .date 요소, <title> 태그, URL 등에서 추출하며 달력 유효성을 검증합니다.
 * 
 * @param {Document|HTMLElement} [rootNode]
 * @returns {string|null} YYYY-MM-DD 또는 감지 실패 시 null
 */
export function getPageDate(rootNode = (typeof document !== 'undefined' ? document : null)) {
  if (!rootNode) return null;
  try {
    // 1. .date 요소의 텍스트에서 검색 (예: "2026-11-24 (화) ...")
    const dateEl = rootNode.querySelector ? rootNode.querySelector('.date') : null;
    if (dateEl && dateEl.textContent) {
      const m = dateEl.textContent.match(/\b(\d{4}-\d{2}-\d{2})\b/);
      if (m) {
        const [year, month, day] = m[1].split('-').map((v) => parseInt(v, 10));
        if (isValidCalendarDate(year, month, day)) return m[1];
      }
    }
    // 2. <title> 텍스트에서 검색 (예: "BESS 일일 기술 브리핑 — 2026-11-24")
    const titleText = rootNode.title || (rootNode.querySelector && rootNode.querySelector('title')?.textContent);
    if (titleText) {
      const m = titleText.match(/\b(\d{4}-\d{2}-\d{2})\b/);
      if (m) {
        const [year, month, day] = m[1].split('-').map((v) => parseInt(v, 10));
        if (isValidCalendarDate(year, month, day)) return m[1];
      }
    }
    // 3. location pathname에서 검색 (예: "/briefing/2026-11-24.html")
    if (typeof window !== 'undefined' && window.location && window.location.pathname) {
      const m = window.location.pathname.match(/\b(\d{4}-\d{2}-\d{2})\b/);
      if (m) {
        const [year, month, day] = m[1].split('-').map((v) => parseInt(v, 10));
        if (isValidCalendarDate(year, month, day)) return m[1];
      }
    }
  } catch (_e) {
    // 파싱 오류 시 null 반환
  }
  return null;
}

/**
 * status.json 데이터와 기준 시각을 바탕으로 UI에 렌더링할 상태를 계산하는 순수 함수입니다.
 * 계약에 맞는 비음수 정수 pending 및 유효 ISO 시각만 허용하여 잘못된 응답을 정상/0으로 오인하지 않습니다.
 * 
 * @param {any} statusData /briefing/status.json 파싱 객체
 * @param {object} [options]
 * @param {Date} [options.now=new Date()] 현재 시각
 * @param {string} [options.today] KST 기준 오늘 날짜 (미지정 시 자동 계산)
 * @param {string} [options.pageDate] 현재 페이지 날짜 (페이지 일자와 불일치 시 적용 금지)
 * @param {boolean} [options.hasFallback] DOM 내 fallback(#briefing-retry-fallback) 존재 여부
 * @returns {object} 계산된 UI 상태 결과 (유효 성공 시 valid: true, 실패 시 valid: false)
 */
export function computeBriefingRetryStatus(statusData, options = {}) {
  const now = options.now ?? new Date();
  const today = options.today ?? getKstDateString(now);

  // 1. 유효하지 않은 응답 방어
  if (!statusData || typeof statusData !== 'object') {
    return { visible: false, valid: false, reason: 'invalid_payload' };
  }

  const { date, pending, state, next_retry_at, total, summarized } = statusData;

  // 2. KST 오늘 날짜 확인: 어제 상태나 과거 데이터는 지연 안내를 노출하지 않음
  // status.date 달력 유효성 엄격 검증 (예: 2026-11-31 비정상 날짜 방어)
  const dateParts = typeof date === 'string' && date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!dateParts || !isValidCalendarDate(parseInt(dateParts[1], 10), parseInt(dateParts[2], 10), parseInt(dateParts[3], 10))) {
    return { visible: false, valid: false, reason: 'invalid_date', date };
  }
  if (date !== today) {
    return { visible: false, valid: false, reason: 'date_mismatch', dataDate: date, today };
  }

  // 2-1. 페이지 날짜 검증
  // fallback이 존재하는 DOM(hasFallback=true)인데 페이지 날짜 추출이 불가(null/empty)한 경우 안전 거부
  if (options.hasFallback && !options.pageDate) {
    return { visible: false, valid: false, reason: 'page_date_missing' };
  }
  // 페이지 날짜가 지정된 경우 status.date와 일치해야 함 (과거 브리핑 페이지 열람 중 오늘 status 방어)
  if (options.pageDate && date !== options.pageDate) {
    return { visible: false, valid: false, reason: 'page_date_mismatch', dataDate: date, pageDate: options.pageDate };
  }

  // 3. pending 유효성 검증: 계약에 부합하는 '비음수 정수'만 허용
  // 문자열 '49', 소수 1.5, 음수 -1 등은 잘못된 응답으로 거부하여 정상(ok)이나 0으로 오인 방지
  if (typeof pending !== 'number' || !Number.isInteger(pending) || pending < 0) {
    return { visible: false, valid: false, reason: 'invalid_pending', pending };
  }

  // total과 summarized가 제공된 경우 비음수 정수여야 함
  if (typeof total !== 'undefined' && (typeof total !== 'number' || !Number.isInteger(total) || total < 0)) {
    return { visible: false, valid: false, reason: 'invalid_total', total };
  }
  if (typeof summarized !== 'undefined' && (typeof summarized !== 'number' || !Number.isInteger(summarized) || summarized < 0)) {
    return { visible: false, valid: false, reason: 'invalid_summarized', summarized };
  }

  // 4. state 및 pending 관계 검증 (유효 성공과 검증 실패를 엄격히 분리)
  // ok 상태: pending이 정확히 0이어야 함
  if (state === 'ok') {
    if (pending === 0) {
      return { visible: false, valid: true, state: 'ok' };
    }
    // state는 ok인데 pending > 0인 불일치 응답은 절대 ok로 취급하지 않고 검증 실패로 거부 (state: 'ok' 노출 금지)
    return { visible: false, valid: false, reason: 'state_pending_conflict', conflictState: state, pending };
  }

  // pending이 0인데 state가 ok가 아닌 경우(invalid, pending_retry 등): 유효한 ok로 정규화하지 않고 검증 실패로 거부
  if (pending === 0) {
    return { visible: false, valid: false, reason: 'state_pending_conflict', conflictState: state, pending };
  }

  const pendingCount = pending;

  // 5. gave_up 상태: attempt(0~2 회차 포함)에 구애받지 않고 오직 state로 자동 재시도 종료 판단
  if (state === 'gave_up') {
    return {
      visible: true,
      valid: true,
      state: 'gave_up',
      pending: pendingCount,
      message: `AI 요약 ${pendingCount}건 생성 지연 — 자동 재시도 종료`
    };
  }

  // 6. pending_retry 상태
  if (state === 'pending_retry') {
    const formattedTime = formatKstTime(next_retry_at);
    const retryTimeMs = typeof next_retry_at === 'string' ? Date.parse(next_retry_at) : NaN;

    // next_retry_at 부재 또는 유효하지 않은 시각(NaN, 99:99 등): 특정 시각 약속 금지
    if (!formattedTime || Number.isNaN(retryTimeMs)) {
      return {
        visible: true,
        valid: true,
        state: 'pending_retry',
        pending: pendingCount,
        hasNextRetry: false,
        message: `AI 요약 ${pendingCount}건 생성 지연 (자동 재시도 준비 중)`
      };
    }

    // next_retry_at 시각 경과 여부 확인 (엄격한 타임스탬프 비교)
    const isExpired = now.getTime() >= retryTimeMs;

    if (isExpired) {
      return {
        visible: true,
        valid: true,
        state: 'pending_retry',
        pending: pendingCount,
        hasNextRetry: true,
        isExpired: true,
        nextRetryAt: next_retry_at,
        message: `AI 요약 ${pendingCount}건 생성 지연 — 재시도 예정 시각 경과 (한도 대기 또는 실행 상태 확인 중)`
      };
    }

    // 정상 대기 중: 예정 시각 표시
    return {
      visible: true,
      valid: true,
      state: 'pending_retry',
      pending: pendingCount,
      hasNextRetry: true,
      isExpired: false,
      nextRetryAt: next_retry_at,
      timeString: formattedTime,
      message: `AI 요약 ${pendingCount}건 생성 지연 — 다음 자동 재시도 ${formattedTime}`
    };
  }

  // 기타 알 수 없는 state의 경우 안전하게 검증 실패 처리
  return { visible: false, valid: false, reason: 'unknown_state', conflictState: state };
}

/**
 * 계산된 결과를 실제 브라우저 DOM에 안전하게 반영하고 정적 fallback(#briefing-retry-fallback)을 연동합니다.
 * XSS 방지를 위해 모든 문자열은 textContent로만 삽입합니다.
 * 
 * [계약 준수 사항]
 * 1. 유효 status 반영 성공(지연/gave_up) 시: 동적 배너 표시 + fallback.hidden = true (같은 동기 DOM 처리)
 * 2. 유효 ok 상태 시: 동적 배너 제거 + fallback.hidden = true (안내 0개)
 * 3. 실패/손상/404/5xx/검증실패 시: 동적 배너 제거 + fallback.hidden = false (정적 안내 복원)
 * 4. fallback 요소가 없는 기존 페이지에서도 오류 없이 정상 호환
 * 
 * @param {object} computedResult computeBriefingRetryStatus 반환 객체
 * @param {Document|HTMLElement} [rootNode=document]
 */
export function renderBriefingRetryStatus(computedResult, rootNode = (typeof document !== 'undefined' ? document : null)) {
  if (!rootNode) return;

  const CONTAINER_ID = 'briefing-retry-status';
  const FALLBACK_ID = 'briefing-retry-fallback';

  const el = rootNode.getElementById ? rootNode.getElementById(CONTAINER_ID) : rootNode.querySelector?.(`#${CONTAINER_ID}`);
  const fallback = rootNode.getElementById ? rootNode.getElementById(FALLBACK_ID) : rootNode.querySelector?.(`#${FALLBACK_ID}`);

  // 유효한 적용 성공 여부 (검증 실패/오류가 아닌 성공적인 상태)
  const isValidSuccess = Boolean(computedResult && computedResult.valid !== false && !computedResult.reason);

  // 1. 유효한 지연 상태 배너 표시 (pending_retry 또는 gave_up)
  if (isValidSuccess && computedResult.visible) {
    let target = el;
    if (!target) {
      target = rootNode.createElement('div');
      target.id = CONTAINER_ID;
      target.className = 'retry-status';

      // fallback 요소가 있으면 그 앞에 삽입하여 시각적 위치를 통일, 없으면 tabs 뒤에 삽입
      if (fallback && fallback.parentNode) {
        fallback.parentNode.insertBefore(target, fallback);
      } else {
        const anchor = rootNode.querySelector?.('.tabs') || rootNode.querySelector?.('.live') || rootNode.querySelector?.('.date');
        if (anchor && anchor.parentNode) {
          anchor.parentNode.insertBefore(target, anchor.nextSibling);
        } else {
          const wrap = rootNode.querySelector?.('.wrap') || rootNode.body;
          if (wrap) wrap.insertBefore(target, wrap.firstChild);
        }
      }
    }

    target.classList.toggle('gave-up', computedResult.state === 'gave_up');
    if (computedResult.nextRetryAt) {
      target.setAttribute('data-at', computedResult.nextRetryAt);
    } else {
      target.removeAttribute('data-at');
    }
    target.textContent = computedResult.message || '';

    // 동적 배너 표시와 정적 fallback 숨김을 같은 동기 DOM 처리 안에서 즉시 수행
    if (fallback) {
      fallback.hidden = true;
    }
    return;
  }

  // 2. 동적 배너 제거
  if (el) el.remove();

  // 3. 정적 fallback 처리:
  // 오직 유효한 ok 상태(isValidSuccess && computedResult.state === 'ok')일 때만 fallback 숨김 (안내 0개)
  // 그 외 모든 실패/검증오류/비정상응답은 fallback 복원 (정적 안내 1개)
  if (fallback) {
    if (isValidSuccess && computedResult.state === 'ok') {
      fallback.hidden = true;
    } else {
      fallback.hidden = false;
    }
  }
}

/**
 * 브라우저 환경에서 /briefing/status.json을 가져와 상태 배너를 초기화하고 주기적 갱신을 수행합니다.
 * 
 * @param {object} [options]
 * @param {string} [options.statusUrl='/briefing/status.json']
 * @param {number} [options.checkIntervalMs=60000] 예정 시각 경과 체크 주기 (기본 60초)
 * @param {number} [options.pollIntervalMs=300000] status.json 원격 재조회 주기 (기본 5분, 0이면 비활성)
 * @returns {object} { refresh: Function, destroy: Function }
 */
export function initBriefingStatus(options = {}) {
  const rootDoc = options.rootNode ?? (typeof document !== 'undefined' ? document : null);
  if (typeof window === 'undefined' || !rootDoc) {
    return { refresh: () => Promise.resolve(), destroy: () => {} };
  }

  const statusUrl = options.statusUrl || '/briefing/status.json';
  const checkIntervalMs = options.checkIntervalMs ?? 60000;
  const pollIntervalMs = options.pollIntervalMs ?? 300000;
  const getNow = typeof options.now === 'function' ? options.now : () => (options.now ?? new Date());

  let currentData = null;
  let checkTimer = null;
  let pollTimer = null;

  async function fetchAndRender() {
    const fallbackEl = rootDoc.getElementById ? rootDoc.getElementById('briefing-retry-fallback') : rootDoc.querySelector?.('#briefing-retry-fallback');
    const hasFallback = Boolean(fallbackEl);
    const pageDate = options.pageDate !== undefined ? options.pageDate : getPageDate(rootDoc);

    try {
      // 캐시 방지를 위해 no-cache 헤더 및 타임스탬프 쿼리 사용
      const res = await fetch(`${statusUrl}?_=${Date.now()}`, { cache: 'no-cache' });
      if (!res.ok) {
        // 404(내일 생성 전)나 서버 오류(5xx 등) 시 요약 정상으로 오인하지 않고 동적 배너 제거 및 fallback 복원
        currentData = null; // 유효 상태 다음 실패 발생 시 캐시된 데이터를 비워 60초 tick의 배너 재등장 방지
        renderBriefingRetryStatus({ visible: false, valid: false, reason: `http_${res.status}` }, rootDoc);
        return;
      }
      const data = await res.json();
      const result = computeBriefingRetryStatus(data, {
        now: getNow(),
        today: options.today,
        pageDate,
        hasFallback
      });

      // 유효한 적용 성공(valid === true)인 경우만 캐시 유지, 그 외 모든 검증 실패는 캐시 초기화
      if (!result || result.valid !== true) {
        currentData = null;
      } else {
        currentData = data;
      }
      renderBriefingRetryStatus(result, rootDoc);
    } catch (_err) {
      // 네트워크 장애, JSON 파싱 오류 등 실패 시 동적 배너 제거, 캐시 초기화, fallback 복원
      currentData = null;
      renderBriefingRetryStatus({ visible: false, valid: false, reason: 'network_failure' }, rootDoc);
    }
  }

  // 60초마다 시각 경과 여부 갱신 (네트워크 요청 없이 로컬 시각만 재계산)
  function checkExpiredTick() {
    if (!currentData) return;
    const fallbackEl = rootDoc.getElementById ? rootDoc.getElementById('briefing-retry-fallback') : rootDoc.querySelector?.('#briefing-retry-fallback');
    const hasFallback = Boolean(fallbackEl);
    const pageDate = options.pageDate !== undefined ? options.pageDate : getPageDate(rootDoc);
    const result = computeBriefingRetryStatus(currentData, {
      now: getNow(),
      today: options.today,
      pageDate,
      hasFallback
    });
    if (!result || result.valid !== true) {
      currentData = null;
    }
    renderBriefingRetryStatus(result, rootDoc);
  }

  // 즉시 1회 실행
  fetchAndRender();

  // 인터벌 등록
  if (checkIntervalMs > 0) {
    checkTimer = setInterval(checkExpiredTick, checkIntervalMs);
  }
  if (pollIntervalMs > 0) {
    pollTimer = setInterval(fetchAndRender, pollIntervalMs);
  }

  // 기존 새로고침 버튼('refresh-btn')이 있다면 status.json도 함께 갱신되도록 연계
  const refreshBtn = rootDoc.getElementById ? rootDoc.getElementById('refresh-btn') : null;
  if (refreshBtn && refreshBtn.addEventListener) {
    refreshBtn.addEventListener('click', () => {
      setTimeout(fetchAndRender, 300);
    });
  }

  return {
    refresh: fetchAndRender,
    destroy: () => {
      if (checkTimer) clearInterval(checkTimer);
      if (pollTimer) clearInterval(pollTimer);
    }
  };
}

// 브라우저 직접 로드 시 자동 초기화
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initBriefingStatus());
  } else {
    initBriefingStatus();
  }
}
