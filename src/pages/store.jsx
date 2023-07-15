import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'
import Store from '@/components/Store'
import React from 'react'
import Head from 'next/head'
const store = () => {
  return (
    <>
    <Head>
      <title>Store</title>
    </Head>
      <NavBar/>
      <Store/>
      <Footer/>
    </>
  )
}

export default store