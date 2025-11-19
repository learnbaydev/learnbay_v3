"use client";

import React from "react";
import styles from "./AppliedAIHero.module.css";
import Link from "next/link";

export default function AppliedAIHero() {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroContent}>
        <p className={styles.kicker}>Applied AI</p>
        <h1 className={styles.title}>Practitioner Program</h1>

        <p className={styles.subtitle}>
          Build AI <span className={styles.highlight}>copilots</span>,{" "}
          <span className={styles.highlight}>automate workflows</span>, and
          create real AI products in 4 months with live mentoring and startup
          collaboration
        </p>

        <div className={styles.buttonRow}>
          <Link href="#talk-to-advisor" className={styles.primaryBtn}>
            <span className={styles.iconCircle}>
              {/* phone icon (simple svg) */}
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
          </Link>

          <Link href="#download-brochure" className={styles.secondaryBtn}>
            <span className={styles.secondaryIconCircle}>
              {/* download icon */}
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
          </Link>
        </div>
      </div>
    </section>
  );
}
