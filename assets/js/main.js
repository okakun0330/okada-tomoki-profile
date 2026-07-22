const header = document.querySelector('.site-header');
const toggle = document.getElementById('nav-toggle');

toggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});
