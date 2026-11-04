import { PROJECTS } from "@/lib/data";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import { Img, Tick, PageHero, CtaBand, JsonLd } from "@/components/ui";

export const metadata = pageMeta({
  title: "Projects: Government Rebranding & Steel Supply",
  description: "Case studies: government rebranding works for MAAIF, structural steel supply for hydropower in Burundi, and a gallery of signage and digital work.",
  path: "/projects/",
  keywords: ["signage projects Uganda", "government rebranding Uganda", "structural steel supply Burundi", "Chromelite projects"],
});

const GALLERY = [
  { img: "pylon_night", cap: "Illuminated pylon sign", big: true },
  { img: "shop_after", cap: "Branch fascia signage" },
  { img: "vehicle_wrap", cap: "Fleet branding" },
  { img: "billboard", cap: "Outdoor billboard" },
  { img: "led_screen", cap: "LED digital signage" },
  { img: "kiosk", cap: "Branded kiosk" },
  { img: "website_devices", cap: "Website & e-commerce" },
  { img: "dashboard", cap: "Power BI dashboard" },
  { img: "brand_board", cap: "Brand identity" },
];

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects/" }])} />
      <PageHero
        image="drone_site"
        crumbs={[{ href: "/", label: "Home" }, { label: "Projects" }]}
        eyebrow="Selected projects"
        title={<>Proven with <span className="accent">demanding clients.</span></>}
        lead="From government rebranding works to cross-border structural steel supply, we deliver to specification and document every stage of the work."
      />
      <section className="section bg-mist">
        <div className="container grid" style={{ gap: 36 }}>
          {PROJECTS.map((p, i) => (
            <article className="project" key={p.title}>
              <div className="p-img" style={{ order: i % 2 }}><Img name={p.image} alt={p.title} /></div>
              <div className="p-body">
                <p className="eyebrow">Case study</p>
                <h2 style={{ fontSize: "1.7rem" }}>{p.title}</h2>
                <div className="meta"><div><b>CLIENT</b>{p.client}</div><div><b>SCOPE</b>{p.scope}</div></div>
                <p className="justify muted">{p.text}</p>
                <ul className="ticks">{p.results.map((r) => <li key={r}><Tick />{r}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section" aria-labelledby="gal-h">
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h2 id="gal-h" style={{ marginBottom: 28 }}>Our work, <span className="accent">across the region.</span></h2>
          <div className="gallery">
            {GALLERY.map((g) => (
              <figure key={g.img} className={g.big ? "big" : ""}><Img name={g.img} alt={g.cap} /><figcaption>{g.cap}</figcaption></figure>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Your project could be next." />
    </>
  );
}
