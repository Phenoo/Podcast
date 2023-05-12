'use client'
import React from 'react'
import Button from '../components/Button'

const FormBody = () => {
  return (
    <div>
      <form>
        <div className='my-8'>
          <label className='block text-base font-bold mb-2 md:text-xl'>
            Name
          </label>
          <input type="text" placeholder='Enter your' className='w-full p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black' />
        </div>

        <div className='my-8'>
          <label className='block text-base md:text-xl font-bold'>
            Email
          </label>
          <input type="email" placeholder='Enter your'  className='w-full p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black'/>
        </div>

        <div className='my-8'>
          <label className='block text-base md:text-xl font-bold mb-2'>
            Phone Number
          </label>
          <input type="tel" placeholder='Enter your'  className='w-full p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black'/>
        </div>

        <div className='my-8'>
          <label className='block text-base md:text-xl font-bold mb-2'>
            Subject
          </label>
          <input type="text" placeholder='Enter your'  className='w-full p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black' />
        </div>

        <div className='my-8'>
          <label className='block text-base  md:text-xl font-bold mb-2'>
            Message
          </label>
          <textarea placeholder='Your message'  className='w-full h-[200px] p-4 rounded-xl border border-black outline-none focus:outline focus:outline-black' ></textarea>
        </div>

        <div>
          <Button bgcolor='bg-primary-1' label='send message' color='black' onClick={() => {}} />
        </div>
      </form>
    </div>
  )
}

export default FormBody