// Import the required dependencies and setup Sanity client
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Page } from "@/app/type/types";
import { getAllPosts } from "@/lib/getData"; // Adjust the path based on your actual file structure
//import getAllCategories from "@/lib/getAllCategories";

export default async function sitemap() {
  const baseUrl = "https://podcast-green-mu.vercel.app";

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
      url: `${baseUrl}/category`,
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
  ];
}
