import { useEffect, useRef } from "react";
import NavBar from "@/components/Navbar";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/Footer";
import "prism-themes/themes/prism-material-oceanic.css";
import Prism from "prismjs";
import Clipboard from "clipboard";
import Breadcrumb from "@/components/Breadcrumb";

const SingleBlogPage = ({ blogPost }) => {
  const router = useRouter();
  const contentRef = useRef(null);


  const breadcrumbPaths = [
    { url: '/', label: 'Home' },
    { url: '/blogs', label: 'Blogs' },
    { url: null, label: blogPost.slug }, // Set the URL to null since it's the current page
  ];

  useEffect(() => {
    if (contentRef.current) {
      const preElements = contentRef.current.querySelectorAll(
        "pre[class^='language-']"
      );
      preElements.forEach((preElement) => {
        const language = preElement.className.replace("language-", "");
        Prism.highlightElement(preElement, false, () => {});

        // Check if the copy button already exists
        const existingCopyButton = preElement.previousElementSibling;
        if (
          !existingCopyButton ||
          !existingCopyButton.classList.contains("copy-button")
        ) {
          // Create copy button
          const copyButton = document.createElement("button");
          copyButton.className = "copy-button bg-purple-600";
          copyButton.textContent = "Copy";
          preElement.parentNode.insertBefore(copyButton, preElement);

          // Initialize Clipboard.js for the copy button
          const clipboard = new Clipboard(copyButton, {
            target: () => preElement,
          });

          // Handle success message on copy
          clipboard.on("success", (e) => {
            copyButton.textContent = "Copied!";
            setTimeout(() => {
              copyButton.textContent = "Copy";
            }, 1000);
            e.clearSelection();
          });
        }
      });
    }
  }, [blogPost]);

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
  const createdAtDate = new Date(blogPost.created_at).toLocaleDateString(
    "en-GB"
  );
  return (
    <>
      <Head>
        <title>{blogPost.title}</title>
        <meta name="description" content={blogPost.content} />
        {/* Open Graph (OG) Tags */}
        <meta property="og:title" content={blogPost.title} />
        <meta property="og:description" content={blogPost.content} />
        <meta
          property="og:image"
          content={`https://res.cloudinary.com/dehpkgdw5/${blogPost.image}`}
        />
        <meta property="og:url" content={router.asPath} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="KASIM" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter Card Tags */}
        <meta name="twitter:title" content={blogPost.title} />
        <meta name="twitter:description" content={blogPost.content} />
        <meta
          name="twitter:image"
          content={`https://res.cloudinary.com/dehpkgdw5/${blogPost.image}`}
        />
        {/* Additional Meta Tags */}
        <meta name="author" content={blogPost.author} />
        <meta name="keywords" content={blogPost.tags.join(", ")} />{" "}
        {/* Added tags */}
        <meta name="article:published_time" content={blogPost.created_at} />
        <meta name="article:modified_time" content={blogPost.updated_at} />
        <meta name="article:section" content={blogPost.category} />
        {/* Canonical URL */}
        <link
          rel="canonical"
          href={`https://kasimsaifi.tech/blog/${blogPost.slug}`}
        />
      </Head>
      <NavBar />

      <div className="container lg:w-8/12 mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
      <Breadcrumb paths={breadcrumbPaths} />
        <h1 className="text-1xl sm:text-5xl lg:text-4xl font-bold mb-3 text-black dark:text-white">
          {blogPost.title}
        </h1>
        <div className="flex flex-row lg:flex-row lg:space-x-6">
          <p className="text-gray-500 dark:text-gray-300 text-sm mb-2 lg:mb-2">
            Author: {blogPost.author} 
          </p>
        
          <p className="text-gray-500 dark:text-gray-300 text-sm"> &nbsp; Created at: {createdAtDate}</p>
        </div>
        <Image
          src={`https://res.cloudinary.com/dehpkgdw5/${blogPost.image}`}
          alt={blogPost.title}
          className="w-full h-auto rounded-lg mb-2"
          width={100000}
          height={100000}
        />

        <div className="prose">
          <div
            className="overflow-hidden rounded-lg"
            ref={contentRef}
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    let API_URL = process.env.NEXT_PUBLIC_API_URL || "api_not detected ";

    const { slug } = context.query;
    const response = await fetch(`${API_URL}/portfolio/blog/?slug=${slug}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzNTg3Nzg4LCJpYXQiOjE2ODgyMzA5ODgsImp0aSI6IjI4N2QwNTNmYWIyYjQwOTQ4OGVkOTc5ZGU4OTJkOTE2IiwidXNlcl9pZCI6MX0.QtMmMX8pju2nulQkjlw4MoSWi0bTTZfxRqkVTqlCmrk",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch blog post");
    }

    const data = await response.json();
    const blogPost = data.results[0] || null;

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
