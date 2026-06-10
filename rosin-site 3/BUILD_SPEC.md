# BUILD SPEC — Gum Rosin & Steel Drum Website

> 把这个文件交给 Codex / Claude Code / Cursor 等 AI 编程工具,指令示例:
> "Read BUILD_SPEC.md and generate the complete website exactly as specified. Output static HTML/CSS/JS files, no build step required."
>
> 这份 spec 是网站的"源真相"。以后要改网站,改这份 spec,再让 AI 重新生成即可。

---

## 1. PROJECT GOAL

Build a professional, English-language, mobile-responsive B2B marketing website for a China-based supplier of **gum rosin** and matching **250kg knock-down steel drums**. The site's single purpose is to generate inquiries (RFQs) from overseas buyers.

**Tech requirements:**
- Pure static site: HTML + CSS + vanilla JavaScript. NO frameworks, NO build step.
- Must work by opening `index.html` directly or hosting on any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).
- Fully responsive (mobile-first). Must look good at 375px and 1440px.
- Fast loading, semantic HTML, accessible.
- HTTPS-ready, SEO-optimized (meta tags, semantic headings, descriptive title/description per page).

**Tech constraints:**
- No external JS frameworks. Plain JS only.
- Fonts: use system font stack or Google Fonts (Inter or similar clean sans-serif).
- Icons: inline SVG only (no icon-font CDN dependency).
- All text in English.

---

## 2. SITE STRUCTURE (pages)

| File | Page | Purpose |
|---|---|---|
| `index.html` | Home | Positioning + product entry + trust + CTA |
| `gum-rosin.html` | Gum Rosin product | Specs, applications, COA, CTA |
| `steel-drums.html` | Steel Drums product | Specs, knock-down benefits, cross-sell, CTA |
| `about.html` | About Us | Trust, who we are |
| `quality.html` | Quality & Certifications | COA, inspection, documentation |
| `contact.html` | Contact / Get a Quote | Inquiry form + multi-channel contact |

Shared header (nav) and footer on every page. Nav links: Home, Gum Rosin, Steel Drums, About, Quality, Contact. "Get a Quote" as a highlighted nav button.

---

## 3. BRAND & DESIGN DIRECTION

**Positioning statement (use on homepage hero):**
"China-based supplier of gum rosin and matching knock-down steel drums — factory-direct, OEM packaging, reliable export."

**Visual tone:** Clean, industrial, trustworthy. Think B2B industrial supplier, not consumer e-commerce. Lots of white space, clear hierarchy, no clutter.

**Color palette (CSS variables):**
- `--color-primary: #1B5E4F;` (deep pine green — evokes rosin/pine origin, professional)
- `--color-primary-dark: #134237;`
- `--color-accent: #C8964B;` (amber/rosin gold — for CTAs and highlights)
- `--color-dark: #1A1A1A;`
- `--color-text: #333333;`
- `--color-muted: #6B7280;`
- `--color-bg: #FFFFFF;`
- `--color-bg-alt: #F7F8F7;` (section alternating background)
- `--color-border: #E5E7EB;`

**Typography:** Inter (Google Fonts) or system sans-serif. Headings bold, generous size. Body 16px+, line-height 1.6.

**Buttons:**
- Primary CTA: amber accent background, white text, slight rounded corners, hover darken.
- Secondary CTA: outlined, primary color border.

**Layout:** Max content width ~1200px, centered. Generous section padding (top/bottom 64–96px desktop, 40px mobile).

---

## 4. GLOBAL COMPONENTS

### Header (sticky)
- Left: site logo/name "ROSIN SOURCE" (placeholder — easy to change). Use a simple text logo with a small inline SVG drop/leaf icon in primary color.
- Right: nav links + "Get a Quote" button (amber). On mobile: hamburger menu.

### Footer
- Three columns: (1) company name + one-line description, (2) quick links to all pages, (3) contact info (email, WhatsApp, address — all placeholders).
- Bottom bar: "© 2026 [Company Name]. All rights reserved."

### Floating WhatsApp button
- Fixed bottom-right on ALL pages. Green circular button with WhatsApp SVG icon. Links to `https://wa.me/PHONE_PLACEHOLDER`. Always visible.

