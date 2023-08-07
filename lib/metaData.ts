import { Metadata } from "next";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Page } from "@/app/type/types";

type BlogPostMetadataProps = {
  slug: string;
};

export async function generateBlogPostMetadata({
  slug,
}: BlogPostMetadataProps): Promise<Metadata> {
  const query = groq`*[_type=="episode" && slug.current == $slug][0]  {
    ...,
    categories[]->,
    sponsors[]->,
    relatedEpisodes[]->
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    throw new Error("Blog post not found");
  }

  const title = post.title || "Default Title"; // Provide a default title if post.title is null

  return {
    title: `${title} | Your Website Name`, // Customize the website name
    description: post.description, // Use your post's description field
    openGraph: {
      images: [], // Add images if needed
      title: title,
      description: post.description,
    },
  };
}
