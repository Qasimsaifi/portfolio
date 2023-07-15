import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'
import ServicesPage from '@/components/ServicesPage'
import React from 'react'
import Head from 'next/head'

const services = () => {
  return (
    <>
    <Head>
      <title>Web Development Services - Kasim Saifi</title>
    </Head>
    <NavBar/>
    <div className="mt-16">

    <ServicesPage/>
    </div>
    <Footer/>

    </>
  )
}

export default services