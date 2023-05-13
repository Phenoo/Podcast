import React from 'react'

const Loading = () => {
  return (
    <div className='min-h-screen bg-white fixed inset-0 z-10'>
        <div className='h-screen'>
        <div className='h-full flex items-center justify-center text-black'>
            <div className="snake bg-primary"></div>
            <div className='text-primary flex items-center gap-3'>
                <h1 className=' text-xl md:text-3xl'>
                    Loading
                </h1>
                <div>
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Loading