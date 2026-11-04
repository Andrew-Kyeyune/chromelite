import { SITE } from "@/lib/site";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import { Hex, Icon, Img, PageHero, JsonLd } from "@/components/ui";
import ContactForm from "@/components/ContactForm";

export const metadata = pageMeta({
  title: "Contact Us: Naalya, Kampala",
  description: "Visit Chromelite at Grand City Complex, Naalya, Kampala. Call +256 392 888 258, WhatsApp +256 772 591 881 or email us for a quote.",
  path: "/contact/",
  keywords: ["contact Chromelite", "Chromelite Naalya", "signage quote Kampala", "IT company contact Kampala"],
});

export default function ContactPage() {
  const items = [
    { icon: "pin", label: "Visit us", value: <>{SITE.address.street}<br />{SITE.address.poBox}, {SITE.address.locality}, {SITE.address.countryName}</> },
    { icon: "phone", label: "Call or WhatsApp", value: <><a href={SITE.phoneHref[0]}>{SITE.phones[0]}</a><br /><a href={SITE.phoneHref[1]}>{SITE.phones[1]}</a> (WhatsApp)</> },
    { icon: "mail", label: "Email", value: <><a href={`mailto:${SITE.emails[0]}`}>{SITE.emails[0]}</a><br /><a href={`mailto:${SITE.emails[1]}`}>{SITE.emails[1]}</a></> },
    { icon: "web", label: "Online", value: <>{SITE.url.replace("https://", "")}<br />{SITE.social.handle}</> },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact/" }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", url: `${SITE.url}/contact/`, name: "Contact Chromelite Technologies", about: { "@id": `${SITE.url}/#organization` } }} />
      <PageHero
        image="map_pins"
        crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
        eyebrow="Contact us"
        title={<>Let&apos;s build what&apos;s next, <span className="accent">together.</span></>}
        lead="Tell us about your project, whether it is a new system, a dashboard, a rebrand or a campaign. We will respond within one working day."
      />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>Chromelite Technologies Limited</h2>
            <ul className="contact-list">
              {items.map((it, i) => (
                <li key={it.label}>
                  <Hex small color={i % 2 ? "#4A4D55" : "#A51E25"}><Icon name={it.icon} /></Hex>
                  <div><div className="label">{it.label}</div><div>{it.value}</div></div>
                </li>
              ))}
            </ul>
            <div className="map-card" style={{ marginTop: 28 }}><Img name="map_pins" alt="Map illustration: Chromelite at Grand City Complex, Naalya, Kampala" /></div>
            <p className="muted" style={{ fontSize: 14, marginTop: 10 }}>TIN {SITE.tin}</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
