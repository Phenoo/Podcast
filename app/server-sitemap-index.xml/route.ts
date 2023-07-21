import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Page } from "@/app/type/types";
// app/server-sitemap.xml/route.ts
import { getServerSideSitemap } from 'next-sitemap'
 
export async function GET(request: Request) {
  // Method to source urls from cms
  //export async function getSourceUrlsFromCMS(): Promise<string[]> {
    const query = groq`*[__type == "episode"] {
      slug
    }`;
  
    const slugs = await client.fetch<Page[]>(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);
  
    //return slugRoutes;
  
  const urls = await fetch('https://podcast-green-mu.vercel.app/api')
 
  return getServerSideSitemap([
    {
      loc: 'https://podcast-green-mu.vercel.app',
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: 'https://podcast-green-mu.vercel.app/dynamic-path-2',
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
  ])
}