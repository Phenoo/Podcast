const withSitemap = require('next-sitemap');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.pexels.com', 'cdn.sanity.io', 'images.unsplash.com', 'w7.pngwing.com'],
  },
  // Your other Next.js configuration options here
};

module.exports = withSitemap({
  ...nextConfig, 
  // Spread your existing nextConfig
  // Options for next-sitemap
  // You can customize these as per your project's requirements
  // For example:
   exclude: ['/admin'],
  priorityMap: { '/': 1, '/dynamic-page': 0.8 },
  changefreq: 'daily',
  generateRobotsTxt: true,
  // etc.
});