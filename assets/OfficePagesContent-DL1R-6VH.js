import{n as e,s as t,t as n}from"./jsx-runtime-C7M7YA1l.js";import{n as r,t as i}from"./index-Bt8DqUN-.js";import{c as a}from"./data-DZjWfQ8N.js";var o=t(e(),1),s=n(),c=i`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`,l=i`
  0%,100% { transform: translate(0,0); }
  50%     { transform: translate(14px,-18px); }
`,u=r.div`
  position: relative;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  box-sizing: border-box;
  @media (max-width: 768px) { padding: 16px; gap: 16px; }
`,d=r.div`
  position: absolute;
  width: 340px; height: 340px; border-radius: 50%;
  background: radial-gradient(circle, ${({$c:e})=>e}, transparent 70%);
  filter: blur(60px);
  opacity: ${({$dim:e})=>e?.12:.22};
  pointer-events: none;
  animation: ${l} 18s ease-in-out infinite;
  z-index: 0;
`,f=r.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 22px;
  padding: 26px 30px;
  background:
    linear-gradient(135deg, ${({$c:e})=>e}26 0%, rgba(255,255,255,0.03) 55%),
    rgba(10,14,26,0.5);
  border: 1px solid ${({$c:e})=>e}38;
  box-shadow: 0 24px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07);
  backdrop-filter: blur(10px);
  animation: ${c} 0.5s both;
`,p=r.div`
  display: flex; align-items: center; gap: 18px; position: relative; z-index: 2;
`,m=r.div`
  flex-shrink: 0;
  width: 60px; height: 60px; border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  font-size: 30px;
  background: linear-gradient(145deg, ${({$c:e})=>e}40, ${({$c:e})=>e}12);
  border: 1px solid ${({$c:e})=>e}55;
  box-shadow: 0 8px 24px ${({$c:e})=>e}40, inset 0 1px 0 rgba(255,255,255,0.15);
  @media (max-width: 480px) { width: 50px; height: 50px; font-size: 24px; }
`,h=r.h1`
  margin: 0; font-size: 23px; font-weight: 800; color: #F9FAFB; letter-spacing: -0.4px;
  @media (max-width: 768px) { font-size: 18px; }
`,g=r.p`
  margin: 5px 0 0; font-size: 13px; color: #9CA3AF; line-height: 1.5;
  @media (max-width: 768px) { font-size: 11px; }
`,_=r.div`
  position: absolute; right: -10px; bottom: -34px; font-size: 150px; opacity: 0.05;
  transform: rotate(-12deg); pointer-events: none; user-select: none; z-index: 1;
`,v=r.div`
  position: relative; z-index: 2;
  display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px;
