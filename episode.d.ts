interface Episode extends SanityDocument {
    _type: 'episode';
    slug: Slug;
    title: string;
    description: string;
    summary: string;
    coverArt: Image;
    audioUrl: string;
    publishedAt: string;
    duration: number;
    explicit: boolean;
    season: number;
    episode: number;
    tags: string[];
    hosts: Host[];
    guests: Guest[];
    sponsors: Sponsor[];
    links: Link[];
    transcript: Transcript[];
    chapters: Chapter[];
    showNotes: ShowNote[];
    meta: Meta;
};

interface EpisodeType {
    _type: "episode";
    slug: Slug;
    title: string;
    description: string;
    summary: string;
    coverArt: Image;
    audioUrl: string;
    publishedAt: string;
    duration: number;
    explicit: boolean;
    season: number;
    episode: number;
    tags: string[];
    hosts: Host[];
    guests: Guest[];
    sponsors: Sponsor[];
    links: Link[];
    transcript: Transcript[];
    chapters: Chapter[];
    showNotes: ShowNote[];
    meta: Meta;
}

export {}; // Add an empty export statement to convert the file into a module
// Compare this snippet from app/episode/[slug]/index.tsx:
