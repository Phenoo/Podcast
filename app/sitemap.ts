import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
// Define your query to fetch the relevant data (modify this based on your schema)
//const query = `*[YOUR_QUERY_HERE]`;
const query = groq`*[__type == "episode"]
{
  slug
}`;

// Fetch the data from Sanity
async function fetchSlugsFromSanity() {
    try {
      const episodes = await client.fetch(query);
      // Extract the "slug" field from each episode
      const slugs = episodes.map((episode: { slug: { current: any; }; }) => episode.slug.current);
      return slugs;
    } catch (error) {
      console.error('Error fetching data from Sanity:', error.message);
      return [];
    }
  }
  
  // Generate the route.ts file
  async function generateRouteFile() {
    const slugs = await fetchSlugsFromSanity();
    // Customize the format of the route.ts file based on your needs
    const routeFileContent = `
      // Auto-generated route.ts file
      // Add your custom routing logic here
      const routes = ${JSON.stringify(slugs)};
      export default routes;
    `;
    
    // Write the content to a route.ts file in your desired location
  }
  
  generateRouteFile();  