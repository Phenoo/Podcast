interface EpisodeType {
  title: string;
  schedule: string;
  fileUrl: string;
  duration: string;
  subtitle: string;
  explicit: boolean;
  summary: string;
  description: string;
  blogContent: any; // replace with the appropriate type for blockContent
  slug: {
    current: string;
  };
  categories: {
    _ref: string;
  }[];
  sponsors: {
    _ref: string;
  }[];
  tags: string[];
  relatedEpisodes: {
    _ref: string;
  }[];
  coverArt: {
    image: string;
  };
  imageUrl: string;
}