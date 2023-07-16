import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bottom-0 w-full  text-center dark:bg-black border-t border-gray-500 lg:text-left">
        <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
          &copy; 2023 Kasim saifi. All rights reserved. | Powered by{" "}
          <Link
            className="text-neutral-800 dark:text-neutral-400"
            href="https://kasimsaifi.tech"
          >
          Kasim saifi
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
