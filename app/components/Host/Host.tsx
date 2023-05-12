'use client'

import Image from "next/image"
import Container from "../Container"
import Heading from "../Heading"
import { hostData } from "../data/data"

import s from './Host.module.css'
import { AiFillLinkedin, AiFillTwitterCircle, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai"
import { CiMicrophoneOn } from "react-icons/ci"

const Host = () => {
  return (
    <div className="py-16 bg-pink">
        <Container>
            <Heading title="meet our hosts" color="text-white" center icon={CiMicrophoneOn} />

            <div className="flex flex-wrap justify-center items-center gap-12 py-8">
                {
                    hostData.map((item, i) => (
                        <div key={i} className="flex flex-col justify-center items-center relative">
                            <div className={s.circle}>
                                <Image src={item.image} alt="host" className="" width={300} height={300}  />
                            </div>
                            <div className="absolute bottom-12 text-white text-2xl md:text-4xl font-bold my-4">
                                <h1>
                                {item.name}
                                </h1>
                            </div>
                            <div className="flex flex-row gap-2 items-center mt-4">
                                <div className="bg-white rounded-full w-fit p-2 cursor-pointer hover:bg-primary-1 transition-all">
                                    <AiOutlineInstagram size={20} />
                                </div>
                                <div className="bg-white rounded-full w-fit p-2 cursor-pointer hover:bg-primary-1 transition-all">
                                    <AiOutlineFacebook  size={20}/>
                                </div>
                                <div className="bg-white rounded-full w-fit p-2 cursor-pointer hover:bg-primary-1 transition-all">
                                    <AiFillTwitterCircle size={20} />
                                </div>
                                <div className="bg-white rounded-full w-fit p-2 cursor-pointer hover:bg-primary-1 transition-all">
                                    <AiFillLinkedin  size={20} />
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </Container>
    </div>
  )
}

export default Host