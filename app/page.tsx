import Link from "next/link";
import type { Metadata } from "next";
import { SERVICES, STATS, STEPS, WHY, INDUSTRIES, PROJECTS, HOME_FAQS } from "@/lib/data";
import { SITE } from "@/lib/site";
import { Hex, Icon, Img, Tick, CtaBand, JsonLd, Faqs } from "@/components/ui";
import { faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Chromelite Technologies | IT, Data, Design & Signage Kampala" },
  description: SITE.metaDescription,
  keywords: ["IT company Kampala", "signage company Kampala", "Power BI Uganda", "graphic design Kampala", "digital marketing Uganda", "branding company Uganda", "Chromelite Technologies"],
  alternates: { canonical: "/" },
};

const FLOW = [
  { t: "Strategy", d: "Goals, audiences and success measures agreed up front." },
  { t: "Systems", d: "The technology that runs the business, built to fit." },
  { t: "Insight", d: "Data cleaned, connected and turned into decisions." },
  { t: "Creative", d: "Identity, content and campaigns that stand out." },
  { t: "Fabrication", d: "The physical brand, built in our own workshop." },
  { t: "Measurement", d: "Results reported honestly and improved over time." },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />

      <section className="hero">
        <div className="hero-art"><Img name="city_dusk_r" alt="Illuminated Chromelite billboard over the Kampala skyline at dusk" eager /></div>
        <div className="container">
          <div className="hero-content">
            <p className="eyebrow light">IT · Data &amp; BI · Design · Marketing · Signage</p>
            <h1>One partner, <span className="accent">systems</span> to storefront.</h1>
            <p>Chromelite Technologies helps organisations in Uganda build their systems, understand their data, design their identity and reach their markets, all through one accountable team based in Kampala.</p>
            <div className="btn-row">
              <Link className="btn btn-primary" href="/services/">Explore our services</Link>
              <Link className="btn btn-ghost" href="/contact/">Request a quote</Link>
            </div>
            <div className="chips">
              <span className="chip">MTN MoMo &amp; Airtel Money ready</span>
              <span className="chip">EFRIS integration</span>
              <span className="chip">In-house fabrication</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="stats" role="list">
          {STATS.map((s) => <div className="stat" role="listitem" key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}
        </div>
      </div>

      <section className="section" aria-labelledby="services-h">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow">What we do</p><h2 id="services-h">Five service lines. <span className="accent">One accountable partner.</span></h2></div>
            <p>Each service stands on its own, and each is stronger together. An engagement can start with a website or a signboard and grow into a complete programme of systems, data, creative work and campaigns.</p>
          </div>
          <div className="grid g3">
            {SERVICES.map((s, i) => (
              <article className="card service-card" key={s.slug}>
                <div className="card-img"><Img name={s.image} alt={`${s.name} by Chromelite Technologies`} /></div>
                <div className="card-body">
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <Hex color={i % 2 ? "#4A4D55" : "#A51E25"} small><Icon name={s.icon} /></Hex>
                    <span className="num">SERVICE {s.num}</span>
                  </div>
                  <h3>{s.name}</h3>
                  <p>{s.short}</p>
                  <Link className="card-link" href={`/services/${s.slug}/`} aria-label={`Learn more about ${s.name}`}>Learn more →</Link>
                </div>
              </article>
            ))}
            <article className="card bg-slate" style={{ justifyContent: "center" }}>
              <div className="card-body" style={{ justifyContent: "center" }}>
                <p className="eyebrow light">Not sure where to start?</p>
                <h3 style={{ color: "#fff", fontSize: "1.4rem" }}>Tell us the outcome you need. We will design the right mix.</h3>
                <p style={{ color: "#E6E7EA" }}>From a single signboard to a complete systems, data and marketing programme.</p>
                <div><Link className="btn btn-primary" href="/contact/" style={{ marginTop: 8 }}>Talk to us</Link></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section bg-mist" aria-labelledby="adv-h">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow">The integrated advantage</p><h2 id="adv-h">Most rebrands involve five suppliers. <span className="accent">With Chromelite, it takes one.</span></h2></div>
            <p>One contract, one project manager and one timeline. Designs approved in 3D match what is fabricated, systems and campaigns launch together, and results are reported on a single dashboard.</p>
          </div>
          <div className="flow">
            {FLOW.map((f, i) => (
              <div className="flow-step" key={f.t}>
                <div className="bar" style={{ background: ["#A51E25", "#6E1218", "#4A4D55"][i % 3] }}>{f.t}</div>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
          <div className="grid g2" style={{ marginTop: 40 }}>
            <figure className="figure"><Img name="shop_before" alt="Shopfront before rebranding" /></figure>
            <figure className="figure"><Img name="shop_after" alt="The same shopfront after a Chromelite rebrand with illuminated signage" /></figure>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="why-h">
        <div className="container split">
          <div>
            <p className="eyebrow">Why Chromelite</p>
            <h2 id="why-h">Why organisations <span className="accent">choose us.</span></h2>
            <p className="lead" style={{ marginTop: 14 }}>We combine the reach of a full-service agency with the accountability of a single, local partner.</p>
            <div className="grid g2" style={{ marginTop: 32, gap: 26 }}>
              {WHY.map((w, i) => (
                <div className="value" key={w.title}>
                  <Hex small color={i % 2 ? "#4A4D55" : "#A51E25"}>{String(i + 1).padStart(2, "0")}</Hex>
                  <div><h3>{w.title}</h3><p>{w.text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <figure className="figure" style={{ aspectRatio: "4/5" }}><Img name="workshop" alt="Chromelite fabrication workshop with welding in progress" /></figure>
        </div>
      </section>

      <section className="section bg-dark" aria-labelledby="process-h">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow light">How we work</p><h2 id="process-h" style={{ color: "#fff" }}>A clear process, <span className="accent">from first meeting to measured results.</span></h2></div>
          </div>
          <div className="steps">
            {STEPS.map((s, i) => (
              <div className="step" key={s.title}>
                <Hex color={i === 0 ? "#A51E25" : "#4A4D55"}>{i + 1}</Hex>
                <h3 style={{ color: "#fff" }}>{s.title}</h3>
                <p style={{ color: "#C9CBD0" }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="ind-h">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow">Industries we serve</p><h2 id="ind-h">Sector experience that <span className="accent">speaks your language.</span></h2></div>
            <p>Each sector has its own regulations, customers and pressures. We tailor our services to the realities of the industries we work in.</p>
          </div>
          <div className="grid g4">
            {INDUSTRIES.map((ind) => (
              <article className="card flat" key={ind.title}>
                <div className="card-img"><Img name={ind.image} alt={`${ind.title} in Uganda`} /></div>
                <div className="card-body"><h3 style={{ fontSize: "1rem" }}>{ind.title}</h3><p style={{ fontSize: 14 }}>{ind.challenge}</p></div>
              </article>
            ))}
          </div>
          <div className="btn-row"><Link className="btn btn-dark" href="/industries/">See sector solutions</Link></div>
        </div>
      </section>

      <section className="section bg-mist" aria-labelledby="proj-h">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow">Selected projects</p><h2 id="proj-h">Proven with <span className="accent">demanding clients.</span></h2></div>
            <p>From government rebranding works to cross-border structural steel supply, we deliver to specification and document every stage.</p>
          </div>
          <div className="grid g2">
            {PROJECTS.map((p) => (
              <article className="card" key={p.title}>
                <div className="card-img"><Img name={p.image} alt={p.title} /></div>
                <div className="card-body">
                  <span className="num" style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".16em", color: "#A51E25" }}>{p.scope.toUpperCase()}</span>
                  <h3>{p.title}</h3>
                  <p>{p.client}</p>
                  <ul className="ticks" style={{ marginTop: 6 }}>{p.results.slice(0, 2).map((r) => <li key={r}><Tick />{r}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
          <div className="btn-row"><Link className="btn btn-dark" href="/projects/">View all projects</Link></div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-h">
        <div className="container">
          <p className="eyebrow">Frequently asked questions</p>
          <h2 id="faq-h" style={{ marginBottom: 28 }}>Questions clients <span className="accent">often ask.</span></h2>
          <Faqs items={HOME_FAQS} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
