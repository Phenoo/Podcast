import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { cache } from "react";
import SlugHero from "../SlugHero";
import Container from "@/app/components/Container";
import MediaLink from "@/app/components/MediaLink";
import EpisodeSlugContainer from "./EpisodeSlugContainer";
import Loader from "@/app/components/loader/Loader";
import ClientOnly from "@/app/components/ClientOnly";
import { Page } from "@/app/type/types";
import RelatedEpisodes from "../RelatedEpisodes";
import AudioPlayer from "@/app/episodes/AudioPlayer";

type Props = {
  params: {
    slug: "string";
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`*[__type == "episode"]
  {
    slug
  }`;

  const slugs = await client.fetch<Page[]>(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}


const BlogPost = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type=="episode" && slug.current == $slug][0]  {
    ...,
     categories[]->,
    sponsors[]->,
    relatedEpisodes[]->
  }`;
  const clientFetch = cache(client.fetch.bind(client));
  const post = await clientFetch(query, { slug });

  if (!post) return null;

  return (
    <>
    <ClientOnly>

    <Loader />
    <div className="bg-gray">
        <SlugHero />
        <div className="max-w-[2250px] mx-auto xl:px-20 md:px-10 sm:px-2 px-0">
                <EpisodeSlugContainer post={post} />
        </div>
        {
          post.relatedEpisodes && <RelatedEpisodes posts={post.relatedEpisodes} />

        }
        <MediaLink />
        <div className='fixed bottom-0 left-0  w-full'>
        {
            post.fileUrl && <AudioPlayer fileUrl={post.fileUrl} />
        }
        </div>
    </div>
    </ClientOnly>

    </>
  );
}

export default BlogPost