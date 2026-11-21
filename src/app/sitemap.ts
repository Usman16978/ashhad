import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/courses",
    "/teaching-method",
    "/activities",
    "/testimonials",
    "/contact",
    "/free-trial",
  ];
  const lastModified = new Date();

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
