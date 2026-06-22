const header = document.getElementById('siteHeader');
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('globalNav');
const form = document.querySelector('.demo-form');

const updateHeader = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 24);
};

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('is-active', !isOpen);
  header.classList.toggle('is-open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-active');
    header.classList.remove('is-open');
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = form.querySelector('button');
  const originalText = button.textContent;
  button.textContent = 'デモのため送信されません';
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
  }, 2200);
});
