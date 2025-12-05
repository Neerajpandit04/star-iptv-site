
STAR IPTV SERVICE - Static Site (Vercel/Netlify ready)
----------------------------------------------------

Files:
- index.html, about.html, contact.html, faq.html, support.html, login.html
- styles.css, scripts.js
- /assets/logo.png, hero.jpg, team.jpg (placeholders)

Replace placeholders:
- assets/logo.png -> your real logo (transparent PNG recommended)
- assets/hero.jpg -> hero/banner image
- Update phone/email addresses in index.html and contact.html

Payments:
- Replace pay-btn click handler in scripts.js to redirect to your real checkout (Stripe/PayPal).
- For Stripe: create Checkout session on server and redirect to session.url
- For PayPal: use PayPal Checkout buttons (client/server integration required).

Deployment:
- Vercel: drag & drop folder or connect repo; root is the site folder.
- Netlify: drag & drop or connect repo; publish directory is root.
- GitHub Pages: push files to repo and enable Pages (use root or gh-pages branch).

Notes:
- This template is for legitimate, licensed services only.
- Do not distribute unlicensed content. Ensure you have rights & licensing for channels/VOD.
