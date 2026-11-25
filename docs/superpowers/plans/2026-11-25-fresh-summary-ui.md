# 신규 기사 구독 요약 UI 구현 계획

기준일: 2026-11-25 · 기준 커밋: ad8975625c9fe82591602a29afb3b35a63d1671b

목표: 기존 발행 기사를 보존하고 새 소식 카드 최대 10개의 요약 요청과 상태를 표시한다.
승인: coordinator가 앱 모듈·모의 API/DOM 테스트 계획을 승인했으며, 템플릿과 생성 HTML은 TSM이 담당한다.

```mermaid
flowchart LR
  T[TSM 신규 카드 렌더] --> E[briefing:fresh-rendered]
  E --> M[앱 모듈: DOM 후보 중복 제거]
  M --> P[최대 10개 POST]
  P --> G[30초 간격 상태 GET]
  G --> C[신규 카드만 안전하게 갱신]
```

- [x] 계약 경계 테스트를 먼저 작성하고 미구현 실패를 확인한다.
- [x] 독립 ES module을 구현한다: 요청 중복 방지, 10개 제한, 구 API 호환, 숨김 탭 중단, 종결 상태 중단, 시각·예산 검증, textContent 렌더.
- [x] 같은 DOM 계약의 모의 화면을 Orca 브라우저로 확인한다.
- [ ] 전체 Node 테스트를 실행하고 확정 API와 다시 대조하여 PR을 준비한다.

DOM 계약: `.fresh .item[data-candidate-id]`, 선택 속성 `data-summary-status`; 국내·해외 렌더 완료 후 document 이벤트 `briefing:fresh-rendered`, detail `{updated: d.updated}`; `<script type="module" src="/briefing/fresh-summary.js"></script>`.
모듈은 리스너를 먼저 등록한 뒤 기존 DOM을 검사하므로 등록 순서가 뒤바뀌어도 동작한다.

제약: parent 저장소 편집·실운영 요약 요청·유료 호출·배포 금지; 예산 90분, 확정 계약 보완 최대 2회.

확정 API v1: summary는 `{title_ko,background,key:string[],detail,implication,has_body:boolean}`이며 GET 상태 조회도 최대 10개씩 분할한다.
중복 링크는 유효한 달력 날짜를 포함하는 `/briefing/YYYY-MM-DD#kr|global|notice:부문:기사` 내부 경로만 허용하며 `cache:`·`fresh:` 식별자는 문구로만 표시한다.
검증: 신규 23개 및 전체 57개 Node 테스트 성공, 문법 검사 성공; 로컬 실제 화면에서 대기→완료·정적 보존·390px 화면 확인.
기존 실패: `node scripts/site-tools.mjs validate`는 수정하지 않은 루트 `index.html`의 theme-color·noscript 누락 2건을 보고한다.

미배포 호환: 404·405·501, HTML fallback, 미지원 status는 페이지 재열기 전까지 조용히 비활성화한다. 이후 POST·polling·오인 대기 표시를 제거하고 원문 목록과 이미 완료한 요약은 보존한다. 로컬 화면에서 404 뒤 10회 재클릭에도 최초 요청 1회·추가 요청 0회·요약 블록 0개를 확인했다.
