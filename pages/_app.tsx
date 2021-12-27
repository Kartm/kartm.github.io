import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

const gtmId = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      TagManager.initialize({ gtmId });
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
