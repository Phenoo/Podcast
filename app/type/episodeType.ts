// EpisodeType.ts
type EpisodeType = {
    _id: string;
    title: string;
    tagline: string;
    coverArt?: {
      alt: string;
      image: string;
    };
    description: any; // Adjust the type based on your data structure
    categories: Array<any>; // Adjust the type based on your data structure
    sponsors: Array<any>; // Adjust the type based on your data structure
    relatedEpisodes: Array<any>; // Adjust the type based on your data structure
    fileUrl?: string;
  };
  
  export default EpisodeType;
  