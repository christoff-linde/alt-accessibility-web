/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
        {
            // Match any image URL hosten on unsplash.com
            // and use the unsplash image loader
            protocol: 'https',
            hostname: 'source.unsplash.com',
        }
    ]
}}

module.exports = nextConfig
