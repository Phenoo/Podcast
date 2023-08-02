import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Page } from "@/app/type/types";


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
