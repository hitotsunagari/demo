const header = document.querySelector("[data-header]");
const nav = document.querySelector("#global-nav");
const navToggle = document.querySelector(".nav-toggle");
const form = document.querySelector(".demo-form");

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = form.querySelector("button");
  const originalText = button.textContent;
  button.textContent = "送信デモを確認しました";
  button.disabled = true;
  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
  }, 2200);
});
