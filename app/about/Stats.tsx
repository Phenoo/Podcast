'use client'

import React from 'react'
import Heading from '../components/Heading'
import Container from '../components/Container'
import { statsData } from '../components/data/data'

const Stats = () => {
  return (
    <div className='bg-primary py-24'>
        <Container>

        <div>
            <Heading center color='text-white' title='Best Podcast platform' />
            <br />
            <p className='text-center text-white'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed dolor voluptates delectus officia reiciendis ullam ea, asperiores exercitationem
            </p>
        </div>

        <div className='bg-white text-primary grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center py-28 p-8 my-12 rounded-2xl'>
            {
                statsData.map((item, index) => (
                    <div className='bg-primary text-white flex flex-col gap-0 items-center justify-center px-2 py-6 w-full  h-[140px] rounded-xl' key={index}>
                        <h1 className='text-3xl font-extrabold'>
                            {item.number}+
                        </h1>
                        <br />
                        <div className='text-center'>
                            {item.description}
                        </div>
                    </div>
                ))
            }
        </div>
        </Container>

    </div>
  )
}

export default Stats