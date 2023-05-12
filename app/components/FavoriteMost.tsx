'use client'

import Image from "next/image"
import Container from "./Container"
import Heading from "./Heading"
import { favoriteEpisodes, medialinks } from "./data/data"
import Button from "./Button"
import { AiFillPlayCircle } from "react-icons/ai"
import EpisodeCard from "../episodes/EpisodeCard"

const FavoriteMost = ({filterposts} : any) => {
  return (
    <div className="py-16 bg-primary">
        <Container>

            <div>
                <Heading title="Most Favorite Epsiodes" color="text-white" center />
                <br />
                <p className="max-w-6xl mx-auto text-center text-white">
                    Lorem ipsum dolor sit amet consecteturs enim in aliquid debitis delectus sapiente provident. Deleniti voluptates aperiam quis.
                </p>
            </div>

            <div className="md:max-w-6xl mx-auto">
            <div className="flex flex-col gap-4 gap-y-8 justify-center items-center py-8">

                {
                    filterposts.map((post: any) => {
                        return (
                           <EpisodeCard key={post._id} post={post} />
                        )
                    })
                }
                </div>

            </div>

        </Container>

    </div>
  )
}

export default FavoriteMost