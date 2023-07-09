import { useEffect, useState } from "react";
import NavBar from "@/components/Navbar";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

const SingleBlogPage = ({ blogPost }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loader"></span>
      </div>
    );
  }

  if (!blogPost) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <NavBar />

      <div className="container lg:w-8/12 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl sm:text-5xl lg:text-4xl font-bold mb-8 mt-16 text-black dark:text-white">
          {blogPost.title}
        </h1>
        <img
          src={`https://res.cloudinary.com/dehpkgdw5/${blogPost.image}`}
          alt={blogPost.title}
          className="w-full h-auto rounded-lg mb-8"
        />
        <div className="prose">
          <div
            className="overflow-hidden rounded-lg"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const { slug } = context.query;
    const response = await fetch(
      `https://backend.kasimsaifi.tech/api/v1/portfolio/blog/?slug=${slug}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzNTg3Nzg4LCJpYXQiOjE2ODgyMzA5ODgsImp0aSI6IjI4N2QwNTNmYWIyYjQwOTQ4OGVkOTc5ZGU4OTJkOTE2IiwidXNlcl9pZCI6MX0.QtMmMX8pju2nulQkjlw4MoSWi0bTTZfxRqkVTqlCmrk",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch blog post");
    }

    const data = await response.json();
    const blogPost = data[0] || null;
    console.log(blogPost);

    if (!blogPost) {
      return {
        notFound: true,
      };
    }

    return {
      props: { blogPost },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
}

export default SingleBlogPage;
