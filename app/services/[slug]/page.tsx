import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/data";
import { pageMeta, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/seo";
import { Hex, Icon, Img, Tick, PageHero, CtaBand, JsonLd, Faqs } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return {};
  return pageMeta({ title: s.seoTitle, description: s.metaDescription, path: `/services/${s.slug}/`, keywords: s.keywords });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = SERVICES.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const s = SERVICES[idx];
  const others = SERVICES.filter((x) => x.slug !== s.slug);
  return (
    <>
      <JsonLd data={serviceSchema(s)} />
      <JsonLd data={faqSchema(s.faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: s.name, path: `/services/${s.slug}/` }])} />

      <PageHero
        image={s.image}
        crumbs={[{ href: "/", label: "Home" }, { href: "/services/", label: "Services" }, { label: s.name }]}
        eyebrow={`Service ${s.num}`}
        title={s.name}
        lead={s.lead}
      />

      <section className="section" aria-labelledby="overview-h">
        <div className="container split">
          <div>
            <p className="eyebrow">Overview</p>
            <h2 id="overview-h">{s.seoTitle}</h2>
            <p className="justify muted" style={{ marginTop: 16 }}>{s.intro}</p>
            <div className="btn-row">
              <Link className="btn btn-primary" href="/contact/">Request a quote</Link>
              <a className="btn btn-dark" href="#offerings">See all offerings</a>
            </div>
          </div>
          <figure className="figure"><Img name={s.feature.image} alt={s.feature.title} /></figure>
        </div>
      </section>

      <section id="offerings" className="section bg-mist" aria-labelledby="off-h">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow">What we offer</p><h2 id="off-h">{s.name}: <span className="accent">our offerings.</span></h2></div>
            <p>Eight specialised offerings, delivered on their own or combined into a complete programme.</p>
          </div>
          <div className="grid g4">
            {s.offerings.map((o) => (
              <article className="card" key={o.title}>
                <div className="card-img"><Img name={o.image} alt={`${o.title} — Chromelite Technologies Uganda`} /></div>
                <div className="card-body"><h3>{o.title}</h3><p className="justify">{o.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="feat-h">
        <div className="container split rev">
          <div>
            <p className="eyebrow">In practice</p>
            <h2 id="feat-h">{s.feature.title}</h2>
            <p className="justify muted" style={{ marginTop: 16 }}>{s.feature.text}</p>
            <ul className="ticks">{s.feature.bullets.map((b) => <li key={b}><Tick />{b}</li>)}</ul>
          </div>
          <div className="card bg-slate" style={{ padding: 36 }}>
            <p className="eyebrow light">{s.feature.sideTitle}</p>
            <ul className="ticks" style={{ marginTop: 6 }}>{s.feature.side.map((b) => <li key={b}><Tick />{b}</li>)}</ul>
            <div style={{ borderTop: "1px solid rgba(255,255,255,.2)", marginTop: 26, paddingTop: 22 }}>
              <p className="eyebrow light">What you gain</p>
              <ul className="ticks" style={{ marginTop: 6 }}>{s.gains.map((b) => <li key={b}><Tick />{b}</li>)}</ul>
            </div>
            <div style={{ marginTop: 22 }}>
              <p className="eyebrow light">Who we serve</p>
              <ul className="pills" style={{ listStyle: "none" }}>{s.serve.map((x) => <li className="pill" key={x}>{x}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-mist" aria-labelledby="faq-h">
        <div className="container">
          <p className="eyebrow">FAQs</p>
          <h2 id="faq-h" style={{ marginBottom: 28 }}>{s.name}: <span className="accent">questions answered.</span></h2>
          <Faqs items={s.faqs} />
        </div>
      </section>

      <section className="section" aria-labelledby="more-h">
        <div className="container">
          <p className="eyebrow">Explore more</p>
          <h2 id="more-h" style={{ marginBottom: 28 }}>Other Chromelite <span className="accent">services.</span></h2>
          <div className="grid g4">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}/`} className="card flat" style={{ color: "inherit" }}>
                <div className="card-body">
                  <Hex small color="#4A4D55"><Icon name={o.icon} /></Hex>
                  <h3 style={{ marginTop: 8 }}>{o.name}</h3>
                  <p>{o.short}</p>
                  <span className="card-link" style={{ color: "#A51E25" }}>Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`Ready to talk about ${s.name.split(" &")[0]}?`} />
    </>
  );
}
