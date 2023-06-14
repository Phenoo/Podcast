'use client'

import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Image from 'next/image'

const Speech = () => {
  return (
    <div className='py-16 bg-white'>
        <Container>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='w-full md:w-1/2'>
                    <Heading title='We make availabe to you the most recent podcast'color='text-black' />
                    <br />
                    <p>
                    Welcome to Unami Podcast, where we explore the fascinating realms of lifestyle, art, music, travel, culture, fashion, and food. Join us on a sensory journey as we delve into diverse topics that ignite your passion and expand your horizons.

                    </p>
                    <br />
                    <p>
                    Unami Podcast is your gateway to a world of inspiration, creativity, and discovery. Join us on this immersive audio experience as we uncover the extraordinary stories, passions, and artistry that shape our lives. Tune in and let your senses come alive with Unami Podcast.
                    </p>
                </div>

                <div className='w-full md:w-1/2'>
                    <Image src='https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        width={500} height={500}
                        className='w-full md:rounded-full'
                        alt='speech' />
                </div>

            </div>

        </Container>
    </div>
  )
}

export default Speech