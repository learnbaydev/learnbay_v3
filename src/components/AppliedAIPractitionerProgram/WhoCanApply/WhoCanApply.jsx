"use client";

import React from "react";
import Image from "next/image";
import styles from "./WhoCanApply.module.css";

export default function WhoCanApply() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        {/* LEFT TEXT BLOCK */}
        <div className={styles.leftCol}>
          <h2 className={styles.heading}>Who Can Apply?</h2>
          <p className={styles.description}>
            This program is for professionals looking to integrate AI into their
            daily work, no coding experience needed.
          </p>

          {/* PERSON + CIRCLE BACKGROUND */}
          <div className={styles.personArea}>
            <div className={styles.circleLayerOuter} />
            <div className={styles.circleLayerInner} />
            <div className={styles.personImageWrapper}>
              {/* Replace src with your image path */}
              <Image
                src="/images/who-can-apply-person.png"
                alt="Professional learner"
                fill
                className={styles.personImage}
              />
            </div>
          </div>
        </div>

        {/* RIGHT CARDS BLOCK */}
        <div className={styles.rightCol}>
          <div className={styles.cardsWrapper}>
            {/* Left middle card */}
            <div className={`${styles.card} ${styles.leftCard}`}>
              <div className={styles.cardIcon}>
                <span role="img" aria-label="trophy">
                  🏆
                </span>
              </div>
              <h3 className={styles.cardTitle}>Leaders &amp; Entrepreneurs</h3>
              <ul className={styles.cardList}>
                <li>Experience: 5–10+ years</li>
                <li>Job roles: Managers, Founders, Product Owners</li>
              </ul>
              <div className={styles.cardOutcome}>
                <span className={styles.outcomeLabel}>Outcome:</span> Design AI
                strategies, evaluate tools, and lead AI implementation.
              </div>
            </div>

            {/* Right stacked cards */}
            <div className={styles.rightStack}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <span role="img" aria-label="business">
                    📈
                  </span>
                </div>
                <h3 className={styles.cardTitle}>
                  Non-Tech &amp; Business Professionals
                </h3>
                <ul className={styles.cardList}>
                  <li>Experience: 1–10+ years</li>
                  <li>Job roles: Marketing, Sales, Operations, Trainers</li>
                </ul>
                <div className={styles.cardOutcome}>
                  <span className={styles.outcomeLabel}>Outcome:</span> Use AI
                  to automate workflows, generate content, and improve
                  decisions.
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <span role="img" aria-label="tech">
                    🧩
                  </span>
                </div>
                <h3 className={styles.cardTitle}>Tech Professionals</h3>
                <ul className={styles.cardList}>
                  <li>Experience: 1–10+ years</li>
                  <li>Job roles: Developers, Data/ML, QA, Analysts</li>
                </ul>
                <div className={styles.cardOutcome}>
                  <span className={styles.outcomeLabel}>Outcome:</span> Build
                  AI-powered tools, copilots, and internal applications.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
