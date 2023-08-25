import { Page } from "@/app/type/types";
import { client } from "@/sanity/lib/client";
import groq from "groq";

export async function generateStaticParams() {
  const query = groq`*[__type == "episode"]
  {
    slug
  }`;

  const slugs = await client.fetch<Page[]>(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes;
}
