import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import { Hex, Icon, Img, PageHero, CtaBand, JsonLd } from "@/components/ui";

export const metadata = pageMeta({
  title: "Services: IT, Data, Design, Marketing, Signage",
  description: "Five integrated services from Kampala: IT solutions, data analytics and BI, multimedia design, marketing campaigns, and branding, signage and fabrication.",
  path: "/services/",
  keywords: ["IT services Uganda", "branding services Kampala", "Power BI consultants Uganda", "signage and fabrication", "marketing agency Kampala"],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }])} />
      <PageHero
        image="abstract_hex"
        crumbs={[{ href: "/", label: "Home" }, { label: "Services" }]}
        eyebrow="What we do"
        title={<>Five service lines. <span className="accent">One accountable partner.</span></>}
        lead="Each service stands on its own, and each is stronger together. Start with what you need today, and grow into a complete programme of systems, data, creative work and campaigns."
      />
      {SERVICES.map((s, i) => (
        <section key={s.slug} className={`section${i % 2 ? " bg-mist" : ""}`} aria-labelledby={`svc-${s.slug}`}>
          <div className={`container split${i % 2 ? " rev" : ""}`}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                <Hex color={i % 2 ? "#4A4D55" : "#A51E25"}><Icon name={s.icon} /></Hex>
                <span className="eyebrow" style={{ margin: 0 }}>Service {s.num}</span>
              </div>
              <h2 id={`svc-${s.slug}`}>{s.name}</h2>
              <p className="lead justify" style={{ marginTop: 14 }}>{s.lead}</p>
              <ul className="pills" style={{ marginTop: 22, listStyle: "none" }}>
                {s.offerings.map((o) => <li className="pill" key={o.title}>{o.title}</li>)}
              </ul>
              <div className="btn-row"><Link className="btn btn-primary" href={`/services/${s.slug}/`}>Explore {s.name.split(" &")[0]}</Link></div>
            </div>
            <figure className="figure"><Img name={s.image} alt={`${s.name} — Chromelite Technologies, Kampala`} /></figure>
          </div>
        </section>
      ))}
      <CtaBand />
    </>
  );
}
