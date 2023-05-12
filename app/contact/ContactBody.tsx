'use client'
import React from 'react'
import Container from '../components/Container'
import ContactCard from './ContactCard'
import FormBody from './FormBody'

const ContactBody = () => {
  return (
    <div className='py-20'>
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg p-4 lg:p-8'>
                <ContactCard />
                <FormBody />
            </div>
        </Container>
    </div>
  )
}

export default ContactBody