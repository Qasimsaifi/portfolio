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
        <meta name="description" content="Explore our portfolio of successful web development projects. At KASIM, we have helped numerous clients achieve their online goals through innovative designs, seamless functionality, and user-friendly interfaces. Discover our expertise today."></meta>
      </Head>
      <NavBar />
      <BlogsPage />
      <Footer/>
    </>
  );
};

export default blog;
