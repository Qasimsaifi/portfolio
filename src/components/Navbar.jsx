import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { HiSun } from "react-icons/hi";
import { IoMdMoon } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { useEffect } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);;
  

  return (
    <div>
      <nav className="w-full fixed  top-0 left-0 right-0 z-10 border-b border-gray-500 bg-white dark:bg-black">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5  md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-purple-600 font-bold ">QASIM</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex mt-3 ">
                <li className="pb-6 text-xl text-black  dark:text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black dark:text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black dark:text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/blogs" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black dark:text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black dark:text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/services" onClick={() => setNavbar(!navbar)}>
                    Services
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black dark:text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black dark:text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/store" onClick={() => setNavbar(!navbar)}>
                    Store
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black dark:text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent flex items-center justify-center">
                  <Link
                    href="https://github.com/qasimsaifi"
                    onClick={() => setNavbar(!navbar)}
                    target="_blank"
                    className="cursor-pointer text-center"
                  >
                    <BsGithub size={26} />
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black dark:text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent flex items-center justify-center">
                  {theme === "dark" ? (
                    <Link
                      href=""
                      className="cursor-pointer text-center"
                      onClick={() => setTheme("light")}
                    >
                      <HiSun size={26} />
                    </Link>
                  ) : (
                    <Link
                      href=""
                      className="cursor-pointer"
                      onClick={() => setTheme("dark")}
                    >
                      <IoMdMoon size={26} />
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
