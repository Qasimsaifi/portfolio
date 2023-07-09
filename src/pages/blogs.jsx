import BlogsPage from "@/components/BlogsPage";
import NavBar from "@/components/Navbar";
import React from "react";
import Head from "next/head";

const blog = () => {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <NavBar />
      <BlogsPage />
    </>
  );
};

export default blog;
