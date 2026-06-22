(() => {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const form = document.querySelector(".demo-form");

  const setHeaderState = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  window.addEventListener("scroll", setHeaderState, { passive: true });
  setHeaderState();

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
    header.classList.toggle("is-open", !isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      header.classList.remove("is-open");
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    const original = button.textContent;
    button.textContent = "送信されません（デモ）";
    button.disabled = true;

    window.setTimeout(() => {
      button.textContent = original;
      button.disabled = false;
    }, 1800);
  });
})();
