import { LANG } from "@/enums/global";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Blog Press | Boost Your SEO with AI-Powered Blog Content",
    short_name: "Blog Press",
    description:
      "Get high-quality, SEO-optimized blog articles instantly through our API. No more time-consuming content creation - just results.",
    start_url: "/" + LANG.EN,
    display: "standalone",
    categories: ["productivity"],
    theme_color: "#343434",
    background_color: "#ffffff",
    icons: [],
  };
}
