"use client";

import React from "react";
import Image from "next/image";
import styles from "./ProgramSnapshotSection.module.css";

export default function ProgramSnapshotSection() {
  return (
    <section className={styles.wrapper}>
      {/* Header */}
      <header className={styles.header}>
        <h2 className={styles.heading}>Program Snapshot</h2>
        <p className={styles.subheading}>
          Choose our platform for project-based programs
        </p>
      </header>

      {/* Main card */}
      <div className={styles.card}>
        {/* LEFT SIDE */}
        <div className={styles.leftPane}>
          <div className={styles.durationPill}>Duration: 4 Months</div>

          <h3 className={styles.programTitle}>
            Applied AI Practitioner Program
          </h3>

          <div className={styles.modeRow}>
            <span className={styles.modeLabel}>Mode</span>
            <span className={styles.modeValue}>
              <span className={styles.liveTag}>100% Live Online</span> + AI
              CoLab Experience
            </span>
          </div>

          <div className={styles.collabRow}>
            <span className={styles.collabLabel}>In Collaboration With:</span>
            <div className={styles.collabLogoWrap}>
              {/* Dummy collab logo – replace with your own */}
              <Image
                src="/images/iit-patna-logo.png"
                alt="Vishlesan I-HUB Foundation IIT Patna"
                fill
                className={styles.collabLogo}
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.rightPane}>
          <div className={styles.feePill}>Program Fee</div>

          <div className={styles.priceBlock}>
            <div className={styles.priceMain}>₹ 95,000 + 18% GST</div>
            <div className={styles.priceSub}>
              EMI: Available for 3, 6 and 9 months
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.primaryBtn}>
              <span className={styles.btnIconBox}>
                {/* simple square icon */}
                <span className={styles.iconSquare} />
              </span>
              Apply for the Next Cohort
            </button>

            <button className={styles.secondaryBtn}>
              <span className={styles.btnIconBox}>
                {/* phone icon style dot */}
                <span className={styles.iconCircle} />
              </span>
              schedule a Call With a Counselor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
