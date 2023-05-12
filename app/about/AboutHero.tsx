'use client'
import React from 'react'
import Heading from '../components/Heading'
import Image from 'next/image'
import YoutubeEmbed from './YoutubeEmbed'

const AboutHero = () => {
  return (
    <div className='h-auto relative'>

        <div className='h-[30vh] md:h-[40vh] bg-primary relative'>
            <div className='h-full flex justify-center items-center'>
                <Heading title='About us' color='text-white' center />
            </div>
        </div>
        <YoutubeEmbed />
    </div>

  )
}

export default AboutHero