'use client'

import React from 'react'
import { SocialIcons } from './data/data'

const SocialMedia = () => {
  return (
    <div className='flex items-center gap-4'>
        {
            SocialIcons.map((item, index) => (
                <div key={index} className='cursor-pointer hover:opacity-80 transition-all text-xl md:text-2xl'>
                    {item.icon}
                </div>
            ))
        }
    </div>
  )
}

export default SocialMedia