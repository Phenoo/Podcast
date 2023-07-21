// app/server-sitemap.xml/route.ts
import { getServerSideSitemap } from 'next-sitemap';
import groq from 'groq'; // Assuming you have the groq library for querying the CMS
import {client} from '@/sanity/lib/client'; // Replace 'your-cms-client' with the actual client to interact with your CMS
import { Page } from '@/app/type/types';

// Method to source static URLs from CMS using groq query
export async function generateStaticParams() {
  const query = groq`*[__type == "episode"] {
    slug
  }`;

  const slugs = await client.fetch<Page[]>(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    loc: `https://podcast-green-mu.vercel.app/${slug}`, // Replace 'example.com' with your actual domain
    lastmod: new Date().toISOString(),
    // Add other optional properties like changefreq and priority here if needed
  }));
}

export async function GET(request: Request) {
  // Get the static URLs from the CMS
  const staticUrls = await generateStaticParams();

  // Combine the static and dynamic URLs for the sitemap
  const sitemapUrls = [
    {
      loc: 'https://podcast-green-mu.vercel.app',
      lastmod: new Date().toISOString(),
      // Add other optional properties like changefreq and priority here if needed
    },
    ...staticUrls,
  ];

  // Generate the sitemap using next-sitemap's getServerSideSitemap function
  const sitemap = await getServerSideSitemap(sitemapUrls);

  // Set the response headers to indicate XML content type
  const headers = new Headers();
  headers.set('Content-Type', 'application/xml');

  // Return the sitemap as a response
  return new Response(sitemap, { headers });
}




