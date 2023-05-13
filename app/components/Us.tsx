'use client'

import Image from "next/image"
import Container from "./Container"
import Heading from "./Heading"
import Play from "./Play/Play"

const Usection = () => {
  return (
    <div className="bg-white text-black py-16 relative">
        <Container>
            <div className="grid grids-cols-1 md:grid-cols-2 place-items-center gap-8">
                <div className="bg-primary-1 lg:order-none order-2">
                    <Image src='https://images.pexels.com/photos/4910947/pexels-photo-4910947.jpeg?auto=compress&cs=tinysrgb&w=600' alt="me" width={400} height={400} className=""  />
                </div>

                <div className="lg:order-none order-1">
                    <Heading title="we make available to you the best podcast" color="text-black" />
                    <br />
                    <p className="text-base md:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex tempore dolorum deleniti, vitae quod sint officiis quaerat, excepturi eligendi consectetur voluptate corrupti earum similique! Quia itaque, voluptatum ullam beatae, sunt at corporis quaerat impedit facere, ipsum quod! Eos, dolores
                    </p>
                    <br />
                    <p className="text-base md:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sunt ad voluptatibus animi recusandae aliquid culpa adipisci aspernatur blanditiis alias.
                    </p>
                    
                </div>
            </div>
        </Container>

        <div className="absolute bottom-4 right-8">
            <Play />
        </div>
    </div>
  )
}

export default Usection