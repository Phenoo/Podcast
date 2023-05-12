'use client'

import React from 'react'
import { followus } from './data/data'

const Followus = () => {
  return (
    <div className='flex items-center gap-4'>
    {
        followus.map((item, index) => (
            <div key={index} className='cursor-pointer hover:opacity-80 transition-all text-xl md:text-2xl'>
                {item.icon}
            </div>
        ))
    }
</div>
  )
}

export default Followus