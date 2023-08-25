{/*
// Import the required dependencies and setup Sanity client
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Page } from "@/app/type/types";
import { getAllPosts } from "@/lib/getData"; // Adjust the path based on your actual file structure
//import getAllCategories from "@/lib/getAllCategories";

export default async function sitemap() {
  const baseUrl = "http://localhost:3000";

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
import { getAllCategories } from "@/lib/getAllCategories";

interface Category {
  _id: string;
  slug: {
    current: Slug; // Make sure the structure matches your schema definition
  };
}

export default async function sitemap() {
  const baseUrl = "https://podcast-green-mu.vercel.app/";

  // Get All Categories from CMS
  const categories = await getAllCategories();
  const categoryUrls: { [url: string]: any; lastModified: Date }[] = [];

  for await (const category of categories) {
    categoryUrls.push({
      // @ts-ignore
      url: `${baseUrl}/category/${category.slug.current}`,
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
  const extraUrls=[
    "about",
    "contact",
    "episodes", ]
  const additionalUrls =extraUrls.map((slug)=> {return {
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
  }})
  
 

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
