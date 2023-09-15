import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Web Development Projects by Kasim Saifi",
  description:
    "Explore the impressive portfolio of Kasim Saifi, showcasing a collection of innovative web development projects. See how he combines design and functionality to create outstanding websites",
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
