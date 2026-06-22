const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const demoForm = document.querySelector("[data-demo-form]");
const formNote = document.querySelector("[data-form-note]");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

navToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const fadeTargets = document.querySelectorAll(".section-heading, .concept-text, .concept-media, .service-list article, .process-list li, .works-grid figure, .consultation-body, .company-list, .contact-copy, .contact-form");

fadeTargets.forEach((target) => target.classList.add("fade-in"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

fadeTargets.forEach((target) => observer.observe(target));

demoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = "デモフォームのため送信は行われません。実装時に送信先を設定します。";
});
