import { INDUSTRIES } from "@/lib/data";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import { Img, PageHero, CtaBand, JsonLd } from "@/components/ui";

export const metadata = pageMeta({
  title: "Industries: SACCOs, Schools, Health, NGOs",
  description: "Systems, dashboards, branding and signage for SACCOs, schools, hospitals, retail, manufacturers, cooperatives, NGOs and government in Uganda.",
  path: "/industries/",
  keywords: ["SACCO management system Uganda", "school management system Uganda", "hospital signage Kampala", "NGO monitoring and evaluation Uganda", "government branding Uganda"],
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries/" }])} />
      <PageHero
        image="bld_school"
        crumbs={[{ href: "/", label: "Home" }, { label: "Industries" }]}
        eyebrow="Industries we serve"
        title={<>Sector experience that <span className="accent">speaks your language.</span></>}
        lead="Each sector has its own regulations, customers and pressures. These are the challenges we solve most often, and how we combine our services to solve them."
      />
      <section className="section bg-mist">
        <div className="container grid g2">
          {INDUSTRIES.map((ind) => (
            <article className="card industry" key={ind.title}>
              <div className="ind-img"><Img name={ind.image} alt={`${ind.title} — Chromelite solutions in Uganda`} /></div>
              <div className="card-body">
                <h2 style={{ fontSize: "1.2rem" }}>{ind.title}</h2>
                <span className="challenge">Challenge: {ind.challenge}</span>
                <p className="justify">{ind.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="Let's solve your sector's challenge." />
    </>
  );
}
