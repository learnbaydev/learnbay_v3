"use client";

import React from "react";
import Image from "next/image";
import styles from "./ToolsAndPlatforms.module.css";

const LOGO_BASE = "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ai-tool";

const TOOL_GROUPS = [
  {
    id: "llms",
    label: "LLMs",
    logos: [32, 1, 2, 3, 5],
  },
  {
    id: "frameworks",
    label: "Frameworks & Integrations",
    logos: [6, 7, 8, 9, 10],
  },
  {
    id: "agents",
    label: "Automation & Agents",
    logos: [11, 12, 13, 15, 31],
  },
  {
    id: "creative",
    label: "Creative AI",
    logos: [16, 18, 19, 20],
  },
  {
    id: "nocode",
    label: "No-Code App & Dev Tools",
    logos: [21, 22, 23, 25],
  },
  {
    id: "cloud-mlops",
    label: "Cloud & AIOps",
    logos: [27, 28, 29, 30],
  },
];

export default function ToolsAndPlatforms() {
  return (
    <section className={styles.wrapper}>
      {/* Top down arrow */}
      <div className={styles.arrowDown}></div>

      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.heading}>
            Tools and Platforms You’ll Work With
          </h2>
          <p className={styles.subheading}>
            You will get hands-on exposure to more than 35 tools across LLMs,
            automation, creative AI, product building, and AIOps.
          </p>
        </header>

        <div className={styles.groups}>
          {TOOL_GROUPS.map((group) => (
            <div key={group.id} className={styles.groupCard}>
              <h3 className={styles.groupHeader}>{group.label}</h3>

              <div className={styles.toolRow}>
                {group.logos.map((n) => (
                  <div key={n} className={styles.toolPill}>
                    <Image
                      src={`${LOGO_BASE}${n}.webp`}
                      alt={`${group.label} tool ${n}`}
                      width={140}
                      height={40}
                      className={styles.toolImage}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
