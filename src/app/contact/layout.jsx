import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Contact Kasim Saifi - Get in Touch with a Web Developer",
  description:
    "Contact Kasim Saifi for web development inquiries, collaborations, or any questions you have. Reach out to a skilled full-stack web developer in Uttar Pradesh, India.",
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
