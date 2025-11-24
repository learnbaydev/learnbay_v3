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
      "Generate campaigns, ad copy & visuals instantly",
      "Automate lead scoring, follow-ups & CRM workflows",
      "Build brand-aligned scripts, videos & creatives with multimodal AI",
      "Analyze customer conversations using LLMs for insights",
    ],
    imageSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/meeting_discussion.webp",
    imageAlt: "Team of sales and marketing professionals",
  },
  {
    id: "bfsi",
    title: "BFSI (Banking, Finance & Insurance)",
    challenges: [
      "Heavy reporting workload",
      "Compliance audits take too long",
      "Manual financial analysis",
      "Generic customer service",
    ],
    helps: [
      "Build forecasting & budgeting copilots",
      "Automate compliance checks using RAG on policy documents",
      "Generate risk summaries using LLMs",
      "Improve customer support with AI-powered assistants",
    ],
    imageSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cropped-view-manager-making-online-payment.webp",
    imageAlt: "Financial team in discussion",
  },
  {
    id: "healthcare",
    title: "Healthcare & Medical",
    challenges: [
      "High documentation load",
      "Slow administrative workflows",
      "Fragmented patient data",
      "Limited workflow automation",
    ],
    helps: [
      "Auto-summarize clinical notes & patient records",
      "Build triage assistants & smart FAQs",
      "Automate hospital task flows across departments",
      "Use RAG to quickly retrieve and analyze medical documents",
    ],
    imageSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/male-working-as-paediatrician.webp",
    imageAlt: "Healthcare professionals collaborating",
  },
  {
    id: "supplychain",
    title: "Manufacturing & Supply Chain",
    challenges: [
      "Manual demand forecasting",
      "Slow order & document processing",
      "Limited real-time visibility",
      "High dependency on ERP operators",
    ],
    helps: [
      "Build forecasting dashboards using LLMs + BI",
      "Automate procurement & vendor communication",
      "Create document-intake copilots for invoices, orders & SOPs",
      "Improve operational visibility with AI reports",
    ],
    imageSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/factory-worker-packaging-boxes.webp",
    imageAlt: "Manufacturing & supply chain professionals collaborating",
  },
  {
    id: "softwaredevelopment",
    title: "Software Development Professionals",
    challenges: [
      "Time-consuming debugging",
      "Repetitive coding & documentation",
      "Delayed prototyping",
      "Scattered requirements",
    ],
    helps: [
      "Build AI debugging & code-review assistants",
      "Auto-generate test cases, API docs & specs",
      "Create rapid prototypes using no-code + LLM workflows",
      "Automate tech tasks like sprint grooming & PR summaries",
    ],
    imageSrc:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/two-people-are-talking-front-computer-screen-that-says-start.webp",
    imageAlt: "Software development team collaborating",
  },
  {
    id: "productmanagement",
    title: "Product Management Professionals",
    challenges: [
      "Slow market research",
      "Manual feedback synthesis",
      "Hard to prioritize features",
      "Limited rapid experimentation",
    ],
    helps: [
      "Auto-generate research insights using LLMs",
      "Summarize user interviews into actionable themes",
      "Build prototype apps without coding",
      "Use AI to create PRDs, roadmaps & feature briefs",
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
          Discover how your job becomes smarter and more automated with AI
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
