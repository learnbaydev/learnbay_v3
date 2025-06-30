// components/HighlightsSection.jsx
import React from "react";
import styles from "./HighlightsSection.module.css";

const highlights = [
  {
    titleTag: "TOP COMPANIES",
    title: "EXPLORE 350+ HIRING PARTNERS",
    description:
      "Set your preferences and unlock access to top tech and product-based companies hiring across domains.",
    image: "/images/companies.png", // replace with your image path
    className: styles.orangeBox,
  },
  {
    titleTag: "DOMAIN TRACKS",
    title: "Specialize in the Industry You Want",
    description:
      "Choose from BFSI, Healthcare, Retail, HR, and more. Build expertise that matches your career goals.",
    image: "/images/domain.png",
    className: styles.greenBox,
  },
  {
    titleTag: "GENAI + AGENTIC AI",
    title: "BUILD WITH LANGCHAIN, RAG & AUTOGPT",
    description:
      "Work hands-on with cutting-edge GenAI tools and frameworks used in real-world enterprise applications.",
    image: "/images/genai.png",
    className: styles.blueBox,
  },
  {
    titleTag: "MOCK INTERVIEWS",
    title: "GET READY WITH REAL TIME FEEDBACK",
    description:
      "Practice with mentors from top firms and receive actionable insights to sharpen your interview skills.",
    image: "/images/mock.png",
    className: styles.purpleBox,
  },
];

const HighlightsSection = () => {
  return (
    <div className={styles.grid}>
      {highlights.map((item, i) => (
        <div key={i} className={`${styles.box} ${item.className}`}>
          <div className={styles.text}>
            <span className={styles.tag}>{item.titleTag}</span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
          <img src={item.image} alt={item.titleTag} className={styles.image} />
        </div>
      ))}
    </div>
  );
};

export default HighlightsSection;
