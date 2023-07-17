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
      </Head>

      <NavBar />
      
      <Homepage />
      <LatestBlog/>
      <LatestProjects/>
      <Footer/>
    </main>
  );
}
