import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="utf-8" />
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
        <meta
          property="og:image"
          content="URL to the image representing your portfolio or services"
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
        {/* <meta
          name="twitter:image"
          content="URL to the image representing your portfolio or services"
        /> */}
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
        <title>KASIM SAIFI</title>
      </Head>
      Ensure that you have the Head component imported from next/head or the
      relevant library you are using in your project. Replace the placeholder
      values, such as the description, image URLs, and URL of your portfolio
      website, with the actual content relevant to your website. Feel free to
      customize and add more meta tags as needed for your specific requirements.
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
