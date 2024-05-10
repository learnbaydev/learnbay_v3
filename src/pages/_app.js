import "@/styles/globals.css";
import "@/styles/Button.css";
import Script from "next/script";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import {  Raleway } from "next/font/google";
const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});


export default function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-NN8XWH8" });
  }, [0]);
  return (
    <>
      <main className={raleway.className}>
        <Script
          strategy="lazyOnload"
          onError={(err) => {
            console.error("Error", err);
          }}
          onLoad={() => {
            // Function to perform after loading the script
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "GTM-NN8XWH8", {
              page_path: window.location.pathname,
            });
          }}
        />
        <Component {...pageProps} />
      </main>
    </>
  );
}
