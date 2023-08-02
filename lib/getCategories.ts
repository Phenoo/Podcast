import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Page } from "@/app/type/types";

interface Category {
  _id: string;
  slug: string; // Update this to match your actual data structure
}

export default async function sitemap() {
  const baseUrl = "https://podcast-green-mu.vercel.app";

  // Get All Categories from CMS
  const categoryQuery = groq`*[_type == "category"] {
    _id,
    slug {
      current
    }
  }`;
  const categories = await client.fetch<Category[]>(categoryQuery);
  const categoryUrls: { url: string; lastModified: Date }[] = [];

  for (const category of categories) {
    categoryUrls.push({
      url: `${baseUrl}/category/${category.slug}`,
      lastModified: new Date(),
    });
  }

  // Get All Posts from CMS
  const postGenerator = getAllPosts();
  const postsUrls: { url: string; lastModified: Date }[] = [];

  for await (const post of postGenerator) {
    postsUrls.push({
      url: `${baseUrl}/episode/${post.slug.current}`,
      lastModified: new Date(),
    });
  }

  // Add "about" and "contact" page URLs
  const additionalUrls = [
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/episodes`,
      lastModified: new Date(),
    },
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...additionalUrls,
    ...postsUrls,
    ...categoryUrls,
  ];
}
