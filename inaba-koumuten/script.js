const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const demoForm = document.querySelector("[data-demo-form]");
const formMessage = document.querySelector("[data-form-message]");

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if (navToggle && nav && header) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
    header.classList.toggle("is-open", !isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      header.classList.remove("is-open");
    });
  });
}

if (demoForm && formMessage) {
  demoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "デモフォームのため送信は行われません。公開時に実フォームへ接続してください。";
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(18px)";
  section.style.transition = "opacity 0.7s ease, transform 0.7s ease";
  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".section.is-visible").forEach((section) => {
    section.style.opacity = "1";
    section.style.transform = "translateY(0)";
  });
});

const style = document.createElement("style");
style.textContent = ".section.is-visible{opacity:1!important;transform:translateY(0)!important}";
document.head.appendChild(style);
