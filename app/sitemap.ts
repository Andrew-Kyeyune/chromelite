import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/services/", priority: 0.9, freq: "monthly" },
    ...SERVICES.map((s) => ({ path: `/services/${s.slug}/`, priority: 0.9, freq: "monthly" as const })),
    { path: "/about/", priority: 0.7, freq: "monthly" },
    { path: "/industries/", priority: 0.7, freq: "monthly" },
    { path: "/projects/", priority: 0.7, freq: "monthly" },
    { path: "/contact/", priority: 0.8, freq: "monthly" },
  ];
  return pages.map((p) => ({ url: `${SITE.url}${p.path}`, lastModified: now, changeFrequency: p.freq, priority: p.priority }));
}
