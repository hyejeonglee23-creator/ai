// 태양계 행성 데이터 (출처: NASA Solar System Exploration 공개 자료 기준 근사값)
const PLANETS = [
  {
    id: "mercury", name: "수성", en: "Mercury", type: "rocky", typeLabel: "암석형",
    img: "images/mercury.jpg", color: "#b5b0a8",
    diameter: 4879, distanceAU: 0.39, distanceKm: "약 5,790만 km",
    orbitDays: 88, orbitLabel: "88일", rotation: "약 58.6일",
    moons: 0, temp: "-173°C ~ 427°C",
    summary: "태양에 가장 가깝고 가장 작은 행성입니다.",
    facts: [
      "대기가 거의 없어 낮과 밤의 온도 차가 600°C에 이릅니다.",
      "표면이 달처럼 수많은 충돌구로 덮여 있습니다.",
      "공전이 빨라 1년이 지구 기준 88일밖에 되지 않습니다."
    ]
  },
  {
    id: "venus", name: "금성", en: "Venus", type: "rocky", typeLabel: "암석형",
    img: "images/venus.jpg", color: "#e8d3a0",
    diameter: 12104, distanceAU: 0.72, distanceKm: "약 1억 820만 km",
    orbitDays: 225, orbitLabel: "225일", rotation: "약 243일 (역방향)",
    moons: 0, temp: "평균 약 464°C",
    summary: "두꺼운 이산화탄소 대기로 태양계에서 가장 뜨거운 행성입니다.",
    facts: [
      "자전 방향이 반대라 태양이 서쪽에서 떠서 동쪽으로 집니다.",
      "하루(자전 주기)가 1년(공전 주기)보다 깁니다.",
      "밤하늘에서 달 다음으로 밝게 보여 '샛별'로 불립니다."
    ]
  },
  {
    id: "earth", name: "지구", en: "Earth", type: "rocky", typeLabel: "암석형",
    img: "images/earth.jpg", color: "#4f8fd6",
    diameter: 12756, distanceAU: 1.0, distanceKm: "약 1억 4,960만 km",
    orbitDays: 365.25, orbitLabel: "365.25일", rotation: "약 23시간 56분",
    moons: 1, temp: "평균 약 15°C",
    summary: "액체 상태의 물과 생명이 확인된 유일한 행성입니다.",
    facts: [
      "표면의 약 71%가 바다로 덮여 있습니다.",
      "자기장이 태양풍으로부터 대기와 생명을 보호합니다.",
      "달은 지구 크기에 비해 유난히 큰 위성입니다."
    ]
  },
  {
    id: "mars", name: "화성", en: "Mars", type: "rocky", typeLabel: "암석형",
    img: "images/mars.jpg", color: "#c1440e",
    diameter: 6792, distanceAU: 1.52, distanceKm: "약 2억 2,790만 km",
    orbitDays: 687, orbitLabel: "687일", rotation: "약 24시간 37분",
    moons: 2, temp: "평균 약 -65°C",
    summary: "산화철 먼지 때문에 붉게 보이는 '붉은 행성'입니다.",
    facts: [
      "태양계에서 가장 높은 화산 올림푸스 산(약 22km)이 있습니다.",
      "하루 길이가 지구와 거의 같습니다.",
      "포보스와 데이모스라는 작은 위성 2개를 가지고 있습니다."
    ]
  },
  {
    id: "jupiter", name: "목성", en: "Jupiter", type: "gas", typeLabel: "가스형",
    img: "images/jupiter.jpg", color: "#d8a774",
    diameter: 142984, distanceAU: 5.2, distanceKm: "약 7억 7,850만 km",
    orbitDays: 4333, orbitLabel: "약 11.9년", rotation: "약 9시간 56분",
    moons: 95, moonsLabel: "95개 이상", temp: "구름 상층 약 -110°C",
    summary: "태양계에서 가장 큰 행성으로, 지구 1,300개 이상이 들어갑니다.",
    facts: [
      "대적점은 수백 년 이상 지속된 거대한 폭풍입니다.",
      "자전이 매우 빨라 하루가 10시간이 채 되지 않습니다.",
      "위성 가니메데는 수성보다도 큽니다."
    ]
  },
  {
    id: "saturn", name: "토성", en: "Saturn", type: "gas", typeLabel: "가스형",
    img: "images/saturn.jpg", color: "#e3c88f",
    diameter: 120536, distanceAU: 9.54, distanceKm: "약 14억 3,350만 km",
    orbitDays: 10759, orbitLabel: "약 29.5년", rotation: "약 10시간 33분",
    moons: 274, moonsLabel: "274개", temp: "구름 상층 약 -140°C",
    summary: "얼음과 암석으로 이루어진 아름다운 고리를 가진 행성입니다.",
    facts: [
      "평균 밀도가 물보다 낮습니다.",
      "고리의 폭은 수십만 km지만 두께는 대부분 수십 m 정도입니다.",
      "위성 타이탄에는 두꺼운 대기와 메탄 호수가 있습니다."
    ]
  },
  {
    id: "uranus", name: "천왕성", en: "Uranus", type: "ice", typeLabel: "얼음형",
    img: "images/uranus.jpg", color: "#9fd8e0",
    diameter: 51118, distanceAU: 19.19, distanceKm: "약 28억 7,250만 km",
    orbitDays: 30687, orbitLabel: "약 84년", rotation: "약 17시간 14분 (역방향)",
    moons: 29, moonsLabel: "29개", temp: "약 -195°C",
    summary: "자전축이 약 98° 기울어져 옆으로 누워서 도는 행성입니다.",
    facts: [
      "극지방은 약 42년 동안 낮, 42년 동안 밤이 이어집니다.",
      "대기의 메탄이 붉은빛을 흡수해 청록색으로 보입니다.",
      "망원경으로 발견된 최초의 행성입니다 (1781년)."
    ]
  },
  {
    id: "neptune", name: "해왕성", en: "Neptune", type: "ice", typeLabel: "얼음형",
    img: "images/neptune.jpg", color: "#4b70dd",
    diameter: 49528, distanceAU: 30.07, distanceKm: "약 44억 9,510만 km",
    orbitDays: 60190, orbitLabel: "약 165년", rotation: "약 16시간 6분",
    moons: 16, moonsLabel: "16개", temp: "약 -200°C",
    summary: "태양에서 가장 멀리 있는, 강한 바람이 부는 푸른 행성입니다.",
    facts: [
      "바람 속도가 시속 2,000km를 넘어 태양계에서 가장 빠릅니다.",
      "관측이 아닌 수학 계산으로 위치가 먼저 예측된 행성입니다.",
      "발견(1846년) 이후 2011년에야 첫 공전을 마쳤습니다."
    ]
  }
];
