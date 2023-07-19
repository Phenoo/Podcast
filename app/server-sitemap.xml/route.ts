// app/server-sitemap.xml/route.ts
import { getServerSideSitemap } from 'next-sitemap';
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export async function GET(request: Request) {
  // Method to source urls from cms
    const query = groq`*[__type == "episode"]
    {
      slug
    }`;
  
    const slugs = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    //const urls = await fetch('https://podcast-green-mu.vercel.app/api')

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
