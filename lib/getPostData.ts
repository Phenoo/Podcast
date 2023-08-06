// Import the required dependencies and setup Sanity client
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Page } from "@/app/type/types";

{/* export async function* getAllPosts(): AsyncGenerator<Page, void, unknown> {
  try {
    // Define the GROQ query to fetch all episodes with slugs, categories, title, description, and cover image from Sanity
    const query = groq`*[_type == "episode"]
    {
      slug,
      title,
      description,
      "coverImage": coverImage.asset->url,
      categories[]-> {
        slug
      }
    }`;

    // Fetch the episodes using the Sanity client
    const episodes = await client.fetch<Page[]>(query);

    // Iterate over the episodes using async generator
    for (const episode of episodes) {
      yield episode;
    }
  } catch (error) {
    console.error("Error fetching episodes from Sanity:", error);
  }
}
*/}

export async function getAllPosts() {
  try {
    const query = groq`*[_type == "episode"]
    {
      slug,
      title,
      description,
      "coverImage": coverImage.asset->url,
      categories[]-> {
        slug
      }
    }`;

    const episodes = await client.fetch(query);

    for (const episode of episodes) {
      yield episode;
    }
  } catch (error) {
    console.error("Error fetching episodes from Sanity:", error);
  }
}