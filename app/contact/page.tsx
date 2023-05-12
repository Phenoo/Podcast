import React from 'react'
import Loader from '../components/loader/Loader'
import ContactHero from './ContactHero'
import ContactBody from './ContactBody'
import ClientOnly from '../components/ClientOnly'

const Contactpage = () => {
  return (
    <ClientOnly>
    <div className='bg-gray'>
      <Loader />
      <ContactHero />
      <ContactBody />
    </div>
    </ClientOnly>

  )
}

export default Contactpage