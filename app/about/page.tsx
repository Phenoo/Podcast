import React from 'react'
import AboutHero from './AboutHero'
import MediaLink from '../components/MediaLink'
import Stats from './Stats'
import Speech from './Speech'
import Loader from '../components/loader/Loader'
import ClientOnly from '../components/ClientOnly'

export const metadata = {
  title: "About Us",
  description: "Unami Podcast is your gateway to a world of inspiration, creativity, and discovery. Join us on this immersive audio experience as we uncover the extraordinary stories, passions, and artistry that shape our lives. Tune in and let your senses come alive with Unami Podcast.",
};


const Aboutpage = () => {
  return (
    <ClientOnly>
      <div>
        <Loader />
        <AboutHero />
        <MediaLink />
        <Stats />
        <Speech />
      </div>
    </ClientOnly>

  )
}

export default Aboutpage