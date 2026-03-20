import type { MetadataRoute } from "next";
import { courses, instructors } from "@/lib/data";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://academy-demo.up.railway.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/courses`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/instructors`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    ...courses.map((c) => ({ url: `${BASE}/courses/${c.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 })),
    ...instructors.map((i) => ({ url: `${BASE}/instructors/${i.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
