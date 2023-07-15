import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://backend.kasimsaifi.tech/api/v1/ecom/products/?is_published=true&ordering=date/"
        );
        const data = await response.json();
        setProducts(data || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="dark:bg-dark h-screen container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-500 text-center mt-20 mb-8">
        Products
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            className="w-full bg-white dark:bg-gray-800 drop-shadow-md rounded-lg"
            key={product.id}
          >
            <div className="relative">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center blur">
                  <span className="loader"></span>
                </div>
              )}
              <Image
                className={`object-cover mx-auto rounded-tl-lg rounded-tr-lg w-full h-64 ${
                  isLoading ? "opacity-0" : "opacity-100" // Add opacity class based on loading state
                }`}
                src={product.image_urls[product.cover_image]}
                alt={product.title}
                width={700}
                height={700}
              />
            </div>

            <div className="px-5 py-3 space-y-2">
              <h3 className="text-lg">{product.name}</h3>
              <p className="space-x-2">
                <span className="text-2xl font-semibold">₹{product.price}</span>
                <span className="text-sm line-through text-gray-500">
                  ₹199
                </span>
                <span className="text-sm text-red-700">100% off</span>
              </p>

              <div className="flex justify-between items-center pt-3 pb-2">
                <Link
                  href={{ pathname: '/product/[slug]', query: { slug: product.slug } }}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-center text-sm text-white dark:text-black rounded duration-300"
                >
                  Buy now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
