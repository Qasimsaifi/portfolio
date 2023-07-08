import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import Homepage from "@/components/Homepage";
import Footer from "@/components/Footer";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
        <NavBar />
        <Homepage />
    </>
  );
}