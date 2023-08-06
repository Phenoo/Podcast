import { getAllPosts } from "@/lib/getPostData";
import { Metadata } from "next";

import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Retrieve all episodes to find the one matching the given slug
  let post = null;
  for await (const episode of getAllPosts()) {
    if (episode.slug) {
      post = episode;
      break;
    }
  }

  if (!post) {
    return {
      title: "Not Found",
      description: "The episode is not found",
    };
  }

  return {
    title: post.title,
    description: post.description || "", // Ensure description is a string
    image: {
      url: post.coverImage,
      alt: post.title,
    },
    alternates: {
      canonical: `/post/${post.slug}`,
      languages: {
        "en-CA": `en-CA/post/${post.slug}`,
      },
    },
  };
}
