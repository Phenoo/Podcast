import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";

type Props = {
  params: {
    episodeSlug: string;
  };
};

type Episode = {
  title: string;
  subtitle: string;
  description: string;
  coverArt: {
    asset: {
      url: string;
    };
  };
};

// Dynamic metadata for SEO using episode data
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const episodeSlug = params.episodeSlug;

  try {
    // Fetch the specific episode using the episodeSlug
    const episodeQuery = groq`*[_type == "episode" && slug.current == $slug][0] {
      title,
      subtitle,
      description,
      coverArt {
        asset {
          url
        }
      }
    }`;
    
    const episodeData: Episode | undefined = await client.fetch(episodeQuery, { slug: episodeSlug });

    if (!episodeData) {
      throw new Error(`Episode not found with slug: ${episodeSlug}`);
    }

    return {
      title: `${episodeData.title} | Episode`,
      description: episodeData.subtitle,
      openGraph: {
        images: episodeData.coverArt.asset.url || "add-a-fallback-episode-image-here",
        title: episodeData.title,
        description: episodeData.subtitle,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    // Return some default metadata in case of an error
    return {
      title: "Default Title",
      description: "Default Description",
      openGraph: {
        images: "default-image-url",
        title: "Default Title",
        description: "Default Description",
      },
    };
  }
}
