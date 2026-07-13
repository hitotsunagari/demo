const header = document.querySelector("[data-header]");
const nav = document.querySelector("#site-nav");
const toggle = document.querySelector(".nav-toggle");
const demoForm = document.querySelector("[data-demo-form]");
const formMessage = document.querySelector("[data-form-message]");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

demoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "デモフォームのため送信されません。実装時に送信先を設定します。";
});

const revealTargets = document.querySelectorAll(".section-heading, .concept-grid, .service-list article, .strength-list li, .work-item, .company-table div, .contact-form");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach((target) => {
  target.classList.add("reveal");
  observer.observe(target);
});
