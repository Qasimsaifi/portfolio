import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'
import ServicesPage from '@/components/ServicesPage'
import React from 'react'

const services = () => {
  return (
    <>
    <NavBar/>
    <div className="mt-16">

    <ServicesPage/>
    </div>
    <Footer/>

    </>
  )
}

export default services