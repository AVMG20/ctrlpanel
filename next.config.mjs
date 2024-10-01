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
    },
    trailingSlash: false
};

export default nextConfig;
