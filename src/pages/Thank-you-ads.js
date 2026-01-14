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
// "use client";

// import Head from "next/head";
// import React, { useState } from "react";
// import Navbar from "@/components/Global/Navbar/Navbar";
// import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
// import Footer from "../components/Global/Footer/Footer";
// import ThankYouAds from "../components/ThankYouAds/ThankYouAds";
// import Image from "next/image";
// import StrategyModal from "../components/StrategyModal/StrategyModal";

// const Thankyouads = () => {
//   const [isModalOpen, setModalOpen] = useState(false);

//   return (
//     <>
//       <Head>
//         <title>Learnbay - Thank you ads</title>
//         <meta name="robots" content="index, follow" />
//         <meta
//           name="description"
//           content="Learnbay thank you, Explore more information for a smooth learning experience."
//         />
//         <link
//           rel="icon"
//           href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
//         />
//       </Head>

//       <Navbar popup dataScienceCounselling interstedInHide />

//       {/* ================= BROCHURE DEMO SECTION ================= */}
//       <section
//         style={{
//           width: "100%",
//           padding: "80px 16px",
//           background: "#f8fafc",
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <div
//           style={{
//             width: "100%",
//             maxWidth: "880px",
//             background: "#fff",
//             borderRadius: "24px",
//             padding: "48px 40px",
//             boxShadow: "0 30px 60px rgba(0,0,0,0.08)",
//           }}
//         >
//           {/* Top Text */}
//           <p
//             style={{
//               fontSize: "16px",
//               textAlign: "center",
//               marginBottom: "32px",
//             }}
//           >
//             Don’t just read about the program <strong>experience it </strong>
//             <span style={{ color: "#2563eb", fontWeight: 700 }}>LIVE</span> with
//             an <strong>expert.</strong>
//           </p>

//           {/* Host Section */}
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "16px",
//               justifyContent: "center",
//               marginBottom: "32px",
//             }}
//           >
//             <div
//               style={{
//                 position: "relative",
//                 width: "80px",
//                 height: "80px",
//                 flexShrink: 0,
//               }}
//             >
//               <Image
//                 src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Thankyouimage.webp"
//                 alt="Mr. Ravi Pradhan"
//                 width={85}
//                 height={90}
//                 style={{ borderRadius: "50%", objectFit: "cover" }}
//                 priority
//               />

//               {/* Mic Icon */}
//               <span
//                 style={{
//                   position: "absolute",
//                   bottom: "-4px",
//                   right: "-4px",
//                   background: "#fff",
//                   borderRadius: "50%",
//                   // padding: "6px",
//                   boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
//                 }}
//               >
//                 🎤
//               </span>

//               {/* Badge */}
//               <span
//                 style={{
//                   position: "absolute",
//                   top: "-6px",
//                   right: "-6px",
//                   background: "#22c55e",
//                   color: "#fff",
//                   fontSize: "12px",
//                   width: "20px",
//                   height: "20px",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 ✓
//               </span>
//             </div>

//             <div>
//               <p style={{ fontWeight: 700, marginBottom: "4px" }}>
//                 Mr. Ravi Pradhan
//               </p>
//               <p style={{ fontSize: "14px", color: "#555" }}>
//                 AI Expert Practitioner
//               </p>
//               <div
//                 style={{
//                   fontSize: "12px",
//                   background: "#e0f2fe",
//                   color: "#0369a1",
//                   padding: "4px 8px",
//                   borderRadius: "12px",
//                   marginTop: "6px",
//                   display: "inline-block",
//                 }}
//               >
//                 Ex-Amazon | 12+ Years Experience
//               </div>
//             </div>
//           </div>

//           {/* Heading */}
//           <h2 style={{ textAlign: "center", marginBottom: "12px" }}>
//             Book Your Live{" "}
//             <span style={{ color: "#6366f1" }}>Demo Session</span>
//           </h2>

//           <p
//             style={{
//               textAlign: "center",
//               fontSize: "15px",
//               color: "#555",
//               marginBottom: "24px",
//             }}
//           >
//             Join our 45-minute Expert Demo Session designed to show you exactly
//             how professionals transition into AI & GenAI roles.
//           </p>

//           {/* Info Row */}
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               gap: "24px",
//               marginBottom: "32px",
//               fontSize: "14px",
//             }}
//           >
//             <span>
//               <strong style={{ color: "#ef4444" }}>25 Slots</strong> Left Today
//             </span>
//             <span>⏱ Limited Seats</span>
//           </div>
//         </div>

