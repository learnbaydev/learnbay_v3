"use client";

import React from "react";
import Image from "next/image";
import styles from "./CertificationSectionIBM.module.css";

export default function CertificationsSectionIBM() {
  return (
    <section className={styles.wrapper}>
      {/* Header */}
      {/* <header className={styles.header}>
        <h2 className={styles.heading}>Dual Certification</h2>
        <p className={styles.subheading}>
          Get certified in AI skills that recruiters trust
        </p>
      </header> */}

      {/* Main content row */}
      <div className={styles.contentRow}>
        {/* Left – certificate image */}

        <div className={styles.textCol}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>Certification from IBM</span>
          </div>

          <p className={styles.bodyText}>
            Earn an industry-recognized{" "}
            <span className={styles.highlightPrimary}>IBM Certification</span>{" "}
            validating your expertise in enterprise-grade Data Science adn AI
            systems.
          </p>
        </div>
        <div className={styles.imageCol}>
          <div className={styles.certificateFrame}>
            {/* Dummy image – replace with your actual certificate */}
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Certificate-blue.png"
              alt="Sample IIT Patna certificate"
              fill
              className={styles.certificateImage}
            />
          </div>
        </div>

        {/* Right – text */}
      </div>
    </section>
  );
}
