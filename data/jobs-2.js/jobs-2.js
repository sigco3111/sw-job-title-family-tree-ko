/* 운영/인프라 · 품질/테스트 · 지원/고객 대응 직무 + 이야기 카드 */

window.GENEALOGY.jobs.push(
  {
    id: "computer_operator", en: "Computer Operator", ko: "컴퓨터 오퍼레이터", fam: "ops", year: 1955, note: "c. 1955",
    desc: "컴퓨터에 작업을 걸고 테이프와 카드를 갈아 끼우던 운영 인력입니다. 한 대의 기계를 여러 사람이 나눠 쓰던 시절에는 없어서는 안 될 직업이었습니다. 배치 스케줄과 장비 상태를 관리하는 일이 중심이었습니다.",
    parents: [["programmer", "dashed"]]
  },
  {
    id: "ops_analyst", en: "Operations Analyst", ko: "운영 분석가", fam: "ops", year: 1975, note: "c. 1975",
    desc: "배치 작업과 시스템 운영 상태를 감시하고 개선하는 역할입니다. 운영을 감이 아니라 데이터로 보기 시작한 첫 단계였습니다. 장애 원인 분석과 작업 스케줄 최적화가 주 업무였습니다.",
    parents: [["computer_operator", "solid"]]
  },
  {
    id: "config_manager", en: "Configuration Manager", ko: "형상 관리자", fam: "ops", year: 1975, note: "c. 1975",
    desc: "소스와 빌드, 릴리스의 버전을 관리하는 역할입니다. 형상 관리가 전문 업무로 인정받으면서 생겼습니다. 오늘날의 버전 관리 자동화와 릴리스 관리의 출발점입니다.",
    parents: [["ops_analyst", "dashed"]]
  },
  {
    id: "sysadmin", en: "Systems Administrator", ko: "시스템 관리자", fam: "ops", year: 1980, note: "c. 1980",
    desc: "서버와 운영체제를 설치하고 운영하며 문제를 해결하는 관리자입니다. 시스템 프로그래머에서 파생되어 유닉스와 윈도우 관리자로 갈라졌습니다. '서버가 살아 있게 하는 사람'이라는 정체성이 지금까지 이어집니다.",
    parents: [["computer_operator", "solid"], ["sys_programmer", "solid"]]
  },
  {
    id: "systems_eng", en: "Systems Engineer", ko: "시스템 엔지니어", fam: "ops", year: 1985, note: "c. 1985",
    desc: "하드웨어와 운영체제, 스토리지, 네트워크를 아우르는 시스템 통합 엔지니어입니다. 한편으로는 벤더의 프리세일즈 쪽에서도 같은 이름을 써서 이 직함은 늘 두 얼굴을 갖고 있었습니다. 그래서 오늘날 검색해 보면 하는 일이 정반대인 두 직무가 나옵니다.",
    parents: [["sysadmin", "solid"]]
  },
  {
    id: "unix_admin", en: "Unix / Linux Administrator", ko: "유닉스·리눅스 관리자", fam: "ops", year: 1990, note: "c. 1990",
    desc: "유닉스 계열 서버를 다루는 관리자입니다. 인터넷과 오픈소스 확산의 주역이었고, 셸 스크립트로 반복 작업을 자동화하는 문화를 만들었습니다. 그 자동화 습관이 후에 데브옵스로 이어집니다.",
    parents: [["sysadmin", "solid"]]
  },
  {
    id: "windows_admin", en: "Windows Administrator", ko: "윈도우 관리자", fam: "ops", year: 1995, note: "c. 1995",
    desc: "기업의 윈도우 서버와 데스크톱 환경을 관리하는 관리자입니다. 도메인과 그룹 정책, 소프트웨어 배포가 대표 업무입니다. 사내 IT 운영의 큰 축을 오랫동안 담당했습니다.",
    parents: [["sysadmin", "solid"]]
  },
  {
    id: "release_manager", en: "Release Manager", ko: "릴리스 매니저", fam: "ops", year: 1995, note: "c. 1995",
    desc: "릴리스 일정과 품질 기준, 배포 승인을 관리하는 역할입니다. 소프트웨어 배포가 커지고 여러 팀이 얽히면서 생겼습니다. 변경 관리와 이해관계자 조율이 핵심입니다.",
    parents: [["config_manager", "solid"]]
  },
  {
    id: "build_release", en: "Build & Release Engineer", ko: "빌드·릴리스 엔지니어", fam: "ops", year: 2000, note: "c. 2000",
    desc: "빌드와 배포를 자동화하는 엔지니어입니다. 형상 관리와 릴리스 관리가 합쳐진 형태로, 데브옵스의 가장 직접적인 전신입니다. 빌드 스크립트와 배포 도구가 이 사람의 작품입니다.",
    parents: [["config_manager", "solid"], ["release_manager", "solid"]]
  },
  {
    id: "sre", en: "Site Reliability Engineer", ko: "사이트 신뢰성 엔지니어(SRE)", fam: "ops", year: 2003, note: "2003, 구글",
    desc: "서비스의 신뢰성을 공학으로 다루는 구글발 직함입니다. SLO와 오류 예산이라는 언어로 운영을 측정 가능한 문제로 바꿨습니다. 운영 인력을 소프트웨어로 대체하겠다는 발상이 직함의 출발점입니다.",
    parents: [["unix_admin", "solid"], ["software_eng", "solid"], ["ops_analyst", "dashed"], ["app_support", "dashed"]]
  },
  {
    id: "infra_eng", en: "Infrastructure Engineer", ko: "인프라 엔지니어", fam: "ops", year: 2005, note: "c. 2005",
    desc: "서버와 스토리지, 네트워크를 설계하고 구축하는 엔지니어입니다. 시스템 엔지니어의 역할이 넓어진 이름으로, 데이터센터 운영과 용량 계획을 맡습니다.",
    parents: [["systems_eng", "solid"]]
  },
  {
    id: "virtualisation", en: "Virtualisation Engineer", ko: "가상화 엔지니어", fam: "ops", year: 2005, note: "c. 2005",
    desc: "가상 머신과 하이퍼바이저를 도입하고 운영하는 전문가입니다. 서버 통합 열풍과 함께 등장했고, 물리 서버 여러 대를 한 대로 줄이는 일이 곧 비용 절감이었습니다. 이 기술이 클라우드의 토대가 됩니다.",
    parents: [["sysadmin", "solid"]]
  },
  {
    id: "cloud_eng", en: "Cloud Engineer", ko: "클라우드 엔지니어", fam: "ops", year: 2010, note: "c. 2010",
    desc: "클라우드에서 인프라를 코드로 구축하고 운영하는 엔지니어입니다. 가상화와 인프라 엔지니어링이 만난 결과로, 서버를 사는 대신 선언하는 일로 바뀌었습니다. 비용과 권한 관리가 새로운 숙제가 됐습니다.",
    parents: [["virtualisation", "solid"], ["infra_eng", "solid"]]
  },
  {
    id: "devops", en: "DevOps Engineer", ko: "데브옵스 엔지니어", fam: "ops", year: 2011, note: "2009년 조어, 직함은 c. 2011",
    desc: "개발과 운영의 벽을 허무는 문화이자 직함입니다. 빌드·릴리스 자동화에서 출발해 배포 파이프라인과 협업 방식 전반을 다룹니다. 이름은 방법론이지만 실제 채용에서는 도구를 다루는 엔지니어를 뜻하는 경우가 대부분입니다.",
    parents: [["build_release", "solid"], ["unix_admin", "solid"], ["sre", "both"]]
  },
  {
    id: "cicd_eng", en: "CI/CD / Automation Engineer", ko: "CI/CD·자동화 엔지니어", fam: "ops", year: 2012, note: "c. 2012",
    desc: "빌드와 테스트, 배포 파이프라인 자체를 제품처럼 만드는 엔지니어입니다. 테스트 자동화와 데브옵스의 교집합에 있습니다. 파이프라인 속도와 신뢰성이 곧 팀의 배포 속도가 됩니다.",
    parents: [["build_release", "solid"], ["test_automation", "dashed"]]
  },
  {
    id: "chaos_eng", en: "Chaos Engineer", ko: "카오스 엔지니어", fam: "ops", year: 2014, note: "c. 2014, 넷플릭스",
    desc: "일부러 장애를 일으켜 시스템의 회복력을 시험하는 역할입니다. 넷플릭스의 카오스 엔지니어링 실험에서 직함으로 굳어졌습니다. 운영 중인 서비스에서 서버를 죽여 보는 일이 업무라는 점이 인상적입니다.",
    parents: [["sre", "solid"]]
  },
  {
    id: "k8s_eng", en: "Kubernetes Engineer", ko: "쿠버네티스 엔지니어", fam: "ops", year: 2017, note: "c. 2017",
    desc: "쿠버네티스 클러스터를 구축하고 운영하는 전문가입니다. 컨테이너 오케스트레이션이 사실상 표준이 되면서 생겼습니다. 클러스터 운영이 복잡해진 만큼 관리형 서비스와 플랫폼 팀으로 일이 옮겨가고 있습니다.",
    parents: [["cloud_eng", "solid"]]
  },
  {
    id: "platform_eng", en: "Platform Engineer", ko: "플랫폼 엔지니어", fam: "ops", year: 2018, note: "c. 2018",
    desc: "내부 개발자에게 셀프서비스 인프라를 제품으로 제공하는 엔지니어입니다. 데브옵스와 SRE의 실천을 조직 차원의 플랫폼으로 묶은 이름입니다. 고객이 동료 개발자라는 점만 빼면 제품 팀과 하는 일이 비슷합니다.",
    parents: [["devops", "solid"], ["sre", "solid"], ["cloud_eng", "solid"], ["k8s_eng", "solid"]]
  },
  {
    id: "finops", en: "FinOps Engineer / Analyst", ko: "FinOps 엔지니어·분석가", fam: "ops", year: 2019, note: "c. 2019",
    desc: "클라우드 비용을 측정하고 최적화하는 역할입니다. 인프라가 사용량 과금으로 바뀌면서 재무와 엔지니어링 사이에 생겼습니다. 비용을 태그로 나누고, 낭비를 찾아내고, 예산을 예측하는 일을 합니다.",
    parents: [["cloud_eng", "solid"]]
  },
  {
    id: "mlops", en: "MLOps Engineer", ko: "MLOps 엔지니어", fam: "ops", year: 2019, note: "c. 2019",
    desc: "모델 학습과 배포, 모니터링을 자동화하는 엔지니어입니다. 데브옵스와 머신러닝 엔지니어링이 만난 직함입니다. 데이터와 모델의 버전, 재현성, 드리프트 감지가 주요 과제입니다.",
    parents: [["devops", "solid"], ["ml_engineer", "solid"]]
  },
  {
    id: "observability", en: "Observability Engineer", ko: "옵저버빌리티 엔지니어", fam: "ops", year: 2020, note: "c. 2020",
    desc: "로그와 메트릭, 트레이스를 연결해 시스템 내부를 관측 가능하게 만드는 엔지니어입니다. 단순 모니터링에서 한 단계 나아가, 낯선 장애도 데이터로 추적할 수 있게 만드는 것이 목표입니다.",
    parents: [["sre", "solid"]]
  },

  {
    id: "tester", en: "Software Tester", ko: "소프트웨어 테스터", fam: "qa", year: 1975, note: "c. 1975",
    desc: "소프트웨어를 직접 써 보고 결함을 찾는 역할입니다. 프로그래머와 분리된 전담 직무로 자리 잡은 첫 단계였습니다. 이후 품질을 공정으로 보는 QA 엔지니어로 발전합니다.",
    parents: [["programmer", "dashed"]]
  },
  {
    id: "qa_engineer", en: "QA Engineer", ko: "QA 엔지니어", fam: "qa", year: 1985, note: "c. 1985",
    desc: "품질을 사후 검사가 아니라 개발 공정의 일부로 보는 엔지니어입니다. 테스트 계획과 품질 지표, 프로세스 개선을 담당합니다. 요구사항 단계부터 결함을 줄이는 쪽으로 무게가 옮겨갔습니다.",
    parents: [["tester", "solid"]]
  },
  {
    id: "sdet", en: "SDET (Software Development Engineer in Test)", ko: "SDET(테스트 개발 엔지니어)", fam: "qa", year: 2005, note: "c. 2005, 마이크로소프트",
    desc: "테스트를 코드로 만드는 개발자입니다. 마이크로소프트가 테스트 조직의 개발 역량을 강조하며 이 직함을 퍼뜨렸습니다. 테스트 프레임워크와 도구를 직접 만드는 것이 일반 테스터와의 차이입니다.",
    parents: [["qa_engineer", "solid"]]
  },
  {
    id: "test_automation", en: "Test Automation Engineer", ko: "테스트 자동화 엔지니어", fam: "qa", year: 2010, note: "c. 2010",
    desc: "반복되는 테스트를 자동화하는 데 특화된 엔지니어입니다. UI와 API 테스트 프레임워크, 지속적 통합 연동이 주 업무입니다. 자동화가 CI 파이프라인의 일부가 되며 운영 쪽 직군과 겹치기 시작했습니다.",
    parents: [["sdet", "solid"]]
  },

  {
    id: "customer_eng", en: "Customer / Field Engineer", ko: "고객 엔지니어·필드 엔지니어", fam: "sup", year: 1940, note: "IBM, 1930년대부터",
    desc: "고객 현장에 상주하며 시스템을 설치하고 지원하는 엔지니어입니다. IBM이 1930년대부터 운영했고, 기계가 팔린 곳에 사람도 함께 가야 했습니다. 오늘날 포워드 디플로이드 엔지니어의 먼 조상입니다.",
    parents: []
  },
  {
    id: "tech_writer", en: "Technical Writer", ko: "테크니컬 라이터", fam: "sup", year: 1960, note: "c. 1960",
    desc: "매뉴얼과 문서를 전문으로 쓰는 직업입니다. 프로그래밍이 전문화되면서 프로그래머에서 분화했습니다. 지금은 인쇄물 대신 API 문서와 개발자 가이드가 주된 결과물입니다.",
    parents: [["programmer", "dashed"]]
  },
  {
    id: "presales_se", en: "Systems Engineer (pre-sales)", ko: "프리세일즈 시스템 엔지니어", fam: "sup", year: 1962, note: "c. 1962, IBM",
    desc: "영업을 기술로 지원하는 프리세일즈 시스템 엔지니어입니다. IBM이 복잡한 제품을 팔기 위해 만든 역할로, 세일즈 엔지니어의 전신입니다. 제안과 시연, 기술 검증을 맡습니다.",
    parents: [["customer_eng", "solid"]]
  },
  {
    id: "tech_support", en: "Technical Support", ko: "기술 지원", fam: "sup", year: 1970, note: "c. 1970",
    desc: "제품을 쓰다 생긴 문제를 해결해 주는 지원 인력입니다. 소프트웨어가 널리 팔리기 시작하며 전화와 서신으로 문의를 받았습니다. 이후 헬프데스크와 애플리케이션 지원으로 갈라집니다.",
    parents: [["customer_eng", "solid"]]
  },
  {
    id: "helpdesk", en: "Help Desk Technician", ko: "헬프데스크 테크니션", fam: "sup", year: 1982, note: "c. 1982",
    desc: "전화와 티켓으로 1차 문의를 처리하는 창구입니다. PC가 사무실마다 들어가며 생겼습니다. 비밀번호 재설정부터 장비 교체까지, 사내 IT의 얼굴 역할을 했습니다.",
    parents: [["tech_support", "solid"]]
  },
  {
    id: "evangelist", en: "Technology Evangelist", ko: "테크놀로지 에반젤리스트", fam: "sup", year: 1984, note: "1984, 애플",
    desc: "기술을 알리고 개발자 커뮤니티를 만드는 역할입니다. 애플의 가이 가와사키가 이 직함을 처음 쓴 것으로 알려져 있습니다. 제품 홍보와 개발자 교육의 경계에 있습니다.",
    parents: [["tech_support", "dashed"]]
  },
  {
    id: "consultant", en: "IT Consultant", ko: "IT 컨설턴트", fam: "sup", year: 1980, note: "c. 1980",
    desc: "외부에서 시스템 구축과 기술 전략을 자문하는 사람입니다. 프리세일즈와 함께 고객 대면 기술직의 한 축을 이룹니다. 산업 지식과 기술 판단을 함께 파는 일이 특징입니다.",
    parents: [["presales_se", "solid"]]
  },
  {
    id: "sales_eng", en: "Sales Engineer", ko: "세일즈 엔지니어", fam: "sup", year: 1990, note: "c. 1990",
    desc: "영업 조직에 속해 기술 검증과 제안을 맡는 엔지니어입니다. 프리세일즈의 후신으로, 제품이 복잡해질수록 중요해졌습니다. 고객의 요구를 제품 기능으로 번역하는 사람입니다.",
    parents: [["presales_se", "solid"]]
  },
  {
    id: "app_support", en: "Application Support Analyst", ko: "애플리케이션 지원 분석가", fam: "sup", year: 1995, note: "c. 1995",
    desc: "특정 업무 애플리케이션의 운영과 사용자 문의를 담당하는 분석가입니다. 서비스 데스크와 서포트 엔지니어의 중간에 있습니다. 데이터 수정과 재처리 같은 실무가 많습니다.",
    parents: [["tech_support", "solid"]]
  },
  {
    id: "service_desk", en: "Service Desk Analyst", ko: "서비스 데스크 분석가", fam: "sup", year: 1999, note: "1999, ITIL",
    desc: "ITIL 체계에서 문의와 장애, 변경 요청을 하나의 창구로 받는 역할입니다. 헬프데스크가 프로세스화된 형태로, 기록과 분류, 에스컬레이션이 핵심입니다.",
    parents: [["helpdesk", "solid"]]
  },
  {
    id: "support_eng", en: "Support Engineer", ko: "서포트 엔지니어", fam: "sup", year: 2005, note: "c. 2005",
    desc: "기술적 깊이가 필요한 고난도 지원을 맡는 엔지니어입니다. 로그를 분석하고 재현하며 제품팀과 함께 원인을 좁힙니다. 고객의 목소리를 엔지니어링에 전달하는 통로 역할도 합니다.",
    parents: [["app_support", "solid"]]
  },
  {
    id: "dev_advocate", en: "Developer Advocate / DevRel", ko: "개발자 애드버킷(DevRel)", fam: "sup", year: 2008, note: "c. 2008",
    desc: "개발자를 대상으로 제품을 알리고, 그 피드백을 제품팀에 전달하는 역할입니다. 에반젤리스트가 개발자 생태계에 맞게 변형된 형태입니다. 코드를 쓰고 글을 쓰고 커뮤니티를 운영하는 일이 뒤섞여 있습니다.",
    parents: [["evangelist", "solid"]]
  },
  {
    id: "solutions_eng", en: "Solutions Engineer", ko: "솔루션 엔지니어", fam: "sup", year: 2012, note: "c. 2012",
    desc: "고객 환경에 제품을 맞춰 설계하고 구현하는 엔지니어입니다. 세일즈 엔지니어의 범위가 구현까지 넓어진 이름입니다. 클라우드·SaaS 기업의 표준 고객 대면 기술직이 됐습니다.",
    parents: [["sales_eng", "solid"]]
  },
  {
    id: "fde", en: "Forward Deployed Engineer", ko: "포워드 디플로이드 엔지니어(FDE)", fam: "sup", year: 2010, note: "c. 2010, 팔란티어; 2025년 재조명",
    desc: "고객 현장에 파견되어 문제를 직접 정의하고 제품으로 해결하는 엔지니어입니다. 팔란티어에서 굳어진 이름이 2020년대 AI 붐과 함께 다시 주목받았습니다. 1960년대 IBM이 고객사에 엔지니어를 상주시킨 방식과 놀랍도록 닮았습니다.",
    parents: [["solutions_eng", "solid"], ["software_eng", "solid"], ["consultant", "dashed"]]
  }
);
