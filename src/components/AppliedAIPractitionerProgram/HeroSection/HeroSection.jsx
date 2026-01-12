"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./HeroSection.module.css";
import PopupContent from "@/components/Global/PopupContent/PopupContent";

export default function AppliedAIHero() {
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };

  const pdfUrl =
    "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/IIT_Patna_Applied_AI_Program.pdf";
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "IITPatnaAppliedAIProgram.pdf"; // filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroImageWrapper}>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/iit-patna-campus.webp"
          alt="IIT Patna Campus"
          fill
          priority
          className={styles.heroImage}
          // ADD THIS inline style to guarantee object-fit: cover
          // style={{ objectFit: "cover" }}
        />
      </div>

      {/* 2. Color/Shadow Overlay Layer */}
      <div className={styles.overlay}></div>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          {/* TOP FLOATING LOGO BADGE */}
          <div className={styles.collabBadge}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group+3212.webp"
              alt="Vishlesan I-HUB Foundation IIT Patna"
              width={210}
              height={60}
              className={styles.collabLogo}
            />
          </div>

          {/* LEFT CONTENT */}
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              <span className={styles.kicker}>Applied AI </span>
              <br />
              Practitioner Program
            </h1>

            <p className={styles.subtitle}>
              Master 35+ AI tools, <b>build real AI products</b>, and work
              directly with startups — all in 4 months.
            </p>

            <p className={styles.collabText}>
              In collaboration with <span>IIT Patna</span>
            </p>

            <div className={styles.buttonRow}>
              <PopupContent
                // dataScience={dataScience}
                // radio={radio}
                // dataScienceCounselling={dataScienceCounselling}
                dataScienceGeneric={true}
                popups={popups}
                setPopups={setPopups}
                // interstedInHide={interstedInHide}
                // idss={idss}
                // btnHide={btnHide}
                brochurePdf={pdfUrl}
                heading="Apply For Counselling"
              />
              <button onClick={popupShow} className={styles.primaryBtn}>
                <span className={styles.iconCircle}>
                  {/* Phone icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={styles.icon}
                  >
                    <path
                      d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.55.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.25 1.01z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                Talk to a Program Advisor
              </button>

              <button onClick={handleDownload} className={styles.secondaryBtn}>
                <span className={styles.secondaryIconCircle}>
                  {/* Download icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={styles.icon}
                  >
                    <path
                      d="M12 3a1 1 0 011 1v9.59l3.3-3.3a1 1 0 111.4 1.42l-5 5a1 1 0 01-1.4 0l-5-5a1 1 0 011.4-1.42L11 13.59V4a1 1 0 011-1zm-7 15a1 1 0 011-1h12a1 1 0 010 2H6a1 1 0 01-1-1z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                Download Program Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
