'use client';

import Image from "next/image";
import Container from "./Container";
import { medialinks } from "./data/data";

const MediaLink = () => {
  return (
    
    <div className="py-16 md:py-24 bg-white">
      <Container>
        <h1 className="text-2xl md:text-4xl font-bold capitalize">
          Listen to our podcast on
        </h1>
        <div className="flex flex-row items-center flex-wrap justify-center  sm:justify-between my-8 gap-6 gap-y-6 ">
          {
            medialinks.map((item, index) => (
              <div key={index} className="col-span-1 cursor-pointer sover:shadow-md">
                <a href={item.url} target="_blank" className="flex  gap-2 items-center">
                  <Image src={item.image} alt={item.name} className="w-[30px] md:w-[60px] object-contain" />
                  <span className="font-bold text-md md:text-xl">{item.name}</span>
                </a>
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default MediaLink