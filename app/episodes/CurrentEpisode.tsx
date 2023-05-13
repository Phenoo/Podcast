'use client'

import { urlForImage } from "@/sanity/lib/image"
import Image from "next/image"
import Button from "../components/Button"
import { AiFillPlayCircle } from "react-icons/ai"
import { useRef, useState } from "react"

import { BsArrowUpRightCircleFill } from "react-icons/bs"
import { useRouter } from "next/navigation"
import Heading from "../components/Heading"
import AudioPlayer from "./AudioPlayer"


const CurrentEpisode = ({posts} : any) => {
    const router = useRouter()
    const audioRef = useRef<HTMLAudioElement>(null);


    const filter = posts.filter((post : any, index: number) => index < 1);


  return (
    <div className="">
        <Heading title="Just dropped" color="text-white" />
        <br />
        {
            filter.map((post : any) => (
                <div key={post._id} className="text-white h-auto bg-black p-4">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div>
                            <Image src={urlForImage(post.coverArt).url()} alt={post.title} width={300} height={500} className="w-full" />
                        </div>
                        <div >
                            <h1>{post.title}</h1>
                            <br />
                            <div>
                                {post.summary}
                            </div>

                            <div className="flex flex-col md:flex-row gap-4  my-4">

                                <Button label="Play Episode" color="primary" bgcolor="bg-white" icon={AiFillPlayCircle} onClick={() => {}} />
                                <Button label="More" color="white" bgcolor="bg-primary" icon={BsArrowUpRightCircleFill} onClick={() => {
                                    window.scrollTo(0, 0);
                                    router.push(`/episode/${post.slug.current}`)}
                                }/>
                            </div>

                        </div>
                    
                    </div>
                    <div className="bg-primary-1 md:w-1/2 md:mx-auto my-4 text-black">
                        <AudioPlayer fileUrl={post.fileUrl} />
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default CurrentEpisode