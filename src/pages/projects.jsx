import Footer from '@/components/Footer'
import Homepage from '@/components/Homepage'
import NavBar from '@/components/Navbar'
import Projectcard from '@/components/Projectcard'
import React from 'react'
import Head from 'next/head'

const projects = () => {
  return (
    <div>
      <Head>
        <title>Discover Our Impressive Portfolio of Projects</title>
      </Head>
      <NavBar />
      <Projectcard />
      <Footer/>
    </div>
  )
}

export default projects
