/* 개발 · 분석/아키텍처/리더십 · 네트워크/보안 · 데이터/AI (54개 직무) */

window.GENEALOGY.jobs.push(
  {
    id: "human_computer", en: "Computer (a person)", ko: "컴퓨터(계산하는 사람)", fam: "dev", year: 1940,
    note: "17세기부터, 1880~1940년대에 흔함",
    desc: "기계가 등장하기 전 '컴퓨터'는 계산하는 사람을 가리키는 직업이었습니다. 천문대와 보험사, 군 탄도 연구소에서 손과 기계식 계산기로 표를 만들었고 상당수는 여성 팀이었습니다. 초기 전자식 컴퓨터 프로그래머 다수가 이 인력에서 뽑히면서 이름은 기계와 프로그래밍으로 넘어갔습니다.",
    parents: []
  },
  {
    id: "coder", en: "Coder", ko: "코더", fam: "dev", year: 1945, note: "c. 1945",
    desc: "1940년대 중반 계산 작업이 '문제를 계획하는 일'과 '계획을 기계 명령으로 옮기는 일'로 나뉘면서 코더라는 직함이 생겼습니다. 당시에는 설계자보다 낮은 단계의 사무직으로 취급됐습니다. 곧 코딩이 창의적인 핵심 작업임이 드러나 프로그래머로 흡수됐고, 수십 년 뒤에는 '코딩을 배우자'는 캐주얼한 말로 되살아났습니다.",
    parents: [["human_computer", "solid"]]
  },
  {
    id: "programmer", en: "Programmer / Computer Programmer", ko: "프로그래머", fam: "dev", year: 1950, note: "c. 1950",
    desc: "초기 컴퓨터의 '프로그램'에서 이름을 딴 프로그래머는 1950년대 초에 표준 직함이 됐습니다. 컴파일러와 포트란·코볼의 보급으로 대규모 직업군으로 커졌습니다. 이 계보도의 거의 모든 줄기가 여기서 갈라져 나옵니다.",
    parents: [["human_computer", "solid"], ["coder", "solid"]]
  },
  {
    id: "sys_programmer", en: "Systems Programmer", ko: "시스템 프로그래머", fam: "dev", year: 1962, note: "c. 1962",
    desc: "운영체제와 유틸리티를 어셈블러로 직접 쓰고 유지하는 전문 인력입니다. IBM System/360 시절 OS/360을 설치하고 튜닝하고 패치하는 메인프레임 시스템 프로그래머가 고연봉 직군으로 자리 잡았고, 지금도 대형 호스트 현장에 남아 있습니다. 기계를 가장 깊이 아는 사람이라는 위치 덕에 시스템 관리자와 데이터베이스 관리자의 조상이 됐습니다.",
    parents: [["programmer", "solid"]]
  },
  {
    id: "app_programmer", en: "Application Programmer", ko: "애플리케이션 프로그래머", fam: "dev", year: 1965, note: "c. 1965",
    desc: "기계 자체가 아니라 업무를 처리하는 프로그램을 짜는 사람이라는 구분에서 생긴 직함입니다. 코볼 같은 업무용 언어의 확산과 함께 전산실의 주력 인력이 됐습니다. 오늘날의 애플리케이션 개발자와 소프트웨어 개발자로 이어집니다.",
    parents: [["programmer", "solid"]]
  },
  {
    id: "analyst_prog", en: "Analyst/Programmer", ko: "분석가/프로그래머", fam: "dev", year: 1970, note: "c. 1970",
    desc: "업무 분석과 코딩을 한 사람이 함께 맡는 실무형 직함입니다. 요구사항을 정리한 사람이 곧 코드를 쓰는 중소 조직에서 흔했습니다. 1980년대에 소프트웨어 개발자라는 이름에 자리를 내주었습니다.",
    parents: [["programmer", "solid"], ["systems_analyst", "solid"]]
  },
  {
    id: "software_eng", en: "Software Engineer", ko: "소프트웨어 엔지니어", fam: "dev", year: 1966, note: "c. 1966 명명, 1968 NATO 회의",
    desc: "1968년 NATO 소프트웨어 공학 회의를 전후해 등장한, 공학적 방법론을 앞세운 이름입니다. 프로그래머의 사회적 위상을 올리고 대규모 시스템 개발을 정당화하려는 시도였습니다. 이후 임베디드, 아키텍트, SRE 같은 파생 직함의 모체가 됩니다.",
    parents: [["programmer", "solid"]]
  },
  {
    id: "software_dev", en: "Software Developer", ko: "소프트웨어 개발자", fam: "dev", year: 1982, note: "c. 1982",
    desc: "PC와 패키지 소프트웨어 시대에 퍼진 실무형 직함입니다. 엔지니어라는 딱딱한 말 대신 개발자라고 부르는 관행이 이때 자리 잡았습니다. 게임·웹·모바일 개발자 등 오늘날 가장 흔한 하위 직군이 여기서 갈라집니다.",
    parents: [["app_programmer", "solid"], ["analyst_prog", "solid"], ["software_eng", "both"]]
  },
  {
    id: "embedded", en: "Embedded Software Engineer", ko: "임베디드 소프트웨어 엔지니어", fam: "dev", year: 1978, note: "c. 1978",
    desc: "마이크로컨트롤러와 실시간 제약 속에서 동작하는 소프트웨어를 다루는 영역입니다. 가전과 자동차, 산업 장비처럼 눈에 보이는 제품 안에 들어가는 코드를 씁니다. 하드웨어와 맞닿아 있어 소프트웨어 공학 초기부터 별도 전문성으로 분화했습니다.",
    parents: [["software_eng", "solid"]]
  },
  {
    id: "game_dev", en: "Game Developer", ko: "게임 개발자", fam: "dev", year: 1982, note: "c. 1982",
    desc: "가정용 콘솔과 PC 게임 산업의 성장과 함께 생긴 직업입니다. 그래픽·물리·레벨 디자인까지 여러 전문 영역을 품은 스튜디오 조직에서 출발했습니다. 지금은 라이브 서비스 운영과 게임 엔진 생태계까지 아우릅니다.",
    parents: [["software_dev", "solid"]]
  },
  {
    id: "webmaster", en: "Webmaster", ko: "웹마스터", fam: "dev", year: 1993, note: "1993",
    desc: "웹사이트 한 곳을 처음부터 끝까지 혼자 관리하던 직함입니다. 서버 설정과 HTML 작성, 이미지 편집, 방명록 관리까지 모두 맡았습니다. 사이트가 커지고 역할이 쪼개지면서 프런트엔드·백엔드 개발자에게 자리를 넘겼습니다.",
    parents: [["software_dev", "solid"]]
  },
  {
    id: "web_dev", en: "Web Developer", ko: "웹 개발자", fam: "dev", year: 1995, note: "c. 1995",
    desc: "브라우저와 서버 사이에서 동작하는 웹 애플리케이션을 만드는 개발자입니다. 정적 페이지를 다루던 웹마스터가 동적 사이트와 전자상거래로 확장되며 일반적인 직함이 됐습니다. 2000년대 중반에 프런트엔드와 백엔드로 갈라집니다.",
    parents: [["software_dev", "solid"], ["webmaster", "solid"]]
  },
  {
    id: "frontend", en: "Front-end Developer", ko: "프런트엔드 개발자", fam: "dev", year: 2005, note: "c. 2005",
    desc: "사용자가 직접 보는 화면과 상호작용을 책임지는 개발자입니다. 비동기 통신과 자바스크립트 프레임워크의 발전으로 브라우저 쪽 코드가 독립된 전문성이 됐습니다. 지금은 접근성과 성능, 디자인 시스템이 주요 업무로 자리 잡았습니다.",
    parents: [["web_dev", "solid"]]
  },
  {
    id: "backend", en: "Back-end Developer", ko: "백엔드 개발자", fam: "dev", year: 2005, note: "c. 2005",
    desc: "서버와 API, 데이터 저장, 비즈니스 로직을 다루는 개발자입니다. 웹이 두꺼워지면서 화면과 분리된 서버 개발이 별도 직군이 됐습니다. 확장성과 데이터 일관성이 늘 핵심 관심사입니다.",
    parents: [["web_dev", "solid"]]
  },
  {
    id: "fullstack", en: "Full-stack Developer", ko: "풀스택 개발자", fam: "dev", year: 2008, note: "c. 2008",
    desc: "프런트엔드와 백엔드를 함께 다루는 개발자를 가리키는 말입니다. 적은 인력으로 제품을 빨리 내놓아야 하는 스타트업 문화에서 퍼졌습니다. 분업이 깊어질수록 '얕고 넓은' 역량의 가치도 함께 논쟁거리가 됩니다.",
    parents: [["frontend", "solid"], ["backend", "solid"]]
  },
  {
    id: "mobile_dev", en: "Mobile / iOS / Android Developer", ko: "모바일 개발자", fam: "dev", year: 2008, note: "2008, 앱스토어",
    desc: "앱스토어와 스마트폰 생태계가 만든 직군입니다. iOS와 안드로이드가 각각 언어와 도구, 배포 체계를 갖추면서 전문성이 굳어졌습니다. 최근에는 크로스플랫폼 도구의 확산으로 다시 경계가 흔들리고 있습니다.",
    parents: [["software_dev", "solid"]]
  },
  {
    id: "senior_se", en: "Senior Software Engineer", ko: "시니어 소프트웨어 엔지니어", fam: "dev", year: 2000, note: "c. 2000",
    desc: "연차보다 판단력과 설계 역량으로 인정받는 개발자의 호칭입니다. 사다리형 승진 체계가 퍼지면서 기술직에도 단계가 생겼습니다. 관리자가 되지 않고 영향력을 키우는 스태프·프린시펄 경로의 출발점입니다.",
    parents: [["software_eng", "solid"]]
  },
  {
    id: "staff_se", en: "Staff Software Engineer", ko: "스태프 소프트웨어 엔지니어", fam: "dev", year: 2012, note: "c. 2012",
    desc: "팀을 넘어 조직 전체에 영향을 주는 기술적 결정을 맡는 개인 기여자입니다. 관리자가 되지 않고도 영향력을 키우는 경로로 대형 테크 기업들이 정착시켰습니다. 여러 팀에 걸친 문제를 정의하고 해결하는 일이 중심입니다.",
    parents: [["senior_se", "solid"]]
  },
  {
    id: "principal_se", en: "Principal Engineer", ko: "프린시펄 엔지니어", fam: "dev", year: 2010, note: "c. 2010",
    desc: "여러 조직을 아우르는 기술 전략을 세우는 최상위 개인 기여자입니다. 스태프보다 넓은 범위에서 방향을 잡고 아키텍처와 기술 선택의 최종 판단에 관여합니다. 펠로와 함께 기술 사다리의 꼭대기층을 이룹니다.",
    parents: [["staff_se", "solid"]]
  },
  {
    id: "distinguished", en: "Distinguished Engineer / Fellow", ko: "디스팅기시드 엔지니어 / 펠로", fam: "dev", year: 2010, note: "IBM 펠로 1963, 보편화 c. 2010",
    desc: "IBM의 펠로 제도에서 시작해 업계 전반으로 퍼진 최고 기술직 호칭입니다. 평생에 걸친 기술적 공헌을 인정하는 자리로, 회사를 대표하는 기술 권위를 상징합니다. 현장에서는 흔히 '명예직에 가까운 엔지니어'로 통합니다.",
    parents: [["principal_se", "solid"]]
  },
  {
    id: "dx_engineer", en: "Developer Experience Engineer", ko: "개발자 경험(DX) 엔지니어", fam: "dev", year: 2021, note: "c. 2021",
    desc: "개발자가 코드를 쓰고 배포하는 과정 자체를 제품처럼 다루는 직함입니다. 내부 도구와 문서, 온보딩, 피드백 루프를 개선해 조직의 생산성을 끌어올립니다. 플랫폼 엔지니어링과 개발자 관계(DevRel) 사이에 위치합니다.",
    parents: [["platform_eng", "solid"], ["dev_advocate", "dashed"]]
  },

  {
    id: "systems_analyst", en: "Systems Analyst", ko: "시스템 분석가", fam: "lead", year: 1955, note: "c. 1955",
    desc: "컴퓨터에 업무를 옮기기 전에 절차를 분석하고 설계도를 그리는 사람입니다. 종이 서류와 전표의 흐름을 기계가 읽을 수 있는 절차로 바꾸는 일이었습니다. 오늘날 비즈니스 분석가와 솔루션 아키텍트의 공통 조상입니다.",
    parents: [["programmer", "solid"]]
  },
  {
    id: "dp_manager", en: "Data Processing (DP) Manager", ko: "전산(DP) 관리자", fam: "lead", year: 1958, note: "c. 1958",
    desc: "전산 부서의 첫 관리자급 직함입니다. 천공 카드와 배치 작업 일정, 인력과 장비를 관리했습니다. 정보시스템이 커지면서 IT 매니저로 계승됐습니다.",
    parents: [["systems_analyst", "solid"]]
  },
  {
    id: "project_manager", en: "Project Manager (software)", ko: "프로젝트 매니저", fam: "lead", year: 1962, note: "c. 1962",
    desc: "일정과 예산, 자원을 관리하는 소프트웨어 프로젝트 책임자입니다. 대형 정부·국방 프로젝트에서 생겨 민간으로 퍼졌습니다. 이후 스크럼 마스터와 프로덕트 매니저라는 두 갈래로 나뉩니다.",
    parents: [["dp_manager", "solid"]]
  },
  {
    id: "tech_lead", en: "Technical Lead / Lead Programmer", ko: "테크 리드", fam: "lead", year: 1972, note: "c. 1972",
    desc: "팀에서 기술적 방향을 잡는 선임 프로그래머입니다. 직접 코드를 쓰면서 다른 사람의 코드를 검토하고 설계를 결정했습니다. 오늘날 테크 리드와 엔지니어링 매니저의 원형입니다.",
    parents: [["programmer", "solid"]]
  },
  {
    id: "cio", en: "CIO", ko: "최고정보책임자(CIO)", fam: "lead", year: 1981, note: "c. 1981",
    desc: "조직의 정보기술 전체를 책임지는 임원입니다. 정보를 비용이 아니라 자산으로 보는 시각이 확산되면서 생겼습니다. 예산과 규제, 전사 시스템 전략을 함께 다룹니다.",
    parents: [["it_manager", "solid"]]
  },
  {
    id: "it_manager", en: "IT Manager", ko: "IT 매니저", fam: "lead", year: 1985, note: "c. 1985",
    desc: "사내 전산과 IT 운영 조직의 관리자입니다. 직원용 시스템과 인프라, 외부 업체를 총괄하며 CIO의 아래 단계를 이룹니다. 기술 실무보다 운영과 예산의 비중이 큽니다.",
    parents: [["dp_manager", "solid"]]
  },
  {
    id: "cto", en: "CTO", ko: "최고기술책임자(CTO)", fam: "lead", year: 1990, note: "보편화 c. 1990",
    desc: "제품 기술의 방향을 책임지는 임원입니다. 1990년대 닷컴 열풍과 함께 흔한 직함이 됐습니다. 기업에 따라 CIO와 역할이 겹치거나, 반대로 제품 개발만 맡기도 합니다.",
    parents: [["vp_eng", "dashed"], ["cio", "dashed"]]
  },
  {
    id: "business_analyst", en: "Business Analyst", ko: "비즈니스 분석가", fam: "lead", year: 1990, note: "c. 1990",
    desc: "업무 요구사항을 정리해 기술팀과 비즈니스 사이를 번역하는 역할입니다. 시스템 분석가의 후신으로, 프로세스 개선과 데이터 분석까지 담당 범위가 넓어졌습니다.",
    parents: [["systems_analyst", "solid"]]
  },
  {
    id: "product_manager", en: "Product Manager", ko: "프로덕트 매니저(PM)", fam: "lead", year: 1990, note: "c. 1990",
    desc: "무엇을 왜 만드는지 결정하는 제품 책임자입니다. 프로젝트 관리에서 파생됐지만 일정이 아니라 가치와 우선순위에 초점을 둡니다. 사용자 조사와 지표, 로드맵이 주된 도구입니다.",
    parents: [["project_manager", "dashed"]]
  },
  {
    id: "software_arch", en: "Software Architect", ko: "소프트웨어 아키텍트", fam: "lead", year: 1992, note: "c. 1992",
    desc: "시스템 구조와 기술 선택을 설계하는 전문가입니다. 코드를 잘 쓰는 것과 다른 차원의 판단이 필요하다는 인식이 퍼지며 분화했습니다. 큰 시스템에서 변경 비용을 좌우하는 결정을 맡습니다.",
    parents: [["software_eng", "solid"]]
  },
  {
    id: "enterprise_arch", en: "Enterprise Architect", ko: "엔터프라이즈 아키텍트", fam: "lead", year: 1995, note: "c. 1995",
    desc: "조직 전체의 시스템과 데이터, 프로세스를 하나의 청사진으로 정리하는 역할입니다. 부서마다 흩어진 시스템을 통합하려는 시도에서 생겼습니다. 표준과 거버넌스, 중장기 로드맵이 주요 산출물입니다.",
    parents: [["solutions_arch", "solid"]]
  },
  {
    id: "solutions_arch", en: "Solutions Architect", ko: "솔루션 아키텍트", fam: "lead", year: 1998, note: "c. 1998",
    desc: "특정 고객의 요구에 맞춰 제품과 기술을 조합해 해법을 설계하는 역할입니다. 소프트웨어 벤더를 중심으로 퍼졌고, 클라우드 아키텍트의 선배 격입니다.",
    parents: [["software_arch", "solid"], ["systems_analyst", "dashed"]]
  },
  {
    id: "vp_eng", en: "VP Engineering", ko: "엔지니어링 VP", fam: "lead", year: 2000, note: "c. 2000",
    desc: "엔지니어링 조직 전체를 이끄는 임원입니다. 여러 매니저를 거느리고 채용과 문화, 기술 전략을 함께 책임집니다. 제품 조직이 커지며 CTO와 역할을 나누는 경우가 많습니다.",
    parents: [["eng_manager", "solid"]]
  },
  {
    id: "scrum_master", en: "Scrum Master / Agile Coach", ko: "스크럼 마스터 / 애자일 코치", fam: "lead", year: 2002, note: "c. 2002",
    desc: "애자일 전환과 함께 생긴 역할입니다. 프로세스를 지키고 장애를 걷어내는 촉진자로 출발했습니다. 조직이 형식적으로 운영하면서 정작 필요 없는 자리로 여겨지는 논쟁도 함께 커졌습니다.",
    parents: [["project_manager", "solid"]]
  },
  {
    id: "eng_manager", en: "Engineering Manager", ko: "엔지니어링 매니저", fam: "lead", year: 2005, note: "c. 2005",
    desc: "개발자에서 사람 관리자로 넘어간 첫 단계입니다. 채용과 성장, 일정, 팀 건강을 책임지며 코드에서 손을 떼는 경우가 많습니다. 테크 리드와 짝을 이루는 경우가 흔합니다.",
    parents: [["tech_lead", "solid"]]
  },
  {
    id: "cloud_arch", en: "Cloud Architect", ko: "클라우드 아키텍트", fam: "lead", year: 2011, note: "c. 2011",
    desc: "클라우드 환경의 구조와 비용, 보안, 확장성을 설계하는 전문가입니다. 솔루션 아키텍트에서 파생됐고 클라우드 도입기와 자격증 붐을 타고 급증했습니다.",
    parents: [["solutions_arch", "solid"]]
  },
  {
    id: "platform_pm", en: "Platform Product Manager", ko: "플랫폼 PM", fam: "lead", year: 2021, note: "c. 2021",
    desc: "내부 개발자 플랫폼을 제품처럼 운영하는 PM입니다. 사용자가 외부 고객이 아니라 동료 개발자라는 점이 다릅니다. 채택률과 생산성 지표가 성과의 척도가 됩니다.",
    parents: [["product_manager", "solid"], ["platform_eng", "dashed"]]
  },

  {
    id: "comms_eng", en: "Telecoms Engineer", ko: "통신 엔지니어", fam: "net", year: 1940, note: "1940년대 이전",
    desc: "전신과 전화, 무선 설비를 다루던 통신 엔지니어입니다. 컴퓨터가 네트워크로 연결되기 전부터 존재했고, 그 기술이 데이터 통신으로 옮겨가며 네트워크 직군의 뿌리가 됐습니다.",
    parents: []
  },
  {
    id: "sec_officer", en: "Information Security Officer", ko: "정보보안 담당관", fam: "net", year: 1978, note: "c. 1978",
    desc: "정보 자산을 지키는 책임자라는 개념이 제도화되며 생긴 직함입니다. 주로 규정과 정책, 감사 대응을 담당했습니다. 오늘날 최고정보보호책임자의 전신입니다.",
    parents: [["comms_eng", "dashed"]]
  },
  {
    id: "network_admin", en: "Network Administrator", ko: "네트워크 관리자", fam: "net", year: 1985, note: "c. 1985",
    desc: "근거리·광역 네트워크 장비를 설치하고 운영하는 관리자입니다. 라우터와 스위치, 방화벽 설정이 주 업무입니다. 네트워크가 업무 기반이 되면서 전산실의 필수 인력이 됐습니다.",
    parents: [["comms_eng", "solid"], ["sysadmin", "dashed"]]
  },
  {
    id: "sec_analyst", en: "Security Analyst", ko: "보안 분석가", fam: "net", year: 1988, note: "c. 1988",
    desc: "로그와 사고 기록을 분석해 위협을 찾아내는 역할입니다. 보안이 규정 준수에서 실무 감시로 옮겨가며 생겼습니다. 관제와 사고 대응이 대표 업무입니다.",
    parents: [["sec_officer", "solid"]]
  },
  {
    id: "network_eng", en: "Network Engineer", ko: "네트워크 엔지니어", fam: "net", year: 1990, note: "c. 1990",
    desc: "네트워크를 설계하고 고도화하는 엔지니어입니다. 관리자보다 설계와 성능, 가용성에 무게를 둡니다. 인터넷 확산기에 라우팅과 프로토콜 전문가로 자리 잡았습니다.",
    parents: [["network_admin", "solid"]]
  },
  {
    id: "network_arch", en: "Network Architect", ko: "네트워크 아키텍트", fam: "net", year: 1995, note: "c. 1995",
    desc: "기업 네트워크의 구조와 표준을 설계하는 전문가입니다. 다지점·대규모 환경에서 일관된 설계와 확장 계획을 책임집니다.",
    parents: [["network_eng", "solid"]]
  },
  {
    id: "sec_engineer", en: "Security Engineer", ko: "보안 엔지니어", fam: "net", year: 1995, note: "c. 1995",
    desc: "보안 통제를 실제로 구현하는 엔지니어입니다. 암호화와 인증, 방화벽 정책처럼 기술적 방어를 직접 만듭니다. 분석가가 위협을 찾는 일이라면 이쪽은 막는 일을 맡습니다.",
    parents: [["sec_analyst", "solid"], ["network_eng", "dashed"]]
  },
  {
    id: "ciso", en: "CISO", ko: "최고정보보호책임자(CISO)", fam: "net", year: 1995, note: "1995, 씨티은행",
    desc: "최고 정보보호 책임자입니다. 1990년대 금융권에서 제도화되어 규제 대응과 보안 전략을 함께 맡습니다. 사고가 나면 가장 먼저 설명 책임을 지는 자리이기도 합니다.",
    parents: [["sec_officer", "solid"]]
  },
  {
    id: "pentester", en: "Penetration Tester", ko: "침투 테스터", fam: "net", year: 2000, note: "c. 2000",
    desc: "허가를 받고 시스템을 실제로 공격해 약점을 찾는 전문가입니다. 보안 엔지니어에서 갈라져 나와 모의해킹 시장을 만들었습니다. 보고서와 재현 절차가 결과물의 핵심입니다.",
    parents: [["sec_engineer", "solid"]]
  },
  {
    id: "appsec", en: "Application Security Engineer", ko: "애플리케이션 보안 엔지니어", fam: "net", year: 2005, note: "c. 2005",
    desc: "소프트웨어 개발 과정에 보안을 내장하는 엔지니어입니다. 코드 리뷰와 취약점 분석, 안전한 라이브러리 제공이 주 업무입니다. 개발팀과 같은 언어로 이야기하는 것이 강점입니다.",
    parents: [["sec_engineer", "solid"]]
  },
  {
    id: "devsecops", en: "DevSecOps Engineer", ko: "데브섹옵스 엔지니어", fam: "net", year: 2015, note: "c. 2015",
    desc: "보안 점검을 배포 파이프라인에 자동화해 넣는 역할입니다. 데브옵스의 속도와 보안의 통제를 동시에 얻으려는 시도에서 생겼습니다. 취약점 스캔과 비밀 관리, 정책 코드화가 대표 업무입니다.",
    parents: [["appsec", "solid"], ["devops", "dashed"]]
  },
  {
    id: "cloud_network", en: "Cloud Network Engineer", ko: "클라우드 네트워크 엔지니어", fam: "net", year: 2015, note: "c. 2015",
    desc: "클라우드의 가상 네트워크와 라우팅, 연결성을 설계하는 엔지니어입니다. 물리 장비 중심이던 네트워크 업무가 코드와 설정으로 옮겨간 결과입니다.",
    parents: [["network_eng", "solid"], ["cloud_eng", "dashed"]]
  },
  {
    id: "ai_red_team", en: "AI Red Teamer", ko: "AI 레드팀", fam: "net", year: 2023, note: "c. 2023",
    desc: "생성형 AI 시스템을 적대적으로 시험해 오남용과 안전 문제를 찾는 역할입니다. 침투 테스트의 방법론을 모델과 에이전트에 적용합니다. 탈옥과 데이터 유출, 편향 평가가 주요 과제입니다.",
    parents: [["pentester", "solid"]]
  },

  {
    id: "statistician", en: "Statistician", ko: "통계학자", fam: "data", year: 1940, note: "1940년대 이전",
    desc: "데이터를 다루는 가장 오래된 전문직입니다. 실험 설계와 추론 방법을 발전시켰고, 그 통계학이 데이터 분석과 머신러닝의 방법론적 토대가 됐습니다.",
    parents: []
  },
  {
    id: "data_librarian", en: "Data / Tape Librarian", ko: "데이터·테이프 사서", fam: "data", year: 1960, note: "c. 1960",
    desc: "자기테이프와 천공카드를 보관하고 색인하던 전문 인력입니다. 데이터셋을 찾아주고 관리하는 일이 곧 데이터 관리의 시작이었습니다. 관계형 데이터베이스가 퍼지면서 그 자리를 DBA가 이어받았습니다.",
    parents: [["statistician", "dashed"]]
  },
  {
    id: "dba", en: "Database Administrator (DBA)", ko: "데이터베이스 관리자(DBA)", fam: "data", year: 1971, note: "c. 1971",
    desc: "데이터베이스의 구조와 성능, 백업, 권한을 책임지는 관리자입니다. 관계형 데이터베이스의 확산과 함께 필수 직군이 됐습니다. 지금은 클라우드 관리형 서비스 덕에 역할이 축소·전문화됐습니다.",
    parents: [["data_librarian", "solid"], ["sys_programmer", "solid"]]
  },
  {
    id: "data_analyst", en: "Data Analyst", ko: "데이터 분석가", fam: "data", year: 1985, note: "c. 1985",
    desc: "스프레드시트와 SQL로 업무 데이터를 뽑아 보고서로 만드는 역할입니다. 통계학자와 전산 실무 사이에서 생겨났습니다. 지금은 BI 도구와 대시보드가 주된 작업 환경입니다.",
    parents: [["statistician", "solid"]]
  },
  {
    id: "dw_developer", en: "Data Warehouse / BI Developer", ko: "데이터 웨어하우스·BI 개발자", fam: "data", year: 1988, note: "c. 1988",
    desc: "분석용으로 데이터를 모델링하고 적재하는 개발자입니다. 데이터 웨어하우스와 BI 도구의 보급과 함께 등장했습니다. 차원 모델링과 리포트 성능이 주요 관심사였습니다.",
    parents: [["dba", "solid"]]
  },
  {
    id: "etl_dev", en: "ETL Developer", ko: "ETL 개발자", fam: "data", year: 1995, note: "c. 1995",
    desc: "여러 원천의 데이터를 추출·변환·적재하는 파이프라인을 만드는 개발자입니다. 야간 배치와 데이터 정합성 검증이 일상이었습니다. 이 역할이 훗날 데이터 엔지니어링으로 확장됩니다.",
    parents: [["dw_developer", "solid"]]
  },
  {
    id: "big_data", en: "Big Data / Hadoop Engineer", ko: "빅데이터·하둡 엔지니어", fam: "data", year: 2009, note: "c. 2009",
    desc: "하둡과 분산 처리로 대용량 데이터를 다루는 엔지니어입니다. 데이터 규모가 폭발하며 등장했고, 생태계가 성숙하면서 데이터 엔지니어라는 이름에 흡수됐습니다.",
    parents: [["etl_dev", "solid"]]
  },
  {
    id: "data_scientist", en: "Data Scientist", ko: "데이터 사이언티스트", fam: "data", year: 2008, note: "2008",
    desc: "통계와 프로그래밍, 도메인 지식을 함께 쓰는 분석가입니다. '데이터에서 답을 찾는 사람'이라는 이름으로 2010년대 가장 뜨거운 직함이 됐습니다. 지금은 분석과 모델링, 엔지니어링 사이에서 역할이 다시 나뉘는 중입니다.",
    parents: [["statistician", "solid"], ["data_analyst", "solid"]]
  },
  {
    id: "data_engineer", en: "Data Engineer", ko: "데이터 엔지니어", fam: "data", year: 2013, note: "c. 2013",
    desc: "데이터가 흐르는 길 자체를 만드는 엔지니어입니다. ETL과 빅데이터 직군이 합쳐지며 파이프라인과 품질, 스키마를 책임지는 직함으로 자리 잡았습니다. 분석가와 과학자가 일할 수 있는 토대를 깝니다.",
    parents: [["big_data", "solid"], ["etl_dev", "solid"]]
  },
  {
    id: "ml_engineer", en: "Machine Learning Engineer", ko: "머신러닝 엔지니어", fam: "data", year: 2015, note: "c. 2015",
    desc: "모델을 서비스로 만드는 엔지니어입니다. 실험 노트북의 코드를 프로덕션 수준의 성능과 안정성으로 끌어올리는 일이 핵심입니다. 학습 파이프라인과 추론 서버, 평가 체계를 함께 다룹니다.",
    parents: [["data_scientist", "solid"], ["software_eng", "dashed"]]
  },
  {
    id: "analytics_eng", en: "Analytics Engineer", ko: "애널리틱스 엔지니어", fam: "data", year: 2019, note: "c. 2019",
    desc: "분석가와 데이터 엔지니어 사이를 잇는 역할입니다. 지표 정의를 코드로 관리하고 분석용 데이터 모델을 만듭니다. '믿을 수 있는 한 개의 숫자'를 만드는 일이 목표입니다.",
    parents: [["data_engineer", "solid"], ["data_analyst", "solid"]]
  },
  {
    id: "prompt_eng", en: "Prompt Engineer", ko: "프롬프트 엔지니어", fam: "data", year: 2022, note: "c. 2022",
    desc: "언어 모델에 넣을 지시문을 설계하는 직함입니다. 2022년 말에 채용 공고가 쏟아질 만큼 화제가 됐습니다. 모델이 좋아지고 도구가 편해지면서 독립 직업으로서의 수명은 짧았고, 평가와 컨텍스트 설계로 흡수됐습니다.",
    parents: [["data_scientist", "dashed"]]
  },
  {
    id: "ai_engineer", en: "AI Engineer", ko: "AI 엔지니어", fam: "data", year: 2023, note: "c. 2023",
    desc: "모델을 애플리케이션에 통합해 제품으로 만드는 엔지니어입니다. 프롬프트와 검색, 평가, 배포까지 아우르며 소프트웨어 엔지니어링과 머신러닝의 경계를 다시 그었습니다.",
    parents: [["ml_engineer", "solid"], ["software_eng", "solid"], ["prompt_eng", "solid"]]
  },
  {
    id: "agent_eng", en: "AI Agent / Context Engineer", ko: "AI 에이전트 / 컨텍스트 엔지니어", fam: "data", year: 2025, note: "c. 2025",
    desc: "모델이 스스로 도구를 쓰고 여러 단계를 수행하도록 설계하는 역할입니다. 대화 맥락과 메모리, 도구 연결, 실패 복구를 설계하는 일이 핵심이 되어 '컨텍스트 엔지니어'라는 이름도 함께 쓰입니다. 계보도의 가장 아래, 지금 만들어지고 있는 직함입니다.",
    parents: [["ai_engineer", "solid"]]
  }
);
