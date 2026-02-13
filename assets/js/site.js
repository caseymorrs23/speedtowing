(() => {
  // year
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();

  // mobile nav
  const btn = document.querySelector('[data-menu-btn]');
  const nav = document.querySelector('[data-mobile-nav]');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const open = nav.style.display === 'block';
      nav.style.display = open ? 'none' : 'block';
      btn.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
    });
  }

  // smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', href);
    });
  });
})();
