import "@/styles/index.css";
import "@/styles/global.scss";

//@ts-ignore
import Layout from "@/components/layout/layout";
import React from "react";
import { ThemeProvider } from "next-themes";

import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <meta name="description" content="Ty's Typescript practice." />
        <meta name="keywords" content="Typescript practice" />

        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta charSet="utf-8" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />

        <meta name="application-name" content="TypeScript" />

        {/* <!-- Tile icon for Win8 (144x144 + tile color) --> */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
