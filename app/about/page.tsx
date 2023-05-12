import React from 'react'
import AboutHero from './AboutHero'
import MediaLink from '../components/MediaLink'
import Stats from './Stats'
import Speech from './Speech'
import Loader from '../components/loader/Loader'
import ClientOnly from '../components/ClientOnly'

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