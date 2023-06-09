import ContactForm from '@/components/ContactForm'
import NavBar from '@/components/Navbar'
import React from 'react'
import Head from 'next/head'
import Footer from '@/components/Footer'

const contact = () => {
  return (
    <>
    <Head>
        <title>Contact Me</title>
      </Head>
    <NavBar/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default contact