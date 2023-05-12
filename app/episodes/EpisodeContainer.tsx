'use client'

import Checkmate from "../components/Checkmate"
import Container from "../components/Container"
import Heading from "../components/Heading"
import EpisodeCard from "./EpisodeCard"



const EpisodeContainer = ({posts}: any) => {

  if(posts === undefined || null) {
    <Checkmate />
  }
  return (
    <div className='py-20'>
      <Container>
        <Heading title='Available Episodes' color='text-white' />
            <div className="flex flex-col gap-4 gap-y-8 justify-center items-center py-8">
            {
                posts?.map((post: any, index: number) => {
                    return(
                      <EpisodeCard post={post} key={post._id} />
                    )
                })
            }
        </div>
      </Container>

    </div>
  )
}
export default EpisodeContainer