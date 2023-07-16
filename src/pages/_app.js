import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        {/* Meta tags for Google search */}
        <meta
          name="description"
          content="I'm Kasim Saifi, a web developer offering high-quality web development services and products. Contact me to build your website or explore my portfolio."
        />
        <meta
          name="keywords"
          content="web development, web developer, portfolio, services, products, Kasim Saifi"
        />
        <meta name="author" content="Kasim Saifi" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph meta tags */}
        <meta
          property="og:title"
          content="Kasim Saifi - Web Development Services and Products"
        />
        <meta
          property="og:description"
          content="I'm Kasim Saifi, a web developer offering high-quality web development services and products. Contact me to build your website or explore my portfolio."
        />
        <meta property="og:image" content="https://kasimsaifi.tech/profile-image.png" />
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
        <meta name="twitter:image" content="https://kasimsaifi.tech/profile-image.png" />
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
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <NextNProgress color="#A855F7" />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
