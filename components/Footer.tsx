import Link from "next/link";
import { SITE, NAV } from "@/lib/site";
import { SERVICES } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand" aria-label="Chromelite Technologies — home"><img src="/logo-white.svg" alt="Chromelite Technologies" width={156} height={46} /></Link>
          <p style={{ marginTop: 18, maxWidth: 340 }}>{SITE.slogan} IT solutions, data analytics, design, marketing and signage from Kampala, Uganda.</p>
          <p style={{ marginTop: 14, fontWeight: 700, color: "#fff", letterSpacing: ".08em", fontSize: 13 }}>{SITE.tagline.toUpperCase()}</p>
        </div>
        <div>
          <h2>Services</h2>
          <ul>{SERVICES.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}/`}>{s.name}</Link></li>)}</ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>{NAV.slice(1).map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <h2>Contact</h2>
          <address style={{ fontStyle: "normal", display: "grid", gap: 10 }}>
            <span>{SITE.address.street}, {SITE.address.poBox}, {SITE.address.locality}, {SITE.address.countryName}</span>
            <span><a href={SITE.phoneHref[0]}>{SITE.phones[0]}</a> · <a href={SITE.phoneHref[1]}>{SITE.phones[1]}</a></span>
            <span><a href={`mailto:${SITE.emails[0]}`}>{SITE.emails[0]}</a></span>
            <span>{SITE.social.handle}</span>
          </address>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {year} {SITE.name}. All rights reserved. TIN {SITE.tin}.</span>
        <span>Kampala, Uganda</span>
      </div>
    </footer>
  );
}
