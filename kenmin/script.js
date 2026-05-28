(() => {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  const form = document.querySelector("[data-demo-form]");
  const status = document.querySelector("[data-form-status]");

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  toggle?.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    nav?.classList.toggle("is-open", !isOpen);
    header?.classList.toggle("is-open", !isOpen);
  });

  nav?.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      toggle?.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      header?.classList.remove("is-open");
    }
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (status) {
      status.textContent = "デモのため送信は行われません。実装時にフォーム連携を設定します。";
    }
  });

  const targets = document.querySelectorAll(".section-head, .service-lines article, .strength-list li, .gallery figure, .company-list div");
  targets.forEach((target) => target.classList.add("fade-in"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  targets.forEach((target) => observer.observe(target));
})();
