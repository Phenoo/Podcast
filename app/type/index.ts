// types/index.ts

import { PortableTextBlock } from "sanity";

export type EpisodeType = {
    _id: string;
    name: string;
    slug: string;
    tagline: string;
    projectUrl: string;
    logo: string;
    coverImage: {
      alt: string | null;
      image: string;
    };
    description: PortableTextBlock[];
  }