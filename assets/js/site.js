(function () {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  // Mailto form handler (no backend required)
  const form = document.querySelector('[data-mailto-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const to = form.getAttribute('data-mailto-to') || '';
      const subject = encodeURIComponent(form.getAttribute('data-mailto-subject') || 'Tow Request');
      const name = form.querySelector('[name="name"]')?.value?.trim() || '';
      const phone = form.querySelector('[name="phone"]')?.value?.trim() || '';
      const location = form.querySelector('[name="location"]')?.value?.trim() || '';
      const vehicle = form.querySelector('[name="vehicle"]')?.value?.trim() || '';
      const details = form.querySelector('[name="details"]')?.value?.trim() || '';

      const bodyLines = [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Location: ${location}`,
        `Vehicle: ${vehicle}`,
        '',
        details ? `Details:\n${details}` : 'Details: (none provided)'
      ];
      const body = encodeURIComponent(bodyLines.join('\n'));

      // If no email is configured, prompt the user to call instead.
      if (!to || to.includes('your@email.com')) {
        alert('This demo site is set up without an email inbox. Please tap “Call Now” or replace the email address in /contact.html.');
        return;
      }
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', id);
    });
  });
})();
