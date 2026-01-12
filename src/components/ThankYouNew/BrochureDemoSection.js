"use client";
import React, { useState } from "react";
import styles from "./BrochureDemoSection.module.css";
import Image from "next/image";
import StrategyModal from "../StrategyModal/StrategyModal";
function BrochureDemoSection({ pdfUrl }) {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <section className={styles.section}>
      {/* Top gradient header */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Your Brochure Is Ready!</h1>
        <p className={styles.heroSubtitle}>
          You’re one step closer to upgrading your career
        </p>
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
          <button className={styles.ctaButton1}>View Syllabus</button>
        </a>
      </div>

      {/* Main card (overlapping the gradient) */}
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          {/* Top line */}
          <p className={styles.topText}>
            Don’t just read about the program{" "}
            <span className={styles.bold}>experience it </span>
            <span className={styles.live}>LIVE</span> with an{" "}
            <span className={styles.bold}>expert.</span>
          </p>

          {/* Host strip */}
          <div className={styles.hostStrip}>
            <div className={styles.hostLeft}>
              <div className={styles.hostImageWrap}>
                {/* Replace with your real image inside /public */}
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Thankyouimage.webp"
                  alt="Mr. Ravi Pradhan"
                  className={styles.hostImage}
                  width={100} // Explicitly define width
                  height={100} // Explicitly define height
                  priority // Ensure the image loads as soon as possible and with full resolution
                />

                <div className={styles.hostImageWrap}>
                  {/* Mic icon near the image */}
                  <span className={styles.micIcon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className={styles.micSvg}
                    >
                      <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3zm5-3a1 1 0 0 0-2 0 3 3 0 0 1-6 0 1 1 0 0 0-2 0 5.002 5.002 0 0 0 4 4.9V19h-2a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-3.1A5.002 5.002 0 0 0 17 11z" />
                    </svg>
                  </span>
                </div>

                <span className={styles.hostBadge}>✓</span>
              </div>
              <span className={styles.hostedBy}>Hosted by</span>
            </div>

            <div className={styles.hostRight}>
              <p className={styles.hostName}>Mr. Ravi Pradhan</p>
              <p className={styles.hostRole}>AI Expert Practitioner</p>
              <div className={styles.hostTag}>
                Ex-Amazon | 12+ Years Experience
              </div>
            </div>
          </div>

          {/* Middle heading + description */}
          <h2 className={styles.demoHeading}>
            Book Your Live{" "}
            <span className={styles.demoHighlight}>Demo Session</span>
          </h2>

          <p className={styles.demoDesc}>
            Join our 45-minute Expert Demo Session designed to show you exactly
            how professionals from any background are transitioning into AI,
            GenAI, and Agentic AI roles faster than ever.
          </p>

          {/* Slots and duration row */}
          <div className={styles.infoRow}>
            <span className={styles.slotsText}>
              <span className={styles.slotsHighlight}>25 Slots</span> Left Today
            </span>

            {/* <div className={styles.infoDivider} /> */}

            <span className={styles.sessionInfo}>
              <span className={styles.timerCircle}>⏱</span>
              Limited Seats
            </span>
          </div>

          {/* Button INSIDE the card */}
          <button
            className={styles.ctaButton}
            onClick={() => setModalOpen(true)}
          >
            <span>Schedule Demo Class </span>
            <span className={styles.ctaArrow}>➜</span>
          </button>
        </div>
      </div>
      <StrategyModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

export default BrochureDemoSection;
