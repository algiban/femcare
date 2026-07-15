import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Arkha",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#080a0f",
    theme_color: "#080a0f",
    icons: [{ src: "/logo-mark.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
