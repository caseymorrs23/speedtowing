# Speed Towing & Recovery — Website Bundle

This is a lightweight, fast static website (HTML/CSS/JS) ready for GitHub Pages, Netlify, or any basic web host.

## Quick edits you’ll want to make
1. **Canonical domain:** Replace `https://example.com` in:
   - `/sitemap.xml`
   - `<link rel="canonical">` tags in each `.html` file (search for `example.com`)

2. **Email routing for the contact form:**
   - Open `/contact.html`
   - Replace `data-mailto-to="your@email.com"` with your real inbox

3. **Business info:** Confirm phone/address/service area and update as needed.

## Deploy on GitHub Pages (simple)
1. Create a repo (or use an existing one).
2. Upload all files to the repo root.
3. GitHub repo → Settings → Pages → Deploy from branch → `main` / root.

## Notes
- The contact form is **mailto-based** (no server). For automated email delivery, swap in FormSubmit/Formspree or a serverless function.
- A `404.html` is included for hosts that support it.
