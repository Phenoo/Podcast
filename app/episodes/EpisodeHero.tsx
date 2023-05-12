'use client'

import React from 'react'
import Heading from '../components/Heading'

const EpisodeHero = () => {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/1824273/pexels-photo-1824273.jpeg?auto=compress&cs=tinysrgb&w=600')] text-white h-[50vh] md:h-[60vh]">
        <div className='bg-black/40 h-full w-full flex flex-col gap-4 items-center justify-center'>
            <Heading title='All Episodes' color='text-white' center />
        </div>
    </div>
  )
}

export default EpisodeHero