import { getAllPosts } from "@/lib/getPostData";
import { Metadata } from "next";

import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const episodes = await getAllPosts();

  // Convert the AsyncGenerator to an array
  const episodeArray = [];
  for await (const episode of episodes) {
    episodeArray.push(episode);
  }

  const episode = episodeArray.find((episode) => episode.slug === slug);

  if (!episode) {
    throw new Error(`No episode found for slug: ${slug}`);
  }

  return {
    title: episode.title,
    description: episode.description,
    openGraph: {
      type: "website",
      title: episode.title,
      description: episode.description,
      images: [
        {
          url: episode.coverImage,
          width: 1280,
          height: 720,
          alt: episode.title,
        },
      ],
    },
  };
}
