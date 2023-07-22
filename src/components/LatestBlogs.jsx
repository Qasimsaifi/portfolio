import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "api_not detected";
export async function getServerSideProps() {
  console.log(API_URL);
  try {
    const response = await fetch(
      `${API_URL}/portfolio/blog/?is_published=true&ordering=-created_at&page=1&page_size=6`, // Fetch only 6 blog posts
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzNTg3Nzg4LCJpYXQiOjE2ODgyMzA5ODgsImp0aSI6IjI4N2QwNTNmYWIyYjQwOTQ4OGVkOTc5ZGU4OTJkOTE2IiwidXNlcl9pZCI6MX0.QtMmMX8pju2nulQkjlw4MoSWi0bTTZfxRqkVTqlCmrk",
        },
      }
    );

    const data = await response.json();
    const allBlogs = data.results || [];
    console.log(allBlogs);

    return {
      props: {
        blogs: allBlogs,
      },
    };
  } catch (err) {
    return { props: { blogs: [] }, err };
    console.log(err);
  }
}

const LatestBlog = ({ blogs }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
console.log(blogs);
  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="dark:bg-black bg-white h-full mx-auto py-10 px-4 md:w-10/12 lg:w-8/12 xl:w-8/12">
      <h1 className="text-4xl font-bold text-purple-500 text-center mb-8">
        Latest Blogs
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pb-16">
        {blogs?.length === 0 ? (
          <div className="dark:bg-black bg-white h-full w-full flex flex-col items-center justify-center pb-14">
            <span className="loader"></span>
          </div>
        ) : (
          blogs?.map((blog) => (
            <div
              className="relative rounded-lg shadow-lg overflow-hidden"
              key={blog.id}
              onMouseEnter={() => handleCardHover(blog.id)}
              onMouseLeave={handleCardLeave}
            >
              <Image
                className={`object-cover h-52 w-full rounded-t-lg ${
                  hoveredCard === blog.id ? "opacity-50" : "opacity-100"
                } transition-opacity duration-300 ease-in-out`}
                src={`https://res.cloudinary.com/dehpkgdw5/${blog.image}`}
                alt={blog.title}
                height={1000}
                width={1000}
              />
              <div
                className={`${
                  hoveredCard === blog.id ? "bottom-0" : "-bottom-full"
                } transition-all duration-300 ease-in-out absolute backdrop-blur bg-opacity-75 p-6 w-full`}
              >
                <h2 className="text-xl dark:text-white font-semibold mb-4">
                  {blog.title}
                </h2>
                <Link
                  href={{
                    pathname: "/blog/[slug]",
                    query: { slug: blog.slug },
                  }}
                >
                  <p className="text-blue-500 hover:text-blue-600">
                    Visit blog
                  </p>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LatestBlog;
