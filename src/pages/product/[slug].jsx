import { useEffect, useState } from "react";
import NavBar from "@/components/Navbar";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Footer from "@/components/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SingleProductPage = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loader"></span>
      </div>
    );
  }

  if (!product) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>Product</title>
      </Head>
      <NavBar />

      <main className="flex justify-center items-center lg:h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white mt-16 drop-shadow-lg dark:bg-black pt-8 md:pt-16 grid grid-cols-1 md:grid-cols-2 gap-8 p-1 rounded-lg">
            <div className="flex justify-center md:justify-start h-full w-full">
              <div className="w-full max-w-[600px] mx-auto md:w-full h-full p-4">
                <Carousel
                  showThumbs={false}
                  showIndicators={product.image_urls.length > 1}
                >
                  {product.image_urls.map((imageUrl, index) => (
                    <div key={index}>
                      <img
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                        className="h-full w-full object-fill-contain"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="flex flex-col justify-center p-5">
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold capitalize">
                  {product.name}
                </h1>
                <h2 className="text-xl md:text-2xl font-bold">
                  ${product.price}
                </h2>
                <div className="prose">
                  <div
                    className="overflow-hidden rounded-lg"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>
                <div className="flex justify-center md:justify-start mt-6">
                  <button className="bg-blue-600 px-5 py-3 text-white rounded-lg w-full md:w-auto text-center">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const { slug } = context.query;
    const response = await fetch(
      `https://backend.kasimsaifi.tech/api/v1/ecom/products/?slug=${slug}&is_published=true`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const data = await response.json();
    const product = data[0] || null;

    if (!product) {
      return {
        notFound: true,
      };
    }

    return {
      props: { product },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
}

export default SingleProductPage;
