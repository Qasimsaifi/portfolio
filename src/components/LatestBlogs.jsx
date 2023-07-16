import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const LatestBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "api_not detected";
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
        setBlogs(data.results || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  if (isLoading) {
    return (
      <div className="dark:bg-black bg-white h-full w-full flex flex-col items-center justify-center pb-14">
        <span className="loader"></span>
      </div>
    );
  } else {
    return (
      <div className="dark:bg-black  bg-white h-full w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-500 text-center mt-20 mb-8">
         Latest Blogs
        </h1>

        <div className="grid gap-6 container md:mx-auto sm:grid-cols-2 lg:grid-cols-3 pb-16">
          {blogs.map((blog) => (
            <div
              className="relative rounded-lg shadow-lg overflow-hidden"
              key={blog.id}
              onMouseEnter={() => handleCardHover(blog.id)}
              onMouseLeave={handleCardLeave}
            >
              <img
                className={`object-cover h-72 w-full rounded-t-lg ${
                  hoveredCard === blog.id ? "opacity-50" : "opacity-100"
                } transition-opacity duration-300 ease-in-out`}
                src={`https://res.cloudinary.com/dehpkgdw5/${blog.image}`}
                alt={blog.title}
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
          ))}
        </div>
      </div>
    );
  }
};

export default LatestBlog;
