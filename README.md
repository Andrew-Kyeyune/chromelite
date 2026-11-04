# Chromelite Technologies — Corporate Website

A fast, SEO-optimised website for **Chromelite Technologies Limited**, built with **Next.js 15 (React 19)**.
Content comes from the *Company Profile 2026/27* and the design follows the *Design & Brand Guidelines v1.0*
(Montserrat, Chromelite Crimson #A51E25, Chromelite Black #111111, Slate Grey #4A4D55).

Every page is pre-rendered to plain HTML at build time (`output: "export"`), so search engines read the full content
instantly and the site can be hosted anywhere: cPanel shared hosting, Netlify, Vercel, Cloudflare Pages or any web server.

---

## 1. Pages

| URL | Purpose |
| --- | --- |
| `/` | Home: hero, key facts, all five services, integrated advantage, why Chromelite, process, industries, projects, FAQs |
| `/services/` | Overview of all five service lines |
| `/services/it-solutions/` | IT Solutions & Managed Services (8 offerings, FAQs) |
| `/services/data-analytics-business-intelligence/` | Data Analytics & BI |
| `/services/multimedia-graphic-design/` | Multimedia & Graphic Design |
| `/services/marketing-strategy-campaigns/` | Marketing Strategy & Campaigns |
| `/services/branding-signage-fabrication/` | Branding, Signage & Fabrication |
| `/about/` | Story, journey, vision & mission, values, leadership, quality & compliance |
| `/industries/` | Sector solutions for 8 industries |
| `/projects/` | Case studies (MAAIF rebranding, steel supply) and gallery |
| `/contact/` | Contact details and quote request form (email or WhatsApp) |
| `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` | Generated automatically |

## 2. Run it on your computer

Requires **Node.js 18.18 or newer** (https://nodejs.org).

```bash
npm install        # once
npm run dev        # preview at http://localhost:3000 while editing
npm run build      # creates the finished website in the /out folder
npm start          # preview the built /out folder
```

## 3. Publish it

The `/out` folder is the complete website. A ready-built copy is included in this package (`website-ready-to-upload`).

- **cPanel / shared hosting:** upload the *contents* of `out/` into `public_html/` with File Manager or FTP.
- **Netlify:** drag the `out/` folder onto app.netlify.com/drop, or connect the repository (build command `npm run build`, publish directory `out`).
- **Vercel:** import the repository; it detects Next.js automatically.
- Point the domain **www.chromelitedigital.co.ug** to the host and enable **HTTPS** (free SSL / Let's Encrypt).
- If the final domain differs, change `url` in `lib/site.ts` and rebuild, so canonical links, the sitemap and structured data use the right address.

## 4. Editing content

| What | Where |
| --- | --- |
| Company name, address, phones, emails, TIN, social links | `lib/site.ts` |
| Services, offerings, FAQs, industries, projects, values, stats | `lib/data.ts` |
| Page layouts | `app/**/page.tsx` |
| Colours, fonts, spacing | `app/globals.css` |
| Images | `public/images/` |

**Replacing illustrations with real photos:** add a photo to `public/images/` (e.g. `pylon_night.jpg`, ideally 1600 × 1000 px, compressed
to under 250 KB as WebP or JPG) and change the image name in `lib/data.ts`, or change `Img` in `components/ui.tsx` to use `.jpg`.
Real photos of your projects, team and office will improve both trust and image search rankings.

**Social media profiles:** add the full URLs (Facebook, LinkedIn, Instagram, X, TikTok) to `sameAs` in `lib/site.ts`.
They are then included in the structured data that Google uses to connect your profiles to the business.

**Contact form:** the form works on any host without a server: it opens the visitor's email app or WhatsApp with the enquiry filled in.
To receive submissions directly in your inbox, create a free form at https://formspree.io, then in `components/ContactForm.tsx`
replace the `mailto:` logic with a `fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: new FormData(form) })` call.

## 5. SEO features built in

- **Pre-rendered HTML** for every page, fast loading, mobile-first responsive layout and accessible markup (skip link, labelled forms, alt text, focus states, one H1 per page).
- **Unique titles (≤ 60 characters) and meta descriptions (≤ 160 characters)** on every page, targeting local searches such as
  "signage company Kampala", "IT solutions Uganda", "Power BI dashboards Uganda", "graphic design Kampala", "digital marketing agency Uganda".
- **Canonical URLs**, Open Graph and Twitter cards with a branded share image (`public/og-image.png`) for WhatsApp, Facebook, LinkedIn and X previews.
- **Structured data (JSON-LD):** `ProfessionalService` / `LocalBusiness` (name, address, phones, email, TIN, area served),
  `WebSite`, `Service` with an `OfferCatalog` for every service, `FAQPage` (eligible for FAQ-style results), `BreadcrumbList`, `AboutPage` and `ContactPage`.
- **sitemap.xml and robots.txt** generated at build time; **web app manifest**, favicons and theme colour.
- Local signals: `en-UG` language, Kampala geo meta tags, consistent name, address and phone details across every page.

## 6. Launch checklist (after the site is live)

1. **Google Search Console** (search.google.com/search-console): add `https://www.chromelitedigital.co.ug`, verify ownership
   (paste the verification code into `verification` in `app/layout.tsx` and rebuild, or use DNS), then submit `/sitemap.xml`.
2. **Bing Webmaster Tools:** import the site from Search Console.
3. **Google Business Profile** (business.google.com): create or claim "Chromelite Technologies Limited" at Grand City Complex, Naalya,
   with the same phone numbers, website, categories (e.g. *Sign shop*, *IT services*, *Graphic designer*, *Marketing agency*), opening hours and real photos.
   This is the single most important step for appearing on Google Maps in Kampala.
4. Ask satisfied clients for **Google reviews**.
5. List the business with the same name, address and phone on Ugandan directories (e.g. Yellow Pages Uganda, ICTAU members' directory).
6. Link the website from all social media profiles, email signatures and the company profile PDF.
7. Test with **PageSpeed Insights** (pagespeed.web.dev) and Google's **Rich Results Test** (search.google.com/test/rich-results).
8. Publish fresh content regularly (project write-ups, tips, news). A `/projects/` case study per completed job is ideal.

---
© Chromelite Technologies Limited · Grand City Complex, Naalya – Namugongo Road · P.O. Box 8764, Kampala, Uganda
+256 392 888 258 · +256 772 591 881 · chromelite@chromelitedigital.co.ug · www.chromelitedigital.co.ug
