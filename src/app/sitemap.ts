import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/projects",
    "/projects/femcare",
    "/legal",
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
    changeFrequency: route.includes("privacy") || route.includes("terms") ? "monthly" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
