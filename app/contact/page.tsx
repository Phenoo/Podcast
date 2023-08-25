import React from 'react'
import Loader from '../components/loader/Loader'
import ContactHero from './ContactHero'
import ContactBody from './ContactBody'
import ClientOnly from '../components/ClientOnly'

export const metadata = {
title: "Contact Us",
description: "We are thrilled to connect with potential podocasters, sponsors and advertisers who are interested in partnering with us. If you have any questions or would like to explore collaboration opportunities, please feel free to reach out to us using the contact information provided below. We value your interest and look forward to discussing how we can work together to create meaningful and impactful content."
};

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