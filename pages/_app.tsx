import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import Link from "next/link";

const gtmId = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initAnalytics();
  }, []);

  const initAnalytics = () => {
    const isConsent = getCookieConsentValue();
    if (isConsent !== "true") {
      return;
    }

    const isProduction = process.env.NODE_ENV === "production";
    if (!isProduction) {
      return;
    }

    TagManager.initialize({ gtmId });
  };

  return (
    <Layout>
      <CookieConsent
        location="bottom"
        buttonText="Understand"
        declineButtonText="Decline"
        enableDeclineButton
        style={{ background: "#222222", fontSize: "13px" }}
        buttonStyle={{
          background: "rgb(87 151 41)",
          color: "white",
          fontSize: "13px",
          borderRadius: "20px",
          minWidth: "80px",
        }}
        declineButtonStyle={{
          background: "rgb(181 80 89)",
          color: "white",
          fontSize: "13px",
          borderRadius: "20px",
          minWidth: "80px",
        }}
        expires={150}
        onAccept={initAnalytics}
      >
        Cookies on this website are used for optimizing site functionality and
        analyzing the traffic. For more information please visit the{" "}
        <Link href="/privacy">Privacy Policy</Link>
      </CookieConsent>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
