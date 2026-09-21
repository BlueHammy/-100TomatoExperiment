import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

const PAGES = [
  { path: "", priority: 1, changeFrequency: "monthly" as const },
  { path: "/why", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/what-you-get", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/faq", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/100-pound-tomato", priority: 0.8, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  return PAGES.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path || "/"}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
