const header = document.querySelector("[data-header]");
const nav = document.querySelector("#site-nav");
const navToggle = document.querySelector(".nav-toggle");
const demoForm = document.querySelector("[data-demo-form]");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

demoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = demoForm.querySelector(".form-message");
  message.textContent = "デモ送信です。実際には送信されません。";
});
