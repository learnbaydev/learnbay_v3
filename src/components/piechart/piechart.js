import React from "react";
import styles from "./HiringImpactChart.module.css";

const HiringImpactChart = () => {
  return (
    <section className={styles.impactSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>From Learning to Hiring Impact</h2>
          <p className={styles.subtitle}>
            Our learners don't just complete projects — they deliver
            industry-ready
            <br />
            outcomes that companies value. Here's the proof:
          </p>
        </div>

        {/* Chart Content */}
        <div className={styles.chartContent}>
          {/* Pie Chart */}
          <div className={styles.chartContainer}>
            <svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              className={styles.pieChartSvg}
            >
              {/* 45% - AI/GenAI (Blue) - Starting from top, going clockwise */}
              <path
                d="M 200 200 L 200 50 A 150 150 0 0 1 350 200 A 150 150 0 0 1 292 332 Z"
                fill="#4c7cf3"
              />
              <text x="280" y="160" fill="white" fontSize="36" fontWeight="700">
                45%
              </text>

              {/* 30% - Data Science (Dark Blue) */}
              <path
                d="M 200 200 L 292 332 A 150 150 0 0 1 108 332 Z"
                fill="#1e3a8a"
              />
              <text x="140" y="300" fill="white" fontSize="36" fontWeight="700">
                30%
              </text>

              {/* 15% - Cloud + MLOps (Light Blue) */}
              <path
                d="M 200 200 L 108 332 A 150 150 0 0 1 127 78 Z"
                fill="#a5b4fc"
              />
              <text x="110" y="180" fill="white" fontSize="36" fontWeight="700">
                15%
              </text>

              {/* 10% - Business Analytics (Very Light Blue) */}
              <path
                d="M 200 200 L 127 78 A 150 150 0 0 1 200 50 Z"
                fill="#ddd6fe"
              />
              <text x="160" y="90" fill="#666" fontSize="32" fontWeight="700">
                10%
              </text>
            </svg>
          </div>

          {/* Legend */}
          <div className={styles.legend}>
            <div className={styles.legendItem}>
              <div
                className={styles.legendColor}
                style={{ backgroundColor: "#4c7cf3" }}
              ></div>
              <span className={styles.legendLabel}>AI/GenAI</span>
            </div>
            <div className={styles.legendItem}>
              <div
                className={styles.legendColor}
                style={{ backgroundColor: "#1e3a8a" }}
              ></div>
              <span className={styles.legendLabel}>Data Science</span>
            </div>
            <div className={styles.legendItem}>
              <div
                className={styles.legendColor}
                style={{ backgroundColor: "#a5b4fc" }}
              ></div>
              <span className={styles.legendLabel}>Cloud + MLOps</span>
            </div>
            <div className={styles.legendItem}>
              <div
                className={styles.legendColor}
                style={{ backgroundColor: "#ddd6fe" }}
              ></div>
              <span className={styles.legendLabel}>Business Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringImpactChart;
