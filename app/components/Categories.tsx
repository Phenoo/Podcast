'use client'

import Link from "next/link"
import Container from "./Container"
import Heading from "./Heading"
// import { categories } from "./data/data"

import {BsArrowUpRightCircle} from 'react-icons/bs'

const Categories = ({categories} : any) => {
  return (
    <div className="bg-primary py-32">
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
    </div>
  )
}

export default Categories