const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const form = document.querySelector("[data-demo-form]");
const formResult = document.querySelector("[data-form-result]");

function updateHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

if (navToggle && header) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!header || !navToggle) return;
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

if (form && formResult) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formResult.textContent = "デモのため送信は行われません。実装時に送信先を設定します。";
  });
}

const fadeTargets = document.querySelectorAll(".section-heading, .concept-grid, .service-list, .strength-lines, .work-gallery, .flow, .company-table, .contact-form");

if ("IntersectionObserver" in window) {
  fadeTargets.forEach((target) => target.classList.add("fade-in"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  fadeTargets.forEach((target) => observer.observe(target));
}
