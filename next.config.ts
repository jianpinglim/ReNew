/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['re-new-orcin.vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 're-new-orcin.vercel.app',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
}

module.exports = nextConfig