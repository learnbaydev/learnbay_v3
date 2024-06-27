import "@/styles/globals.css";
import "@/styles/Button.css";
import Script from "next/script";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { Raleway } from "next/font/google";
import { PopupProvider, usePopup } from "../context/PopupContext"; // Adjust the path as needed
import Popup from "../components/Popup/Popup"; // Adjust the path as needed

const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      TagManager.initialize({ gtmId: "GTM-NN8XWH8" });
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <PopupProvider>
      <main className={raleway.className}>
        <Script
          strategy="lazyOnload"
          onError={(err) => {
            console.error("Error", err);
          }}
          onLoad={() => {
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
        <ComponentWithPopup Component={Component} pageProps={pageProps} />
      </main>
    </PopupProvider>
  );
}

const ComponentWithPopup = ({ Component, pageProps }) => {
  const { popup, triggerPopup, closePopup } = usePopup();

  useEffect(() => {
    const timer = setTimeout(() => {
      triggerPopup('Welcome to our website!');
    }, 3000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {popup.show && <Popup message={popup.message} onClose={closePopup} />}
      <Component {...pageProps} />
    </>
  );
};
