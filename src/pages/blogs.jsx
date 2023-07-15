import BlogsPage from "@/components/BlogsPage";
import NavBar from "@/components/Navbar";
import React from "react";
import Head from "next/head";
import Footer from "@/components/Footer";

const blog = () => {
  return (
    <>
      <Head>
        <title>Web Development Blog: Stay Updated with Kasim Saifi's Expert Insights and Trends</title>
      </Head>
      <NavBar />
      <BlogsPage />
      <Footer/>
    </>
  );
};

export default blog;
