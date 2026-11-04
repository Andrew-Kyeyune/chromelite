import Link from "next/link";
import { SERVICES } from "@/lib/data";

export const metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <p className="eyebrow">Error 404</p>
        <h1>This page <span className="accent">could not be found.</span></h1>
        <p className="lead" style={{ marginTop: 16 }}>The page may have moved. Try one of our services below, or go back to the home page.</p>
        <ul className="ticks">{SERVICES.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}/`}>{s.name}</Link></li>)}</ul>
        <div className="btn-row"><Link className="btn btn-primary" href="/">Back to home</Link></div>
      </div>
    </section>
  );
}
