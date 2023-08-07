
import { Metadata } from "next";
import { getSingleEpisode } from "@/sanity/lib/episodeQuery";
import  EpisodeType  from "@/typings/episode";

type Props = {
    params: {
      episode: string;
    };
  };
  
  // Dynamic metadata for SEO
  export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = params.episode;
    const episode: EpisodeType = await getSingleEpisode(slug);
  
    // Handle null case for description
    const description = episode.summary || "";
  
    return {
      title: `${episode.title} | Episode`,
      description: description,
      openGraph: {
        images: episode.coverArt?.image || "add-a-fallback-episode-image-here",
        title: episode.title,
        description: description,
      },
    };
  }