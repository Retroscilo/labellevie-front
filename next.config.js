/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '1337',
                pathname: '/**'
            },
        ],
    },
    experimental: {
        appDir: true,
        fontLoaders: [
            {loader: '@next/font/google', options: {subsets: ['latin']}}
        ]
    }
}

module.exports = nextConfig
