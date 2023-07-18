import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import Homepage from "@/components/Homepage";
import Footer from "@/components/Footer";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Head from "next/head";
import LatestProjects from "@/components/LatestProjects";
import LatestBlog from "@/components/LatestBlogs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="dark:bg-black bg-white">
      <Head>
        <title>Web Development Services - Kasim Saifi</title>
        <meta name="description" content="Welcome to KASIM! We offer professional web development services and a wide range of products to help you establish a strong online presence. Explore our portfolio and contact us for all your web development needs."></meta>
       
        <meta
          name="keywords"
          content="web development, kasimsaifi , kasim , saifi , kasim web , web developer, portfolio, services, products, Kasim Saifi"
        />
        
        
      </Head>

      <NavBar />
      
      <Homepage />
      <LatestBlog/>
      <Footer/>
    </main>
  );
}
