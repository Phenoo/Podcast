'use client'

import Image from "next/image"
import Container from "../Container"

import {IoMdPulse} from 'react-icons/io'

import s from './Hero.module.css'

const Hero = () => {
  return (
    <div className="bg-primary text-white py-10 pt-32 sm:pt-36 relative"> 
      <Image src='/sui.png' alt='flower' width={80} height={80} className="object-contain absolute top-1/2 left-[700px] hodden md:flex" />

      <Container>
        <div className="flex flex-col justify-between items-center md:flex-row gap-8 gap-y-12 pb-8 pt-16">
          <div className="max-w-[800px]">
            <h1 className="text-[2.25rem] md:text-6xl font-extrabold py-4">
              Find and listen to your favorite 
              {/* <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 m-4 before:bg-white relative inline-block">
                <span className="relative text-primary flex items-center gap-4 text-[2.25rem] md:text-6xl">Podcasts <IoMdPulse /> </span>
              </span> */}
              <div className={`${s.clip} mt-6 bg-white text-primary  w-fit  px-4 p-2 flex items-center gap-4`}>Podcasts <IoMdPulse /> </div>
            </h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, porro nobis? Pariatur magni dolores, vel dicta libero veritatis, eos nemo commodi sint ducimus rerum, nesciunt quod. Eveniet accusamus pariatur labore
            </p>
            <br />
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-center items-center gap-4 md:gap-8">
              <div className=" pt-16 sm:pt-20 md:pt-36 flex flex-col gap-6 w-24 sm:w-44 md:w-52">
                <div className="relative">
                  <Image src='https://images.pexels.com/photos/9383917/pexels-photo-9383917.jpeg?auto=compress&cs=tinysrgb&w=600' alt='hero' className="object-cover aspect-[2/3] rounded-lg w-full" width={170} height={264}  />
                </div>
                <div className="relative">
                  <Image src='https://images.pexels.com/photos/6953925/pexels-photo-6953925.jpeg?auto=compress&cs=tinysrgb&w=600' alt='hero' className="object-cover aspect-[2/3] rounded-lg w-full" width={170} height={264}  />
                </div>
              </div>


              <div className="flex flex-col gap-6 w-24 sm:w-44 md:w-52">
                <div className="relative">
                  <Image src='https://images.pexels.com/photos/6883821/pexels-photo-6883821.jpeg?auto=compress&cs=tinysrgb&w=600' alt='hero' className="object-cover aspect-[2/3] rounded-lg w-full" width={170} height={264} />
                </div>
                <div className="relative">
                  <Image src='https://images.pexels.com/photos/7383471/pexels-photo-7383471.jpeg?auto=compress&cs=tinysrgb&w=600' alt='hero'  className="object-cover aspect-[2/3] rounded-lg w-full" width={170} height={264} />
                </div>
              </div>


              <div className="flex flex-col gap-6 w-24 sm:w-44 md:w-52 pt-16 sm:pt-20 md:pt-32">
                <div className="relative">
                  <Image src='https://images.pexels.com/photos/7586540/pexels-photo-7586540.jpeg?auto=compress&cs=tinysrgb&w=600' alt='hero'  className="object-cover aspect-[2/3] rounded-lg w-full" width={170} height={264} />
                </div>
                <div className="relative">
                  <Image src='https://images.pexels.com/photos/7229063/pexels-photo-7229063.jpeg?auto=compress&cs=tinysrgb&w=600' alt='hero' className="object-cover aspect-[2/3] rounded-lg w-full" width={170} height={264} />
                </div>
              </div>
            </div>
          </div>
        </div>        
      </Container>
      <div className=" md:absolute md:bottom-10 md:left-10">
        <Ball />
      </div>
      

    </div>
  )
}

export const Ball = () => (
  <div className={`${s.div}  animate-pulse mx-8`} />
)

export default Hero