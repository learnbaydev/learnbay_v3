import "@/styles/globals.css";
import "@/styles/Button.css";
import Script from "next/script";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { Georama } from "next/font/google";
import { PopupProvider, usePopup } from "../context/PopupContext";
import Popup from "../components/Popup/Popup";
import { useRouter } from "next/router";

const georama = Georama({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      TagManager.initialize({ gtmId: "GTM-NN8XWH8" });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PopupProvider>
      <main className={georama.className}>
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
};

const ComponentWithPopup = ({ Component, pageProps }) => {
  const { popup, triggerPopup, closePopup } = usePopup();
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== "/organic/generic" && router.pathname !== "/submit-info") {
      const timer = setTimeout(() => {
        triggerPopup("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [router.pathname]);

  return (
    <>
      {popup.show && <Popup message={popup.message} onClose={closePopup} />}
      <Component {...pageProps} />
    </>
  );
};

export default App;
