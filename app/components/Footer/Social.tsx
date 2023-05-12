'use client'

import React from 'react'
import { medialinks } from '../data/data'
import Image from 'next/image'

const Social = () => {
  return (
    <div className="flex items-center gap-4">
    {
        medialinks.map((item, i) => (
            <div key={i} className="cursor-pointer hover:opacity-50 transition-all">
                <Image src={item.image} alt={item.name} className="w-[30px] md:w-[30px] h-[30px] md:h-[30px]"/>
            </div>
        ))
    }
</div>  )
}

export default Social