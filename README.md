# ai

AI 관련 프로젝트와 실험을 모아두는 저장소입니다.

## 결과물 바로가기

| 결과물 | 주소 | 설명 |
|---|---|---|
| 태양계 탐험 | https://hyejeonglee23-creator.github.io/ai/ | 8개 행성 소개 사이트 |
| 암흑에너지 소개 | https://hyejeonglee23-creator.github.io/ai/dark-energy/ | 슬라이드 3장짜리 웹 프레젠테이션. 수치·그래프·애니메이션 |
| 삼성전자 분석 | https://hyejeonglee23-creator.github.io/ai/samsung/ | 2026년 3분기 실적, 사업부, 경쟁사, 시나리오 밸류에이션 |
| SK하이닉스 분석 | https://hyejeonglee23-creator.github.io/ai/skhynix/ | 2026년 3분기 실적, 영업이익과 순이익의 차이, HBM |
| NVIDIA 분석 | https://hyejeonglee23-creator.github.io/ai/nvidia/ | FY27 2분기 실적, CEO 사임 이슈, 경쟁 구도 |

## 암흑에너지 소개 (`dark-energy/`)

우주의 68.5%를 차지하는 암흑에너지를 소개하는 웹 프레젠테이션입니다. ←/→ 키, 화살표 버튼, 스와이프로 넘깁니다.

| 슬라이드 | 내용 |
|---|---|
| 1. 암흑에너지란 | 우주 구성 도넛 차트, 팽창하는 우주 시뮬레이션, 1917–2026 발견 연표 |
| 2. 증거와 측정 | 허블 도표(초신성), 에너지 밀도 변화, 허블 상수 긴장, 감속→가속 곡선 |
| 3. 미스터리와 미래 | 상태방정식 w 슬라이더로 우주의 결말 비교, 우주상수 문제(10¹²⁰), DESI 결과 |

- 그래프 곡선은 Planck 2018 값(Ωm = 0.315, ΩΛ = 0.685, H₀ = 67.4)으로 프리드만 방정식을 직접 계산해 그렸습니다.
- 허블 도표의 점은 실제 관측이 아닌 **모의 데이터**입니다.
- 출처는 각 슬라이드 하단에 적었습니다.

## 기업 분석 (`samsung/`, `skhynix/`, `nvidia/`)

반도체·AI 칩 기업 3곳을 같은 형식으로 분석한 페이지입니다. 상단 메뉴로 서로 이동할 수 있습니다.

> **투자 자문이 아닙니다.** 2026년 11월 13일 기준으로 공개된 실적 발표와 보도를 정리한 학습·참고용 자료입니다. 수치 대부분은 2차 보도에서 가져왔고, 모든 수치에 출처를 달았습니다. 투자 판단 전에는 원문 공시로 확인하세요.

- 구성: 핵심 지표 → 실적 추이 → 사업부 → 경쟁사 비교 → 경쟁우위 → 투자포인트·리스크 → 시나리오 밸류에이션(EPS × PER 슬라이더와 민감도 표) → 출처
- 분석 틀은 Anthropic [financial-services](https://github.com/anthropics/financial-services) 저장소의 스킬(Apache 2.0)을 웹페이지에 맞게 적용했습니다.
- 공용 스타일: `css/stock-analysis.css`

## Claude Code 스킬 (`.claude/skills/`)

이 저장소에서 Claude Code를 실행하면 아래 스킬을 쓸 수 있습니다.

| 스킬 | 용도 | 출처 |
|---|---|---|
| `ai-learning` | AI 엔지니어링 커리큘럼 한국어 튜터 ([ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) 기반) | 직접 작성 |
| `comps-analysis`, `dcf-model`, `competitive-analysis` | 비교기업 분석, DCF, 경쟁 구도 분석 | Anthropic financial-services (Apache 2.0) |
| `initiating-coverage`, `earnings-analysis`, `sector-overview` | 종목 분석 보고서, 실적 분석, 산업 개요 | Anthropic financial-services (Apache 2.0) |

라이선스 전문: `.claude/skills/LICENSE-anthropic-financial-services.txt`

## 태양계 탐험 — 행성 소개 사이트

태양계 8개 행성을 NASA 공개 사진과 함께 소개하는 정적 웹사이트입니다. HTML, CSS, JavaScript만 사용했고 로그인·주문·결제 기능은 없습니다.

**사이트 주소:** https://hyejeonglee23-creator.github.io/ai/

### 페이지 구성
| 파일 | 내용 |
|---|---|
| `index.html` | 홈. 태양 주위를 도는 행성 궤도 애니메이션, 태양계 숫자 통계, 행성 종류 소개 |
| `planets.html` | 행성 소개. 8개 행성 카드, 종류별 필터, 카드를 누르면 상세 정보 팝업 |
| `compare.html` | 행성 비교. 지름·거리·공전 주기·위성 수 막대 그래프, 실제 크기 비율, 정보 표, 이미지 출처 |

### 폴더 구조
```
css/style.css   공통 스타일과 애니메이션
js/data.js      행성 데이터
js/main.js      별 배경, 모바일 메뉴, 스크롤 등장 효과
js/planets.js   행성 카드, 필터, 상세 팝업
js/compare.js   비교 그래프, 크기 비교, 표
images/         행성 사진 (NASA, 퍼블릭 도메인)
```

### 로컬에서 보기
`index.html`을 브라우저로 열거나, 폴더에서 아래 명령을 실행한 뒤 http://localhost:8000 으로 접속합니다.
```
python3 -m http.server 8000
```

### 이미지 출처
모든 행성 사진은 NASA(일부 NASA/ESA 공동)가 공개한 퍼블릭 도메인 이미지이며, Wikimedia Commons에서 받았습니다. 사진별 출처는 `compare.html` 맨 아래에 있습니다.
