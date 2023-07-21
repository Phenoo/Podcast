// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://podcast-green-mu.vercel.app',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap-index.xml'], // <= exclude here
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://podcast-green-mu.vercel.app/server-sitemap-index.xml', // <==== Add here
      ],
    },
  }