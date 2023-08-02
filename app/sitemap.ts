{/*
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
*/}

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Page } from "@/app/type/types";
import { getAllPosts } from "@/lib/getData";

interface Category {
  _id: string;
  slug: string; // Update this to match your actual data structure
}

export async function getAllCategories(): Promise<Category[]> {
  try {
    // Define the GROQ query to fetch all categories from Sanity
    const query = groq`*[_type == "category"] {
      _id,
      slug {
        current
      }
    }`;

    // Fetch the categories using the Sanity client
    const categories = await client.fetch<Category[]>(query);
    return categories;
  } catch (error) {
    console.error("Error fetching categories from Sanity:", error);
    return [];
  }
}

export default async function sitemap() {
  const baseUrl = "https://podcast-green-mu.vercel.app";

  // Get All Categories from CMS
  const categories = await getAllCategories();
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
