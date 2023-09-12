import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default async function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <Skills/>


      <Footer/>
    </>
  );
}
