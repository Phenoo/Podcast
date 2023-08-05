// Import necessary modules
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";



// Define the function to fetch metadata
async function fetchMetadata(slug: any) {
  const query = groq`
    *[_type=="episode" && slug.current == $slug][0] {
      title,
      description,
      image,
      // Add any other metadata fields you want to fetch
    }
  `;
  
  return await client.fetch(query, { slug });
}

export default fetchMetadata;
