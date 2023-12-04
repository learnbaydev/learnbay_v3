import Head from "next/head";
import Navbar from "../components/Global/Navbar/Navbar";
import Footer from "../components/Global/Footer/Footer";
import BottomBar from "../components/Global/BottomBar/BottomBar";
import WhatsappFloat from "../components/Global/WhatappsFloat/WhatsappFloat";
import OfferPopup from "../components/Global/Popup/Popup";
import NotFound from "../components/Global/NotFound /NotFound";

export default function Home() {
  return (
    <div>
      <Head>
        <title>404 - Page Not Found </title>
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Learnbay-Favicon-L.png"
        />
      </Head>
      <main>
        <Navbar popup={true} dataScienceCounselling={true} radio={true} />
        <NotFound />
        <OfferPopup offer={false} />
        <BottomBar />
        <Footer />
        <WhatsappFloat />
      </main>
    </div>
  );
}
