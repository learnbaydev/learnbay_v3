import React from "react";
import styles from "./UnderstandingProcess.module.css";
import Image from "next/image";

const steps = [
  {
    number: "01",
    icon: "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Group+2898.webp",
    alt: "Working professional icon",
    title: "How will this help me as a working professional?",
    description:
      "You’ll gain hands-on experience with GenAI & Agentic AI, add real startup certifications to your resume, and be able to talk about actual business outcomes in interviews, giving you a huge career edge.",
  },
  {
    number: "02",
    icon: "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Group+3029.webp",
    alt: "Mentor icon",
    title: "Who guides me during projects?",
    description:
      "Each project is supported by startup founders, industry experts, and Learnbay mentors. You get 1:1 guidance, feedback and code reviews—like working in a real company environment.",
  },
  {
    number: "03",
    icon: "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Group+3031.webp",
    alt: "Project icon",
    title: "What kind of projects will I work on?",
    description:
      "You’ll build GenAI-powered apps, agentic workflows, RAG systems, and AI automation tools—the same tech startups are deploying in the real world today.",
  },
  {
    number: "04",
    icon: "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Group+3032.webp",
    alt: "Employers recognition icon",
    title: "Will these projects be recognized by employers?",
    description:
      "Yes. These are industry-recognized startup certifications. They highlight that you’ve worked on real AI applications and not just theoretical labs, making your profile stand out in hiring rounds.",
  },
];

// Define arrow sequence
const arrows = [
  "https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Group+2985.webp", // 1 -> 2
  "https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Group+2986.webp", // 2 -> 3
  "https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Group+2985.webp", // 3 -> 4
];

const UnderstandingProcess = () => (
  <section className={styles.processSection}>
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.mainTitle}>How does it work?</h2>
      </div>

      <div className={styles.stepsStack}>
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <div
              className={`${styles.stepRow} ${
                idx % 2 === 0 ? styles.left : styles.right
              }`}
            >
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.iconWrapper}>
                  <img
                    src={step.icon}
                    alt={step.alt}
                    className={styles.iconImg}
                  />
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>

            {/* Add arrow image after step (but not after the last step)  */}
            {idx < steps.length - 1 && (
              <div className={styles.arrowWrapper}>
                <Image
                  src={arrows[idx]}
                  alt={`Arrow from step ${idx + 1} to ${idx + 2}`}
                  className={styles.arrowImg}
                  height={130}
                  width={240}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default UnderstandingProcess;
