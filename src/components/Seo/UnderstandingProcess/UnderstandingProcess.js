import React from "react";
import styles from "./UnderstandingProcess.module.css";

const UnderstandingProcess = () => {
  const steps = [
    {
      id: 1,
      number: "01",
      iconSrc:
        "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Group+2896.webp", // Replace with your actual icon path
      iconAlt: "Document Icon",
      title: "Project Onboarding",
      description: "We work with 30+ companies on real AI/GenAI problems",
    },
    {
      id: 2,
      number: "02",
      iconSrc:
        "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Group+2898.webp", // Replace with your actual icon path
      iconAlt: "Graduation Cap Icon",
      title: "Learner Participation",
      description:
        "In the Mastertrack program, you'll work on live projects with expert guidance.",
    },
    {
      id: 3,
      number: "03",
      iconSrc:
        "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Group+2905.webp", // Replace with your actual icon path
      iconAlt: "Handshake Icon",
      title: "Industry Collaboration",
      description:
        "Companies may offer part-time projects for industry experience.",
    },
    {
      id: 4,
      number: "04",
      iconSrc:
        "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Group+2902.webp", // Replace with your actual icon path
      iconAlt: "Trophy Icon",
      title: "Certification & Portfolio",
      description:
        "Earn a dual certificate and graduate with a portfolio validated by partners.",
    },
  ];

  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>Understanding the Process</h2>
          <p className={styles.subtitle}>
            A Comprehensive Overview of How It Functions
          </p>
        </div>

        {/* Steps */}
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className={styles.stepItem}>
                {/* Step Number Background */}
                <div className={styles.stepNumber}>{step.number}</div>

                {/* Icon Circle */}
                <div className={styles.iconContainer}>
                  <img
                    src={step.iconSrc}
                    width={40}
                    height={40}
                    alt={step.iconAlt}
                    className={styles.iconImage}
                  />
                </div>

                {/* Content */}
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>

              {/* Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className={styles.arrow}>
                  <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                    <path
                      d="M16 1L23 8L16 15M23 8H1"
                      stroke="#D1D5DB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnderstandingProcess;
