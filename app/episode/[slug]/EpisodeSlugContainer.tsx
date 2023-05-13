'use client'

import React from 'react'
import { BsArrowUpRightCircleFill, BsCalendar3, BsStopwatch } from "react-icons/bs"
import Heading from '@/app/components/Heading'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import Button from '@/app/components/Button'
import { AiFillPlayCircle } from 'react-icons/ai'
import SocialMedia from '@/app/components/SocialMedia'

import { motion } from 'framer-motion'

import { format } from 'date-fns';
import AudioPlayer from '@/app/episodes/AudioPlayer'

interface SponsorType {
    title: string;
    url: string;
    logo: string;
    description?: string;
  }
  
const EpisodeSlugContainer= ({post} : any) => {
    const posted = new Date(post._createdAt)
    const formatDate = format(posted, 'MMMM dd, yyyy');


  return (
    <>

        <motion.div className="bg-white -mt-[10vh] md:-mt-[20vh] shadow-lg h-auto min-h-screen p-4 md:p-8"
            initial={{y: "100%",}}
            animate={{y: "0%", }}
            exit={{y: "100%"}}
            transition={{duration: '1.2', ease: "easeInOut"}}
        >
            <div>

                <div className='flex flex-col md:flex-row  gap-4 md:gap-8'>
                    <div className='max-h-400px h-[400px] md:h-[200px] w-full md:w-[250px]'>
                        <Image src={urlForImage(post.coverArt).url()} alt={post.title} width={400} height={300} className='object-cover md:object-contain w-full h-full' />
                    </div>
                    <div className='flex flex-col gap-4 w-full'>
                        <div className='flex items-center justify-between'>
                            <div className="flex items-center gap-6 flex-row opacity-70">
                                <div className="text-base md:text-xl flex items-center gap-2 font-bold">
                                    <BsCalendar3 />
                                    <span>{formatDate}</span>
                                </div>
                                <div className="text-base md:text-xl flex items-center gap-2  font-bold">
                                    <BsStopwatch />
                                    <span>
                                        {''} 
                                    </span>
                                </div>
                            </div>
                            <SocialMedia />
                        </div>
                        <Heading title={post.title} color='black'  />
                        <div className="text-base">
                            {post.subtitle}
                        </div>
                        <div className="flex flex-wrap items-center my-4 w-fit gap-2 ">
                            {post.categories &&
                                post.categories.map((item: { title: string }, index: number) => (
                                    <span key={index} className="bg-black text-white p-2  md:text-xl rounded-lg opacity-80 cursor-not-allowed">
                                    {item.title}
                                    </span>
                                ))}
                        </div>



                        
                        
                    </div>

                </div>



                <div className='my-8'>
                    <div>-----</div>
                    <br />
                    <p className='text-base sm:text-xl'>
                        {post.summary}                         
                    </p>
                    <br />
                    <p className='text-base sm:text-xl'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque voluptas nihil laborum omnis quibusdam laudantium officiis minima doloremque fugiat illo ducimus iure, optio, enim inventore iste commodi, repellat voluptates repudiandae maxime aliquid odio nostrum aspernatur. Voluptatum nihil autem odio veritatis.
                    </p>
                </div>

                        {
                            post.sponsors && 
                            <div className='my-14 max-w-[600px] w-full'>  
                                <h1 className='text-xl md:text-3xl'>
                                    Sponsors:
                                </h1>

                        {
                            post?.sponsors.map((item: any , index : number) => (
                        <div key={index} className='my-8'>
                            <div>
                                {
                                    item.logo &&  
                                    <Image src={urlForImage(item.logo).url()} 
                                        alt={item.title}  
                                        width={200} height={200}
                                        className='border-2 border-primary rounded-full w-[100px] h-[100px] md:h-[150px] md:w-[150px] object-contain'
                                        />
                                }
                            
                            </div>
                            <div className='text-xl md:text-3xl mt-4'>{item.title}</div>
                            <p>
                                {item.description}
                            </p>
                            <span className='mt-8 text-primary font-bold text-lg cursor-pointer'>
                                Learn more
                            </span>
                        </div>
                    ))
                }

                            </div>
                        }


                <div>

                </div>

            </div>
            <div>
            
            </div>

        </motion.div>
    </>

  )
}

export default EpisodeSlugContainer