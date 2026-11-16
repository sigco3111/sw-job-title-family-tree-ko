# 소프트웨어 직무 계보 · 한국어판

1940년대의 **‘계산하는 사람’**에서 2025년의 **AI 에이전트 엔지니어**까지, 소프트웨어 업계 직함 **104개**가 어떻게 갈라지고 다시 만났는지를 한 장의 계보도로 그린 정적 웹앱입니다. Ian Miell의 *A Family Tree of Software Job Titles*를 한국어로 다시 만든 **비공식 한국어판·재해석**입니다.

- 배포 페이지: <https://sigco3111.github.io/sw-job-title-family-tree-ko/>
- 원작자 글: <https://zwischenzugs.com/2026/11/03/a-family-tree-of-software-job-titles/>
- 원본 대화형 페이지: <https://ianmiell.github.io/sw-job-title-family-tree/>
- 원본 저장소: <https://github.com/ianmiell/sw-job-title-family-tree>
- 소개 글(GeekNews): <https://news.hada.io/topic?id=37182>

## 무엇이 들어 있나

| 항목 | 내용 |
| --- | --- |
| 직무 | 104개 (영문명 + 한글명 병기) |
| 계열 | 7개 — 개발 / 분석·아키텍처·리더십 / 운영·인프라 / 네트워크·보안 / 데이터·AI / 품질·테스트 / 지원·고객 대응 |
| 시간축 | 1940년대부터 2025년까지 17개 구간(5년 단위, 초기 두 구간은 10년) |
| 관계 | 실선 = 직계 파생, 점선 = 영향·경력 이동, 양방향 점선 = 서로 오가며 발전 |
| 설명 | 직무당 2~4문장의 한국어 설명과 부모·후손 관계 — **원문을 옮기지 않고 새로 작성** |

> ⚠️ **모든 연도는 추정치입니다.** 원본과 마찬가지로, 연도는 그 직함이 *흔히 쓰이기 시작한 시점*을 옮긴 제작자 추정치(c.)이며 최초 사용 연도가 아닙니다.

## 기능

- **세로 타임라인 계보도** — 시대가 세로로 흐르고, 7개 계열이 가로 레인으로 놓입니다. 맨 위가 'Computer(계산하는 사람)', 맨 아래가 'AI Agent / Context Engineer'.
- **JS로 계산한 SVG 곡선 화살표** — 열×행을 스크립트가 계산해 노드를 배치하고, 부모에서 자식으로 향하는 베지어 곡선을 그립니다. 화살표 머리는 계열 색을 따릅니다.
- **호버·포커스 시 조상·후손 하이라이트** — 그래프를 거슬러 올라가고 내려가며 관계된 노드와 엣지만 남깁니다.
- **클릭 상세 패널** — 데스크톱은 오른쪽 패널, 모바일은 하단 시트. 설명·연도 표기·부모/후손 목록·링크 복사.
- **계열 필터 · 한/영 검색** — 칩으로 계열을 고르고, SRE·데이터·platform처럼 한글·영문 모두 검색됩니다.
- **URL 해시 딥링크** — #sre, #fde 같은 직무, #data, #ops 같은 계열로 바로 진입. 공유하면 같은 화면이 열립니다.
- **시대 점프 바** — 1940년대부터 2025년까지 구간을 눌러 이동.
- **키보드 접근성** — 모든 노드가 버튼이고, 방향키로 노드 사이를 이동, Enter/Space로 상세 열기, Esc로 닫기, 스킵 링크 제공.
- **prefers-reduced-motion 대응** — 모션 최소화 설정에서는 히어로 애니메이션과 전환을 끕니다.
- **빌드·외부 CDN 없음** — index.html + assets/ + data/. 순수 HTML/CSS/JS만으로 동작합니다.

## 이야기 카드

계보도 아래에는 "일곱 가지 이야기" 섹션이 있습니다.

1. 코딩은 원래 사무업무였다 — 코더가 프로그래머로 통합된 과정
2. 웹마스터에서 프런트·백엔드로, 다시 풀스택으로
3. 프롬프트 엔지니어의 짧은 생애
4. 스크럼 마스터는 왜 줄었나
5. Systems Engineer의 두 얼굴
6. FDE와 1960년대 IBM
7. DevOps, SRE, 플랫폼 엔지니어링은 무엇이 다른가

## 스크린샷

| 데스크톱 (1280×800) | 상세 패널 | 모바일 (390×844) |
| --- | --- | --- |
| ![데스크톱](docs/screenshots/desktop-1280x800.png) | ![상세 패널](docs/screenshots/detail-panel-1280x800.png) | ![모바일](docs/screenshots/mobile-390x844.png) |

## 구조

```
index.html              페이지 마크업(히어로·컨트롤·계보도·이야기·크레딧)
assets/styles.css       다크 + 네온/글래스모피즘 테마, 반응형
assets/app.js           레이아웃 계산, SVG 엣지, 하이라이트, 패널, 검색, 해시 딥링크
data/core.js            계열·시대·메타(크레딧) 정의
data/jobs-1.js          개발 · 분석/아키텍처/리더십 · 네트워크/보안 · 데이터/AI (65개)
data/jobs-2.js          운영/인프라 · 품질/테스트 · 지원/고객 대응 (39개)
data/stories.js         이야기 카드 7편
docs/screenshots/       배포 페이지 캡처
```

로컬에서 보려면 저장소를 받은 뒤 index.html을 열거나, 정적 서버를 띄우면 됩니다.

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## 데이터를 고치려면

data/jobs-*.js의 배열에 항목을 추가하면 됩니다.

```js
{
  id: "sre",                 // 해시 딥링크로도 쓰이는 식별자
  en: "Site Reliability Engineer",
  ko: "사이트 신뢰성 엔지니어(SRE)",
  fam: "ops",                // dev | lead | ops | net | data | qa | sup
  year: 2003,                // 5년 구간으로 자동 배치
  note: "2003, 구글",         // 패널에 그대로 보이는 연도 표기
  desc: "…2~4문장 설명…",
  parents: [["unix_admin", "solid"], ["ops_analyst", "dashed"]]  // solid | dashed | both
}
```

계열은 data/core.js의 families, 시대 라벨은 eras에서 관리합니다.

## 크레딧과 라이선스

- **원작**: Ian Miell, *A Family Tree of Software Job Titles* (2026) — 글, 대화형 페이지, Graphviz 데이터(.dot), descriptions.json
- **이 저장소**: 원본의 .dot 파일과 descriptions.json, 대화형 페이지에서 직무명·계열·연도·부모/영향 관계를 재구성해 한국어 페이지로 다시 만들었습니다. 직무 설명문은 원문을 번역·복사하지 않고 한국어로 새로 썼습니다.
- **원본 라이선스**: 확인 결과 원본 저장소에는 **LICENSE 파일이나 라이선스 문구가 없습니다**(파일 목록: .nojekyll, README.md, descriptions.json, index.html, job_title_family_tree.dot/.png/.svg, README에 라이선스 언급 없음). 따라서 이 한국어판은 **라이선스 미표기 원본을 바탕으로 한 비공식 재해석**이며, 어떤 권리도 주장하지 않습니다. **원작자의 요청이 있으면 즉시 수정하거나 삭제합니다.**
- 이 페이지는 **비공식 한국어판·재해석**이며 원작자와 공식적인 제휴 관계가 없습니다. 원본 아이디어와 데이터 구조의 공은 전적으로 원작자에게 있습니다.

## 배포

GitHub Pages(브랜치 배포)로 main 브랜치 루트를 그대로 게시합니다. 빌드 단계가 없습니다.
