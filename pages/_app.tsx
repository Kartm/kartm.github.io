import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { TrackingHeadScript } from "@phntms/next-gtm";

const REACT_APP_GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || "";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <TrackingHeadScript id={REACT_APP_GA_TRACKING_ID} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
