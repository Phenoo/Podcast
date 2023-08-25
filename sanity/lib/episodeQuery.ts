// episodeQuery.ts
import { client } from "@/sanity/lib/client"; 
import groq from "groq";


export async function getSingleEpisode(slug: string) {
  return client.fetch(
    groq`*[_type == "episode" && slug.current == $slug][0]{
      // ... your episode query here
      title,
      description,
      image,
    }`,
    { slug }
  );
}
