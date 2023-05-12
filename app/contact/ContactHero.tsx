'use client'

import React from 'react'
import Heading from '../components/Heading'

const ContactHero = () => {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/63572/pexels-photo-63572.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center bg-no-repeat h-[35vh] md:h-[50vh]">
        <div className='h-full w-full bg-black/70'>

          <div className=' w-full h-full flex items-center justify-center'>
              <Heading title='Contact Us' color='text-white' center  />         
          </div>

        </div>

    </div>
  )
}

export default ContactHero