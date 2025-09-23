import React from "react";
import styles from "./UnderstandingProcess.module.css";

const steps = [
  {
    number: "01",
    icon: "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Group+2896.webp",
    alt: "Working professional icon",
    title: "How will this help me as a working professional?",
    description:
      "You’ll gain hands-on experience with GenAI & Agentic AI, add real startup certifications to your resume, and be able to talk about actual business outcomes in interviews, giving you a huge career edge.",
  },
  {
    number: "02",
    icon: "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Group+2898.webp",
    alt: "Mentor icon",
    title: "Who guides me during projects?",
    description:
      "Each project is supported by startup founders, industry experts, and Learnbay mentors. You get 1:1 guidance, feedback and code reviews—like working in a real company environment.",
  },
  {
    number: "03",
    icon: "https://learnbay-s3.us-east-2.amazonaws.com/adlearnbay/Group+2905.webp",
    alt: "Project icon",
    title: "What kind of projects will I work on?",
    description:
      "You’ll build GenAI-powered apps, agentic workflows, RAG systems, and AI automation tools—the same tech startups are deploying in the real world today.",
  },
  {
    number: "04",
    icon: "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Group+2902.webp",
    alt: "Employers recognition icon",
    title: "Will these projects be recognized by employers?",
    description:
      "Yes. These are industry-recognized startup certifications. They highlight that you’ve worked on real AI applications and not just theoretical labs, making your profile stand out in hiring rounds.",
  },
];

const UnderstandingProcess = () => (
  <section className={styles.processSection}>
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.mainTitle}>How does it work?</h2>
        <p className={styles.subtitle}>
          Gain insights from AI visionaries. Our podcast shares lessons and
          predictions from leaders.
        </p>
      </div>

      <div className={styles.stepsStack}>
        {steps.map((step, idx) => {
          const isLeft = idx % 2 === 0; // left rows show arrow moving to the right

          return (
            <div
              key={idx}
              className={`${styles.stepRow} ${
                isLeft ? styles.left : styles.right
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

              {/* LONG, smooth curved connector like the reference (only on left rows, except last) */}
              {isLeft && idx < steps.length - 1 && (
                <div className={styles.arrow}>
                  <svg
                    className={styles.arrowSvg}
                    viewBox="0 0 420 180"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <defs>
                      {/* Smooth fade like your ref */}
                      <linearGradient
                        id="arrowStroke"
                        x1="0"
                        y1="0"
                        x2="420"
                        y2="180"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#4b4ae7" stopOpacity="0" />
                        <stop
                          offset="0.65"
                          stopColor="#4b4ae7"
                          stopOpacity="0.35"
                        />
                        <stop offset="1" stopColor="#4b4ae7" stopOpacity="1" />
                      </linearGradient>

                      {/* Crisp, correctly oriented arrowhead */}
                      <marker
                        id="arrowHead"
                        viewBox="0 0 10 10"
                        refX="10" /* X = tip of arrow */
                        refY="5" /* Y = middle of arrow */
                        markerWidth="12"
                        markerHeight="12"
                        orient="auto"
                        markerUnits="strokeWidth"
                      >
                        {/* <!-- Proper centered triangle --> */}
                        <polygon points="0,0 10,5 0,10" fill="#4b4ae7" />
                      </marker>
                    </defs>

                    {/* LONG, smooth cubic curve (tail left → head right) */}
                    <path
                      d="M4 34 C160 -40, 300 220, 404 138"
                      fill="none"
                      stroke="url(#arrowStroke)"
                      strokeWidth="3.25"
                      strokeLinecap="round"
                      markerEnd="url(#arrowHead)"
                    />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default UnderstandingProcess;
