import React from "react";
import styles from "./LearnbayDifference.module.css";

const LearnbayDifference = () => {
  const features = [
    {
      id: 1,
      iconSrc:
        "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Group+2425.webp", // Replace with your actual icon path
      iconAlt: "User Icon",
      iconBg: "#6366f1",
      title: "Work on real challenges",
      description: "using datasets from leading companies",
      isActive: true,
    },
    {
      id: 2,
      iconSrc:
        "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Group+2426.webp", // Replace with your actual icon path
      iconAlt: "Trophy Icon",
      iconBg: "#10b981",
      title: "Earn dual certification",
      description: "jointly from Learnbay and the collaborating organization",
    },
    {
      id: 3,
      iconSrc:
        "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Group+2427.webp", // Replace with your actual icon path
      iconAlt: "Briefcase Icon",
      iconBg: "#f97316",
      title: "Gain industry experience",
      description: "through live project collaboration",
    },
    {
      id: 4,
      iconSrc:
        "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Group+2425+(1).webp", // Replace with your actual icon path
      iconAlt: "Portfolio Icon",
      iconBg: "#8b5cf6",
      title: "Showcase a recruiter-ready portfolio",
      description: "validated by recognized industry partners",
    },
  ];

  return (
    <section className={styles.learnbaySection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <p className={styles.subtitle}>The Learnbay Difference:</p>
            <h2 className={styles.mainTitle}>
              <span className={styles.highlight}>
                Industry-Integrated AI Experience
              </span>
            </h2>
          </div>
          <button className={styles.ctaButton}>Something</button>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`${styles.featureCard} ${
                feature.isActive ? styles.activeCard : ""
              }`}
            >
              <div className={styles.iconContainer}>
                <img
                  src={feature.iconSrc}
                  width={40}
                  height={40}
                  alt={feature.iconAlt}
                  className={styles.iconImage}
                />
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
              {feature.isActive && (
                <div className={styles.activeIndicator}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnbayDifference;
