export default function sitemap() {
    const base = 'https://anthonyberrue.github.io/anthony-cv';
    return [
        { url: `${base}/`, lastModified: new Date() },
        { url: `${base}/en`, lastModified: new Date() }
    ];
}
