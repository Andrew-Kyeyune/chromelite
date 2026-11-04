import Link from "next/link";
import { SITE } from "@/lib/site";

const ICONS: Record<string, string> = {
  it: '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/>',
  data: '<path d="M3 21h18"/><path d="M6 17v-5M11 17V7M16 17v-8M21 17v-3"/>',
  design: '<path d="M12 3l7 7-7 11-7-11z"/><circle cx="12" cy="11" r="2"/>',
  mkt: '<path d="M3 10v4h3l7 4V6l-7 4H3z"/><path d="M17 9a4 4 0 0 1 0 6"/>',
  sign: '<rect x="4" y="3" width="16" height="10" rx="1"/><path d="M12 13v8M8 21h8"/>',
  phone: '<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  pin: '<path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  web: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
};

export function Icon({ name, className = "ico" }: { name: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" dangerouslySetInnerHTML={{ __html: ICONS[name] ?? "" }} />
  );
}

export function Hex({ children, color = "#A51E25", outline = false, small = false }: { children?: React.ReactNode; color?: string; outline?: boolean; small?: boolean }) {
  return (
    <span className={`hex${small ? " sm" : ""}`} style={outline ? { color } : undefined}>
      <svg className="shape" viewBox="0 0 56 64" preserveAspectRatio="none" aria-hidden="true">
        <path d="M28 2 L54 17 L54 47 L28 62 L2 47 L2 17 Z" fill={outline ? "#fff" : color} stroke={outline ? color : "none"} strokeWidth={outline ? 2.5 : 0} strokeLinejoin="round" />
      </svg>
      <span style={{ position: "relative", display: "grid", placeItems: "center" }}>{children}</span>
    </span>
  );
}

export function Tick() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12l5 5L20 6" /></svg>
  );
}

export function Img({ name, alt, eager = false }: { name: string; alt: string; eager?: boolean }) {
  // Illustrations are lightweight SVGs. Replace /images/<name>.svg with real photos (same filename, .jpg/.webp) when available.
  return <img src={`/images/${name}.svg`} alt={alt} width={1600} height={1000} loading={eager ? "eager" : "lazy"} decoding="async" />;
}

export function PageHero({ title, lead, crumbs, image, eyebrow }: { title: React.ReactNode; lead: string; crumbs: { href?: string; label: string }[]; image: string; eyebrow?: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero-art"><Img name={image} alt="" eager /></div>
      <div className="container">
        <nav aria-label="Breadcrumb" className="crumbs">
          {crumbs.map((c, i) => (
            <span key={i}>{c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}{i < crumbs.length - 1 ? " /" : ""}</span>
          ))}
        </nav>
        {eyebrow && <p className="eyebrow light">{eyebrow}</p>}
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </section>
  );
}

export function CtaBand({ title = "Let's build what's next, together.", text = "Tell us about your project, whether it is a new system, a dashboard, a rebrand or a campaign. We will respond within one working day." }: { title?: string; text?: string }) {
  return (
    <section className="section tight">
      <div className="container">
        <div className="cta">
          <svg className="hexdeco" viewBox="0 0 56 64" aria-hidden="true"><path d="M28 2 L54 17 L54 47 L28 62 L2 47 L2 17 Z" fill="none" stroke="#fff" strokeWidth="1.5" /></svg>
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-actions">
            <Link className="btn btn-light" href="/contact/">Request a quote</Link>
            <a className="btn btn-ghost" href={SITE.phoneHref[0]}>Call {SITE.phones[0]}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function Faqs({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
