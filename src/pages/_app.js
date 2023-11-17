import "@/styles/globals.css";
import "@/styles/Button.css";
// import Script from "next/script";

import { GoogleTagManager } from "@next/third-parties/google";
import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={openSans.className}>
        <Component {...pageProps} />
        <GoogleTagManager gtmId="GTM-NN8XWH8" />
      </main>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=GTM-NN8XWH8"
        strategy="worker"
      /> */}
    </>
  );
}
