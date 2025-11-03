import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';        // ou: export const revalidate = 86400;

const isProd = process.env.NODE_ENV === 'production';
const base = isProd
    ? 'https://anthonyberrue.github.io/anthony-cv'
    : 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
    const lastMod = new Date().toISOString();
    return [
        { url: `${base}/`, lastModified: lastMod },
        { url: `${base}/en/`, lastModified: lastMod },
    ];
}
