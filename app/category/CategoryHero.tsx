'use client'

import React from 'react'
import Heading from '../components/Heading'
import { AiOutlineTag } from 'react-icons/ai'

interface CategoryHeroPorps {
  title : string
}

const CategoryHero: React.FC<CategoryHeroPorps> = ({title }) => {
  return (

    <div className="bg-[url('https://images.pexels.com/photos/1111319/pexels-photo-1111319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  bg-center h-[35vh] md:h-[45vh]">
        <div className='h-full flex justify-center items-center flex-col bg-black/70'>
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 m-4 before:bg-black relative inline-block">
                <span className="relative text-white flex items-center gap-4 text-2xl md:text-4xl">Tagged  <AiOutlineTag /></span>
            </span>
            <Heading title={` ${title}`} color='text-white' center />
        </div>
    </div>
  )
}

export default CategoryHero