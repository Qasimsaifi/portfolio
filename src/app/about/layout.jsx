import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Qasim Saifi - Full Stack Web Developer Portfolio",
  description:
    "Explore the web development projects and skills of Kasim Saifi.",
};

export default function ProjectLayout({ children }) {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Footer />
    </>
  );
}
