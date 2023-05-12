'use client'

import React from 'react'
import Heading from './Heading'
import { CgDanger} from 'react-icons/cg'

const Checkmate = () => {
  return (
    <div className='h-[50vh] bg-black'>
        <div className="h-full flex justify-center items-center">
            <Heading title="No available Episode under the above" color="text-white" center icon={CgDanger} />
        </div>
    </div>  
    )
}

export default Checkmate