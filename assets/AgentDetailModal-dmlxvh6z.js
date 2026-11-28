import{n as e,s as t,t as n}from"./jsx-runtime-lc9lxckx.js";import{n as r,o as i,r as a,t as o}from"./index-kpgypcym.js";import{c as s,o as c,u as l}from"./data-go38ac3x.js";var u={CEO:{summary:`요구사항 분해 → 전문가 배분 → 본부 간 교차 통합 → 경영 의사결정 승인`,stages:[{step:1,shortLabel:`요구사항 파악`,title:`① 프로젝트 요구사항·제약 수집`,input:`고객 RFP, 목표 시장(8개국), 용량(MW/MWh), 목표 납기·예산`,action:`과업 범위를 정의하고 불확실 항목([요확인])과 핵심 의사결정 질문을 식별합니다.`,output:`과업 정의서(Scope Brief) 및 핵심 질의 목록`,checkpoints:[`목표 시장·계통 조건 명시 여부`,`수치·단위 누락 항목 [요확인] 태깅`],standards:[`v6.1 오케스트레이션 원칙`]},{step:2,shortLabel:`작업 분해·배분`,title:`② 작업 분해(WBS) 및 전문가 매칭`,input:`과업 정의서, 82인 전문가 역량 매트릭스`,action:`기술(CTO)·재무(CFO)·운영(COO) 본부별 담당 에이전트를 선정하고 순서를 배정합니다.`,output:`에이전트 위임 매트릭스(RACI) 및 실행 순서도`,checkpoints:[`중복/누락 도메인 없는지 확인`,`선후행 의존성(설계→견적→공정) 정렬`]},{step:3,shortLabel:`본부 교차검토`,title:`③ 기술·재무·운영 교차 정합성 검토`,input:`각 본부 초안(설계 사양, CAPEX/IRR, 공정·인허가 리스크)`,action:`기술 사양과 수익성·납기 간 충돌을 조율하고 트레이드오프 대안을 비교합니다.`,output:`본부 간 충돌 해소안 및 리스크 매트릭스`,checkpoints:[`기술 스펙과 견적 물량(BOQ) 일치 여부`,`인허가·납기 크리티컬 패스 반영`]},{step:4,shortLabel:`통합 산출물`,title:`④ 경영진 보고서·통합 제안서 편성`,input:`검증 완료된 본부별 산출물 및 수치 근거`,action:`의사결정 핵심 결론을 두괄식으로 요약하고 근거·가정·리스크를 구조화합니다.`,output:`임원 보고서(Executive Summary) 및 통합 제안 패키지`,checkpoints:[`모든 수치에 단위·계산 근거 포함`,`대안별 장단점·권고안 명시`]},{step:5,shortLabel:`최종 승인`,title:`⑤ 최종 리뷰·Go/No-Go 승인`,input:`통합 제안 패키지 및 잔여 리스크 목록`,action:`수용기준 충족 여부를 판정하고 후속 실행 단계로의 게이트 통과를 승인합니다.`,output:`최종 승인 결정서 및 차기 마일스톤 지시`,checkpoints:[`필수 게이트 조건 100% 충족`,`지식 원장(Lessons Learned) 반영`]}]},CTO:{summary:`설계 조건 입력 → 공학 계산·규격 검증 → 인접 공종 협업 → 도면·사양서 생성 → 기술 리뷰`,stages:[{step:1,shortLabel:`설계 입력`,title:`① 설계 조건 및 계통·환경 파라미터 입력`,input:`설비 용량(MW/MWh), 계통 전압(kV), 부지 환경(온도·내진·염해), 설치 유형(Type 1~5)`,action:`해당 공종의 경계 조건과 입력 파라미터의 정합성·단위를 점검합니다.`,output:`설계 기준서(Design Basis) 입력표`,checkpoints:[`정격 출력·방전시간(C-rate) 확인`,`부지 극한 온도 및 계통 코드 확보`],standards:[`IEC 62933`,`BESS EPC v6.1`]},{step:2,shortLabel:`해석·규격검증`,title:`② 공학 계산·시뮬레이션 및 국제 규격 검증`,input:`설계 기준서, 벤더 데이터시트, 국가별 적용 규격`,action:`정량 계산(용량·손실·단락·열/구조 등)을 수행하고 필수 규격 준수 여부를 검증합니다.`,output:`공학 계산서(Calculation Sheet) 및 규격 적합성 체크표`,checkpoints:[`계산 근거·단위·안전율 명시`,`IEC/IEEE/UL/국가코드 충돌 여부 확인`],standards:[`IEC 62619`,`IEC 62477`,`IEEE 1547`]},{step:3,shortLabel:`인접공종 협업`,title:`③ 인접 기술 공종 간 인터페이스 교차검토`,input:`공학 계산서, SLD/배치도 초안, 협업 전문가 피드백`,action:`배터리·PCS·E-BOP·C-BOP·소방·통신 간 경계 조건(전압·치수·이격·신호)을 맞춥니다.`,output:`인터페이스 정합성 협의록(ICD)`,checkpoints:[`단선결선도(SLD)와 보호협조 정합성`,`이격거리·방재·배관 간섭 해소`]},{step:4,shortLabel:`산출물 생성`,title:`④ 기술 사양서·도면·물량(BOQ) 산출`,input:`검증 완료된 설계안 및 인터페이스 확정본`,action:`발주·시공에 바로 쓸 수 있는 사양서(Spec), 도면 기준, 물량 목록을 작성합니다.`,output:`기술 사양서(Technical Spec), SLD/배치 초안, 공종별 BOQ`,checkpoints:[`벤더 중립성 및 입찰 명확성 확보`,`불확실 가정 [요확인] 표기`]},{step:5,shortLabel:`기술 리뷰`,title:`⑤ CTO 총괄 리뷰 및 설계 기준 승인`,input:`기술 사양서 패키지 및 검증 체크리스트`,action:`설계 총괄(CTO-100) 및 규격 전문가 교차 리뷰 후 최종 설계본을 확정합니다.`,output:`승인 설계 패키지(IFC/IFB 기준) 및 지식 베이스 등록`,checkpoints:[`독립 체커 검증 통과`,`견적(CFO)·시공(COO) 이관 준비 완료`]}]},CFO:{summary:`사업·원가 입력 → 재무/세무/계약 분석 → 기술·운영 정합 검토 → 모델/문서 산출 → 리스크 승인`,stages:[{step:1,shortLabel:`사업·원가 입력`,title:`① 사업 구조·CAPEX/OPEX·시장 수익 가정 수집`,input:`기술 BOQ, 기자재 견적, 시장별 정산 규칙, 자금조달·세제 조건`,action:`비용 항목·세율·환율·계약 조건의 출처와 기준일을 검증합니다.`,output:`재무·계약 기초 가정표(Assumptions Book)`,checkpoints:[`통화·환율·기준 시점 명시`,`CAPEX/OPEX 누락 공종 점검`]},{step:2,shortLabel:`모델·리스크 분석`,title:`② 수익성 시뮬레이션 및 계약·법률·세무 정밀 검토`,input:`기초 가정표, 국가별 세법·관세·계약 표준(FIDIC 등)`,action:`IRR/NPV·민감도 분석, 계약 책임 한도(LD/면책), 세제·관세 최적 구조를 산출합니다.`,output:`재무 모델(15년 현금흐름) / 계약·법률 리스크 검토서`,checkpoints:[`배터리 열화·Augmentation 비용 반영`,`치명적 법적·세무 독소조항 식별`],standards:[`FIDIC Silver/Yellow`,`IFRS`,`IRA/CBAM`]},{step:3,shortLabel:`본부 교차검토`,title:`③ 기술(CTO)·운영(COO) 조건과 상업 조건 정합화`,input:`성능 보증치(RTE·가용률), 납기 일정, O&M 범위`,action:`성능보증(PG)·지체상금(LD)·예비비(Contingency)가 기술·공정과 모순되지 않게 조율합니다.`,output:`상업·기술 조건 정합성 대조표`,checkpoints:[`보증 RTE/용량과 계약 LD 연동 확인`,`Incoterms·통관·보험 책임 경계 명확화`]},{step:4,shortLabel:`문서·견적 산출`,title:`④ 투자심의서·견적서·계약 협상안 작성`,input:`확정 재무 모델 및 리스크 대응 조항`,action:`제안 견적서(BOQ/Pricing), 계약 수정안(Redline), 투자심의(IC) 패키지를 작성합니다.`,output:`상업 제안서, 견적 산출서, 계약 리스크 대응표`,checkpoints:[`시나리오별(Base/Downside) 수익성 제시`,`협상 양보 한계선(Walk-away) 명시`]},{step:5,shortLabel:`심의·승인`,title:`⑤ CFO·경영진 심의 및 입찰/계약 승인`,input:`상업 패키지 및 감사/내부통제 체크리스트`,action:`최종 수익성·리스크 수용 한도를 판정하고 입찰 제출 또는 계약 체결을 승인합니다.`,output:`최종 상업 승인서 및 실행 예산 기준선(Baseline)`,checkpoints:[`목표 IRR/DSCR 허들 충족`,`법무·세무 최종 사인오프 완료`]}]},COO:{summary:`실행 범위 입력 → 공정/안전/시험 계획 → 현장·공급망 조율 → 절차서·일정 산출 → 게이트 승인`,stages:[{step:1,shortLabel:`실행 범위 입력`,title:`① 설계 도면·계약 마일스톤·현장 조건 접수`,input:`확정 설계서(CTO), 계약 납기·보증 조건(CFO), 현장 부지·인허가 현황`,action:`시공·조달·인허가·시운전·O&M의 선행 조건과 제약사항을 파악합니다.`,output:`프로젝트 실행 기준서(PEP 입력 체크표)`,checkpoints:[`장납기 기자재(변압기·PCS·배터리) 리드타임 확인`,`인허가·계통연계 일정 확보`]},{step:2,shortLabel:`실행·안전 계획`,title:`② 공정(WBS)·품질(ITP)·안전(HSE)·시험 절차 수립`,input:`실행 기준서, 국가별 안전·사이버보안·계통시험 규정`,action:`크리티컬 패스 공정표, Hold Point, LOTO/HSE 절차, FAT/SAT 시험 항목을 설계합니다.`,output:`마스터 공정표, ITP/HSE 계획서, FAT/SAT 절차서`,checkpoints:[`IEC 62443·LOTO·소방 안전 기준 반영`,`계통 VRT/FFR 시험 조건 포함`],standards:[`IEC 62443`,`NFPA 855`,`OSHA`]},{step:3,shortLabel:`현장·벤더 협업`,title:`③ 벤더·시공사·계통운영자(TSO/DSO) 교차 조율`,input:`공정표, 납품 스케줄, 계통연계 시험 일정`,action:`기자재 선적·현장 반입·설치·계통 연계 간 병목과 리스크를 선제 해소합니다.`,output:`인터페이스·리스크 관리 대장(Risk Register)`,checkpoints:[`지연 시 만회 대책(Recovery Plan) 확보`,`현장 안전·품질 부적합(NCR) 제로화`]},{step:4,shortLabel:`실행 산출물`,title:`④ 시운전 리포트·운영 매뉴얼·성과 대시보드 작성`,input:`현장 점검 기록, FAT/SAT/FIT 시험 결과, O&M KPI`,action:`시험 성적서, Punch List 해소 기록, 예방정비(PM) 매뉴얼을 완비합니다.`,output:`시운전 완료 보고서(PAC), O&M SOP, KPI 리포트`,checkpoints:[`성능시험(RTE·가용률) 보증치 달성 확인`,`운영팀 교육·예비품 인계 완료`]},{step:5,shortLabel:`준공·이관 승인`,title:`⑤ 준공(PAC/FAC) 판정 및 상업운전 이관`,input:`준공 도서 패키지 및 발주처 검수 결과`,action:`최종 검수 통과 후 상업운전(COD) 및 장기 O&M 체계로 공식 이관합니다.`,output:`COD/PAC 승인서 및 운영 이관 완료 보고`,checkpoints:[`잔여 Punch List 종결 여부`,`지식 베이스(운영 교훈) 업데이트`]}]},SUP:{summary:`산출물 요청 접수 → 템플릿·양식 검증 → 본부 원고 통합 → 문서 빌드 → 최종 배포 승인`,stages:[{step:1,shortLabel:`원고·형식 접수`,title:`① 산출물 요구 형식 및 원본 데이터 접수`,input:`각 본부 초안, 대상 독자, 출력 형식(Word/Excel/PDF/PPT)`,action:`문서 목적·인쇄 규격(A4/A3)·필수 목차와 데이터 출처를 확인합니다.`,output:`문서 제작 명세서`,checkpoints:[`파일 형식 및 용지 규격 확인`,`수치·도표 최신본 여부 점검`]},{step:2,shortLabel:`표준화·검증`,title:`② 전사 문서 표준·용어·단위 일관성 검증`,input:`문서 제작 명세서, 전사 스타일 가이드`,action:`용어 통일, 단위 표기, 표/차트 가독성과 출처 인용 형식을 정합화합니다.`,output:`표준화 검수 체크리스트`,checkpoints:[`모호 표현 제거 및 수치·단위 통일`,`페이지 넘김·레이아웃 깨짐 방지`]},{step:3,shortLabel:`본부 교차확인`,title:`③ 작성 본부 및 검토자 내용 확인`,input:`조판 초안 및 수정 질의 목록`,action:`원 작성 전문가와 도표·각주·결론 문구의 정확성을 교차 확인합니다.`,output:`검토 반영본(Final Draft)`,checkpoints:[`핵심 수치 원문 대조 완료`,`기밀/공개 범위 표시 확인`]},{step:4,shortLabel:`파일 생성`,title:`④ 최종 배포용 파일 자동 생성 및 패키징`,input:`검토 반영본 및 첨부 데이터`,action:`인쇄·전자 제출용 최종 파일(DOCX/XLSX/PDF)을 생성하고 파일명을 규격화합니다.`,output:`최종 배포 문서 패키지`,checkpoints:[`폰트·차트 렌더링 깨짐 검증`,`버전·날짜 메타데이터 기입`]},{step:5,shortLabel:`승인·아카이빙`,title:`⑤ 최종 검수 및 문서 저장소 동기화`,input:`최종 배포 문서 패키지`,action:`요청자에게 전달하고 프로젝트 산출물 저장소에 아카이빙합니다.`,output:`배포 완료 통지 및 아카이브 링크`,checkpoints:[`다운로드·열람 정상 확인`,`이력 관리 테이블 등록`]}]}},d={"bess-orchestrator":{summary:`82인 전문가 조직 총괄 · 0~4단계 위임 체계로 BESS EPC 과업 분해·통합·최종 승인`,stages:[{step:1,shortLabel:`0단계 파악`,title:`① 0단계 · 업무 파악 및 핵심 질의 정리`,input:`사용자 지시, 대상 시장(KR/JP/US/AU/UK/EU/RO/PL), 프로젝트 단계`,action:`목표·제약·누락 조건을 파악하며 한 번에 하나의 핵심 질문으로 모호성을 제거합니다.`,output:`과업 범위서(Scope) 및 [요확인] 항목 목록`,checkpoints:[`단계 건너뛰기 금지 원칙 준수`,`대상 국가 계통/시장 조건 확정`],standards:[`v6.1 5단계 위임 체계`]},{step:2,shortLabel:`1단계 분해`,title:`② 1단계 · 작업 분해 및 82인 전문가 매칭`,input:`확정 과업 범위서, 82인 도메인 키워드·스킬 인덱스`,action:`복합 질의를 기술(CTO)·재무(CFO)·운영(COO) 세부 과업으로 분해해 적임자를 배정합니다.`,output:`전문가 스웜 편성표 및 협업 우선순위`,checkpoints:[`직접 수행 금지(적임 전문가 위임)`,`교차 검증 체커(Maker≠Checker) 지정`]},{step:3,shortLabel:`2단계 조직`,title:`③ 2단계 · 본부 간 협업 스웜 조율`,input:`각 전문가 초안(설계·원가·인허가·공정)`,action:`기술 스펙·CAPEX·납기·규제 간 상충 지점을 식별하고 교차 검토를 지휘합니다.`,output:`충돌 해소안 및 통합 리스크 테이블`,checkpoints:[`설계 용량(MW/MWh)과 견적/재무 가정 일치`,`규격·인허가 블로커 선제 해소`]},{step:4,shortLabel:`3단계 설계서`,title:`④ 3단계 · 통합 설계·제안 패키지 편성`,input:`검증 완료된 본부별 결과물과 정량 근거`,action:`결론·수치 근거·단위·리스크·대안을 일관된 형식으로 통합 보고서화합니다.`,output:`통합 BESS EPC 의사결정 리포트`,checkpoints:[`모든 수치에 계산 근거·단위 포함`,`미확정 항목 [요확인] 명시`]},{step:5,shortLabel:`4단계 승인`,title:`⑤ 4단계 · 최종 리뷰·승인 및 지식 환류`,input:`통합 리포트 및 독립 체커 검증 결과`,action:`수용기준 충족 여부를 최종 승인하고 확정 교훈을 지식 원장에 기록합니다.`,output:`최종 승인 결정서 및 지식 원장 업데이트`,checkpoints:[`PASS/NEEDS_WORK 독립 판정 완료`,`후속 액션 및 담당자 명시`]}]},"bess-agent-framework":{summary:`CTO 총괄 · BESS EPC 기술 아키텍처 기준 수호 및 v6.1 설계 프레임워크 검증`,stages:[{step:1,shortLabel:`기술 기준 입력`,title:`① 설치 유형(Type 1~5) 및 기술 요구사항 접수`,input:`프로젝트 용량(MW/MWh), 설치 유형(Standalone/PV+BESS/변전소 등), 목표 시장`,action:`기술 아키텍처 기준선과 필수 해석 분야(FEM/CFD/계통해석)를 지정합니다.`,output:`기술 아키텍처 기준서(Architecture Baseline)`,checkpoints:[`Type 1~5 설치 유형 확정`,`적용 규격 세트(IEC/IEEE/국가코드) 선정`],standards:[`BESS Framework v6.1`,`IEC 62933`]},{step:2,shortLabel:`아키텍처 검증`,title:`② 핵심 물리 공식·성능 지표 및 v6.1 정합성 검증`,input:`배터리·PCS·변압기·EMS 초안 사양`,action:`RTE·가용에너지(E_avail)·열화율 및 시스템 손실 체인을 교차 계산해 검증합니다.`,output:`시스템 성능 밸런스 시트 및 규격 적합성 리포트`,checkpoints:[`RTE = 방전에너지/충전에너지 × 100% 검증`,`E_avail = (SOC − SOC_min) × E_nom × SOH 확인`],standards:[`RTE`,`E_avail`,`IEEE 1547-2018`]},{step:3,shortLabel:`공종 교차검토`,title:`③ 8대 설계 공종 간 인터페이스 통합 검토`,input:`SYS/BAT/PCS/E-BOP/C-BOP/소방/통신 공종 초안`,action:`SLD·배치도·접지·방재·통신 프로토콜 간 불일치를 조정합니다.`,output:`공종 간 기술 인터페이스 확정서(Technical ICD)`,checkpoints:[`DC/AC 전압 창(Voltage Window) 정합성`,`NFPA 855/UL 9540A 이격·방재 반영`]},{step:4,shortLabel:`표준 설계서`,title:`④ EPC 통합 기술 설계서 및 검증 체크리스트 생성`,input:`확정 ICD 및 공종별 계산서`,action:`입찰·상세설계 기준이 되는 통합 기술 사양서와 설계 리뷰 기준을 편성합니다.`,output:`통합 EPC 기술 설계 패키지(Basic Design)`,checkpoints:[`해석 결과(FEM/CFD/단락) 근거 링크 포함`,`BOQ 수량과 도면 일치`]},{step:5,shortLabel:`CTO 승인`,title:`⑤ 기술 게이트 최종 승인 및 일일 기술 브리핑 반영`,input:`Basic Design 패키지 및 규격 전문가 검수 의견`,action:`설계 기준 충족을 최종 승인하고 신규 기술 동향을 v6.1 기준에 환류합니다.`,output:`CTO 설계 승인서 및 프레임워크 개정 이력`,checkpoints:[`규격·안전 치명 결함 0건`,`CFO 견적·COO 공정 팀 공식 이관`]}]},"bess-system-engineer":{summary:`BESS 시스템 통합(MW/MWh·kV) · EMS/BMS/PCS 아키텍처 및 SLD(단선결선도) 설계`,stages:[{step:1,shortLabel:`시스템 요구`,title:`① 용량(MW/MWh)·방전시간·계통연계 조건 정의`,input:`목표 출력(MW), 에너지(MWh), 연계 전압(kV), 운전 모드(FR/피크저감/블랙스타트)`,action:`BOL/EOL 기준 용량 마진, 보조전원(Aux) 부하, 운전 시나리오를 정의합니다.`,output:`시스템 요구사항 명세서(SyRS)`,checkpoints:[`BOL vs EOL 가용 에너지 보증 시점 확인`,`AC/DC 커플링 방식 확정`],standards:[`IEC 62933-2-1`,`IEEE 2030.2`]},{step:2,shortLabel:`SLD·아키텍처`,title:`② 전기 단선결선도(SLD) 및 EMS/SCADA 계층 설계`,input:`SyRS, 배터리 랙/컨테이너 구성, PCS 정격, 변압기 권선비`,action:`랙→PCS→MV 변압기→POI까지 주회로 SLD와 EMS/BMS/SCADA 제어 토폴로지를 설계합니다.`,output:`마스터 SLD 초안 및 제어·통신 아키텍처 도면`,checkpoints:[`DC 전압 범위와 PCS MPPT/동작창 정합`,`IEC 61850 / Modbus / DNP3 응답 지연 검증`],standards:[`IEC 61850`,`DNP3`,`Modbus TCP`]},{step:3,shortLabel:`하위공종 정합`,title:`③ 배터리·PCS·E-BOP·통신 전문가 교차 정합성 검토`,input:`마스터 SLD, 제어 신호 목록(I/O List), 보호협조 기준`,action:`비상정지(E-Stop), 화재 연동 트립, SOC 밸런싱, 계통 지령(AGC) 인터페이스를 검증합니다.`,output:`시스템 인터페이스 정의서(ICD) 및 I/O 매트릭스`,checkpoints:[`화재 감지→BMS/PCS/차단기 트립 시퀀스`,`보조전원 UPS 백업 시간 산정`]},{step:4,shortLabel:`통합 사양서`,title:`④ EMS 기능 사양서(FDS) 및 시스템 통합 도서 작성`,input:`확정 SLD, ICD, 운전 시퀀스 다이어그램`,action:`EMS 제어 로직(FDS), 알람 등급, SCADA 화면·데이터 로깅 사양을 문서화합니다.`,output:`EMS FDS, 확정 SLD, 시스템 통합 사양서`,checkpoints:[`충·방전 램프레이트 및 보호 인터록 명시`,`사이버보안(IEC 62443) 망분리 반영`]},{step:5,shortLabel:`통합 검증`,title:`⑤ CTO 리뷰 및 FAT/SAT/FIT 시험 기준 이관`,input:`EMS FDS 및 시스템 통합 사양서`,action:`시운전(COM-002/100) 팀과 통합 시험 시나리오를 확정하고 설계 승인을 받습니다.`,output:`승인 시스템 설계 패키지 및 FIT 시험 연계표`,checkpoints:[`모든 운전 모드 시나리오 테스트 항목 매핑`,`설계 변경 이력(Rev) 확정`]}]},"bess-battery-expert":{summary:`LFP/NMC 셀·모듈·랙 사양 선정 · SOH/열화·열폭주(UL 9540A) 및 BMS 연동 설계`,stages:[{step:1,shortLabel:`배터리 조건`,title:`① 사이클 프로파일·수명·환경 조건 입력`,input:`목표 에너지(MWh), 일일 사이클 수, 보증 수명(10~20년), 설치 지역 기후`,action:`LFP/NMC 케미스트리 적합성과 C-rate(0.25C/0.5C/1C) 운전 조건을 정의합니다.`,output:`배터리 선정 기준서`,checkpoints:[`연간 처리량(Annual Throughput) 확인`,`BOL 과설계(Oversizing) vs Augmentation 전략`],standards:[`IEC 62619`,`UL 1973`,`UL 9540A`]},{step:2,shortLabel:`용량·열화해석`,title:`② 셀·랙 사이징, SOH 열화 예측 및 RTE 계산`,input:`벤더 열화 곡선, 보조전력(액냉/공냉 HVAC), DC 손실`,action:`연차별 SOH·가용용량(E_avail)·왕복효율(RTE)과 Augmentation 시점을 정량 산출합니다.`,output:`연차별 용량·열화 시뮬레이션 및 벤더 기술 비교표`,checkpoints:[`SOC 운전창(예: 5~95%) 반영`,`온도 편차(ΔT ≤ 3~5℃) 냉각 성능 확인`],standards:[`SOH/RTE 모델`,`Cell Balancing`]},{step:3,shortLabel:`안전·PCS 협업`,title:`③ PCS·소방(FIR)·CFD 전문가 교차 안전 검토`,input:`UL 9540A 시험 성적서, DC 전압창, 방폭·가스배출 데이터`,action:`PCS DC 입력 범위 매칭, 열폭주 전이 방지(Propagation), 소화·환기 연동을 검증합니다.`,output:`배터리-PCS-소방 인터페이스 합의서`,checkpoints:[`최저/최고 온도 시 DC 개방전압(OCV) 안전여유`,`열폭주 가스(H2/CO) 감지·배기 기준 충족`]},{step:4,shortLabel:`사양·RFQ 작성`,title:`④ 배터리 시스템 기술 사양서 및 보증 조건서 작성`,input:`확정 사이징, 열화 보증 조건, BMS 통신 프로토콜`,action:`입찰용 기술 사양서, 성능보증(Capacity/RTE Warranty) 조항, FAT 검사 항목을 작성합니다.`,output:`배터리 기술 사양서(RFQ Spec) 및 보증 매트릭스`,checkpoints:[`단락전류(DC Fault Current) 데이터 명시`,`UN 38.3 / IMDG 운송 인증 요건 포함`]},{step:5,shortLabel:`벤더 평가·승인`,title:`⑤ 벤더 기술평가(TBE) 및 최종 선정 승인`,input:`벤더 제안서, UL 9540A/IEC 62619 인증서, 보증서`,action:`기술 점수·열화 보증·안전 인증을 종합 판정해 최종 배터리 패키지를 승인합니다.`,output:`TBE 평가서 및 선정 승인 리포트`,checkpoints:[`인증서 유효성 및 제3자 시험기관 확인`,`조달(PRO-001)·재무(FIN-001) 전달`]}]},"bess-pcs-expert":{summary:`PCS(전력변환장치) 토폴로지·IGBT/SiC·Grid-Forming/VRT 제어 파라미터 및 규격 설계`,stages:[{step:1,shortLabel:`정격·계통 입력`,title:`① 출력 정격(MW/MVA)·DC 전압창·그리드코드 입력`,input:`배터리 DC 전압 범위, 역률(PF) 범위, 국가별 그리드코드(IEEE 1547/G99/RfG)`,action:`중앙형 vs 스트링형 PCS 토폴로지와 Grid-Following/Grid-Forming 요구를 정의합니다.`,output:`PCS 정격 및 계통 요구조건표`,checkpoints:[`유효/무효전력 P-Q 운전 곡선 확인`,`과부하 내량 및 고도/온도 디레이팅(Derating)`],standards:[`IEC 62477-1`,`IEEE 1547`,`UL 1741 SA/SB`]},{step:2,shortLabel:`제어·고조파 검증`,title:`② 스위칭/LCL 필터·VRT·고조파(THD) 정밀 검증`,input:`IGBT/SiC 손실 모델, 계통 단락비(SCR), 고조파 제한치`,action:`LVRT/HVRT 응답, 주파수-유효전력(P-f) 드룹, 전압-무효전력(Q-V) 제어 및 THD를 검증합니다.`,output:`PCS 성능·효율·고조파 계산서`,checkpoints:[`IEEE 519 고조파 기준 충족 여부`,`저 SCR 계통 안정도 및 동특성 모델 확보`],standards:[`IEEE 519`,`LVRT/HVRT`,`Grid-Forming`]},{step:3,shortLabel:`계통·EMC 협업`,title:`③ 계통해석(PWR)·배터리(BAT)·EMC 전문가 교차검토`,input:`PSS/E·PSCAD 동특성 모델, DC 단락 전류, 노이즈 스펙`,action:`계통 모델 적합성, 변압기 권선 결선(Dyn/Ynd), 스위칭 노이즈 필터를 교차 점검합니다.`,output:`PCS-계통-배터리 정합성 검증서`,checkpoints:[`TSO/DSO 제출용 동특성 모델(DLL) 검증`,`DC 측 퓨즈·차단기 협조 확인`]},{step:4,shortLabel:`PCS 사양서`,title:`④ PCS 기술 사양서 및 제어 파라미터 시트 작성`,input:`검증 완료된 정격·제어·통신·냉각 사양`,action:`입찰 사양서, 제어 설정값 표, IP 등급·냉각·소음 기준 및 FAT 시험 항목을 작성합니다.`,output:`PCS 기술 사양서(RFQ) 및 제어 파라미터 시트`,checkpoints:[`IEC 61850/Modbus 통신 포인트 정의`,`예비품(IGBT 모듈·팬·보드) 목록 포함`]},{step:5,shortLabel:`시험·승인`,title:`⑤ TBE 평가 및 계통연계(VRT) 시험 기준 승인`,input:`벤더 제안서, 형식시험 성적서(Type Test)`,action:`제안 PCS의 규격 인증과 현장 VRT 시험 적합성을 최종 승인합니다.`,output:`PCS 선정 승인서 및 시운전 시험 연계안`,checkpoints:[`공인 형식시험 성적서 완비`,`시운전(COM-003) 계통시험 계획 연계`]}]},"bess-ebop-engineer":{summary:`전기 BOP(변압기·수배전반·케이블·접지·보호협조·Arc Flash) 통합 전기 설계`,stages:[{step:1,shortLabel:`전기 조건 입력`,title:`① 계통 연계점(POI)·전압 계급·단락 용량 입력`,input:`POI 전압(kV), 계통 최대/최소 단락전류(kA), SLD 초안, 부지 배치도`,action:`MV/HV 수배전 계통 구성과 보조전원(LV) 부하 리스트를 산정합니다.`,output:`전기 설계 기준서 및 부하 집계표`,checkpoints:[`계통 중성점 접지 방식 확인`,`보조전원 이중화(UPS/비상전원) 요건`],standards:[`IEC 62271`,`IEC 60076`,`KEC`]},{step:2,shortLabel:`단락·보호협조`,title:`② 케이블 사이징·단락전류·보호협조·Arc Flash 계산`,input:`설비 임피던스, 케이블 루트 길이, 차단기·계전기 특성곡선`,action:`전압강하·허용전류(IEC 60287), 보호계전기 TCC 정정, Arc Flash 사고에너지를 계산합니다.`,output:`전기 계산서(단락/보호협조/케이블/Arc Flash)`,checkpoints:[`차단기 정격 차단용량 안전여유 ≥ 15%`,`계전기 선택차단(Selectivity) 확보`],standards:[`IEC 60909`,`IEEE 1584`,`IEC 60287`]},{step:3,shortLabel:`변전·접지 협업`,title:`③ 변압기·차단기·접지·C-BOP 공종 교차검토`,input:`전기 계산서, 트렌치/덕트 경로, 접지망(IEEE 80) 설계`,action:`케이블 트레이 간섭, 변압기 오일피트, 접지저항·보폭/접촉전압 안전을 조율합니다.`,output:`E-BOP 인터페이스 정합성 도면`,checkpoints:[`Step/Touch Voltage 허용치 이내`,`방폭/방화 구획 관통부 실링 반영`]},{step:4,shortLabel:`도면·BOQ 산출`,title:`④ 상세 SLD·케이블 스케줄·E-BOP 물량산출서 작성`,input:`확정 계산서 및 배치도`,action:`수배전반 사양서, 케이블 리스트, 보호계전기 정정표 및 E-BOP BOQ를 작성합니다.`,output:`상세 SLD, 케이블 스케줄, E-BOP 사양서·BOQ`,checkpoints:[`예비 코어 및 시공 여유율 반영`,`견적(SCM-001)·조달(PRO-001) 정합`]},{step:5,shortLabel:`전기 리뷰 승인`,title:`⑤ 전기 안전 검토 및 시공/시운전 기준 승인`,input:`E-BOP 도서 패키지 및 보호협조 리포트`,action:`CTO 리뷰 및 절연/접지/계전기 시험(SAT) 항목 연계 후 최종 승인합니다.`,output:`승인 E-BOP 설계 패키지`,checkpoints:[`Arc Flash 경고 라벨·PPE 등급 명시`,`시운전(COM-001) 시험 항목 인계`]}]},"bess-cbop-engineer":{summary:`토목·건축 BOP(부지조성·컨테이너 기초·도로·배수·이격거리·방재 시설) 설계`,stages:[{step:1,shortLabel:`부지·지반 입력`,title:`① 지반조사·측량·기상·내진/풍하중 조건 수집`,input:`지반조사 보고서(SPT/지지력), 부지 경계도, 강우강도, 내진등급`,action:`컨테이너·변압기 중량 하중과 부지 배수·진입도로(중량물 운반) 조건을 파악합니다.`,output:`토목·건축 설계 기준서`,checkpoints:[`지하수위·액상화 가능성 확인`,`크레인 아웃리거 지내력 조건 확보`],standards:[`ASCE 7`,`Eurocode 2/7`,`KDS`]},{step:2,shortLabel:`배치·기초 설계`,title:`② 단지 배치도(Plot Plan)·기초 구조·배수/방화벽 설계`,input:`컨테이너 치수/중량, 소방 이격거리(NFPA 855), 소음 경계 기준`,action:`컨테이너 패드 기초, 케이블 트렌치, 방화벽·방유제, 우수 배수 및 도로 폭을 설계합니다.`,output:`단지 배치도(Plot Plan), 기초 구조 계산서, 배수 계획도`,checkpoints:[`소방차 진입로·회차 반경 확보`,`변압기 오일 유출 방지(방유제 110%)`],standards:[`NFPA 855`,`IBC`,`IEC 61936`]},{step:3,shortLabel:`구조·소방 협업`,title:`③ 구조(STR)·소방(FIR)·환경(ENV)·물류(LOG) 교차검토`,input:`Plot Plan, 내진 해석 결과, 소음/이격 분석, 중량물 운송 경로`,action:`구조 안전율, 이격거리/방화벽, 소음 방음벽, 중량물 반입 동선 간섭을 해소합니다.`,output:`통합 부지 배치 확정본 및 간섭 해소록`,checkpoints:[`인접 대지 경계 소음 규제 충족`,`유지보수(도어 개방·장비 교체) 공간 확보`]},{step:4,shortLabel:`도면·토목 BOQ`,title:`④ 토목·건축 시공도면 및 물량산출서(BOQ) 작성`,input:`확정 배치도 및 기초/배수/울타리 설계안`,action:`콘크리트·철근·토공·포장·펜스 물량표와 시공 시방서를 작성합니다.`,output:`C-BOP 도면 세트, 시방서, 토목 BOQ`,checkpoints:[`지반 개량(파일/치환) 리스크 반영`,`현장 배수·환경오염 방지 시설 포함`]},{step:5,shortLabel:`토목 승인`,title:`⑤ 인허가 도서 정합 확인 및 시공 승인`,input:`C-BOP 도면·시방서 및 건축/개발행위 인허가 요건`,action:`관할 인허가(PRM) 요건 충족을 확인하고 현장 시공(STE-001) 기준으로 승인합니다.`,output:`승인 C-BOP 패키지(IFC)`,checkpoints:[`건축/소방 인허가 도면 일치`,`시공 품질 관리(ITP) 기준 전달`]}]},"bess-fire-engineer":{summary:`BESS 소방·방재 설계 · 열폭주 방호(UL 9540A/NFPA 855)·화재감지·소화·이격거리 검증`,stages:[{step:1,shortLabel:`위험성 입력`,title:`① 배터리 셀 열폭주 특성 및 부지 방재 규정 수집`,input:`UL 9540A 시험 리포트, 컨테이너 용량(MWh), 관할 소방법·NFPA 855 기준`,action:`오프가스 조성(H2/CO/HF), 열방출률(HRR), 인근 건물·경계 이격 요건을 식별합니다.`,output:`화재 위험성 분석 기준(HMA 입력표)`,checkpoints:[`UL 9540A 셀/모듈/유닛/설치 레벨 통과 여부`,`관할 소방서(AHJ) 특별 요구 확인`],standards:[`NFPA 855`,`UL 9540A`,`NFSC`]},{step:2,shortLabel:`방재·소화 설계`,title:`② 감지·환기·폭발방지(NFPA 69)·소화시스템 설계`,input:`위험성 분석 기준, CFD 연기/가스 확산 모델`,action:`가스/연기/열 다중 감지, 비상배기·폭발방산구(NFPA 68), 청정소화/수계 소화 구성을 설계합니다.`,output:`소방·방재 설계서 및 위험성 분석서(HMA)`,checkpoints:[`LFL 25% 미만 유지 환기량 산정`,`소화용수 저수량 및 배수(오염수 차단) 계획`],standards:[`NFPA 68/69`,`NFPA 15/750`,`IFC`]},{step:3,shortLabel:`CFD·C-BOP 협업`,title:`③ CFD·배터리·C-BOP·HSE 전문가 교차 안전 검증`,input:`HMA, Plot Plan, 비상정지(E-Stop) 연동 로직`,action:`이격거리·방화벽 내화시간(2hr+), 화재 시 EMS/PCS 즉시 차단, 소방대 진입 동선을 맞춥니다.`,output:`통합 방재 인터페이스 및 비상대응계획(ERP)`,checkpoints:[`방화벽 높이·내화등급 충족`,`원격 비상정지 위치(안전거리 확보)`]},{step:4,shortLabel:`인허가·사양서`,title:`④ 소방 설비 사양서 및 AHJ 인허가 제출 패키지 작성`,input:`확정 소방 설계서, HMA, ERP, 인증 성적서`,action:`소방 설비 발주 사양서, 계통도, 관할 소방서(AHJ) 협의용 제출 패키지를 완성합니다.`,output:`소방 기술 사양서, HMA 최종본, AHJ 제출 도서`,checkpoints:[`소방대 교육·현장 대응 시나리오 포함`,`유지보수·정기점검 체크리스트 구비`]},{step:5,shortLabel:`방재 최종승인`,title:`⑤ 소방 인허가 승인 및 시운전 연동 시험 검증`,input:`AHJ 검토 의견, 감지-소화-트립 연동 시험 계획`,action:`보완 사항 종결 후 현장 연동 시험(SAT) 합격 기준을 확정·승인합니다.`,output:`방재 설계 최종 승인서 및 SAT 합격 기준표`,checkpoints:[`오작동/미작동 방지 인터록 검증`,`안전·HSE(HSE-001) 인수인계`]}]},"bess-standards-analyst":{summary:`8개 시장(KR/JP/US/AU/UK/EU/RO/PL) IEC·IEEE·국가 규격 매핑 및 교차 적합성 검증`,stages:[{step:1,shortLabel:`시장·규격 식별`,title:`① 대상 국가·계통운영자 및 적용 규격 목록 도출`,input:`프로젝트 국가, 연계 전압, 설비 용량, 설치 유형`,action:`해당 시장의 필수 전기·안전·계통·환경·사이버보안 규격 최신 개정판을 식별합니다.`,output:`국가별 적용 규격 마스터 리스트`,checkpoints:[`개정 발효일(Effective Date) 확인`,`연방/주/지자체 중복 규제 파악`],standards:[`IEC`,`IEEE`,`KEC`,`JEAC 9701`,`G99`,`AS 4777`]},{step:2,shortLabel:`규격 갭 분석`,title:`② 국제 표준 vs 현지 규격 갭(Gap) 분석 및 리스크 등급화`,input:`마스터 리스트, 표준 BESS 제품 인증 현황`,action:`IEC/UL 인증과 현지 추가 시험 요구사항의 차이를 분석해 리스크 등급(High/Med/Low)을 부여합니다.`,output:`규격 비교 매트릭스 및 갭 분석 리포트`,checkpoints:[`추가 형식시험 소요 기간·비용 산정`,`인증 면제/상호인정(MRA) 가능성 검토`]},{step:3,shortLabel:`공종·인허가 협업`,title:`③ 기술(CTO)·인허가(PRM)·법무(LEG) 교차 검토`,input:`갭 분석 리포트, 공종별 설계 초안`,action:`설계 변경이 필요한 규격 항목을 공종 담당자에게 피드백하고 인허가 일정에 반영합니다.`,output:`규격 준수 액션 플랜`,checkpoints:[`그리드코드(VRT/FFR)와 PCS 사양 일치`,`소방/건축/환경 규제 충돌 해소`]},{step:4,shortLabel:`준수 매트릭스`,title:`④ 규격 준수 매트릭스(Compliance Matrix) 작성`,input:`공종별 대응 증빙 및 인증서 목록`,action:`발주처·인증기관 제출용 조항별 준수 여부(Comply/Deviation)와 증빙 맵을 완성합니다.`,output:`Compliance Matrix 및 인증 로드맵`,checkpoints:[`모든 필수 조항 증빙 서류 매핑`,`예외(Deviation) 항목 승인 근거 명시`]},{step:5,shortLabel:`적합성 승인`,title:`⑤ 최종 규격 적합성 판정 및 표준 동향 업데이트`,input:`Compliance Matrix 및 최신 규제 브리핑`,action:`규격 준수 완료를 판정하고 개정 동향을 지식 원장에 반영합니다.`,output:`규격 적합성 승인서 및 표준 업데이트 로그`,checkpoints:[`미해결 High 리스크 0건`,`시운전·인증 제출 일정 확정`]}]},"bess-financial-analysis":{summary:`15년 현금흐름·IRR/NPV/LCOE·몬테카를로 민감도 및 배터리 열화·교체 반영 재무 모델링`,stages:[{step:1,shortLabel:`재무 가정 입력`,title:`① CAPEX/OPEX·수익 스택·자금조달 조건 입력`,input:`EPC 견적(BOQ), O&M 비용, 시장 수익 예측(Arbitrage/FCAS/용량), WACC·부채비율`,action:`모든 비용·수익 가정의 단위, 인플레이션율, 세제 혜택(IRA/보조금) 기준을 정리합니다.`,output:`재무 모델 입력 시트(Assumptions)`,checkpoints:[`명목 vs 실질 기준 일관성`,`Augmentation·인버터 교체 연도 반영`],standards:[`Project Finance`,`WACC`,`LCOE/LCOS`]},{step:2,shortLabel:`IRR/NPV 모델링`,title:`② 15~20년 현금흐름·IRR/NPV/DSCR·민감도 시뮬레이션`,input:`입력 시트, 연차별 배터리 열화 곡선, 전력가격 시나리오`,action:`Project/Equity IRR, NPV, Payback, DSCR 및 몬테카를로/토네이도 민감도를 산출합니다.`,output:`통합 재무 모델 및 민감도 분석 리포트`,checkpoints:[`Base/Upside/Downside 3개 시나리오 산출`,`최소 DSCR ≥ 1.25x(PF 기준) 검증`],standards:[`IRR/MIRR`,`NPV`,`Monte Carlo`]},{step:3,shortLabel:`세무·시장 협업`,title:`③ 전력시장(MKT)·세무(TAX)·계약(CON) 전문가 교차검토`,input:`수익 모델, 감가상각/세액공제 구조, PPA/Tolling 계약 조건`,action:`매출 변동성 헤지(Floor/Tolling), 세제 최적화, 보험·예비비 반영을 교차 점검합니다.`,output:`재무-세무-계약 정합성 확인서`,checkpoints:[`세후 현금흐름(After-Tax CF) 검증`,`환율/금리 헤지 비용 포함 여부`]},{step:4,shortLabel:`투자심의서 작성`,title:`④ 투자심의(IC) 요약 보고서 및 밸류에이션 패키지 작성`,input:`확정 재무 모델 및 리스크 민감도 결과`,action:`핵심 수익 지표, 손익분기점(BEP), 주요 리스크 드라이버를 시각화·문서화합니다.`,output:`투자 타당성 보고서(Feasibility Report) 및 재무 요약표`,checkpoints:[`주요 가정 변경 시 IRR 변화폭 명시`,`입찰가 상·하한선 제안`]},{step:5,shortLabel:`투자 승인`,title:`⑤ CFO·투자심의위원회 검토 및 재무 기준선 승인`,input:`투자 타당성 보고서 및 내부감사 검토 의견`,action:`목표 수익률 허들 충족을 최종 판정하고 입찰/투자 실행 기준선을 확정합니다.`,output:`재무 승인서 및 프로젝트 예산 Baseline`,checkpoints:[`허들 레이트 충족 또는 조건부 승인 요건 명시`,`실행 단계 원가 추적 체계 연계`]}]},"bess-contract-specialist":{summary:`FIDIC Silver/Yellow EPC·O&M·PPA 계약서 작성, 독소조항 분석 및 클레임/리스크 방어`,stages:[{step:1,shortLabel:`계약 문서 접수`,title:`① 입찰 계약조건(GCC/PCC)·ER·책임분담표(DOR) 접수`,input:`RFP 계약 초안(FIDIC 등), Employer Requirements(ER), DOR 매트릭스`,action:`계약 유형(턴키/분할발주), 준거법, 분쟁해결 방식과 주요 마일스톤을 식별합니다.`,output:`계약 구조 요약표 및 핵심 쟁점 목록`,checkpoints:[`NTP/PAC/FAC/DNP 정의 명확성`,`책임 한도(Liability Cap) 기준 확인`],standards:[`FIDIC Silver/Yellow`,`Incoterms 2020`]},{step:2,shortLabel:`리스크·조항 분석`,title:`② 지체상금(LD)·성능보증(PG)·불가항력·변경(VO) 정밀 분석`,input:`GCC/PCC 원문, 기술 보증치, 보험 조건`,action:`무제한 책임, 과도한 LD, 불명확한 성능시험 조건, 대금지급 리스크를 조항별로 진단합니다.`,output:`계약 리스크 분석표(Red/Amber/Green) 및 수정 제안(Redline)`,checkpoints:[`Delay LD + Performance LD 합산 상한 확인`,`간접손해(Consequential Loss) 면책 조항`]},{step:3,shortLabel:`법무·기술 협업`,title:`③ 법률(LEG)·보험(INS)·기술(CTO)·재무(FIN) 교차 협의`,input:`계약 리스크 분석표, 성능보증 조건, 보험 커버리지`,action:`기술 보증 한계·보험 보상 범위·현지 법령 강행규정과의 정합성을 맞춥니다.`,output:`통합 계약 협상 전략서(Fallback Position)`,checkpoints:[`배터리 공급사 Back-to-Back 보증 연계`,`PF 대주단(Lender) Bankability 충족`]},{step:4,shortLabel:`협상안 작성`,title:`④ 계약 수정안(Deviation List) 및 최종 계약 패키지 작성`,input:`협상 전략서 및 발주처 질의응답(Clarification)`,action:`입찰 제출용 Deviation Table과 최종 서명용 계약서/부속서(Schedule)를 완성합니다.`,output:`Deviation Table, Redline 계약서, 계약 관리 가이드`,checkpoints:[`우선순위(Order of Precedence) 충돌 제거`,`클레임/VO 통지 기한(Time-bar) 정리`]},{step:5,shortLabel:`계약 승인·이관`,title:`⑤ 최종 계약 승인 및 실행팀(PM) 계약 의무 이관`,input:`최종 계약서 및 잔여 리스크 수용 승인서`,action:`경영진 최종 서명 승인 후 PM/현장팀에 핵심 의무·통지 기한 매트릭스를 이관합니다.`,output:`계약 승인서 및 계약 의무 관리표(Obligation Matrix)`,checkpoints:[`이행보증(Bond)·보험 증권 발행 일정 확인`,`클레임·VO 대응 프로토콜 공유`]}]},"bess-project-manager":{summary:`EPC 프로젝트 WBS·공정표(CPM)·EVM(SPI/CPI)·변경관리(MOC)·리스크 및 PAC/FAC 총괄`,stages:[{step:1,shortLabel:`프로젝트 착수`,title:`① 계약 범위·마일스톤·이해관계자(RACI) 기준선 수립`,input:`계약서(NTP/PAC/FAC), 확정 설계/예산, 발주처 요구사항`,action:`프로젝트 헌장(Charter), WBS 1~4레벨, 조직 RACI 및 커뮤니케이션 체계를 확정합니다.`,output:`프로젝트 실행 계획서(PEP) 및 WBS`,checkpoints:[`계약 마일스톤과 내부 목표 일정 버퍼 확보`,`RACI 승인권자·책임자 명확화`],standards:[`PMBOK`,`EVM (SPI/CPI)`]},{step:2,shortLabel:`공정·자원 계획`,title:`② 마스터 공정표(Level 3/4)·크리티컬 패스·리스크 분석`,input:`장납기 조달 리드타임, 인허가 일정, 시공/시운전 공종 논리`,action:`설계-조달-시공-시운전(EPCC) 크리티컬 패스와 S-Curve·리스크 등록부를 수립합니다.`,output:`마스터 공정표(Baseline), S-Curve, Risk Register`,checkpoints:[`변압기·배터리·계통연계 크리티컬 패스 관리`,`예비비(Contingency) 및 Float 검증`]},{step:3,shortLabel:`본부 실행 조율`,title:`③ 설계(CTO)·조달(PRO)·현장(STE)·품질/안전(QA/HSE) 통합 관제`,input:`주간 진척 데이터, 선적/통관 현황, 현장 이슈·변경 요청(MOC)`,action:`SPI/CPI 편차를 추적하고 지연 징후 시 만회 대책(Crashing/Fast-tracking)을 가동합니다.`,output:`주간/월간 진척 보고서(EVM) 및 이슈 조치 대장`,checkpoints:[`SPI < 0.95 또는 CPI < 0.95 조기 경보`,`변경관리(MOC) 원가·일정 영향 평가`]},{step:4,shortLabel:`시운전·준공 관리`,title:`④ FAT/SAT/FIT 통합 일정 및 Punch List 종결 관리`,input:`시운전 절차서, 품질 부적합(NCR)·Punch List 현황`,action:`기계적 준공(MC)→시운전→성능시험→PAC까지 부서 간 병목을 제거하고 문서를 취합합니다.`,output:`준공 패키지(Handover Dossier) 및 Punch List 종결표`,checkpoints:[`Category A Punch List 100% 종결`,`발주처 검수·계통시험 증빙 완비`]},{step:5,shortLabel:`종결·이관`,title:`⑤ PAC/FAC 최종 승인 및 O&M 이관·교훈 정리`,input:`발주처 PAC 인증서, 최종 정산서, 프로젝트 교훈`,action:`O&M 팀에 설비·도서를 공식 이관하고 원가/일정 교훈을 지식 원장에 등록합니다.`,output:`프로젝트 종결 보고서(Close-out) 및 Lessons Learned`,checkpoints:[`하자보증(DNP) 대응 체계 가동`,`최종 원가·마진 정산 완료`]}]}},f={"CEO-001":`bess-orchestrator`,"CTO-100":`bess-agent-framework`,"SYS-001":`bess-system-engineer`,"SYS-101":`bess-system-engineer`,"BAT-001":`bess-battery-expert`,"BAT-104":`bess-battery-expert`,"PCS-001":`bess-pcs-expert`,"PCS-105":`bess-pcs-expert`,"EBP-001":`bess-ebop-engineer`,"PWR-102":`bess-ebop-engineer`,"CBP-001":`bess-cbop-engineer`,"CIV-103":`bess-cbop-engineer`,"FIR-001":`bess-fire-engineer`,"STD-001":`bess-standards-analyst`,"STD-107":`bess-standards-analyst`,"FIN-001":`bess-financial-analysis`,"CFO-300":`bess-financial-analysis`,"CON-001":`bess-contract-specialist`,"CFO-301":`bess-contract-specialist`,"PMG-001":`bess-project-manager`,"COO-400":`bess-project-manager`};function p(e,t,n){let r=(e||``).toUpperCase();if(r===`CEO`||r===`CTO`||r===`CFO`||r===`COO`||r===`SUP`)return r;let i=(t||``).toUpperCase();return i.startsWith(`CEO`)?`CEO`:i.startsWith(`CTO`)||i.startsWith(`SYS`)||i.startsWith(`BAT`)||i.startsWith(`PCS`)?`CTO`:i.startsWith(`CFO`)?`CFO`:i.startsWith(`COO`)?`COO`:(n||``).includes(`기술`)?`CTO`:(n||``).includes(`재무`)?`CFO`:(n||``).includes(`운영`)?`COO`:(n||``).includes(`CEO`)?`CEO`:`CTO`}function m(e){if(!e?.length)return[];let t=new Set([`bess`,`epc`,`expert`,`engineer`,`analyst`,`manager`,`specialist`,`전문가`,`상세`]),n=[];for(let r of e){let e=r.replace(/[().,]/g,``).trim();if(!(!e||e.length<2||t.has(e.toLowerCase()))&&(n.includes(e)||n.push(e),n.length>=6))break}return n}function h(e){let t=p(e.division,e.id,e.dept),n=(e.key&&d[e.key]?e.key:void 0)??f[e.id.toUpperCase()];if(n&&d[n]){let r=d[n];return{agentId:e.id,agentKey:n,division:t,tier:`specialized`,summary:r.summary,stages:r.stages}}let r=u[t]??u.CTO,i=m(e.keywords),a=i.length?i.slice(0,4).join(` · `):e.name,o=e.desc?.trim(),s=r.stages.map((e,t)=>t===0&&o?{...e,input:`${e.input} / 담당 범위: ${o.slice(0,90)}`}:t===1&&i.length?{...e,action:`[${a}] 중심으로 ${e.action}`,standards:e.standards?[...e.standards,...i.slice(0,2)]:i.slice(0,3)}:e);return{agentId:e.id,agentKey:e.key??e.id,division:t,tier:`division-template`,summary:o?`${o.slice(0,88)} — ${r.summary}`:r.summary,stages:s}}function ee(e,t,n,r=6){let i=new Map,a=new Map;for(let e of n)i.set(e.id,e),a.set(e.key,e);let o=f[e.toUpperCase()],s=i.has(e)?e:o&&a.get(o)?.id||e,c=[],l=new Set([s,e]);if(t){let e=[];for(let n of t.links){if(n.type!==`collab`)continue;let t=n.source,r=n.target,i=typeof t==`string`?t:t.id,a=typeof r==`string`?r:r.id;i===s&&!l.has(a)?e.push(a):a===s&&!l.has(i)&&e.push(i)}for(let t of e){if(c.length>=r)break;if(l.has(t))continue;let e=i.get(t);e&&(l.add(t),c.push({id:e.id,key:e.key,name:e.name,dept:e.dept,division:e.division,color:e.color,desc:e.desc,linkType:`collab`}))}}if(c.length===0&&n.length>0){let e=i.get(s),t=s===`CEO-001`?[`CTO-100`,`SYS-001`,`BAT-001`,`FIN-001`,`PMG-001`,`STD-001`]:n.filter(t=>!l.has(t.id)&&(!e||t.division===e.division)).slice(0,Math.min(4,r)).map(e=>e.id);for(let e of t){if(c.length>=r)break;if(l.has(e))continue;let t=i.get(e);t&&(l.add(e),c.push({id:t.id,key:t.key,name:t.name,dept:t.dept,division:t.division,color:t.color,desc:t.desc,linkType:`org`}))}}return c}var g=n(),_=o`
  from { stroke-dashoffset: 24; }
  to   { stroke-dashoffset: 0; }
`,v=o`
  0%   { transform: scale(1); opacity: 0.55; }
  70%  { transform: scale(1.32); opacity: 0; }
  100% { transform: scale(1.32); opacity: 0; }
`,y=a.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,b=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`,x=a.div`
  font-size: 11.5px;
  color: #9CA3AF;
  display: flex;
  align-items: center;
  gap: 8px;
  strong {
    color: #F9FAFB;
    font-weight: 700;
  }
