import type { Metadata } from "next";
import { SITE } from "./site";
import type { Service } from "./data";

const BASE_KEYWORDS = ["Chromelite Technologies", "Chromelite Uganda", "Kampala", "Uganda", "Naalya"];

/** Builds complete per-page metadata: title, description, canonical, Open Graph and Twitter cards. */
export function pageMeta({ title, description, path, keywords = [], image = "/og-image.png" }: {
  title: string; description: string; path: string; keywords?: string[]; image?: string;
}): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title,
    description,
    keywords: [...keywords, ...BASE_KEYWORDS],
    alternates: { canonical: path },
    openGraph: {
      type: "website", url, title: `${title} | Chromelite`, description, siteName: SITE.name, locale: SITE.locale,
      images: [{ url: image, width: 1200, height: 630, alt: `${SITE.shortName} — ${title}` }],
    },
    twitter: { card: "summary_large_image", title: `${title} | Chromelite`, description, images: [image] },
  };
}

const ORG_ID = `${SITE.url}/#organization`;

/** LocalBusiness / ProfessionalService schema — the key signal for local search ("signage company Kampala" etc.). */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/logo.svg`,
    image: `${SITE.url}/og-image.png`,
    description: SITE.description,
    slogan: SITE.tagline,
    telephone: SITE.phones[0].replace(/\s/g, ""),
    email: SITE.emails[0],
    taxID: SITE.tin,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: "Central Region",
      postOfficeBoxNumber: "8764",
      addressCountry: SITE.address.country,
    },
    areaServed: [{ "@type": "Country", name: "Uganda" }, { "@type": "Country", name: "Burundi" }, { "@type": "Place", name: "East Africa" }],
    contactPoint: [
      { "@type": "ContactPoint", telephone: SITE.phones[0].replace(/\s/g, ""), contactType: "customer service", areaServed: "UG", availableLanguage: ["English"] },
      { "@type": "ContactPoint", telephone: SITE.phones[1].replace(/\s/g, ""), contactType: "sales", areaServed: "UG", availableLanguage: ["English"] },
    ],
    founder: { "@type": "Person", name: SITE.director, jobTitle: "Director" },
    knowsAbout: ["IT solutions", "Business intelligence", "Power BI", "Data analytics", "Graphic design", "Brand identity", "Digital marketing", "Signage", "Steel fabrication", "EFRIS integration"],
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
  };
}

export function websiteSchema() {
  return { "@context": "https://schema.org", "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { "@id": ORG_ID }, inLanguage: "en-UG" };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${SITE.url}${it.path}` })),
  };
}

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/services/${s.slug}/#service`,
    name: s.name,
    serviceType: s.name,
    description: s.metaDescription,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Uganda" },
    url: `${SITE.url}/services/${s.slug}/`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: s.name,
      itemListElement: s.offerings.map((o) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: o.title, description: o.text } })),
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}
