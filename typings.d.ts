type Base = {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
};

interface Post extends Base {
	episode: Episode;
	blogContent: Block[];
	categories: Category[];
	mainImage: Image;
	slug: Slug;
	title: string;
	description: string;
    summary: string;
}

interface Author extends Base {
	bio: Block[];
	image: Image;
	name: string;
	slug: Slug;
}

interface Image {
	_type: "image";
	asset: Reference;
}

interface Reference {
	_ref: string;
	_type: "reference";
}

interface Slug {
	_type: "slug";
	current: string;
}

interface Block {
	_key: string;
	_type: "block";
	children: Span[];
	markDefs: any[];
	style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
	_key: string;
	_type: "span";
	marks: string[];
	text: string;
}

interface Category extends Base {
	title: string;
	description: string;
}

interface MainImage {
	_type: "image";
	asset: Reference;
}

interface Title {
	_type: "string";
	current: string;
}

interface EpisodeType{
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
