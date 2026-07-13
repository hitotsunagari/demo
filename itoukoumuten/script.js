const header = document.querySelector("[data-header]");
const nav = document.querySelector("#site-nav");
const toggle = document.querySelector(".nav-toggle");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".section").forEach((section) => {
  section.classList.add("fade-in");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll(".fade-in").forEach((section) => observer.observe(section));

document.querySelector(".demo-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  const original = button.textContent;
  button.textContent = "送信されません";
  setTimeout(() => {
    button.textContent = original;
  }, 1800);
});
