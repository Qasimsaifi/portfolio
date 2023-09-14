"use client";
import { useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootLayout({ children }) {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <html data-theme={theme} lang="en">
      <body>
        <Suspense fallback={<><Navbar/><Loading /><Footer/></>}>{children}</Suspense>
      </body>
    </html>
  );
}
