import { LANGS } from "@/enums/global";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const { DOMAIN } = process.env;
  const routes: MetadataRoute.Sitemap = [];
  for (const lang of LANGS) {
    routes.push({
      url: `${DOMAIN}/${lang}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    });
  }
  return routes;
}
