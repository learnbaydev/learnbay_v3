"use client";

import React from "react";
import Image from "next/image";
import styles from "./FinalProjectSection.module.css";

const STEPS = [
  {
    id: "build",
    img: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/construction.webp",
    title: "Build your AI product",
  },
  {
    id: "collab",
    img: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/group.webp",
    title: "Collaborate with AI Startups",
  },
  {
    id: "deploy",
    img: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/eye_tracking.webp",
    title: "Deploy and showcase in your portfolio",
  },
];

export default function FinalProjectSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        {/* Heading */}
        <header className={styles.header}>
          <h2 className={styles.heading}>From Prototype to Portfolio</h2>
          <p className={styles.subheading}>
            Build your AI solution, validate it with startup teams, and add a
            verified project to your portfolio.
          </p>
        </header>

        {/* Gradient steps strip */}
        <div className={styles.strip}>
          <div className={styles.stepsRow}>
            {STEPS.map((step, index) => (
              <div key={step.id} className={styles.stepBlock}>
                <div className={styles.iconOuter}>
                  <div className={styles.iconInner}>
                    <Image
                      src={step.img}
                      alt={step.title}
                      width={40}
                      height={40}
                      className={styles.iconImage}
                    />
                  </div>
                </div>

                <p className={styles.stepTitle}>{step.title}</p>

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

        <p className={styles.footerText}>
          This capstone is evaluated by our{" "}
          <span className={styles.boldText}>AI partner in the CoLab</span>,
          forming your Startup Certificate.
        </p>
      </div>
    </section>
  );
}
