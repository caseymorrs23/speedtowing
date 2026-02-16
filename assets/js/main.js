(() => {
  const $ = (sel, el=document) => el.querySelector(sel);
  const $$ = (sel, el=document) => Array.from(el.querySelectorAll(sel));

  // Year
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = $('.nav-toggle');
  const mobileNav = $('.mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      mobileNav.hidden = expanded;
    });
    $$('.mobile-nav a').forEach(a => a.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      mobileNav.hidden = true;
    }));
  }

  // Gallery
  const photos = (window.SPEED_TOWING && window.SPEED_TOWING.curatedPhotos) || [];
  const grid = $('#galleryGrid');
  const lightbox = $('#lightbox');
  const lightboxImg = $('.lightbox-img');
  const lightboxClose = $('.lightbox-close');

  if (grid && photos.length) {
    photos.forEach((src, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('aria-label', `Open photo ${idx+1}`);
      btn.innerHTML = `<img loading="lazy" src="${src}" alt="Towing photo ${idx+1}" />`;
      btn.addEventListener('click', () => openLightbox(src));
      grid.appendChild(btn);
    });
  }

  function openLightbox(src){
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightbox.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox(){
    if (!lightbox) return;
    lightbox.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  if (lightbox && lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // Reviews (REPLACE THESE with real snippets)
  const reviews = [
    { stars: 5, text: "Fast pickup and clear communication. Driver was careful loading my car and gave a real ETA.", name: "Customer", meta: "Local tow • Example text (replace with real review)" },
    { stars: 5, text: "Professional, friendly, and handled my AWD vehicle with a flatbed. Would call again.", name: "Customer", meta: "Flatbed tow • Example text (replace with real review)" },
    { stars: 5, text: "Got me out of a tough spot with a quick winch-out. Smooth process from start to finish.", name: "Customer", meta: "Winch-out • Example text (replace with real review)" },
  ];

  const reviewsGrid = $('#reviewsGrid');
  if (reviewsGrid) {
    reviews.forEach(r => {
      const el = document.createElement('div');
      el.className = 'review';
      const stars = '★★★★★'.slice(0, r.stars) + '☆☆☆☆☆'.slice(0, 5 - r.stars);
      el.innerHTML = `
        <div class="stars" aria-label="${r.stars} out of 5 stars">${stars}</div>
        <p>${escapeHtml(r.text)}</p>
        <div class="reviewer">${escapeHtml(r.name)}</div>
        <div class="review-meta">${escapeHtml(r.meta)}</div>
      `;
      reviewsGrid.appendChild(el);
    });
  }

  function escapeHtml(str){
    return String(str).replace(/[&<>"']/g, s => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[s]));
  }
})(); 
