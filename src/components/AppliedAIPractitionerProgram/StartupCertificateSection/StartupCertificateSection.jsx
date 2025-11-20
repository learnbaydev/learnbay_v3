"use client";

import React from "react";
import Image from "next/image";
import styles from "./StartupCertificateSection.module.css";

export default function StartupCertificateSection() {
  return (
    <section className={styles.outerWrapper}>
      <div className={styles.innerCard}>
        {/* LEFT CONTENT */}
        <div className={styles.leftCol}>
          <div className={styles.badge}>AI Startup Certificate</div>

          <h3 className={styles.heading}>Why it matters:</h3>

          <p className={styles.text}>
            This is your practical experience credential proof that you can{" "}
            <span className={styles.highlight}>use AI in the real world</span>{" "}
            to solve actual problems.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.rightCol}>
          <div className={styles.certificateFrame}>
            {/* Dummy image – replace with your real certificate image */}
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/IITPatnaAppliedAIProgram.webp"
              alt="AI Startup Certificate"
              fill
              className={styles.certificateImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
