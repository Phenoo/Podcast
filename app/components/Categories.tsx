'use client'

import Link from "next/link"
import Container from "./Container"
import Heading from "./Heading"

import {BsArrowUpRightCircle, BsArrowUpRightCircleFill} from 'react-icons/bs'
import Image from "next/image"
import Button from "./Button"
import { useRouter } from "next/navigation"

const Categories = ({categories} : any) => {
    const router = useRouter()
  return (
    <div className="bg-primary py-32 relative">
        <Container>
            <div>
                <Heading title="explore by categories" color="text-white" center />
                <br />
                <p className="text-center text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam perspiciatis fugit velit culpa excepturi</p>
            </div>

            <div className="text-white flex flex-row flex-wrap justify-center items-center  gap-2 sm:gap-6 gap-y-8 py-8">
                {
                    categories.map((category : any, index: number) =>  (
                        <Link href={`/category/${category.slug.current}`} key={index} className="flex flex-row items-center justify-center p-2 md:p-4 px-6 gap-3 text-md sm:text-xl md:text-2xl border-2 border-white rounded-full hover:bg-white hover:text-primary transition-colors cursor-pointer">
                            {category.title}
                                <BsArrowUpRightCircle size={20} />
                        </Link>
                    ))
                }
            </div>

        </Container>

        <Image src='/tag.png' alt='flower' width={50} height={50} className="object-contain absolute top-8 left-4" />

        <div className="flex justify-center mt-10 mx-8">
            <Button label="All Episodes" color="primary" bgcolor="bg-white" icon={BsArrowUpRightCircleFill} onClick={() => router.push(`/episodes`)} />

        </div>


    </div>
  )
}

export default Categories