//         <StrategyModal
//           isOpen={isModalOpen}
//           onClose={() => setModalOpen(false)}
//         />
//       </section>
//       <ThankYouAds />

//       <Footer />
//       <WhatsappFloat />
//     </>
//   );
// };

// export default Thankyouads;

// "use client";

// import Head from "next/head";
// import React, { useState } from "react";
// import Navbar from "@/components/Global/Navbar/Navbar";
// import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
// import Footer from "../components/Global/Footer/Footer";
// import ThankYouAds from "../components/ThankYouAds/ThankYouAds";
// import Image from "next/image";
// import StrategyModal from "../components/StrategyModal/StrategyModal";

// const Thankyouads = () => {
//   const [isModalOpen, setModalOpen] = useState(false);

//   return (
//     <>
//       <Head>
//         <title>Learnbay - Thank you ads</title>
//         <meta name="robots" content="index, follow" />
//         <meta
//           name="description"
//           content="Learnbay thank you, Explore more information for a smooth learning experience."
//         />
//         <link
//           rel="icon"
//           href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
//         />
//       </Head>

//       <Navbar popup dataScienceCounselling interstedInHide />

//       {/* ================= MAIN WRAPPER ================= */}
//       <section
//         style={{
//           width: "100%",
//           padding: "60px 16px",
//           background: "#fdfdfd",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         {/* ================= CARD SECTION ================= */}
//         <div
//           style={{
//             width: "100%",
//             maxWidth: "1904px",
//             background: "#fff",
//             borderRadius: "30px",
//             padding: "50px 20px",
//             boxShadow: "0px 10px 40px rgba(0,0,0,0.05)",
//             border: "1px solid #f0f0f0",
//             textAlign: "center",
//           }}
//         >
//           {/* Top Headline */}
//           <h2
//             style={{
//               fontSize: "22px",
//               fontWeight: "400",
//               marginBottom: "30px",
//             }}
//           >
//             Don’t just read about the program{" "}
//             <span style={{ fontWeight: "800" }}>experience it </span>
//             <span style={{ color: "#ff4d4d", fontWeight: "800" }}>
//               LIVE
//             </span>{" "}
//             with an <span style={{ fontWeight: "800" }}>expert.</span>
//           </h2>

//           {/* Host Profile Box */}
//           <div
//             style={{
//               background: "#ebf9ff",
//               borderRadius: "16px",
//               padding: "20px",
//               display: "inline-flex",
//               alignItems: "center",
//               gap: "20px",
//               marginBottom: "40px",
//               textAlign: "left",
//               maxWidth: "500px",
//               width: "100%",
//             }}
//           >
//             <div style={{ position: "relative" }}>
//               <p
//                 style={{
//                   fontSize: "12px",
//                   fontStyle: "italic",
//                   textAlign: "center",
//                   marginBottom: "5px",
//                   color: "#666",
//                 }}
//               >
//                 Hosted by
//               </p>
//               <Image
//                 src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Thankyouimage.webp"
//                 alt="Mr. Ravi Pradhan"
//                 width={60}
//                 height={60}
//                 style={{ borderRadius: "50px", objectFit: "cover" }}
//               />
//               <span
//                 style={{
//                   position: "absolute",
//                   bottom: "-5px",
//                   right: "-5px",
//                   background: "#2563eb",
//                   color: "#fff",
//                   borderRadius: "50%",
//                   width: "20px",
//                   height: "20px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "10px",
//                   border: "2px solid #fff",
//                 }}
//               >
//                 ✓
//               </span>
//             </div>

//             <div>
//               <p style={{ fontWeight: 700, fontSize: "18px", margin: 0 }}>
//                 Mr. Ravi Pradhan
//               </p>
//               <p style={{ fontSize: "14px", color: "#444", margin: "4px 0" }}>
//                 AI Expert Practitioner
//               </p>
//               <div
//                 style={{
//                   background: "#059669",
//                   color: "#fff",
//                   padding: "4px 12px",
//                   borderRadius: "20px",
//                   fontSize: "12px",
//                   fontWeight: "600",
//                   display: "inline-block",
//                 }}
//               >
//                 Ex-Amazon | 12+ Years Experience
//               </div>
//             </div>
//           </div>

//           {/* Demo Session Text */}
//           <h1
//             style={{
//               fontSize: "32px",
//               fontWeight: "800",
//               marginBottom: "15px",
//             }}
//           >
//             Book Your Live{" "}
//             <span style={{ color: "#8b5cf6" }}>Demo Session</span>
//           </h1>

