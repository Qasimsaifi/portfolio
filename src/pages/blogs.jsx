import BlogsPage from "@/components/BlogsPage";
import NavBar from "@/components/Navbar";
import React from "react";
import Head from "next/head";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const blog = () => {

  return (
    <>
      <Head>
        <title>Web Development Blog: Stay Updated with Kasim Saifi's Expert Insights and Trends</title>
        <meta name="description" content="Explore our portfolio of successful web development projects. At KASIM, we have helped numerous clients achieve their online goals through innovative designs, seamless functionality, and user-friendly interfaces. Discover our expertise today." />
        {/* Meta tags for social media sharing */}
        <meta property="og:title" content="Web Development Blog: Stay Updated with Kasim Saifi's Expert Insights and Trends" />
        <meta property="og:description" content="Explore our portfolio of successful web development projects. At KASIM, we have helped numerous clients achieve their online goals through innovative designs, seamless functionality, and user-friendly interfaces. Discover our expertise today." />
        <meta property="og:image" content="" /> {/* Replace with the URL of your featured image */}
        <meta property="og:url" content="URL_OF_THE_PAGE" /> {/* Replace with the URL of this specific page */}
        <meta property="og:type" content="article" />

        {/* Meta tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Development Blog: Stay Updated with Kasim Saifi's Expert Insights and Trends" />
        <meta name="twitter:description" content="Explore our portfolio of successful web development projects. At KASIM, we have helped numerous clients achieve their online goals through innovative designs, seamless functionality, and user-friendly interfaces. Discover our expertise today." />
        <meta name="twitter:image" content="" /> {/* Replace with the URL of your featured image */}

      </Head>
      <NavBar />
      
      <BlogsPage />
      <Footer />
    </>
  );
};

export default blog;
