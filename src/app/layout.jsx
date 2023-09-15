import "./globals.css";
import { ThemeProvider, useTheme } from "@/components/ThemeContext";
import Layout from "@/components/Layout";

import { Suspense } from "react";
import Loading from "@/components/Loading";
export const metadata = {
  title: "Kasim Saifi - Full Stack Web Developer Portfolio",
  description:
    "Explore the web development projects and skills of Kasim Saifi.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <ThemeProvider>
        <Layout>
          <Suspense
            fallback={
              <>
                <Loading />
              </>
            }
          >
            {children}
          </Suspense>
        </Layout>
      </ThemeProvider>
    </>
  );
}
