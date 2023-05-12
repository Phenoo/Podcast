import React from 'react'

import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import EpisodeContainer from './EpisodeContainer'
import Loader from '../components/loader/Loader'
import EpisodeHero from './EpisodeHero'
import Container from '../components/Container'
import MediaLink from '../components/MediaLink'
import CurrentEpisode from './CurrentEpisode'
import ClientOnly from '../components/ClientOnly'



const Episodepage = async () => {
  const query = groq`
   *[_type == 'episode']{
    ...,
    title,
    coverArt,
    summary,
    fileUrl,
    "categories": *[_type=='category' && references(^._id)] {
      title,
      slug,
      ...,
    },
   }
`
  const posts = await client.fetch(query);

  return (
    <ClientOnly>
      <div className='min-h-screen bg-primary'>
        <Loader />
        <EpisodeHero />
        <Container>
          <div className='py-16'>
            <CurrentEpisode posts={posts} />
            <div className='mt-16'/>
            {
              posts ? <EpisodeContainer posts={posts} /> : ''
            }
            
          </div>

        </Container>
        <MediaLink />
      </div>
    </ClientOnly>

  )
}

export default Episodepage