import React from 'react'
import { IoMdPulse } from 'react-icons/io'
import { Ball } from './components/hero/Hero'

const LoadingPage = () => {
  return (
    <div className='h-screen bg-white fixed inset-0 z-10'>
        <div className='h-screen'>
        <div className='h-full flex items-center justify-center text-black'>
            <div className="snake bg-primary"></div>
            <div className='text-primary flex items-center gap-3'>
                <h1 className=' text-xl md:text-3xl'>
                    Loading
                </h1>
                <div>
                    <IoMdPulse size={30} />
                </div>
            </div>
            <Ball />
        </div>
        </div>

    </div>
  )
}

export default LoadingPage