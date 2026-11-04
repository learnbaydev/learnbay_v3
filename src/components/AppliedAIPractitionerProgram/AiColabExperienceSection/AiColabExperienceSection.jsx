"use client";

import React from "react";
import styles from "./AiColabExperienceSection.module.css";

const BENEFITS = [
  "Live startup problem statements",
  "Mentoring from founders and product leads",
  "Demo Day presentation to industry guests",
  "AI Startup Certificate after completion",
];

const STEPS = [
  { id: 1, title: "Problem scoping", weeks: "Weeks 1–3" },
  { id: 2, title: "Build and iterate", weeks: "Weeks 1–3" },
  { id: 3, title: "Testing and handover", weeks: "Weeks 1–3" },
  { id: 4, title: "Presentation & feedback", weeks: "Weeks 1–3" },
];

export default function AiColabExperienceSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        {/* Heading block */}
        <header className={styles.header}>
          <h2 className={styles.headingMain}>AI CoLab Experience</h2>
          <h3 className={styles.headingSub}>
            Work With AI Startups Before You Graduate
          </h3>
          <p className={styles.description}>
            AI CoLab connects you to AI teams on real products. Join as a
            contributor for a focused capstone, working on live features.
          </p>
        </header>

        {/* Main white + gradient card */}
        <div className={styles.contentCard}>
          {/* Left features list */}
          <div className={styles.leftCol}>
            {BENEFITS.map((item) => (
              <div key={item} className={styles.featureCard}>
                <div className={styles.checkIcon}>
                  <span>✔</span>
                </div>
                <p className={styles.featureText}>{item}</p>
              </div>
            ))}
          </div>

          {/* Right steps */}
          <div className={styles.rightCol}>
            <div className={styles.stepsWrapper}>
              {STEPS.map((step) => (
                <div key={step.id} className={styles.stepRow}>
                  <div className={styles.stepNumberCircle}>
                    <span>{step.id}</span>
                  </div>
                  <div className={styles.stepTextBlock}>
                    <p className={styles.stepTitle}>{step.title}</p>
                    <span className={styles.stepBadge}>{step.weeks}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
