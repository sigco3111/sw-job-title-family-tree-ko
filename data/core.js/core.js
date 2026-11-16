/* 계보 데이터의 뼈대: 메타 정보, 7개 계열, 17개 시대 구간 */
window.GENEALOGY = {
  meta: {
    title: "소프트웨어 직무 계보",
    subtitle: "1940년대부터 지금까지, 104개 직함의 가계도",
    version: "1.0.0",
    sourceNote:
      "연도는 직함이 흔히 쓰이기 시작한 시점을 옮긴 제작자 추정치(c.)입니다. 최초 사용 연도가 아닙니다.",
    credits: {
      author: "Ian Miell",
      authorUrl: "https://zwischenzugs.com/2026/11/03/a-family-tree-of-software-job-titles/",
      originalSite: "https://ianmiell.github.io/sw-job-title-family-tree/",
      originalRepo: "https://github.com/ianmiell/sw-job-title-family-tree",
      geeknews: "https://news.hada.io/topic?id=37182"
    }
  },
  families: [
    {
      id: "dev",
      ko: "개발",
      en: "Development",
      short: "개발",
      desc: "기계에 명령을 옮기던 코더에서 출발해 프로그래머, 엔지니어, 프런트·백엔드·풀스택으로 갈라진 줄기.",
      color: ["#3d8bfd", "#5eead4"]
    },
    {
      id: "lead",
      ko: "분석·아키텍처·리더십",
      en: "Analysis, Architecture & Leadership",
      short: "리더십",
      desc: "업무를 분석해 설계도를 그리던 사람들과, 기술 조직의 방향을 정하는 관리자·아키텍트의 줄기.",
      color: ["#8b5cf6", "#f472b6"]
    },
    {
      id: "ops",
      ko: "운영·인프라",
      en: "Operations & Infrastructure",
      short: "운영",
      desc: "기계를 돌보던 오퍼레이터와 관리자에서 SRE·데브옵스·플랫폼 엔지니어링으로 이어지는 줄기.",
      color: ["#22c55e", "#2dd4bf"]
    },
    {
      id: "net",
      ko: "네트워크·보안",
      en: "Networks & Security",
      short: "보안",
      desc: "통신 설비와 정보 보호에서 출발해 클라우드 네트워크와 AI 레드팀까지 확장된 줄기.",
      color: ["#f97316", "#fbbf24"]
    },
    {
      id: "data",
      ko: "데이터·AI",
      en: "Data & AI",
      short: "데이터",
      desc: "통계학자와 테이프 사서에서 데이터 엔지니어, 머신러닝 엔지니어, AI 에이전트까지의 줄기.",
      color: ["#eab308", "#a3e635"]
    },
    {
      id: "qa",
      ko: "품질·테스트",
      en: "Quality & Test",
      short: "품질",
      desc: "결함을 찾던 테스터가 품질 공정과 자동화를 다루는 엔지니어가 된 줄기.",
      color: ["#ec4899", "#fb7185"]
    },
    {
      id: "sup",
      ko: "지원·고객 대응",
      en: "Support & Customer-facing",
      short: "지원",
      desc: "고객 현장에 있던 엔지니어에서 FDE, DevRel, 솔루션 엔지니어로 이어지는 줄기.",
      color: ["#64748b", "#a5b4fc"]
    }
  ],
  eras: [
    { bucket: 1940, label: "1940년대", note: "계산하는 사람에서 기계로" },
    { bucket: 1950, label: "1950년대", note: "프로그래머의 탄생" },
    { bucket: 1955, label: "1955", note: "전산 부서의 등장" },
    { bucket: 1960, label: "1960년대", note: "메인프레임과 시스템" },
    { bucket: 1965, label: "1965", note: "소프트웨어 공학" },
    { bucket: 1970, label: "1970년대", note: "데이터베이스와 테크 리드" },
    { bucket: 1975, label: "1975", note: "운영과 품질의 분화" },
    { bucket: 1980, label: "1980년대", note: "PC와 전산 관리" },
    { bucket: 1985, label: "1985", note: "네트워크와 품질 보증" },
    { bucket: 1990, label: "1990년대", note: "인터넷과 아키텍트" },
    { bucket: 1995, label: "1995", note: "웹과 보안" },
    { bucket: 2000, label: "2000년대", note: "SRE와 애자일" },
    { bucket: 2005, label: "2005", note: "프런트·백엔드와 데이터 과학" },
    { bucket: 2010, label: "2010년대", note: "클라우드와 데브옵스" },
    { bucket: 2015, label: "2015", note: "플랫폼과 머신러닝" },
    { bucket: 2020, label: "2020년대", note: "관측성과 생성형 AI" },
    { bucket: 2025, label: "2025", note: "에이전트와 컨텍스트" }
  ],
  linkTypes: {
    solid: "실선 — 직함이 부모에서 직접 파생",
    dashed: "점선 — 영향 관계 또는 흔한 경력 이동",
    both: "양방향 점선 — 서로 오가며 함께 발전"
  },
  jobs: [],
  stories: []
};
