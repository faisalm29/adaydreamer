import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import SEO from "@/components/SEO";

import "@/styles/globals.scss";
import "@/styles/shiki.scss";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider attribute="class">
      <SEO />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
