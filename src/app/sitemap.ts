import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/projects",
    "/projects/femcare",
    "/projects/arkhahr",
    "/legal",
    "/legal/arkhahr",
    "/privacy-policy/arkhaflow",
    "/privacy-policy/arkhatouring",
    "/privacy-policy/arkhahr",
    "/privacy-policy/femcare",
    "/terms/femcare",
    "/account-deletion/femcare",
    "/medical-disclaimer/femcare",
    "/support",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes("privacy") || route.includes("terms") || route.includes("legal") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/projects/") ? 0.8 : 0.7,
  }));
}
