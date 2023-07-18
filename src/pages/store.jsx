import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import Store from "@/components/Store";
import React from "react";
import Head from "next/head";
const store = () => {
  return (
    <>
      <Head>
        <title>Online Store - Kasim Saifi Web Products</title>
        <meta
          name="description"
          content="Take your web development projects to the next level with our range of high-quality products. From themes and templates to plugins and tools, KASIM Store offers everything you need to enhance your web development workflow."
        ></meta>
      </Head>
      <NavBar />
      <Store />
      <Footer />
    </>
  );
};

export default store;
