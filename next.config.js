/** @type {import('next').NextConfig} */
const nextConfig = {
    styledComponents: true,
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
    },
}

module.exports = nextConfig
