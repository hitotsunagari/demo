const header = document.querySelector("[data-header]");
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
const form = document.querySelector(".demo-form");
const result = document.querySelector(".form-result");

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

toggle.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!isOpen));
  header.classList.toggle("is-open", !isOpen);
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    toggle.setAttribute("aria-expanded", "false");
    header.classList.remove("is-open");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  result.textContent = "デモのため送信は行われません。実サイトでは送信先設定が必要です。";
});

const revealTargets = document.querySelectorAll(".section, .contact");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((target) => {
  target.style.opacity = "0";
  target.style.transform = "translateY(18px)";
  target.style.transition = "opacity 0.55s ease, transform 0.55s ease";
  observer.observe(target);
});

document.addEventListener("transitionend", (event) => {
  if (event.target.classList.contains("is-visible")) {
    event.target.style.transform = "";
  }
});

const style = document.createElement("style");
style.textContent = ".is-visible{opacity:1!important;transform:translateY(0)!important}";
document.head.appendChild(style);