### SEO meta (per page)
Each page needs unique `<title>` and `<meta name="description">`. Include Open Graph tags. Lang="en".

---

## 5. PAGE CONTENT (use this copy verbatim)

### index.html (Home)

**SEO title:** Gum Rosin Supplier & Knock-Down Steel Drums | [Company Name]
**Meta description:** Factory-direct gum rosin and 250kg knock-down steel drums from China. OEM packaging, COA with every batch, reliable worldwide export. Get a free quote.

**Hero section** (primary background or subtle gradient using primary color):
- H1: "Gum Rosin & Steel Drums, Straight from the Source"
- Subtext: "Your single supplier for export-grade gum rosin and matching 250kg knock-down steel drums. Factory-direct pricing, OEM packaging, and reliable worldwide shipping."
- Two buttons: "Get a Free Quote" (primary → contact.html), "View Products" (secondary → gum-rosin.html)

**Trust bar** (4 items with small check/SVG icons, horizontal row):
- Factory-Direct Supply
- COA with Every Batch
- OEM / Custom Packaging
- Worldwide Export Experience

**Products section** (two cards side by side, image placeholder on top):
Card 1 — "Gum Rosin": "Export-grade gum rosin (WW / WG / X grades) for adhesives, inks, paints, rubber, and paper sizing. Consistent quality, full specifications, COA provided." → "Learn More" → gum-rosin.html
Card 2 — "250kg Knock-Down Steel Drums": "Flat-pack steel drums engineered for rosin and chemical packaging. Lower shipping cost, easy on-site assembly, custom sizes available." → "Learn More" → steel-drums.html

**Why Choose Us section** (3 columns, alt background):
- "One Supplier, Whole Solution": "Get both your rosin and its packaging from a single source. Simpler procurement, aligned lead times, one point of contact."
- "Factory-Direct Pricing": "We work directly with manufacturers and coordinate production ourselves — you get ex-works pricing without extra middlemen."
- "Built for Export": "We handle PI, B/L, and the documentation your customs needs. T/T and L/C accepted. Smooth shipping to South America, Europe, and Asia."

**Bottom CTA band** (primary color background, centered):
- H2: "Need a quote or product specs?"
- Text: "Tell us your grade, quantity, and destination port. We'll reply within 24 hours."
- Button: "Get a Free Quote" → contact.html

---

### gum-rosin.html

**SEO title:** Export-Grade Gum Rosin Supplier (WW/WG/X) | [Company Name]
**Meta description:** Buy export-grade gum rosin from China. WW, WG, and X grades for adhesives, inks, paints, rubber. COA with every batch. Request a quote today.

- Page hero: H1 "Export-Grade Gum Rosin" + subtext "Reliable, consistent gum rosin supplied directly from production — backed by a Certificate of Analysis (COA) with every shipment."
- Applications row (icons or pills): Adhesives & sealants · Printing inks · Paints & coatings · Rubber compounding · Paper sizing · Soaps & emulsifiers
- Specifications table (render as a clean two-column table; values are placeholders the owner will fill — wrap fillable values in a visibly distinct style or "[ ]"):

