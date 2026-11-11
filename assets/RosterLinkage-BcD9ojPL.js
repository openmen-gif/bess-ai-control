import{n as e,s as t,t as n}from"./jsx-runtime-C7M7YA1l.js";import{n as r}from"./index-r0c_PQLT.js";import{a as i}from"./data-D1CRvrDm.js";var a=t(e(),1),o=n(),s=`BAT-001`,c=[{f:`key`,mean:`전문가 고유 이름(영문). 다른 파일이 이 값으로 전문가를 찾아요`,from:`문서 frontmatter name`},{f:`id`,mean:`본부·분야 코드 번호`,from:`frontmatter id`},{f:`name`,mean:`표시 이름(지금은 key와 같음)`,from:`frontmatter name`},{f:`dept`,mean:`소속 본부`,from:`frontmatter department`},{f:`division`,mean:`본부 약칭 — CTO · CFO · COO · SUP`,from:`dept에서 판정`},{f:`color`,mean:`본부 색(화면 카드·3D 지도)`,from:`division별 고정 색`},{f:`desc`,mean:`담당 분야 한 줄`,from:`frontmatter description`},{f:`keywords`,mean:`질문 → 전문가 매칭용 단어`,from:`이름 + desc를 쉼표·공백·/·· 로 나눔(2글자 이상)`},{f:`snippet`,mean:`역할 정의 문단`,from:`본문 「한 줄 정의」 셋째 문단`}],l=[{name:`이 대시보드`,use:`에이전트 카드 · 질문 매칭 · 3D 지도`,when:`페이지를 열 때 읽음`},{name:`llms.txt · llms-full.txt`,use:`AI 검색엔진이 읽는 조직 요약·전문가 정의`,when:`명부가 바뀌면 같이 재생성`},{name:`MCP /api/mcp`,use:`외부 AI 에이전트 도구 list_experts · ask_expert`,when:`요청 시 읽음(10분 캐시)`},{name:`AI 상담 프롬프트`,use:`채팅 상담의 전문가 정의`,when:`수동 배포 시 반영`},{name:`지식 수집기`,use:`매일 모은 지식을 전문가 분야로 배분`,when:`매일 07:30`}];function u(e){let t=e.match(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})/);return t?`${t[1]} ${t[2]} (KST)`:e}function d(e){return Array.isArray(e)?e.join(`, `):String(e??``)}function f(){let[e,t]=(0,a.useState)(null),[n,r]=(0,a.useState)(null),[f,A]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let e=!0;return i().then(n=>{e&&(r(n.length),t(n.find(e=>e.id===s)??n[0]??null))}).catch(()=>{}),fetch(`/agents.meta.json`,{cache:`no-cache`}).then(e=>e.ok?e.json():null).then(t=>{e&&t&&typeof t.updated==`string`&&A(t)}).catch(()=>{}),()=>{e=!1}},[]),(0,o.jsxs)(p,{children:[(0,o.jsx)(m,{children:`전문가 명부(agents.json) 연계 구조`}),(0,o.jsx)(g,{children:`전문가 정의는 원본 문서 한 곳에만 있어요. 매일 07:30에 그 문서로 명부를 다시 만들고, 아래 다섯 곳이 모두 같은 명부를 읽어요. 그래서 원본을 고치면 다음 날 아침에 다섯 곳이 함께 바뀌어요.`}),(0,o.jsxs)(_,{children:[`명부 `,n??f?.count??82,`건`,f&&(0,o.jsxs)(o.Fragment,{children:[` · 마지막 변경 `,u(f.updated)]}),` · `,(0,o.jsx)(`a`,{href:`/agents.json`,target:`_blank`,rel:`noopener noreferrer`,children:`agents.json 열기 ↗`})]}),(0,o.jsxs)(v,{"aria-label":`명부 연계 흐름`,children:[(0,o.jsxs)(y,{children:[(0,o.jsx)(b,{children:`원본`}),(0,o.jsx)(`b`,{children:`전문가 정의 문서 82개`}),(0,o.jsx)(`small`,{children:`00_Skill_MD/bess-*.md`})]}),(0,o.jsx)(x,{"aria-hidden":!0,children:`→`}),(0,o.jsxs)(y,{children:[(0,o.jsx)(b,{children:`매일 07:30`}),(0,o.jsx)(`b`,{children:`자동 재생성`}),(0,o.jsx)(`small`,{children:`80건 미만·빈 필드면 멈추고 기존 명부 유지 + 알림`})]}),(0,o.jsx)(x,{"aria-hidden":!0,children:`→`}),(0,o.jsxs)(y,{$hl:!0,children:[(0,o.jsx)(b,{children:`명부`}),(0,o.jsx)(`b`,{children:`agents.json`}),(0,o.jsx)(`small`,{children:`전문가 1명 = 필드 9개`})]})]}),(0,o.jsx)(S,{"aria-hidden":!0,children:`↓ 같은 명부를 읽는 곳 5`}),(0,o.jsx)(C,{children:l.map(e=>(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:e.name}),(0,o.jsx)(`span`,{children:e.use}),(0,o.jsx)(`small`,{children:e.when})]},e.name))}),(0,o.jsxs)(h,{children:[`필드 9개 — 실제 예시 `,e?`${e.id} ${e.key}`:s]}),(0,o.jsxs)(w,{role:`table`,children:[(0,o.jsxs)(T,{role:`row`,$head:!0,children:[(0,o.jsx)(`span`,{role:`columnheader`,children:`필드`}),(0,o.jsx)(`span`,{role:`columnheader`,children:`뜻 · 원본 위치`}),(0,o.jsx)(`span`,{role:`columnheader`,children:`실제 값`})]}),c.map(({f:t,mean:n,from:r})=>(0,o.jsxs)(T,{role:`row`,children:[(0,o.jsx)(`code`,{role:`cell`,children:t}),(0,o.jsxs)(`span`,{role:`cell`,children:[n,(0,o.jsx)(`small`,{children:r})]}),(0,o.jsxs)(E,{role:`cell`,title:e?d(e[t]):``,children:[t===`color`&&e&&(0,o.jsx)(D,{style:{background:e.color}}),e?d(e[t]):`불러오는 중…`]})]},t))]}),e&&(0,o.jsxs)(O,{children:[(0,o.jsx)(`summary`,{children:`JSON 원문으로 보기`}),(0,o.jsx)(`pre`,{children:JSON.stringify(e,null,2)})]}),(0,o.jsxs)(k,{children:[`AI 도구에서 이 명부를 쓰는 방법(MCP 연결·예시 응답)은 `,(0,o.jsx)(`a`,{href:`/ai/`,children:`AI 연동 안내`}),`에 정리돼 있어요.`]})]})}var p=r.section`
  margin: 20px 0 8px;
  word-break: keep-all; /* 한국어는 단어 단위로 줄바꿈("조/직" 끊김 방지) */
  a { color: #3B82F6; }
`,m=r.h2`font-size: 16px; font-weight: 700; color: #F9FAFB; margin: 0 0 8px;`,h=r.h3`font-size: 14px; font-weight: 700; color: #E5E7EB; margin: 22px 0 8px;`,g=r.p`color: #9CA3AF; line-height: 1.7; margin: 0 0 8px;`,_=r.p`color: #6B7280; font-size: 13px; margin: 0 0 14px;`,v=r.div`
  display: flex; align-items: stretch; gap: 8px;
  @media (max-width: 640px) { flex-direction: column; }
`,y=r.div`
  flex: 1; min-width: 0; padding: 10px 12px; border-radius: 10px;
  background: ${e=>e.$hl?`rgba(59,130,246,0.12)`:`rgba(255,255,255,0.04)`};
  border: 1px solid ${e=>e.$hl?`rgba(59,130,246,0.5)`:`rgba(255,255,255,0.1)`};
  display: flex; flex-direction: column; gap: 3px;
  b { color: #F9FAFB; font-size: 14px; }
  small { color: #9CA3AF; font-size: 12px; line-height: 1.5; overflow-wrap: anywhere; }
`,b=r.span`font-size: 11px; color: #60A5FA; font-weight: 600;`,x=r.span`
  align-self: center; color: #6B7280; font-size: 18px;
  @media (max-width: 640px) { transform: rotate(90deg); }
`,S=r.div`text-align: center; color: #6B7280; font-size: 12px; margin: 8px 0;`,C=r.ul`
  list-style: none; padding: 0; margin: 0;
  display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 8px;
  li {
    padding: 10px 12px; border-radius: 10px; background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1); display: flex; flex-direction: column; gap: 4px;
  }
  b { color: #F9FAFB; font-size: 13px; overflow-wrap: anywhere; }
  span { color: #D1D5DB; font-size: 12px; line-height: 1.5; }
  small { color: #6B7280; font-size: 11px; }
`,w=r.div`
  border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; overflow: hidden;
`,T=r.div`
  display: grid; grid-template-columns: 90px 1fr 1.2fr; gap: 10px; padding: 8px 12px;
  font-size: 13px; color: #D1D5DB; line-height: 1.5;
  background: ${e=>e.$head?`rgba(255,255,255,0.06)`:`transparent`};
  font-weight: ${e=>e.$head?600:400};
  & + & { border-top: 1px solid rgba(255,255,255,0.06); }
  code { color: #93C5FD; font-size: 12px; }
  small { display: block; color: #6B7280; font-size: 11px; }
  @media (max-width: 640px) {
    grid-template-columns: 1fr; gap: 2px;
    ${e=>e.$head?`display: none;`:``}
  }
`,E=r.span`
  color: #F3F4F6; min-width: 0; overflow-wrap: anywhere;
  display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
`,D=r.i`
  display: inline-block; width: 10px; height: 10px; border-radius: 3px; margin-right: 6px; vertical-align: middle;
`,O=r.details`
  margin-top: 10px; color: #9CA3AF; font-size: 12px;
  summary { cursor: pointer; }
  pre {
    margin: 8px 0 0; padding: 10px; border-radius: 8px; background: rgba(0,0,0,0.35);
    white-space: pre-wrap; overflow-wrap: anywhere; color: #D1D5DB; font-size: 11px; max-height: 280px; overflow-y: auto;
  }
`,k=r.p`color: #9CA3AF; font-size: 13px; line-height: 1.7; margin: 14px 0 0;`;export{f as default};