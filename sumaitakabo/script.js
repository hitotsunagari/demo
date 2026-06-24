const header = document.querySelector("[data-header]");
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#global-nav");
const form = document.querySelector("[data-demo-form]");
const result = document.querySelector("[data-form-result]");

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

toggle.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("is-open", !isOpen);
  header.classList.toggle("is-open", !isOpen);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    header.classList.remove("is-open");
  });
});

const revealTargets = document.querySelectorAll(".section, .service-lines article, .work-grid figure");
revealTargets.forEach((target) => target.classList.add("reveal"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach((target) => observer.observe(target));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  result.textContent = "デモ表示です。実際には送信されません。";
});
