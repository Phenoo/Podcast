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
                    A website that promotes and amplifies podcasts created by underrepresented voices. It can highlight podcasts produced by marginalized communities, featuring a diverse range of perspectives and stories.                     </p>
                    <br />
                    <p className="text-base md:text-lg">
                    The site could also provide resources, grants, and mentorship opportunities to support aspiring podcasters from underrepresented backgrounds.                    </p>
                    
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