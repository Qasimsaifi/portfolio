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
      <meta name="description" content="Stay up-to-date with the latest trends and insights in web development. Read our blog articles featuring informative content, tips, and best practices for enhancing your online presence. Explore our blog today."></meta>
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