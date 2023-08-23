
import React, { Suspense, cache } from 'react'
import  { groq} from 'next-sanity'
import { client } from '@/sanity/lib/client';
import EpisodeContainer from '@/app/episodes/EpisodeContainer';
import CategoryHero from '../CategoryHero';
import Checkmate from '@/app/components/Checkmate';
import Loader from '@/app/components/loader/Loader';
import { Page } from '@/app/type/types';


type Props = {
    params: {
      slug: "string";
    };
  };
  
  export const revalidate = 60;



  export async function generateMetadata({ params: { slug } }: Props) {
    try {
      const query = groq`*[_type == "category" && slug.current == $slug ] {
        title,
        description,
      }[0]`;
      const clientFetch = cache(client.fetch.bind(client));
      const tags = await clientFetch<Page>(query, { slug });
      if (!tags)
        return {
          title: "Not Found",
          description: "The page you are looking for does not exist.",
        };
      return {
        title: tags.title,
        description: tags.description,
      
      };
    } catch (error) {
      console.error(error);
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };
    }
  }





export async function generateStaticParams(){
    const query = groq`*[__type == "category"]
    {
      slug
    }`;

    const slugs = await client.fetch<Page[]>(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current)

    return slugRoutes.map(async(slug )  => ({
        slug
    }))
}



const Categorypage = async ({ params: { slug } }: Props) => {
    const query = groq`*[_type == "category" && slug.current == $slug ] {
        _id,
        title,
        description,
        summary,
        "episodes": *[_type=='episode' && references(^._id)] {
          title,
          categories[]->,
          slug,
          publishedAt,
          ...,
        }
      }[0]`;
      const clientFetch = cache(client.fetch.bind(client));
      const tags = await clientFetch<Page>(query, { slug });
      for (const key in tags) {
        console.log('Key:', key);
      }
      console.log('epidode:', tags?.episodes);
      const posts = tags?.episodes || []


  return (
      <div className='bg-primary'>
          <Loader />

          {
              tags ? <CategoryHero title={`${tags.title}`} /> : <CategoryHero title={`${slug}`} />
          }
          <Suspense fallback={<Checkmate />}>
                    <EpisodeContainer posts={posts} /> 
          </Suspense>
              
      </div>

  )
}

export default Categorypage

  