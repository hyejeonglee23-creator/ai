# ai

AI 관련 프로젝트와 실험을 모아두는 저장소입니다.

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
