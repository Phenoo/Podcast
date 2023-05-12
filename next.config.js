/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.pexels.com', "cdn.sanity.io", "images.unsplash.com", "w7.pngwing.com"]
  }
}

module.exports = nextConfig
