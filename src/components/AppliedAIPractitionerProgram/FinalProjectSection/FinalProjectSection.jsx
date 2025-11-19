"use client";

import React from "react";
import styles from "./FinalProjectSection.module.css";

const STEPS = [
  {
    id: "build",
    icon: "🛠️",
    title: "Build your AI product",
  },
  {
    id: "collab",
    icon: "👥",
    title: "Collaborate with AI Startups",
  },
  {
    id: "deploy",
    icon: "👁️",
    title: "Deploy and showcase in your portfolio",
  },
];

export default function FinalProjectSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        {/* Heading */}
        <header className={styles.header}>
          <h2 className={styles.heading}>
            Final Project – Build Your AI Solution
          </h2>
          <p className={styles.subheading}>
            Choose our platform for project-based programs
          </p>
        </header>

        {/* Gradient steps strip */}
        <div className={styles.strip}>
          <div className={styles.stepsRow}>
            {STEPS.map((step, index) => (
              <div key={step.id} className={styles.stepBlock}>
                <div className={styles.iconOuter}>
                  <div className={styles.iconInner}>
                    <span className={styles.iconEmoji}>{step.icon}</span>
                  </div>
                </div>
                <p className={styles.stepTitle}>{step.title}</p>

                {/* Arrow after step, except last one */}
                {index < STEPS.length - 1 && (
                  <div className={styles.arrow}>
                    <span className={styles.arrowLine} />
                    <span className={styles.arrowHead} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer text */}
        <p className={styles.footerText}>
          This capstone is evaluated by our{" "}
          <span className={styles.boldText}>AI partner in the CoLab</span>,
          forming your Startup Certificate.
        </p>
      </div>
    </section>
  );
}
