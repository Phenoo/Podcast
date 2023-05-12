'use client'

import Image from "next/image"
import Container from "./Container"
import Heading from "./Heading"


const Subscribe = () => {
  return (
    <div className="bg-primary-1 px-4 sm:px-16 py-16">
        <Container>
      <div className="max-w-5xl mx-auto">
            <Heading center title="Subsribe for new episode in your inbox" color="text-black" />
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-center items-center py-8">
                <input type="email" className="bg-primary-1 text-black border placeholder:text-black p-4 w-full md:w-[400px] outline-none focus:outline focus:outline-2 focus:outline-black" placeholder="Enter your email address" />
                <button className="bg-black text-primary-1 w-full md:w-fit block p-4 md:px-8">
                    Subscribe
                </button>
            </div>
      </div>
        </Container>

        <Image src='/flower.png' alt='flower' width={50} height={50} className="object-contain absolute" />

    </div>
  )
}

export default Subscribe