`,S=a.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 11.5px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid ${({$accent:e,$playing:t})=>t?`${e}88`:`rgba(148,163,184,0.35)`};
  background: ${({$accent:e,$playing:t})=>t?`${e}22`:`rgba(255,255,255,0.04)`};
  color: ${({$playing:e})=>e?`#F9FAFB`:`#CBD5E1`};
  transition: background 0.18s, border-color 0.18s;
  &:hover {
    border-color: ${({$accent:e})=>e};
    background: ${({$accent:e})=>`${e}28`};
  }
`,C=a.div`
  width: 100%;
  overflow-x: auto;
  padding: 4px 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(255,255,255,0.12) transparent;
`,w=a.svg`
  width: 100%;
  min-width: 560px;
  height: auto;
  display: block;
`,T=a.path`
  fill: none;
  stroke: ${({$active:e,$accent:t})=>e?t:`rgba(148,163,184,0.28)`};
  stroke-width: ${({$active:e})=>e?2.5:1.6};
  stroke-dasharray: ${({$active:e})=>e?`7 5`:`4 4`};
  ${({$active:e,$playing:t})=>e&&t?r`animation: ${_} 0.9s linear infinite;`:`animation: none;`}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,E=a.circle`
  fill: none;
  stroke: ${({$accent:e})=>e};
  stroke-width: 2;
  transform-box: fill-box;
  transform-origin: center;
  ${({$playing:e})=>e?r`animation: ${v} 1.8s cubic-bezier(0.2, 0.7, 0.2, 1) infinite;`:`animation: none; opacity: 0.35;`}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.35;
  }
`,te=a.g`
  cursor: pointer;
  outline: none;
  &:focus-visible circle.node-core {
    stroke-width: 3;
  }
`,ne=a.div`
  background: linear-gradient(150deg, ${({$accent:e})=>`${e}14`}, rgba(255,255,255,0.025));
  border: 1px solid ${({$accent:e})=>`${e}44`};
  border-radius: 12px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,re=a.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  font-weight: 800;
  color: #F9FAFB;
  .badge {
    font-size: 10px;
    font-weight: 800;
    padding: 2px 8px;
    border-radius: 12px;
    background: ${({$accent:e})=>`${e}26`};
    color: ${({$accent:e})=>e};
    border: 1px solid ${({$accent:e})=>`${e}55`};
  }
`,D=a.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`,O=a.div`
  background: rgba(0, 0, 0, 0.24);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 9px;
  padding: 10px 12px;
  .k {
    font-size: 10.5px;
    font-weight: 800;
    color: #9CA3AF;
    margin-bottom: 4px;
  }
  .v {
    font-size: 12px;
    color: #E5E7EB;
    line-height: 1.55;
  }
