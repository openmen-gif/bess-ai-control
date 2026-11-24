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
 * ISO 8601 시각 문자열에서 KST 기준 시/분(HH:MM) 문자열을 안전하게 추출합니다.
 * 
 * @param {string} isoString
 * @returns {string|null} HH:MM 형식의 문자열 또는 유효하지 않을 경우 null
 */
export function formatKstTime(isoString) {
  if (!isoString || typeof isoString !== 'string') return null;

  // 정규식으로 +09:00 또는 KST ISO 문자열의 시:분을 빠르게 1차 추출
  const isoMatch = isoString.match(/T(\d{2}):(\d{2})/);
  if (isoString.includes('+09:00') && isoMatch) {
    return `${isoMatch[1]}:${isoMatch[2]}`;
  }

  // 타임존 파싱이 필요한 경우 Date 객체 활용
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
    const hour = parts.find((p) => p.type === 'hour')?.value.padStart(2, '0') ?? '00';
    const minute = parts.find((p) => p.type === 'minute')?.value.padStart(2, '0') ?? '00';
    return `${hour}:${minute}`;
  } catch (_e) {
    if (isoMatch) return `${isoMatch[1]}:${isoMatch[2]}`;
    return null;
  }
}

/**
 * status.json 데이터와 기준 시각을 바탕으로 UI에 렌더링할 상태를 계산하는 순수 함수입니다.
 * 
 * @param {any} statusData /briefing/status.json 파싱 객체
 * @param {object} [options]
 * @param {Date} [options.now=new Date()] 현재 시각
 * @param {string} [options.today] KST 기준 오늘 날짜 (미지정 시 자동 계산)
 * @returns {object} 계산된 UI 상태 결과
 */
