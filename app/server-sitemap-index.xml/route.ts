 
// app/server-sitemap.xml/route.ts
import { getServerSideSitemap } from 'next-sitemap';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { Page } from '@/app/type/types';

export async function GET(request: Request) {
  // Method to source URLs from the CMS
  const urls = await fetchUrlsFromCMS();

  return getServerSideSitemap(urls);
}

async function fetchUrlsFromCMS(): Promise<{ loc: string; lastmod: string }[]> {
  const query = groq`*[__type == "episode"] {
    slug
  }`;

  const episodes = await client.fetch<Page[]>(query);

  // You can customize the date format to match your needs
  const currentIsoDate = new Date().toISOString();

  // Map the episodes to URLs with lastmod as current ISO date
  const urls = episodes.map((episode) => ({
    loc: `https://podcast-green-mu.vercel.app/${episode.slug.current}`,
    lastmod: currentIsoDate,
    changefreq: 'daily', // Change frequency can be 'always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', or 'never'
    priority: 0.8,       // Priority can be a value between 0.0 and 1.0, where 1.0 is the highest priority
  }));

  return urls;
}