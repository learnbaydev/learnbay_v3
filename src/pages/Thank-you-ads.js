// import Head from "next/head";
// import Navbar from "@/components/Global/Navbar/Navbar";
// import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
// import Footer from "../components/Global/Footer/Footer";
// import ThankYouAds from "../components/ThankYouAds/ThankYouAds";
// const Thankyouads = () => {
//   return (
//     <>
//       <Head>
//         <title>Learnbay - Thank you ads</title>
//         <meta name="robots" content="index, follow" />
//         <meta
//           name="description"
//           content="Learnbay thank you, Explore more information for a smooth learning experience. Come join us today!"
//         />
//         <link
//           rel="icon"
//           href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
//         />
//         <link rel="canonical" href="https://www.learnbay.co/terms-conditions" />
//       </Head>
//       <Navbar
//         popup={true}
//         dataScienceCounselling={true}
//         interstedInHide={true}
//       />
//       <ThankYouAds />
//       <Footer />
//       <WhatsappFloat />
//     </>
//   );
// };

// export default Thankyouads;
"use client";

import Head from "next/head";
import React, { useState } from "react";
import Navbar from "@/components/Global/Navbar/Navbar";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import Footer from "../components/Global/Footer/Footer";
import ThankYouAds from "../components/ThankYouAds/ThankYouAds";
import Image from "next/image";
import StrategyModal from "../components/StrategyModal/StrategyModal";

const Thankyouads = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Learnbay - Thank you ads</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay thank you, Explore more information for a smooth learning experience."
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>

      <Navbar popup dataScienceCounselling interstedInHide />

      {/* ================= BROCHURE DEMO SECTION ================= */}
      <section
        style={{
          width: "100%",
          padding: "80px 16px",
          background: "#f8fafc",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "880px",
            background: "#fff",
            borderRadius: "24px",
            padding: "48px 40px",
            boxShadow: "0 30px 60px rgba(0,0,0,0.08)",
          }}
        >
          {/* Top Text */}
          <p
            style={{
              fontSize: "16px",
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            Don’t just read about the program <strong>experience it </strong>
            <span style={{ color: "#2563eb", fontWeight: 700 }}>LIVE</span> with
            an <strong>expert.</strong>
          </p>

          {/* Host Section */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              justifyContent: "center",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "80px",
                height: "80px",
                flexShrink: 0,
              }}
            >
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Thankyouimage.webp"
                alt="Mr. Ravi Pradhan"
                width={85}
                height={90}
                style={{ borderRadius: "50%", objectFit: "cover" }}
                priority
              />

              {/* Mic Icon */}
              <span
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  right: "-4px",
                  background: "#fff",
                  borderRadius: "50%",
                  // padding: "6px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                }}
              >
                🎤
              </span>

              {/* Badge */}
              <span
                style={{
                  position: "absolute",
                  top: "-6px",
                  right: "-6px",
                  background: "#22c55e",
                  color: "#fff",
                  fontSize: "12px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ✓
              </span>
            </div>

            <div>
              <p style={{ fontWeight: 700, marginBottom: "4px" }}>
                Mr. Ravi Pradhan
              </p>
              <p style={{ fontSize: "14px", color: "#555" }}>
                AI Expert Practitioner
              </p>
              <div
                style={{
                  fontSize: "12px",
                  background: "#e0f2fe",
                  color: "#0369a1",
                  padding: "4px 8px",
                  borderRadius: "12px",
                  marginTop: "6px",
                  display: "inline-block",
                }}
              >
                Ex-Amazon | 12+ Years Experience
              </div>
            </div>
          </div>

          {/* Heading */}
          <h2 style={{ textAlign: "center", marginBottom: "12px" }}>
            Book Your Live{" "}
            <span style={{ color: "#6366f1" }}>Demo Session</span>
          </h2>

          <p
            style={{
              textAlign: "center",
              fontSize: "15px",
              color: "#555",
              marginBottom: "24px",
            }}
          >
            Join our 45-minute Expert Demo Session designed to show you exactly
            how professionals transition into AI & GenAI roles.
          </p>

          {/* Info Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              marginBottom: "32px",
              fontSize: "14px",
            }}
          >
            <span>
              <strong style={{ color: "#ef4444" }}>25 Slots</strong> Left Today
            </span>
            <span>⏱ Limited Seats</span>
          </div>
        </div>

        <StrategyModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        />
      </section>
      <ThankYouAds />

      <Footer />
      <WhatsappFloat />
    </>
  );
};

export default Thankyouads;
