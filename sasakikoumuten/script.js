const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const form = document.querySelector("[data-demo-form]");
const formResult = document.querySelector("[data-form-result]");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  header.classList.toggle("is-open", !isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    header.classList.remove("is-open");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formResult.textContent = "デモ表示です。実際には送信されません。";
});
