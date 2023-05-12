'use client'

import React from 'react'
import Heading from '../components/Heading'
import EpisodeCard from '../episodes/EpisodeCard'

const RelatedEpisodes = ({posts} : any) => {
  return (
    <div className='px-4 md:px-16 py-20 bg-'>
        
        <div className="flex flex-col gap-4 gap-y-8 justify-center items-center py-8">
             <Heading title='Related Episodes' color='text-black'  />

            {
                posts?.map((post: any, index: number) => {
                    return(
                      <EpisodeCard post={post} key={post._id} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default RelatedEpisodes