//           <p
//             style={{
//               maxWidth: "700px",
//               margin: "0 auto 30px",
//               color: "#444",
//               lineHeight: "1.6",
//               fontSize: "16px",
//             }}
//           >
//             Join our 45-minute Expert Demo Session designed to show you exactly
//             how professionals from any background are transitioning into AI,
//             GenAI, and Agentic AI roles faster than ever.
//           </p>

//           {/* Slots Info */}
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               gap: "30px",
//               marginBottom: "35px",
//             }}
//           >
//             <span style={{ fontWeight: "600" }}>
//               <span style={{ color: "#ef4444" }}>25 Slots</span> Left Today
//             </span>
//             <span style={{ fontWeight: "600", color: "#444" }}>
//               ⏱ Limited Seats
//             </span>
//           </div>
//         </div>
//       </section>

//       <ThankYouAds />
//       <Footer />
//       <WhatsappFloat />

//       <StrategyModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
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

      {/* ================= MAIN WRAPPER ================= */}
      <section
        style={{
          width: "100%",
          minHeight: "85vh",
          padding: "70px 20px",
          background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            maxWidth: "1300px",
            width: "100%",
            alignItems: "stretch",
          }}
        >
          {/* ================= LEFT : CONTENT ================= */}
          <div
            style={{
              flex: "1",
              minWidth: "340px",
              background: "#ffffff",
              borderRadius: "28px",
              padding: "48px",
              boxShadow: "0 20px 45px rgba(0,0,0,0.04)",
              border: "1px solid #f1f5f9",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                color: "#475569",
                marginBottom: "32px",
              }}
            >
              Don’t just read about the program{" "}
              <strong style={{ color: "#0f172a" }}>experience it </strong>
              <span style={{ color: "#ef4444", fontWeight: 800 }}>
                LIVE
              </span>{" "}
              with an <strong style={{ color: "#0f172a" }}>expert.</strong>
            </p>

            {/* Host Card */}
            <div
              style={{
                background: "#f0f9ff",
                borderRadius: "22px",
                padding: "22px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                margin: "0 auto 40px",
                maxWidth: "520px",
                border: "1px solid #e0f2fe",
                textAlign: "left",
              }}
            >
              <div style={{ position: "relative" }}>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#64748b",
                    position: "absolute",
                    top: "-24px",
                  }}
                >
                  Hosted by
                </p>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Thankyouimage.webp"
                  alt="Mr. Ravi Pradhan"
                  width={60}
                  height={70}
                  style={{ borderRadius: "50px" }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    background: "#3b82f6",
                    color: "#fff",
                    borderRadius: "50%",
                    width: "18px",
                    height: "18px",
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ✓
                </span>
              </div>

              <div>
                <p style={{ fontWeight: 800, fontSize: "18px", margin: 0 }}>
                  Mr. Ravi Pradhan
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#64748b",
                    margin: "4px 0 8px",
                  }}
                >
                  AI Expert Practitioner
                </p>
                <span
                  style={{
                    background: "#10b981",
                    color: "#fff",
                    padding: "6px 14px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: 700,
                  }}
                >
                  Ex-Amazon | 12+ Years Experience
                </span>
              </div>
            </div>

            <h1
              style={{
                fontSize: "34px",
                fontWeight: 900,
                marginBottom: "18px",
              }}
            >
              Book Your Live{" "}
              <span style={{ color: "#6366f1" }}>Demo Session</span>
            </h1>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.7",
                maxWidth: "560px",
                margin: "0 auto 32px",
              }}
            >
              Join our 45-minute Expert Demo Session to see how professionals
              are transitioning into AI, GenAI, and Agentic AI roles faster than
              ever.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  background: "#fef2f2",
                  padding: "8px 16px",
                  borderRadius: "12px",
                  border: "1px solid #fee2e2",
                }}
              >
                <strong style={{ color: "#ef4444" }}>25 Slots</strong>{" "}
                <span style={{ color: "#991b1b" }}>Left Today</span>
              </div>

              <div
                style={{
                  background: "#f8fafc",
                  padding: "8px 16px",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                }}
              >
                ⏱ Limited Seats
              </div>
            </div>
          </div>

          {/* ================= RIGHT : FORM (NO EXTRA BG) ================= */}
          <div
            style={{
              flex: "1",
              minWidth: "340px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ThankYouAds />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappFloat />
      <StrategyModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Thankyouads;