`,y=r.div`
  flex: 1; min-width: 110px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 12px;
  padding: 12px 14px;
  backdrop-filter: blur(4px);
  .v { font-size: 22px; font-weight: 800; color: ${({$c:e})=>e}; line-height: 1.1; }
  .l { font-size: 10.5px; color: #8B95A5; margin-top: 4px; font-weight: 600; }
`,b=r.div`
  position: relative; z-index: 1; display: flex; flex-direction: column; gap: 12px;
`,x=r.h2`
  display: flex; align-items: center; gap: 9px;
  font-size: 13px; font-weight: 800; color: #D1D5DB;
  text-transform: uppercase; letter-spacing: 1.3px; margin: 0;
  &::before {
    content: ''; width: 4px; height: 15px; border-radius: 2px;
    background: ${({$c:e})=>e}; box-shadow: 0 0 8px ${({$c:e})=>e};
  }
`,S=r.div`
  display: grid; grid-template-columns: repeat(auto-fill, minmax(264px, 1fr)); gap: 14px;
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`,C=r.div`
  position: relative; overflow: hidden;
  background: linear-gradient(160deg, rgba(255,255,255,0.055), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 17px 18px;
  backdrop-filter: blur(6px);
  box-shadow: 0 10px 28px rgba(0,0,0,0.3);
  transition: transform 0.25s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.25s, border-color 0.25s;
  animation: ${c} 0.45s both;
  animation-delay: ${({$i:e})=>(e??0)*45}ms;
  &::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, ${({$c:e})=>e}, transparent 80%);
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 22px 48px rgba(0,0,0,0.5), 0 0 0 1px ${({$c:e})=>e}66;
    border-color: ${({$c:e})=>e}55;
  }
  .top { display: flex; align-items: center; gap: 8px; }
  .dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; box-shadow: 0 0 8px currentColor; }
  .name { font-size: 14px; font-weight: 700; color: #F9FAFB; }
  .id   { font-size: 10.5px; color: #6B7280; margin-top: 2px; font-family: monospace; }
  .role { font-size: 12px; color: #9CA3AF; margin-top: 11px; line-height: 1.6; }
`,w=r.div`
  position: relative; z-index: 1;
  background: linear-gradient(135deg, ${({$c:e})=>e}14, rgba(255,255,255,0.02));
  border: 1px solid ${({$c:e})=>e}33;
  border-radius: 16px;
  padding: 18px 20px;
  font-size: 13px; color: #B6C0CE; line-height: 1.85;
  backdrop-filter: blur(6px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.3);
  animation: ${c} 0.5s both;
  strong { color: #F9FAFB; }
`,T=r.div`
  display: flex; flex-wrap: wrap; gap: 9px;
`,E=r.span`
  background: linear-gradient(145deg, ${({$c:e})=>e}1f, rgba(255,255,255,0.03));
  border: 1px solid ${({$c:e})=>e}3a;
  border-radius: 20px;
  padding: 6px 13px;
  font-size: 11.5px; color: #D1D5DB; font-weight: 500;
  transition: transform 0.18s, box-shadow 0.18s;
  &:hover { transform: translateY(-2px); box-shadow: 0 6px 16px ${({$c:e})=>e}33; }
`,D=r.span`
  margin-left: auto;
  flex-shrink: 0;
  font-size: 10px;
  font-weight: 800;
  padding: 2px 8px;
  border-radius: 20px;
  color: ${({$c:e})=>e};
  border: 1px solid ${({$c:e})=>e}55;
  background: ${({$c:e})=>e}14;
  white-space: nowrap;
`,O={"사업개발 전문가":`bess-business-dev`,"설계 총괄 컨설턴트":`bess-agent-framework`,"시스템 엔지니어":`bess-system-engineer`,"E-BOP 전문가":`bess-ebop-engineer`,"C-BOP 전문가":`bess-cbop-engineer`,"배터리 전문가":`bess-battery-expert`,"PCS 전문가":`bess-pcs-expert`,"통신네트워크 전문가":`bess-network-engineer`,"규격·표준 전문가":`bess-standards-analyst`,재무분석가:`bess-financial-analysis`,계약전문가:`bess-contract-specialist`,법률전문가:`bess-legal-expert`,"공정관리 전문가":`bess-project-manager`,"구매·조달 전문가":`bess-procurement-expert`,"보안·HSE 전문가":`bess-security-expert`,"O&M 전문가":`bess-om-expert`};function k(){let[e,t]=(0,o.useState)(null);return(0,o.useEffect)(()=>{let e=!0;return a().then(n=>{e&&t(n)}),()=>{e=!1}},[]),e}function A({accent:e,icon:t,title:n,subtitle:r,stats:i,info:a,children:o}){return(0,s.jsxs)(u,{children:[(0,s.jsx)(d,{$c:e,style:{top:-90,right:-50}}),(0,s.jsx)(d,{$c:e,$dim:!0,style:{bottom:-110,left:-70}}),(0,s.jsxs)(f,{$c:e,children:[(0,s.jsxs)(p,{children:[(0,s.jsx)(m,{$c:e,children:t}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(h,{children:n}),(0,s.jsx)(g,{children:r})]})]}),(0,s.jsx)(v,{children:i.map(t=>(0,s.jsxs)(y,{$c:e,children:[(0,s.jsx)(`div`,{className:`v`,children:t.v}),(0,s.jsx)(`div`,{className:`l`,children:t.l})]},t.l))}),(0,s.jsx)(_,{children:t})]}),a&&(0,s.jsx)(w,{$c:e,children:a}),o]})}function j({accent:e,agents:t}){let n=k();return(0,s.jsx)(S,{children:t.map((t,r)=>{let i=O[t.name],a=n&&i?n.perAgent[i]:void 0;return(0,s.jsxs)(C,{$c:e,$i:r,children:[(0,s.jsxs)(`div`,{className:`top`,children:[(0,s.jsx)(`span`,{className:`dot`,style:{color:e,background:e}}),(0,s.jsx)(`span`,{className:`name`,children:t.name}),a&&(0,s.jsxs)(D,{$c:e,title:`최근 갱신 ${a.lastGrown}`,children:[`Lv`,a.level,` · `,a.count,`건`]})]}),t.id&&(0,s.jsx)(`div`,{className:`id`,children:t.id}),(0,s.jsx)(`div`,{className:`role`,children:t.role})]},t.id??t.name)})})}var M={CEO:`#3B82F6`,CTO:`#8B5CF6`,CFO:`#F59E0B`,COO:`#10B981`},N=[{id:`CEO-001`,name:`BESS Orchestrator`,role:`프로젝트 전체를 총괄합니다. 업무를 직접 수행하지 않고 분류, 위임, 통합, 승인하는 역할을 합니다. 8개 시장(KR/JP/US/AU/UK/EU/RO/PL) 프로젝트를 조율합니다.`},{id:`CEO-010`,name:`전략기획 전문가`,role:`시장 진입 전략 수립 및 포트폴리오 관리를 담당합니다. 글로벌 BESS 시장 동향 분석 및 기회 발굴을 수행합니다.`},{id:`CEO-011`,name:`사업개발 전문가`,role:`BESS EPC 사업의 초기 단계(개발, 입찰)를 지원합니다. 고객사와의 협상 및 계약 체결 전 전략을 수립합니다.`}],P=[`🇰🇷 KR(KPX)`,`🇯🇵 JP(HEPCO)`,`🇺🇸 US(CAISO/PJM/ERCOT)`,`🇦🇺 AU(AEMO)`,`🇬🇧 UK(NGESO)`,`🇪🇺 EU(ENTSO-E)`,`🇷🇴 RO(Transelectrica)`,`🇵🇱 PL(PSE)`],F=[{id:`CTO-100`,name:`설계 총괄 컨설턴트`,role:`BESS EPC 기술 아키텍처를 총괄 설계합니다. v6.1 프레임워크 유지 및 에이전트 설계 표준을 수호합니다.`},{id:`SYS-101`,name:`시스템 엔지니어`,role:`BESS 시스템 전체 아키텍처(MW/MWh, kV) 설계. EMS 사양 및 SLD(단선결선도) 작성을 담당합니다.`},{id:`PWR-102`,name:`E-BOP 전문가`,role:`전기 BOP(Balance of Plant) 설계. 변압기, 개폐기, 계통연계장치(PCC)를 담당합니다.`},{id:`CIV-103`,name:`C-BOP 전문가`,role:`토목·건축 BOP 설계. 컨테이너 기초, 도로, 방재 시설 등을 담당합니다.`},{id:`BAT-104`,name:`배터리 전문가`,role:`LFP/NMC 배터리 셀·모듈·랙 사양. SOH/RTE 계산 및 BMS 연동 설계를 수행합니다.`},{id:`PCS-105`,name:`PCS 전문가`,role:`PCS(전력변환장치) 사양 및 제어 파라미터 설계. IEEE 1547, IEC 62477 규격 적용을 담당합니다.`},{id:`COM-106`,name:`통신네트워크 전문가`,role:`IEC 61850(GOOSE/MMS), Modbus TCP, DNP3, OPC-UA 기반 통신 아키텍처를 설계합니다.`},{id:`STD-107`,name:`규격·표준 전문가`,role:`각국 규격(IEC, IEEE, KEC, JEAC 등) 교차 검증 및 준수 여부를 검토합니다.`}],I=[`IEC 62619`,`IEC 62477`,`IEEE 1547-2018`,`IEC 61850`,`UL 9540`,`NFPA 855`,`KEC 제241조`,`JEAC 9701`,`G99`,`AS 4777`],L=[{id:`CFO-300`,name:`재무분석가`,role:`15년 IRR/NPV 재무모델 작성. CAPEX/OPEX 추정 및 시장별 수익 시뮬레이션을 수행합니다.`},{id:`CFO-301`,name:`계약전문가`,role:`EPC 계약, O&M 계약, PPA 계약 등 BESS 사업 관련 계약서 작성 및 리스크 분석을 담당합니다.`},{id:`CFO-302`,name:`법률전문가`,role:`각국 에너지법, 인허가 규정, 사이버보안법(NIS2, NERC CIP) 등 법률 리스크를 검토합니다.`},{id:`CFO-303`,name:`견적·문서 전문가`,role:`BQ(물량산출서), 견적서, 기술 제안서를 작성합니다. Word/Excel/PDF 형식으로 산출물을 제공합니다.`}],R=[{name:`🇰🇷 KR(KPX)`,role:`FR 예비력, REC 5.0, CBP`},{name:`🇯🇵 JP(HEPCO)`,role:`調整力, 容量市場, 需給調整市場`},{name:`🇺🇸 US(CAISO)`,role:`Regulation, Capacity, Energy`},{name:`🇦🇺 AU(AEMO)`,role:`FCAS 6개, NEM 5분 정산`},{name:`🇬🇧 UK(NGESO)`,role:`DC/DR/DM, Capacity Market, BM`},{name:`🇪🇺 EU(ENTSO-E)`,role:`FCR, aFRR, mFRR, Balancing Market`}],z=[{id:`COO-400`,name:`공정관리 전문가`,role:`EPC 프로젝트 WBS 수립 및 전체 공정표(MS Project/Primavera) 관리를 담당합니다.`},{id:`COO-401`,name:`구매·조달 전문가`,role:`배터리, PCS, 변압기 등 주요 기자재 조달 계획 수립 및 공급업체 관리를 수행합니다.`},{id:`COO-402`,name:`보안·HSE 전문가`,role:`LOTO 절차, 비상정지 시스템, IEC 62443(사이버보안) 등 안전/보안 계획을 수립합니다.`},{id:`COO-403`,name:`시운전 전문가`,role:`FAT/SAT/FIT 시험 절차 수립, EMS 통합 시험, 계통연계 VRT 시험을 전담합니다.`},{id:`COO-404`,name:`O&M 전문가`,role:`BESS 운영·유지보수 계획(예방정비, 성능 모니터링) 수립 및 장기 운영 전략을 담당합니다.`}],B=[{name:`① 개발`,role:`법률·인허가 검토, 재무 타당성 분석`},{name:`② 입찰`,role:`견적서, BQ, 기술 제안서 작성`},{name:`③ 시공`,role:`조달, 공정관리, 안전관리`},{name:`④ 시운전`,role:`FAT/SAT/FIT, 계통연계 VRT 시험`},{name:`⑤ 운영`,role:`O&M 계획, 성능 모니터링, 수익 최적화`}];function V(){return(0,s.jsxs)(A,{accent:M.CEO,icon:`🎯`,title:`CEO Office — 전략 오케스트레이션`,subtitle:`프로젝트 총괄 지휘 및 82인 에이전트 업무 배분 허브`,stats:[{v:`82`,l:`총괄 에이전트`},{v:`8`,l:`담당 시장`},{v:`5`,l:`위임 단계`},{v:`3`,l:`직속 전문가`}],info:(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(`strong`,{children:`[핵심 원칙]`}),(0,s.jsx)(`br`,{}),`· 한 번에 질문 하나만 한다 · 단계를 건너뛰지 않는다`,(0,s.jsx)(`br`,{}),`· 수치는 계산 근거와 단위를 항상 포함한다 · 불확실 항목은 [요확인] 태그로 명시`,(0,s.jsx)(`br`,{}),(0,s.jsx)(`br`,{}),(0,s.jsx)(`strong`,{children:`[위임 체계]`}),` 0단계(업무 파악) → 1단계(작업 분해) → 2단계(조직 설계) → 3단계(설계서) → 4단계(리뷰)`]}),children:[(0,s.jsxs)(b,{children:[(0,s.jsx)(x,{$c:M.CEO,children:`직속 에이전트`}),(0,s.jsx)(j,{accent:M.CEO,agents:N})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(x,{$c:M.CEO,children:`담당 시장 (8)`}),(0,s.jsx)(T,{children:P.map(e=>(0,s.jsx)(E,{$c:M.CEO,children:e},e))})]})]})}function H(){return(0,s.jsxs)(A,{accent:M.CTO,icon:`🔩`,title:`CTO Office — 기술 설계 총괄`,subtitle:`BESS 시스템 엔지니어링 · 설계 · 규격 검토 전담`,stats:[{v:`8`,l:`설계 전문가`},{v:`10+`,l:`적용 규격`},{v:`5`,l:`설치 유형`},{v:`v6.1`,l:`프레임워크`}],info:(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(`strong`,{children:`[설계 검증 분야]`}),(0,s.jsx)(`br`,{}),`· 구조해석(FEM) · 열유동해석(CFD) · 계통해석(조류/단락)`,(0,s.jsx)(`br`,{}),`· 설치 유형: Type1(Standalone) / Type2(Solar+BESS) / Type3(Wind+BESS) / Type4(변전소) / Type5(Hybrid)`,(0,s.jsx)(`br`,{}),`· 핵심 공식: RTE = 방전에너지/충전에너지 × 100% · E_avail = (SOC − SOC_min) × E_nom × SOH`]}),children:[(0,s.jsxs)(b,{children:[(0,s.jsxs)(x,{$c:M.CTO,children:[`소속 에이전트 (`,F.length,`)`]}),(0,s.jsx)(j,{accent:M.CTO,agents:F})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(x,{$c:M.CTO,children:`적용 규격`}),(0,s.jsx)(T,{children:I.map(e=>(0,s.jsx)(E,{$c:M.CTO,children:e},e))})]})]})}function U(){return(0,s.jsxs)(A,{accent:M.CFO,icon:`💰`,title:`CFO Office — 재무 · 계약 · 법무`,subtitle:`BESS 사업 수익성 검토 · EPC 계약 · 국가별 법률 리스크 관리`,stats:[{v:`4`,l:`재무 전문가`},{v:`6`,l:`시장 서비스`},{v:`15년`,l:`IRR/NPV 모델`},{v:`3`,l:`계약 유형`}],children:[(0,s.jsxs)(b,{children:[(0,s.jsxs)(x,{$c:M.CFO,children:[`소속 에이전트 (`,L.length,`)`]}),(0,s.jsx)(j,{accent:M.CFO,agents:L})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(x,{$c:M.CFO,children:`시장별 그리드 서비스`}),(0,s.jsx)(j,{accent:M.CFO,agents:R})]})]})}function W(){return(0,s.jsxs)(A,{accent:M.COO,icon:`⚙️`,title:`COO Office — 운영 관리`,subtitle:`EPC 공정 · 조달 · 안전(HSE) · 시운전 · O&M 전담`,stats:[{v:`5`,l:`운영 전문가`},{v:`5`,l:`프로젝트 단계`},{v:`FAT/SAT`,l:`시운전 시험`},{v:`IEC 62443`,l:`사이버보안`}],children:[(0,s.jsxs)(b,{children:[(0,s.jsxs)(x,{$c:M.COO,children:[`소속 에이전트 (`,z.length,`)`]}),(0,s.jsx)(j,{accent:M.COO,agents:z})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(x,{$c:M.COO,children:`프로젝트 단계별 역할`}),(0,s.jsx)(j,{accent:M.COO,agents:B})]})]})}export{V as CeoOfficePage,U as CfoOfficePage,W as CooOfficePage,H as CtoOfficePage};