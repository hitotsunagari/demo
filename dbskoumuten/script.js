// Header behavior
const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const navToggle = document.querySelector('[data-nav-toggle]');

const setHeaderState = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 20);
};

setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  header.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    header.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Gentle reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.fade-in, .section-heading, .two-column, .service-list article, .reason-list div, .work-grid figure, .consult-panel, .company table, .contact-copy, .demo-form').forEach((element) => {
  element.classList.add('fade-in');
  observer.observe(element);
});

// Demo-only form
document.querySelector('.demo-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const note = event.currentTarget.querySelector('.form-note');
  note.textContent = 'デモフォームのため送信されません。実装時に送信先を設定します。';
});
