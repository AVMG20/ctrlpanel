/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'nl', 'fr'],
        defaultLocale: 'en',
        localeDetection: false, //TODO in the future we can enable this and handle this using middleware
    },
    images: {
        remotePatterns: [{
            hostname: 'cdn.discordapp.com',
        }],
        path: '/_next/image',
        loader: 'default',
    },
    trailingSlash: false
};

export default nextConfig;