export function computeBriefingRetryStatus(statusData, options = {}) {
  const now = options.now ?? new Date();
  const today = options.today ?? getKstDateString(now);

  // 1. 유효하지 않은 응답 방어
  if (!statusData || typeof statusData !== 'object') {
    return { visible: false, reason: 'invalid_payload' };
  }

  const { date, pending, state, next_retry_at } = statusData;

  // 2. KST 오늘 날짜 확인: 어제 상태나 과거 데이터는 지연 안내를 노출하지 않음
  if (date !== today) {
    return { visible: false, reason: 'date_mismatch', dataDate: date, today };
  }

  // 3. ok 상태이거나 잔여 누락 건수가 0건인 경우: 지연 안내 제거
  if (state === 'ok' || pending === 0 || (typeof pending === 'number' && pending <= 0)) {
    return { visible: false, state: 'ok' };
  }

  const pendingCount = typeof pending === 'number' && pending > 0 ? pending : 0;

  // 4. gave_up 상태: attempt(0~2 회차 포함)에 구애받지 않고 오직 state로 자동 재시도 종료 판단
  if (state === 'gave_up') {
    return {
      visible: true,
      state: 'gave_up',
      pending: pendingCount,
      message: `AI 요약 ${pendingCount}건 생성 지연 — 자동 재시도 종료`
    };
  }

  // 5. pending_retry 상태
  if (state === 'pending_retry') {
    const formattedTime = formatKstTime(next_retry_at);

    // next_retry_at 부재 시: 특정 시각 약속 금지
    if (!formattedTime || !next_retry_at) {
      return {
        visible: true,
        state: 'pending_retry',
        pending: pendingCount,
        hasNextRetry: false,
        message: `AI 요약 ${pendingCount}건 생성 지연 (자동 재시도 준비 중)`
      };
    }

    // next_retry_at 시각 경과 여부 확인
    const retryTimeMs = Date.parse(next_retry_at);
    const isExpired = !Number.isNaN(retryTimeMs) && now.getTime() >= retryTimeMs;

    if (isExpired) {
      return {
        visible: true,
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
      state: 'pending_retry',
      pending: pendingCount,
      hasNextRetry: true,
      isExpired: false,
      nextRetryAt: next_retry_at,
      timeString: formattedTime,
      message: `AI 요약 ${pendingCount}건 생성 지연 — 다음 자동 재시도 ${formattedTime}`
    };
  }

  // 기타 알 수 없는 state의 경우 안전하게 숨김 처리
  return { visible: false, reason: 'unknown_state', state };
}

/**
 * 계산된 결과를 실제 브라우저 DOM에 안전하게 반영합니다.
 * XSS 방지를 위해 모든 문자열은 textContent로만 삽입합니다.
 * 
 * @param {object} computedResult computeBriefingRetryStatus 반환 객체
 * @param {Document|HTMLElement} [rootNode=document]
 */
export function renderBriefingRetryStatus(computedResult, rootNode = (typeof document !== 'undefined' ? document : null)) {
  if (!rootNode) return;

  const CONTAINER_ID = 'briefing-retry-status';
  let el = rootNode.getElementById ? rootNode.getElementById(CONTAINER_ID) : rootNode.querySelector?.(`#${CONTAINER_ID}`);

  if (!computedResult || !computedResult.visible) {
    if (el) el.remove();
    return;
  }

  if (!el) {
    el = rootNode.createElement('div');
    el.id = CONTAINER_ID;
    el.className = 'retry-status';

    // 탭 메뉴(.tabs) 바로 뒤 또는 date/live 아래에 자연스럽게 배치
    const anchor = rootNode.querySelector('.tabs') || rootNode.querySelector('.live') || rootNode.querySelector('.date');
    if (anchor && anchor.parentNode) {
      anchor.parentNode.insertBefore(el, anchor.nextSibling);
    } else {
      const wrap = rootNode.querySelector('.wrap') || rootNode.body;
      if (wrap) wrap.insertBefore(el, wrap.firstChild);
    }
  }

  // gave_up일 때 별도 스타일 클래스 토글
  el.classList.toggle('gave-up', computedResult.state === 'gave_up');

  // data-at 속성 관리 (주기적 경과 체크용)
  if (computedResult.nextRetryAt) {
    el.setAttribute('data-at', computedResult.nextRetryAt);
  } else {
    el.removeAttribute('data-at');
  }

  // 텍스트 내용 안전하게 반영
  el.textContent = computedResult.message || '';
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
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return { refresh: () => Promise.resolve(), destroy: () => {} };
  }

  const statusUrl = options.statusUrl || '/briefing/status.json';
  const checkIntervalMs = options.checkIntervalMs ?? 60000;
  const pollIntervalMs = options.pollIntervalMs ?? 300000;

  let currentData = null;
  let checkTimer = null;
  let pollTimer = null;

  async function fetchAndRender() {
    try {
      // 캐시 방지를 위해 no-cache 헤더 및 타임스탬프 쿼리 사용
      const res = await fetch(`${statusUrl}?_=${Date.now()}`, { cache: 'no-cache' });
      if (!res.ok) {
        // 404(내일 생성 전)나 서버 오류 시 요약 정상으로 오인하지 않고 기존 상태 유지(또는 숨김)
        if (res.status === 404) {
          renderBriefingRetryStatus({ visible: false, reason: '404_not_found' });
        }
        return;
      }
      const data = await res.json();
      currentData = data;
      const result = computeBriefingRetryStatus(data);
      renderBriefingRetryStatus(result);
    } catch (_err) {
      // 네트워크 장애 시 브라우저 콘솔을 오염시키지 않고 조용히 기존 UI 유지
    }
  }

  // 60초마다 시각 경과 여부 갱신 (네트워크 요청 없이 로컬 시각만 재계산)
  function checkExpiredTick() {
    if (!currentData) return;
    const result = computeBriefingRetryStatus(currentData);
    renderBriefingRetryStatus(result);
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
  const refreshBtn = document.getElementById('refresh-btn');
  if (refreshBtn) {
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
