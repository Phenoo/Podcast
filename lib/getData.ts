// Import the required dependencies and setup Sanity client
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Page } from "@/app/type/types";

export async function* getAllPosts(): AsyncGenerator<Page, void, unknown> {
  try {
    // Define the GROQ query to fetch all posts with slugs and categories from Sanity
    const query = groq`*[_type == "episode"]
    {
      slug,
      categories[]-> {
        slug
      }
    }`;

    // Fetch the posts using the Sanity client
    const posts = await client.fetch<Page[]>(query);

    // Iterate over the posts using async generator
    for (const post of posts) {
      yield post;
    }
  } catch (error) {
    console.error("Error fetching posts from Sanity:", error);
  }
}
