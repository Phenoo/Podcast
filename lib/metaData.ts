import { getAllPosts } from "@/lib/getPostData";
import { Metadata, ResolvingMetadata } from "next";

import Image from "next/image";

export interface Props {
  params: {
    id: any;
    slug: string;
  };
}

{/*
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
*/}

import { generateStaticParams } from './staticParams'  // Import the static params function
import groq from "groq";
import { client } from "@/sanity/lib/client";



export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id

  // Fetch data from Sanity using the generateStaticParams function
  const slugRoutes = await generateStaticParams();
  const matchedSlug = slugRoutes.find((slug) => slug === id);

  if (!matchedSlug) {
    // Handle case when slug is not found
    throw new Error(`No data found for slug: ${id}`);
  }

  // Fetch the episode data from Sanity using the matched slug
  const episodeQuery = groq`*[slug.current == $matchedSlug][0]{
    title,
    description,
    // ... other fields you need
  }`;
  
  const episode = await client.fetch(episodeQuery, { matchedSlug });

  // Optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: episode.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}
export { generateStaticParams };

