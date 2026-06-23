const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const globalNav = document.querySelector("#global-nav");
const demoForm = document.querySelector(".demo-form");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

navToggle.addEventListener("click", () => {
  const isOpen = globalNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

globalNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    globalNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

demoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = demoForm.querySelector(".submit-message");
  message.textContent = "送信デモを表示しました。実際には送信されません。";
});

const revealTargets = document.querySelectorAll(".section, .final-cta");

if ("IntersectionObserver" in window) {
  revealTargets.forEach((target) => target.classList.add("fade-in"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealTargets.forEach((target) => observer.observe(target));
}