| Item | Specification |
|---|---|
| Product | Gum Rosin |
| Grades available | WW / WG / X (specify on inquiry) |
| Softening Point | [ specify, e.g. ≥76°C ] |
| Acid Value | [ specify ] |
| Color (Gardner) | [ specify ] |
| Moisture | [ specify ] |
| Packaging | 25kg bag / 225kg or 250kg steel drum |
| MOQ | [ specify, e.g. 1 x 20'FCL ] |
| Lead Time | [ specify, e.g. 15–20 days ] |
| Port of Loading | [ specify ] |
| Payment Terms | T/T, L/C at sight |

- Quality note box: "Every batch ships with a Certificate of Analysis. We can also arrange third-party inspection (SGS) on request."
- Bottom CTA: "Ready to order or need a sample?" → "Request a Quote" → contact.html

---

### steel-drums.html

**SEO title:** 250kg Knock-Down Steel Drums | Flat-Pack Drum Supplier
**Meta description:** Knock-down 250kg steel drums for rosin and chemical packaging. Flat-pack to cut freight, easy assembly, custom sizes. Get a quote from a China supplier.

- Page hero: H1 "250kg Knock-Down Steel Drums" + subtext "Flat-pack steel drums designed for rosin and chemical packaging. Shipped knocked-down to cut freight cost, assembled on-site in minutes."
- "Why Knock-Down" — 3 benefit cards:
  - "Lower freight cost — ships flat, fits far more units per container."
  - "Easy assembly — no special tools, quick on-site setup."
  - "Custom sizing — built to your product and weight requirements."
- Specifications table:

| Item | Specification |
|---|---|
| Format | Knock-down (flat-pack) steel drum |
| Capacity | 250 kg |
| Lid / Base | 570 mm diameter, 0.4 mm thickness |
| Body sheet | 1000 × 1815 mm, 0.35 mm thickness |
| Material | Cold-rolled steel (specify grade on inquiry) |
| Custom options | Size, thickness, coating, printing |
| MOQ | [ specify ] |
| Lead Time | [ specify ] |
| Payment Terms | T/T, L/C at sight |

- Cross-sell box: "Buying rosin too? Order your drums and rosin together for aligned lead times and one combined shipment." → link "Ask about our rosin" → gum-rosin.html
- Bottom CTA → contact.html

---

### about.html

**SEO title:** About Us — Gum Rosin & Steel Drum Specialist | [Company Name]
**Meta description:** A China-based sourcing specialist focused on gum rosin and industrial steel packaging. Factory-direct, export-experienced, transparent.

H1 "Who We Are", then body paragraphs:
"We are a China-based trading and sourcing company specializing in gum rosin and industrial steel packaging. We work directly with established factories, coordinating production and quality control so our customers get dependable products at factory-direct prices."
"Our focus is narrow on purpose: by concentrating on rosin and its packaging, we know these products deeply — the grades, the specs, the export requirements — and we pass that expertise on to every buyer we work with."
"We serve buyers across South America, Europe, Central Asia, and India, and we handle the full export process so your shipment arrives clean and on time."

Add a placeholder image gallery section (3 image placeholders) labeled "Our factory & shipments" with a note comment in code: `<!-- Replace with real factory/loading/product photos -->`

---

### quality.html

**SEO title:** Quality & Certifications | Gum Rosin COA & Inspection
**Meta description:** COA with every batch, SGS inspection on request, consistent specs, and full export documentation. Quality you can verify.

H1 "Quality You Can Verify", then a feature list (4 items with icons):
- "Certificate of Analysis (COA) provided with every batch."
- "Third-party inspection (SGS / others) available on request."
- "Consistent specifications — we control quality at the factory, before it ships."
- "Export documentation — Packing List, Commercial Invoice, Bill of Lading, Certificate of Origin handled for you."

Add a placeholder area for uploading certificate images: `<!-- Add COA / ISO / certificate scans here -->`
Bottom CTA → contact.html

---

### contact.html (most important page)

**SEO title:** Get a Quote | Contact [Company Name]
**Meta description:** Request a quote for gum rosin or knock-down steel drums. Tell us your grade, quantity, and port. We reply within 24 hours.

H1 "Get a Quote" + subtext "Tell us your requirements and we'll reply within 24 hours."

**Inquiry form** (see Section 6 for submission logic). Fields:
- Name * (required)
- Company
- Email * (required)
- Country / Destination Port
- Product (dropdown: Gum Rosin / Steel Drums / Both)
- Quantity needed
- Message (textarea)
- Submit button: "Send Inquiry"

**Contact info block** beside or below the form:
- Email: EMAIL_PLACEHOLDER
- WhatsApp: WHATSAPP_PLACEHOLDER (clickable wa.me link)
- Address: ADDRESS_PLACEHOLDER

---

## 6. INQUIRY FORM SUBMISSION (important — keep it simple & host-agnostic)

The form must work on any static host WITHOUT a backend. Implement using a form-backend service via a single configurable endpoint. Default approach:

- Use a `<form>` that POSTs to a placeholder action URL: `FORM_ENDPOINT_PLACEHOLDER`.
- Add a clear code comment explaining: the owner signs up at a free form backend (e.g. Formspree, Web3Forms, or Formsubmit) and pastes their endpoint URL into the `FORM_ENDPOINT` constant in `js/config.js`.
- On submit: validate required fields client-side, POST via fetch, then show a success message ("Thank you — we'll reply within 24 hours.") and reset the form. Show an error message on failure.
- Do NOT put any secret keys in the code. The form endpoint URL is public-safe by design.

Create a `js/config.js` file holding ALL the placeholders in one place, so the owner edits a single file:

```js
// EDIT THESE VALUES — this is the only file most owners need to change.
const SITE_CONFIG = {
  companyName: "Rosin Source",          // your company / brand name
  email: "sales@yourdomain.com",        // your business email
  whatsapp: "8613800000000",            // WhatsApp number, country code, digits only
  address: "Foshan, Guangdong, China",  // your address
  formEndpoint: "https://formspree.io/f/YOUR_ID", // paste your form backend URL
};
```

All pages read from this config (via JS) to populate footer contact, WhatsApp button href, and form action. Document this clearly.

---

## 7. SEO & PERFORMANCE

- Each page: unique title + meta description (provided above), lang="en", viewport meta, charset.
- Add `robots.txt` (allow all) and `sitemap.xml` listing all 6 pages (use DOMAIN_PLACEHOLDER).
- Semantic HTML5: header, nav, main, section, footer, h1 once per page.
- Add JSON-LD structured data on index.html: Organization schema (name, url, logo placeholder, contact).
- Optimize: no render-blocking, minimal CSS, lazy-load images (`loading="lazy"`).
- Alt text on all images (descriptive, keyword-aware but natural).

---

## 8. DELIVERABLES (file tree to output)

```
rosin-site/
├── index.html
├── gum-rosin.html
├── steel-drums.html
├── about.html
├── quality.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css
├── js/
│   ├── config.js      ← owner edits this
│   └── main.js        ← nav toggle, config injection, form handling
├── assets/
│   └── (image placeholders / SVGs)
└── README.md          ← deploy + custom-domain instructions (see Section 9)
```

---

## 9. README MUST INCLUDE — how the owner connects their own domain

The generated README.md must explain, in simple steps:

1. **Edit `js/config.js`** with company name, email, WhatsApp, address, form endpoint.
2. **Set up the inquiry form**: sign up at Web3Forms/Formspree (free), copy the endpoint URL into config.
3. **Test locally**: open index.html in a browser.
4. **Deploy** (pick one):
   - Netlify: drag-and-drop the folder at app.netlify.com/drop, OR connect a Git repo.
   - Cloudflare Pages / Vercel / GitHub Pages: similar, connect repo or upload.
5. **Connect a custom domain** (the key part the owner asked for):
   - Buy a domain (Namecheap / GoDaddy / Cloudflare).
   - In the hosting dashboard (e.g. Netlify → Domain settings → Add custom domain), enter your domain.
   - At your domain registrar, update DNS:
     - For an apex domain (example.com): add an `A` record / `ALIAS` / `CNAME flattening` pointing to the host's target (host provides this).
     - For `www`: add a `CNAME` record pointing to the host's target.
   - Wait for DNS propagation (minutes to a few hours). Host auto-issues a free HTTPS certificate.
   - Update DOMAIN_PLACEHOLDER in sitemap.xml and any canonical/OG URLs to the real domain.
6. **Use a business email on your domain**: set up `sales@yourdomain.com` via your registrar or Google Workspace, and use it in config + outreach.

---

## 10. ACCEPTANCE CRITERIA

- All 6 pages render correctly, responsive at 375px and 1440px.
- Nav works, mobile hamburger works, WhatsApp float button on every page.
- Form validates and posts to the configurable endpoint; shows success/error states.
- All owner-editable values live in `js/config.js` only.
- No console errors. No external framework dependencies. Opens offline from index.html (form needs internet to submit, which is expected).
- README clearly explains custom-domain connection.
