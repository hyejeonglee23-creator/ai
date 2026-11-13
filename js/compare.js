// 비교 페이지: 막대 그래프 탭, 크기 비교, 표
(function () {
  const chart = document.getElementById("bar-chart");
  const note = document.getElementById("chart-note");

  const metrics = {
    diameter: {
      value: (p) => p.diameter,
      label: (p) => p.diameter.toLocaleString() + " km",
      note: "막대 길이는 목성의 지름을 100%로 한 상대 크기입니다."
    },
    distance: {
      value: (p) => p.distanceAU,
      label: (p) => p.distanceAU + " AU",
      note: "1 AU(천문단위)는 지구와 태양 사이의 평균 거리, 약 1억 4,960만 km입니다."
    },
    orbit: {
      value: (p) => p.orbitDays,
      label: (p) => p.orbitLabel,
      note: "행성이 태양을 한 바퀴 도는 데 걸리는 시간(지구 기준)입니다."
    },
    moons: {
      value: (p) => p.moons,
      label: (p) => p.moonsLabel || p.moons + "개",
      note: "위성 수는 새로운 발견에 따라 계속 늘어날 수 있습니다 (2025년 공개 자료 기준)."
    }
  };

  // 막대 행 생성
  chart.innerHTML = PLANETS.map((p) => `
    <div class="bar-row">
      <span class="bar-name">${p.name}</span>
      <div class="bar-track"><div class="bar-fill" data-id="${p.id}" style="background:${p.color}"></div></div>
      <span class="bar-value" data-id="${p.id}"></span>
    </div>
  `).join("");

  function render(key) {
    const m = metrics[key];
    const max = Math.max(...PLANETS.map(m.value));
    PLANETS.forEach((p) => {
      const pct = (m.value(p) / max) * 100;
      const fill = chart.querySelector(`.bar-fill[data-id="${p.id}"]`);
      // 0으로 되돌렸다가 다시 늘려 애니메이션 효과
      fill.style.width = "0";
      requestAnimationFrame(() => requestAnimationFrame(() => {
        fill.style.width = Math.max(pct, m.value(p) > 0 ? 1 : 0) + "%";
      }));
      chart.querySelector(`.bar-value[data-id="${p.id}"]`).textContent = m.label(p);
    });
    note.textContent = m.note;
  }

  document.querySelectorAll(".tabs .filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tabs .filter-btn").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      render(btn.dataset.metric);
    });
  });

  // 화면에 보일 때 처음 그리기
  const io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { render("diameter"); io.disconnect(); }
  });
  io.observe(chart);

  // 크기 비교 (지름 비율대로 이미지 크기 조절)
  const sizeLine = document.getElementById("size-line");
  const maxD = Math.max(...PLANETS.map((p) => p.diameter));
  sizeLine.innerHTML = PLANETS.map((p) => {
    const px = Math.max(Math.round((p.diameter / maxD) * 150), 8);
    const isSaturn = p.id === "saturn";
    // 토성 사진은 고리 포함이라 가로로 넓게 표시
    // (사진 속 행성 본체가 이미지 높이의 약 73%를 차지하므로 보정)
    const h = isSaturn ? Math.round(px * 1.37) : px;
    const w = isSaturn ? Math.round(h * 2.06) : px;
    return `
      <div class="size-item">
        <img src="${p.img}" alt="${p.name}" class="${isSaturn ? "wide" : ""}"
             style="width:${w}px;height:${h}px" loading="lazy">
        ${p.name}
      </div>`;
  }).join("");

  // 표
  document.getElementById("planet-table").innerHTML = PLANETS.map((p) => `
    <tr>
      <td><strong>${p.name}</strong></td>
      <td>${p.typeLabel}</td>
      <td>${p.diameter.toLocaleString()} km</td>
      <td>${p.distanceKm}</td>
      <td>${p.orbitLabel}</td>
      <td>${p.rotation}</td>
      <td>${p.moonsLabel || p.moons + "개"}</td>
    </tr>
  `).join("");
})();
