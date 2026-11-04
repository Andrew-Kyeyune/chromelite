// Central company details — sourced from Chromelite commercial invoices and the Company Profile 2026/27.
export const SITE = {
  name: "Chromelite Technologies Limited",
  shortName: "Chromelite Technologies",
  url: "https://www.chromelitedigital.co.ug",
  tagline: "Technology. Insight. Identity. Impact.",
  slogan: "One partner, from systems to storefront.",
  description:
    "Chromelite Technologies is a Kampala, Uganda company delivering IT solutions, data analytics and business intelligence, multimedia design, marketing campaigns, and branding, signage and fabrication — through one accountable team.",
  metaDescription:
    "Chromelite Technologies, Kampala: IT solutions, Power BI and data analytics, graphic design, digital marketing, and signage and fabrication from one team.",
  locale: "en_UG",
  address: {
    street: "Grand City Complex, Naalya – Namugongo Road",
    locality: "Kampala",
    area: "Naalya",
    poBox: "P.O. Box 8764",
    country: "UG",
    countryName: "Uganda",
  },
  phones: ["+256 392 888 258", "+256 772 591 881"],
  phoneHref: ["tel:+256392888258", "tel:+256772591881"],
  whatsapp: "https://wa.me/256772591881",
  emails: ["chromelite@chromelitedigital.co.ug", "andruk03@gmail.com"],
  social: { handle: "@chromelitetechnologies" },
  tin: "1014153682",
  director: "Andrew Kyeyune",
  // Add full profile URLs here once confirmed; they are used in structured data (sameAs).
  sameAs: [] as string[],
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/industries/", label: "Industries" },
  { href: "/projects/", label: "Projects" },
  { href: "/contact/", label: "Contact" },
];
