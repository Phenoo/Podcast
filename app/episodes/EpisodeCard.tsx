'use client'

import Image from "next/image"
import Button from "../components/Button"


import { urlForImage } from "@/sanity/lib/image"
import { BsArrowUpRightCircleFill, BsCalendar3, BsStopwatch } from "react-icons/bs"
import { format } from 'date-fns';

import { useRouter } from "next/navigation"
import SocialMedia from "../components/SocialMedia"


const EpisodeCard = ({post} : any) => {
    const router  = useRouter();
    const posted = new Date(post._createdAt)
    const formatDate = format(posted, 'MMMM dd, yyyy');
        return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 bg-white p-4 py-6 md:p-4 rounded-lg md:rounded-xl w-full h-auto md:h-[280px]">
        <div className="w-full h-[200px] md:h-full md:w-[300px]  relative">
            {
                post.coverArt && <Image src={urlForImage(post.coverArt).url()} alt={post.title} width={150} height={200} className="w-full md:w-[300px] h-[200px] md:h-full rounded-xl object-contain" priority />
            }
            
        </div>
        <div className="w-full flex flex-col justify-between">
            <div className="flex items-center gap-6 flex-row opacity-70">
                <div className="flex items-center gap-2 font-bold">
                    <BsCalendar3 />
                    <span>{formatDate}</span>
                </div>
                <div className="flex items-center gap-2  font-bold">
                    <BsStopwatch />
                    <span>
                        1hr 30mins 
                    </span>
                </div>
            </div>
            <div>
                <h4 className="font-bold text-2xl my-2">{post.title}</h4>
                <p className="">
                    {post.summary}
                </p>
            </div>
            <div className="flex flex-row items-center my-4 w-fit gap-2">
                {post.categories &&
                    post.categories.map((item: { title: string }, index: number) => (
                        <span key={index} className="bg-black text-white px-4 rounded-lg">
                        {item.title}
                        </span>
                    ))}
            </div>

            <br />
            <div className="w-full flex items-center flex-col md:flex-row justify-between gap-y-6 gap-x-4">
                <Button label="More" color="white" bgcolor="bg-primary" icon={BsArrowUpRightCircleFill} onClick={() => router.push(`/episode/${post.slug.current}`)}  />
                <SocialMedia />
            </div>
        </div>
</div>  )
}

export default EpisodeCard