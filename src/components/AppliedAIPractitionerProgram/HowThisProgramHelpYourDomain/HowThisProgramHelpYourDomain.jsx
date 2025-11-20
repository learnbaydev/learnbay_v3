"use client";

import React from "react";
import Image from "next/image";
import styles from "./HowThisProgramHelpYourDomain.module.css";

const DOMAIN_ROWS = [
  {
    id: "sales",
    title: "Sales & Marketing Professionals",
    challenges: [
      "Repetitive campaign tasks",
      "Slow content turnaround",
      "Low personalization",
      "Delayed customer insights",
    ],
    helps: [
      "Generate campaigns instantly",
      "Automate lead scoring & follow-ups",
      "Produce on-brand visuals, scripts & videos with AI",
    ],
    imageSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/meeting_discussion.webp",
    imageAlt: "Team of sales and marketing professionals",
  },
  {
    id: "bfsi",
    title: "BFSI (Banking, Finance & Insurance)",
    challenges: [
      "Tedious reporting",
      "High compliance workload",
      "Repetitive analysis",
      "Generic customer service",
    ],
    helps: [
      "Automate forecasting",
      "Build AI risk-analysis copilots",
      "Run compliance checks using RAG",
      "Improve customer insights",
    ],
    imageSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cropped-view-manager-making-online-payment.webp",
    imageAlt: "Financial team in discussion",
  },
  {
    id: "healthcare",
    title: "Healthcare & Medical",
    challenges: [
      "Tedious reporting",
      "High compliance workload",
      "Repetitive analysis",
      "Generic customer service",
    ],
    helps: [
      "Automate forecasting",
      "Build AI risk-analysis copilots",
      "Run compliance checks using RAG",
      "Improve customer insights",
    ],
    imageSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/male-working-as-paediatrician.webp",
    imageAlt: "Healthcare professionals collaborating",
  },
  {
    id: "supplychain",
    title: "Manufacturing & Supply Chain",
    challenges: [
      "Repetitive campaign tasks",
      "Slow content turnaround",
      "Low personalization",
      "Delayed customer insights",
    ],
    helps: [
      "Generate campaigns instantly",
      "Automate lead scoring & follow-ups",
      "Produce on-brand visuals, scripts & videos with AI",
    ],
    imageSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/factory-worker-packaging-boxes.webp",
    imageAlt: "Manufacturing & supply chain professionals collaborating",
  },
  {
    id: "softwaredevelopment",
    title: "Software Development Professionals",
    challenges: [
      "Tedious reporting",
      "High compliance workload",
      "Repetitive analysis",
      "Generic customer service",
    ],
    helps: [
      "Automate forecasting",
      "Build AI risk-analysis copilots",
      "Run compliance checks using RAG",
      "Improve customer insights",
    ],
    imageSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/two-people-are-talking-front-computer-screen-that-says-start.webp",
    imageAlt: "Software development team collaborating",
  },
  {
    id: "productmanagement",
    title: "Product Management Professionals",
    challenges: [
      "Tedious reporting",
      "High compliance workload",
      "Repetitive analysis",
      "Generic customer service",
    ],
    helps: [
      "Automate forecasting",
      "Build AI risk-analysis copilots",
      "Run compliance checks using RAG",
      "Improve customer insights",
    ],
    imageSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/design-professionals-discussing-office.webp",
    imageAlt: "Product managers in discussion",
  },
];

export default function DomainHelpSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.heading}>How This Program Helps Your Domain</h2>
        <p className={styles.subheading}>
          Choose our platform for project-based programs
        </p>
      </div>

      <div className={styles.rows}>
        {DOMAIN_ROWS.map((row) => (
          <div key={row.id} className={styles.domainBlock}>
            <h3 className={styles.domainTitle}>{row.title}</h3>

            <div className={styles.domainCard}>
              {/* Column 1 – Challenges */}
              <div className={`${styles.cardCol} ${styles.challengesCol}`}>
                <h4 className={styles.cardHeading}>Challenges Today</h4>
                <ul className={styles.list}>
                  {row.challenges.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Column 2 – How AI Practitioner Helps */}
              <div className={`${styles.cardCol} ${styles.helpsCol}`}>
                <h4 className={styles.cardHeading}>
                  How AI Practitioner Helps
                </h4>
                <ul className={styles.list}>
                  {row.helps.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Column 3 – Image */}
              <div className={styles.imageCol}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={row.imageSrc}
                    alt={row.imageAlt}
                    fill
                    className={styles.domainImage}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
