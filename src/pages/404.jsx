import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-black bg-gray-100">
      <img
        src="/404.png"
        alt="Error 404"
        className="mt-8 w-2/6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      />
      <h1 className="text-4xl font-bold dark:text-white text-gray-800">
        404 - Page Not Found
      </h1>
      <p className="mt-4 text-gray-600  dark:text-white">
        The page you are looking for does not exist. Please check the URL or go
        back to the{" "}
        <Link href="/">
          <button className="text-blue-500 hover:underline">homepage</button>
        </Link>
        .
      </p>
    </div>
  );
};

export default Custom404;
