# Timber Dollar Holdings

Static brochure site for Timber Dollar Holdings LLC.

## Structure

```
.
├── index.html      # Home (hero)
├── contact.html    # Contact form
├── styles.css      # All styles
├── app.js          # Contact form + EmailJS submission
└── images/         # Logos, hero, favicons
```

No build step. No dependencies installed locally — `app.js` loads EmailJS from a CDN.

## Develop locally

Any static server works. From the repo root:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

Or use the VS Code "Live Server" extension, etc.

## Deploy (Cloudflare Pages)

1. Connect this repo to Cloudflare Pages.
2. Build command: *(leave blank)*
3. Output directory: `/` (repo root).

That's it — every push deploys.

## EmailJS

Contact form credentials live in `app.js` (`serviceId`, `templateId`, `publicKey`). The public key is safe to commit; rotate via the [EmailJS dashboard](https://dashboard.emailjs.com) if needed.
