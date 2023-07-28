// Import the required dependencies
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Page } from "@/app/type/types";

// Define the getAllPosts function
export async function getAllPosts(): Promise<Page[]> {
  const query = groq`*[__type == "episode"]
  {
    slug
  }`;

  try {
    const posts = await client.fetch<Page[]>(query);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
