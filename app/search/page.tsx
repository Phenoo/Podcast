'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react'
import SearchHero from './SearchHero';
import { client } from '@/sanity/lib/client';
import { groq} from 'next-sanity'
import EpisodeContainer from '../episodes/EpisodeContainer';
import Loader from '../components/loader/Loader';
import Container from '../components/Container';
import Checkmate from '../components/Checkmate';
import Heading from '../components/Heading';
import ClientOnly from '../components/ClientOnly';



interface Episode {
  _id: string;
  title: string;
  // Add more fields as needed
}


const SearchPage = () => {
    const search = useSearchParams();
    const searchQuery : string | "" = search.get("q") ?? "";
    const [posts, setPosts] = useState<Episode[]>([])
    const encodedSearchQuery  : string = encodeURI(searchQuery);

    const query = groq`*[_type == "episode"]{
     ...,
    }`;

    const fetchData = async () => {
      const response: Episode[] = await client.fetch(query);
      const filterItems = response.filter(item => item.title.toLowerCase().includes(`${encodedSearchQuery}`.toLowerCase()));
      setPosts(filterItems);
    }




    useEffect(() => {
      fetchData();
    })

  return (
    <ClientOnly>
      <div className='bg-primary'>
        <Loader />
        <SearchHero encodedSearchQuery={encodedSearchQuery} />

        <Suspense>

        </Suspense>


          {posts?.length > 0  ? 
                    <EpisodeContainer posts={posts} /> 

              : 
              <Checkmate />
              }
             
      </div>
    </ClientOnly>

  )
}

export default SearchPage