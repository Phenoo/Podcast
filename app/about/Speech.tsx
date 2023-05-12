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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem nemo aperiam explicabo asperiores dicta non obcaecati, saepe culpa vel sapiente maxime fugit magnam alias veniam rem assumenda unde totam aliquid quaerat accusantium tenetur accusamus, voluptate possimus! A temporibus repudiandae voluptatibus in nam aliquam dolor tenetur maiores id? Nam, necessitatibus
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, cum! Quisquam ex pariatur ad commodi animi mollitia accusantium explicabo enim.
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