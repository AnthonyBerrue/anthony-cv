import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'anthony-cv';
const basePath = isProd ? `/${repoName}` : '';

const nextConfig: NextConfig = {
    output: 'export',
    basePath,
    assetPrefix: isProd ? `/${repoName}/` : undefined,
    images: { unoptimized: true },
    trailingSlash: true,

    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
};

export default nextConfig;
