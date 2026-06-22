const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
const demoForm = document.querySelector(".demo-form");
const formNote = document.querySelector("[data-form-note]");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    navToggle?.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  }
});

demoForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = "デモ表示です。実際には送信されません。";
});
