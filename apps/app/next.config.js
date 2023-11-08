/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ['@acme/ui'],
   experimental: {
    appDir: true,
  },
 async rewrites() {
    return [
      {
        source: "/api/:slug",
        destination: "http://localhost:3002/:slug",
      }
    ]
  },
}

module.exports = nextConfig
