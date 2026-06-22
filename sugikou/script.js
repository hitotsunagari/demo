const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const form = document.querySelector(".demo-form");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("is-open", !isOpen);
  header.classList.toggle("is-open", !isOpen);
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    navToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    header.classList.remove("is-open");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = form.querySelector("button");
  const originalText = button.textContent;
  button.textContent = "デモのため送信されません";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
  }, 2200);
});
