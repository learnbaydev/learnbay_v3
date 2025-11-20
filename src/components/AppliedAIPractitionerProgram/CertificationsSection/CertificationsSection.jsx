"use client";

import React from "react";
import Image from "next/image";
import styles from "./CertificationsSection.module.css";

export default function CertificationsSection() {
  return (
    <section className={styles.wrapper}>
      {/* Header */}
      <header className={styles.header}>
        <h2 className={styles.heading}>Dual Certification</h2>
        <p className={styles.subheading}>
          Get certified in AI skills that recruiters trust
        </p>
      </header>

      {/* Main content row */}
      <div className={styles.contentRow}>
        {/* Left – certificate image */}
        <div className={styles.imageCol}>
          <div className={styles.certificateFrame}>
            {/* Dummy image – replace with your actual certificate */}
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/IITPatnaAppliedAIProgram1.webp"
              alt="Sample IIT Patna certificate"
              fill
              className={styles.certificateImage}
            />
          </div>
        </div>

        {/* Right – text */}
        <div className={styles.textCol}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>
              Certification from IIT Patna
            </span>
          </div>

          <p className={styles.bodyText}>
            The program is offered in collaboration with{" "}
            <span className={styles.highlightPrimary}>
              Vishlesan I-Hub Foundation, IIT Patna
            </span>{" "}
            enabling hands-on innovation exposure and real-world AI
            problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
}
