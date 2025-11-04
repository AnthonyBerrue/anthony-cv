export default function sitemap() {
    const base = "https://anthonyberrue.github.io";
    const lastMod = new Date().toISOString();
    return [
        { url: `${base}/`, lastModified: lastMod },
        { url: `${base}/en/`, lastModified: lastMod },
    ];
}
