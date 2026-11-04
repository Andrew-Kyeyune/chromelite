import { VALUES, JOURNEY, COMPLIANCE } from "@/lib/data";
import { SITE } from "@/lib/site";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import { Hex, Img, PageHero, CtaBand, JsonLd } from "@/components/ui";

export const metadata = pageMeta({
  title: "About Us: Ugandan Technology & Branding Firm",
  description: "A Kampala company that grew from signage and steel supply into an integrated IT, data, design and marketing partner. Our story, values and leadership.",
  path: "/about/",
  keywords: ["about Chromelite Technologies", "Ugandan technology company", "Andrew Kyeyune", "branding company Kampala"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about/" }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", url: `${SITE.url}/about/`, name: "About Chromelite Technologies", about: { "@id": `${SITE.url}/#organization` } }} />
      <PageHero
        image="office_exterior"
        crumbs={[{ href: "/", label: "Home" }, { label: "About" }]}
        eyebrow="About us"
        title={<>Built in Uganda. <span className="accent">Engineered for growth.</span></>}
        lead="Chromelite Technologies Limited helps organisations build their systems, understand their data, design their identity and reach their markets, through one accountable team."
      />

      <section className="section" aria-labelledby="story-h">
        <div className="container split">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 id="story-h">From signboards <span className="accent">to systems.</span></h2>
            <div className="justify muted" style={{ marginTop: 18, display: "grid", gap: 14 }}>
              <p>We began in branding, signage and structural steel supply, delivering the physical face of brands for public and private clients across Uganda and the region. That work earned us a reputation for disciplined delivery: precise fabrication, safe installation, complete documentation and respect for deadlines, including on government contracts procured under the PPDA framework and cross-border supply projects.</p>
              <p>Along the way, our clients began asking for more. They needed systems that work reliably, data they can trust, creative work that stands out and campaigns that bring customers through the door. So we added four further service lines: IT solutions, data analytics and business intelligence, multimedia design, and marketing strategy and campaigns.</p>
              <p>We understand how business is done in East Africa: the centrality of mobile money, the demands of URA&apos;s EFRIS e-invoicing, the discipline of public procurement, and the realities of serving customers in Kampala and upcountry alike.</p>
            </div>
          </div>
          <figure className="figure" style={{ aspectRatio: "4/5" }}><Img name="workshop" alt="Fabrication in the Chromelite workshop" /></figure>
        </div>
      </section>

      <section className="section bg-mist" aria-labelledby="journey-h">
        <div className="container">
          <p className="eyebrow">Our journey</p>
          <h2 id="journey-h" style={{ marginBottom: 36 }}>How Chromelite <span className="accent">has grown.</span></h2>
          <ol className="grid g4" style={{ listStyle: "none" }}>
            {JOURNEY.map((j, i) => (
              <li className="card" key={j.title}>
                <div className="card-img"><Img name={["shop_after", "steel_stack", "bld_government", "dashboard"][i]} alt={j.title} /></div>
                <div className="card-body">
                  <span className="eyebrow" style={{ margin: 0, color: i === 3 ? "#A51E25" : "#8A8D93" }}>{j.stage}</span>
                  <h3>{j.title}</h3><p>{j.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="vm-h">
        <div className="container grid g2">
          <div className="card bg-red" style={{ padding: 44 }}>
            <p className="eyebrow light">Our vision</p>
            <h2 id="vm-h" style={{ color: "#fff", fontSize: "1.7rem" }}>To be East Africa&apos;s most trusted integrated partner for technology, data and brand growth.</h2>
          </div>
          <div className="card bg-slate" style={{ padding: 44 }}>
            <p className="eyebrow light">Our mission</p>
            <p style={{ fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.5 }}>To empower businesses and institutions with practical technology, actionable insight and compelling creative work that deliver measurable growth.</p>
            <p style={{ marginTop: 20, fontWeight: 800, letterSpacing: ".06em" }}>Technology. Insight. Identity. <span style={{ color: "#F2B6B9" }}>Impact.</span></p>
          </div>
        </div>
      </section>

      <section className="section bg-dark" aria-labelledby="values-h">
        <div className="container">
          <p className="eyebrow light">Core values</p>
          <h2 id="values-h" style={{ color: "#fff", marginBottom: 36 }}>The principles behind <span className="accent">every project.</span></h2>
          <div className="grid g3" style={{ gap: 32 }}>
            {VALUES.map((v, i) => (
              <div className="value" key={v.title}>
                <Hex color={i % 2 ? "#4A4D55" : "#A51E25"}>{String(i + 1).padStart(2, "0")}</Hex>
                <div><h3 style={{ color: "#fff" }}>{v.title}</h3><p>{v.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="lead-h">
        <div className="container split">
          <figure className="figure" style={{ aspectRatio: "4/5" }}><Img name="portrait" alt="Andrew Kyeyune, Director of Chromelite Technologies" /></figure>
          <div>
            <p className="eyebrow">Leadership</p>
            <h2 id="lead-h">Andrew Kyeyune, <span className="accent">Director</span></h2>
            <div className="justify muted" style={{ marginTop: 18, display: "grid", gap: 14 }}>
              <p>Andrew brings over nine years of industry experience in digital, creative and technology roles, including Blu Flamingo Ltd and Neo Evolution Ltd, where he worked on projects for leading Ugandan brands in banking, beverages and telecommunications.</p>
              <p>He holds a BSc in Applied Information Technology from ISBAT University and is completing an MSc in Information Technology. He is a Course Facilitator in the Faculty of Information and Communication Technology at ISBAT University, teaching software engineering, cloud computing, big data analytics and business intelligence, and is a member of the ICT Association of Uganda (ICTAU).</p>
              <p>This combination of industry practice and academic depth shapes how Chromelite works: solutions grounded in sound engineering and data principles, yet practical, affordable and easy to use every day.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-mist" aria-labelledby="qc-h">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow">Quality &amp; compliance</p><h2 id="qc-h">Built to standard. <span className="accent">Delivered with care.</span></h2></div>
            <p>We work within Uganda&apos;s regulatory frameworks and apply quality checks at every stage, so clients can rely on our work in audits, inspections and tenders.</p>
          </div>
          <div className="grid g3">
            {COMPLIANCE.map((c, i) => (
              <div className="card" key={c.title} style={{ padding: 26, borderTop: `4px solid ${i % 2 ? "#8A8D93" : "#A51E25"}` }}>
                <h3>{c.title}</h3><p className="muted" style={{ marginTop: 8, fontSize: 15 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
