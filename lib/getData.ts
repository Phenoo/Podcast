// Import the required dependencies and setup Sanity client
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Page } from "@/app/type/types";

export function getAllPosts(): Promise<Page[]> {
  // Define the GROQ query to fetch all posts from Sanity
  const query = groq`*[_type == "episode"]
  {
    slug
  }`;

  // Fetch the posts using the Sanity client and return the Promise
  return client.fetch<Page[]>(query)
    .catch((error) => {
      console.error("Error fetching posts from Sanity:", error);
      return [];
    });
}
