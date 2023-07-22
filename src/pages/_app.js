import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import React from "react";
import LoadingScreen from "@/components/LoadingScreen";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import AdSenseComponent from "@/components/AdSenseComponent";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Web Development Services - Kasim Saifi</title>
        
        <meta
          property="og:title"
          content="Kasim Saifi - Web Development Services and Products"
        />
        <meta name="author" content="Kasim Saifi" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Welcome to KASIM! We offer professional web development services and a wide range of products to help you establish a strong online presence. Explore our portfolio and contact us for all your web development needs."></meta>
        <meta
          property="og:title"
          content="Kasim Saifi - Web Development Services and Products"
        />
        <meta name="author" content="Kasim Saifi" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:description"
          content="I'm Kasim Saifi, a web developer offering high-quality web development services and products. Contact me to build your website or explore my portfolio."
        />
        <meta
          property="og:image"
          content="https://kasimsaifi.tech/profile-image.png"
        />
        <meta property="og:url" content="https://kasimsaifi.tech" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta
          name="twitter:title"
          content="Kasim Saifi - Web Development Services and Products"
        />
        <meta
          name="twitter:description"
          content="I'm Kasim Saifi, a web developer offering high-quality web development services and products. Contact me to build your website or explore my portfolio."
        />
        <meta
          name="twitter:image"
          content="https://kasimsaifi.tech/profile-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Additional meta tags */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000000"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#ffffff"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="keywords"
          content="web development, kasimsaifi , kasim , saifi , kasim web , web developer, portfolio, services, products, Kasim Saifi"
        />
      </Head>

      {!loading ? (
        <ThemeProvider enableSystem={true} attribute="class">
          <NextNProgress color="#A855F7" />

          <Component {...pageProps} />
        </ThemeProvider>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
