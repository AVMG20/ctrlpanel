/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'nl', 'fr'],
        defaultLocale: 'en',
        localeDetection: false, //TODO in the future we can enable this and handle this using middleware
    },
    images: {
        domains: ['cdn.discordapp.com', 'next-ctrlpanel.avmg.dev'],
    },
};

export default nextConfig;
