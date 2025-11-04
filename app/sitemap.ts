import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date().toISOString();
  const base = "https://anthonyberrue.github.io";

  return [
    { url: `${base}/`, lastModified: lastMod },
    { url: `${base}/en/`, lastModified: lastMod },
  ];
}