`,k=a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  padding-top: 4px;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
`,A=a.ul`
  margin: 0;
  padding-left: 16px;
  font-size: 11.5px;
  color: #CBD5E1;
  line-height: 1.6;
  li::marker {
    color: #34D399;
  }
`,j=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,M=a.span`
  font-size: 10.5px;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 12px;
  background: ${({$accent:e})=>`${e}18`};
  border: 1px solid ${({$accent:e})=>`${e}40`};
  color: #E5E7EB;
`,N=[76,228,380,532,684],P=62,F=24;function I({stages:e,accent:t,activeIndex:n,isPlaying:r,onSelectStage:i,onTogglePlay:a}){let o=Math.min(Math.max(n,0),Math.max(e.length-1,0)),s=e[o];return(0,g.jsxs)(y,{"data-testid":`workflow-flow-svg`,children:[(0,g.jsxs)(b,{children:[(0,g.jsxs)(x,{children:[(0,g.jsxs)(`strong`,{children:[`단계 `,o+1,` / `,e.length]}),(0,g.jsx)(`span`,{children:`· 노드를 클릭하면 해당 단계의 입력·산출물·체크포인트를 확인할 수 있습니다`})]}),(0,g.jsx)(S,{type:`button`,$accent:t,$playing:r,onClick:a,"aria-pressed":r,children:r?`⏸ 일시정지`:`▶ 자동 흐름 재생`})]}),(0,g.jsx)(C,{children:(0,g.jsxs)(w,{viewBox:`0 0 760 136`,role:`img`,"aria-label":`5단계 업무 진행 프로세스 플로우`,children:[e.slice(0,-1).map((e,n)=>{let i=N[n]+F+4,a=N[n+1]-F-6,s=n<=o;return(0,g.jsxs)(`g`,{children:[(0,g.jsx)(T,{d:`M ${i} ${P} L ${a} ${P}`,$active:s,$playing:r,$accent:t}),(0,g.jsx)(`polyline`,{points:`${a-6},${P-5} ${a+1},${P} ${a-6},${P+5}`,fill:`none`,stroke:s?t:`rgba(148,163,184,0.35)`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`})]},`edge-${n}`)}),e.map((e,n)=>{let a=N[n]??76+n*152,s=n===o,c=n<o;return(0,g.jsxs)(te,{role:`button`,tabIndex:0,"aria-label":`${e.title} 상세 보기`,"aria-pressed":s,onClick:()=>i(n),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),i(n))},children:[s&&(0,g.jsx)(E,{cx:a,cy:P,r:F+5,$playing:r,$accent:t}),(0,g.jsx)(`circle`,{className:`node-core`,cx:a,cy:P,r:F,fill:s?`${t}33`:c?`${t}18`:`rgba(15,23,42,0.85)`,stroke:s?t:c?`${t}99`:`rgba(148,163,184,0.35)`,strokeWidth:s?2.4:1.5}),(0,g.jsx)(`text`,{x:a,y:P+5,textAnchor:`middle`,fontSize:14,fontWeight:800,fill:s?`#FFFFFF`:c?`#E5E7EB`:`#9CA3AF`,children:e.step}),(0,g.jsx)(`text`,{x:a,y:P+F+22,textAnchor:`middle`,fontSize:11.5,fontWeight:s?800:600,fill:s?`#F9FAFB`:`#CBD5E1`,children:e.shortLabel}),(0,g.jsx)(`text`,{x:a,y:P+F+38,textAnchor:`middle`,fontSize:9.5,fill:s?t:`#6B7280`,children:s?`● 선택됨`:c?`✓ 완료`:`대기`})]},e.step)})]})}),s&&(0,g.jsxs)(ne,{$accent:t,"data-testid":`workflow-stage-detail`,children:[(0,g.jsxs)(re,{$accent:t,children:[(0,g.jsxs)(`span`,{className:`badge`,children:[`STEP `,s.step]}),(0,g.jsx)(`span`,{children:s.title})]}),(0,g.jsxs)(D,{children:[(0,g.jsxs)(O,{children:[(0,g.jsx)(`div`,{className:`k`,children:`📥 입력 (Input)`}),(0,g.jsx)(`div`,{className:`v`,children:s.input})]}),(0,g.jsxs)(O,{children:[(0,g.jsx)(`div`,{className:`k`,children:`⚙️ 수행 작업 (Action)`}),(0,g.jsx)(`div`,{className:`v`,children:s.action})]}),(0,g.jsxs)(O,{children:[(0,g.jsx)(`div`,{className:`k`,children:`📤 산출물 (Output)`}),(0,g.jsx)(`div`,{className:`v`,children:s.output})]})]}),(0,g.jsxs)(k,{children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`div`,{style:{fontSize:10.5,fontWeight:800,color:`#9CA3AF`,marginBottom:4},children:`✅ 단계 체크포인트`}),(0,g.jsx)(A,{children:s.checkpoints.map(e=>(0,g.jsx)(`li`,{children:e},e))})]}),s.standards&&s.standards.length>0&&(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`div`,{style:{fontSize:10.5,fontWeight:800,color:`#9CA3AF`,marginBottom:4},children:`📐 적용 규격 · 기준`}),(0,g.jsx)(j,{children:s.standards.map(e=>(0,g.jsx)(M,{$accent:t,children:e},e))})]})]})]})]})}var L=t(e(),1),R={CEO:`#3B82F6`,CTO:`#8B5CF6`,CFO:`#F59E0B`,COO:`#10B981`,SUP:`#64748B`},z=a.div`
  position: fixed;
  inset: 0;
  background: rgba(4, 7, 15, 0.78);
  backdrop-filter: blur(6px);
  z-index: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 640px) {
    padding: 10px;
    align-items: flex-end;
  }
`,B=a.div`
  width: min(860px, 100%);
  max-height: 90dvh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(165deg, rgba(17, 24, 39, 0.98), rgba(10, 14, 26, 0.99));
  border: 1px solid ${({$accent:e})=>`${e}55`};
  border-radius: 18px;
  box-shadow: 0 32px 90px rgba(0, 0, 0, 0.72), 0 0 0 1px rgba(255, 255, 255, 0.04) inset;
  overflow: hidden;

  @media (max-width: 640px) {
    max-height: 92dvh;
    border-radius: 16px 16px 12px 12px;
  }
`,V=a.div`
  padding: 18px 22px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(135deg, ${({$accent:e})=>`${e}20`}, transparent 65%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-shrink: 0;

  @media (max-width: 640px) {
    padding: 14px 16px;
  }
`,ie=a.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,H=a.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,U=a.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 7px;
`,W=a.span`
  font-size: 10.5px;
  font-weight: 800;
  padding: 3px 9px;
  border-radius: 16px;
  background: ${({$accent:e})=>`${e}26`};
  color: ${({$accent:e})=>e};
  border: 1px solid ${({$accent:e})=>`${e}55`};
`,G=a.span`
  font-size: 10px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 16px;
  background: ${({$specialized:e})=>e?`rgba(16,185,129,0.16)`:`rgba(148,163,184,0.14)`};
  color: ${({$specialized:e})=>e?`#34D399`:`#CBD5E1`};
  border: 1px solid ${({$specialized:e})=>e?`rgba(52,211,153,0.4)`:`rgba(148,163,184,0.25)`};
`,K=a.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  color: #F9FAFB;
  letter-spacing: -0.3px;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;

  .agent-id {
    font-size: 12px;
    font-weight: 700;
    color: #9CA3AF;
    font-family: 'JetBrains Mono', monospace;
  }

  @media (max-width: 640px) {
    font-size: 17px;
  }
`,q=a.p`
  margin: 0;
  font-size: 12.5px;
  color: #D1D5DB;
  line-height: 1.6;
`,J=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,Y=a.span`
  font-size: 10.5px;
  color: #9CA3AF;
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 12px;
  padding: 2px 9px;
`,ae=a.button`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 9px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  color: #CBD5E1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #FFFFFF;
  }
`,X=a.div`
  padding: 18px 22px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-height: 0;

  @media (max-width: 640px) {
    padding: 14px 16px;
    gap: 14px;
  }
`,Z=a.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Q=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 6px;
  h3 {
    margin: 0;
    font-size: 13px;
    font-weight: 800;
    color: #F3F4F6;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .sub {
    font-size: 11px;
    color: #9CA3AF;
  }
`,oe=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,se=a.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 12px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${({$c:e})=>`${e}44`};
  color: #E5E7EB;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.16s, border-color 0.16s, background 0.16s;
  &:hover {
    transform: translateY(-1px);
    border-color: ${({$c:e})=>e};
    background: ${({$c:e})=>`${e}20`};
  }
  .dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({$c:e})=>e};
    box-shadow: 0 0 6px ${({$c:e})=>e};
  }
  .cid {
    font-size: 10px;
    color: #9CA3AF;
    font-family: 'JetBrains Mono', monospace;
  }
`,ce=a.div`
  padding: 14px 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;
  flex-shrink: 0;

  @media (max-width: 640px) {
    padding: 12px 16px;
  }
`,$=a.button`
  padding: 9px 16px;
  border-radius: 10px;
  font-size: 12.5px;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid ${({$primary:e,$accent:t})=>e?t||`#3B82F6`:`rgba(148,163,184,0.3)`};
  background: ${({$primary:e,$accent:t})=>e?`${t||`#3B82F6`}26`:`rgba(255,255,255,0.04)`};
  color: ${({$primary:e})=>e?`#F9FAFB`:`#CBD5E1`};
  transition: background 0.16s, border-color 0.16s;
  &:hover {
    background: ${({$primary:e,$accent:t})=>e?`${t||`#3B82F6`}40`:`rgba(255,255,255,0.09)`};
  }
`;function le(){return typeof window>`u`||typeof window.matchMedia!=`function`?!1:window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function ue({agent:e,onClose:t,onSelectAgent:n,onFocusAgent:r}){let[a,o]=(0,L.useState)([]),[u,d]=(0,L.useState)(null),[f,p]=(0,L.useState)(null),[m,_]=(0,L.useState)(0),[v,y]=(0,L.useState)(()=>!le());(0,L.useEffect)(()=>{if(!e)return;let t=!0;return c().then(e=>{t&&o(e)}).catch(()=>{}),s().then(e=>{t&&d(e)}).catch(()=>{}),l().then(e=>{t&&p(e)}).catch(()=>{}),()=>{t=!1}},[e]),(0,L.useEffect)(()=>{if(!e)return;let n=e=>{e.key===`Escape`&&t()};return window.addEventListener(`keydown`,n),()=>window.removeEventListener(`keydown`,n)},[e,t]),(0,L.useEffect)(()=>{if(!e||!v)return;let t=window.setInterval(()=>{_(e=>(e+1)%5)},2400);return()=>window.clearInterval(t)},[e,v]);let b=(0,L.useMemo)(()=>{if(!e)return null;let t=a.find(t=>e.key&&t.key===e.key||t.id===e.id||e.focusId&&t.id===e.focusId),n=e.division||t?.division||`CTO`,r=e.color||t?.color||R[n]||`#3B82F6`,i=e.key||t?.key||e.id,o=f?.perAgent?.[i],s=(e.keywords?.length?e.keywords:t?.keywords??[]).map(e=>e.replace(/[().,]/g,``).trim()).filter((e,t,n)=>e.length>=2&&n.indexOf(e)===t).slice(0,8),c=h({id:e.id,key:i,name:e.name,dept:e.dept||t?.dept,division:n,desc:e.desc||t?.desc,keywords:s}),l=ee(t?.id??e.focusId??e.id,u,a,6);return{id:e.id,focusId:t?.id??e.focusId??e.id,key:i,name:e.name,dept:e.dept||t?.dept||`${n} Office`,division:n,accent:r,desc:e.desc||t?.desc||c.summary,keywords:s,knowledgeStat:o,workflow:c,partners:l}},[e,a,u,f]);return!e||!b?null:(0,g.jsx)(z,{role:`presentation`,onClick:t,"data-testid":`agent-detail-modal-backdrop`,children:(0,g.jsxs)(B,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":`agent-detail-modal-title`,$accent:b.accent,onClick:e=>e.stopPropagation(),"data-testid":`agent-detail-modal`,children:[(0,g.jsxs)(V,{$accent:b.accent,children:[(0,g.jsxs)(ie,{children:[(0,g.jsxs)(H,{children:[(0,g.jsxs)(U,{children:[(0,g.jsx)(W,{$accent:b.accent,children:b.dept}),(0,g.jsx)(G,{$specialized:b.workflow.tier===`specialized`,children:b.workflow.tier===`specialized`?`★ 특화 프로세스`:`본부 표준 5단계`}),b.knowledgeStat&&(0,g.jsxs)(G,{$specialized:!0,children:[`Lv`,b.knowledgeStat.level,` · 누적 지식 `,b.knowledgeStat.count.toLocaleString(),`건`]})]}),(0,g.jsxs)(K,{id:`agent-detail-modal-title`,children:[(0,g.jsx)(`span`,{children:b.name}),(0,g.jsx)(`span`,{className:`agent-id`,children:b.id})]}),(0,g.jsx)(q,{children:b.desc})]}),(0,g.jsx)(ae,{type:`button`,onClick:t,"aria-label":`모달 닫기`,children:(0,g.jsx)(i,{size:16})})]}),b.keywords.length>0&&(0,g.jsx)(J,{children:b.keywords.map(e=>(0,g.jsxs)(Y,{children:[`#`,e]},e))})]}),(0,g.jsxs)(X,{children:[(0,g.jsxs)(Z,{children:[(0,g.jsxs)(Q,{children:[(0,g.jsx)(`h3`,{children:`🔄 업무 진행 프로세스 플로우`}),(0,g.jsx)(`span`,{className:`sub`,children:b.workflow.summary})]}),(0,g.jsx)(I,{stages:b.workflow.stages,accent:b.accent,activeIndex:m,isPlaying:v,onSelectStage:e=>{_(e),y(!1)},onTogglePlay:()=>y(e=>!e)})]}),(0,g.jsxs)(Z,{children:[(0,g.jsxs)(Q,{children:[(0,g.jsxs)(`h3`,{children:[`🤝 협업 전문가 네트워크 (`,b.partners.length,`명)`]}),(0,g.jsx)(`span`,{className:`sub`,children:`칩을 클릭하면 해당 협업 전문가 프로세스로 즉시 전환합니다`})]}),b.partners.length>0?(0,g.jsx)(oe,{"data-testid":`collab-partner-chips`,children:b.partners.map(e=>(0,g.jsxs)(se,{type:`button`,$c:e.color,onClick:()=>{_(0),n({id:e.id,focusId:e.id,key:e.key,name:e.name,dept:e.dept,division:e.division,color:e.color,desc:e.desc})},children:[(0,g.jsx)(`span`,{className:`dot`}),(0,g.jsx)(`span`,{children:e.name}),(0,g.jsx)(`span`,{className:`cid`,children:e.id})]},e.id))}):(0,g.jsx)(`div`,{style:{fontSize:12,color:`#6B7280`},children:`협업 링크 데이터를 불러오는 중이거나 직접 연결된 협업 노드가 없습니다.`})]})]}),(0,g.jsxs)(ce,{children:[r&&(0,g.jsx)($,{type:`button`,$primary:!0,$accent:b.accent,onClick:()=>{let e=b.focusId;t(),r(e)},children:`🧠 3D 관계도에서 보기`}),(0,g.jsx)($,{type:`button`,onClick:t,children:`닫기`})]})]})})}export{ue as t};