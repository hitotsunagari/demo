const header = document.querySelector("#siteHeader");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".global-nav a");
const demoForm = document.querySelector(".demo-form");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

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

demoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = demoForm.querySelector("button");
  const originalText = button.textContent;
  button.textContent = "送信されません";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
  }, 1800);
});

const revealTargets = document.querySelectorAll(".section, .wide-photo, .gallery figure");
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
  target.style.transition = "opacity 0.6s ease, transform 0.6s ease";
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
