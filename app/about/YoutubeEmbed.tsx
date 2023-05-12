import React from 'react'
import "./Youtube.css"
import Container from '../components/Container'

const YoutubeEmbed = () => {
  return (
    <Container>
        <div className='py-10 relative'>

        <div className="video-responsive h-[400px] md:h-[600px]">
            <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/_awu2loGzL0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
        </div>
        </div>

    </Container>
  )
}

export default YoutubeEmbed