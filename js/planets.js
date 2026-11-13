// 행성 페이지: 카드 렌더링, 분류 필터, 상세 모달
(function () {
  const grid = document.getElementById("planet-grid");
  const modal = document.getElementById("planet-modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = modal.querySelector(".modal-close");
  let lastFocused = null;

  // 카드 생성
  grid.innerHTML = PLANETS.map((p, i) => `
    <button class="planet-card reveal" data-id="${p.id}" data-type="${p.type}"
            style="--planet-color:${p.color}"
            aria-label="${p.name} 자세히 보기">
      <img class="planet-img" src="${p.img}" alt="${p.name}" loading="lazy"
           style="animation-delay:${-i * 0.6}s">
      <h3>${p.name}</h3>
      <div class="en">${p.en}</div>
      <span class="tag ${p.type}">${p.typeLabel} 행성</span>
      <p class="summary">${p.summary}</p>
    </button>
  `).join("");
  window.observeReveal(grid);

  // 필터
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const type = btn.dataset.filter;
      grid.querySelectorAll(".planet-card").forEach((card) => {
        card.classList.toggle("hidden", type !== "all" && card.dataset.type !== type);
      });
    });
  });

  // 모달 열기/닫기
  function openModal(id) {
    const p = PLANETS.find((x) => x.id === id);
    if (!p) return;
    lastFocused = document.activeElement;
    modalBody.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <div>
        <h2 id="modal-title">${p.name} <small style="color:var(--muted);font-size:1rem">${p.en}</small></h2>
        <span class="tag ${p.type}">${p.typeLabel} 행성</span>
        <p style="margin-top:12px">${p.summary}</p>
        <dl class="info-list">
          <div><dt>지름</dt><dd>${p.diameter.toLocaleString()} km</dd></div>
          <div><dt>태양과의 거리</dt><dd>${p.distanceKm}</dd></div>
          <div><dt>공전 주기 (1년)</dt><dd>${p.orbitLabel}</dd></div>
          <div><dt>자전 주기 (하루)</dt><dd>${p.rotation}</dd></div>
          <div><dt>위성 수</dt><dd>${p.moonsLabel || p.moons + "개"}</dd></div>
          <div><dt>온도</dt><dd>${p.temp}</dd></div>
        </dl>
        <h3 style="margin-bottom:6px">흥미로운 사실</h3>
        <ul class="fact-list">${p.facts.map((f) => `<li>${f}</li>`).join("")}</ul>
      </div>
    `;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".planet-card");
    if (card) openModal(card.dataset.id);
  });
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });

  // 주소에 #mars 처럼 행성 id가 있으면 바로 열기 (홈에서 링크 시 사용)
  const openFromHash = () => { const h = location.hash.slice(1); if (h) openModal(h); };
  openFromHash();
  window.addEventListener("hashchange", openFromHash);
})();
