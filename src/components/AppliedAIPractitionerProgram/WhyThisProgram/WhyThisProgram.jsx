import React from "react";
import style from "./WhyThisProgram.module.css";
const programData = [
  {
    id: 1,
    title: "Build Your Own AI Product",
    description:
      "Design, automate, and deploy your own AI-powered application using real industry workflows.",
  },
  {
    id: 2,
    title: "Learn 35+ Latest Tools and Technologies",
    description:
      "You don't just learn what these tools do; you learn how to apply them for real business problems across all domains.",
  },
  {
    id: 3,
    title: "Work on Real Startup Project",
    description:
      "Collaborate with AI startup teams on a live project, gaining hands-on experience in product building and business problem-solving.",
  },
];

// --- Components ---

const SectionHeader = ({ title, subtitle }) => (
  <div className={style.sectionHeader}>
    <h2 className={style.mainTitle}>{title}</h2>
    <p className={style.subTitle}>{subtitle}</p>
  </div>
);

const ProgramCard = ({ item }) => {
  return (
    <div className={style.cardOuter}>
      <div className={style.card}>
        <div className={style.cardTop}>
          <span className={style.cardNumber}>{item.id}</span>
          <h3 className={style.cardTitle}>{item.title}</h3>
        </div>
        <div className={style.cardBody}>
          <p className={style.cardText}>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className={style.programSectionWrapper}>
      <SectionHeader
        title="Why This Program"
        subtitle="Choose our platform for project-based programs"
      />

      <div className={style.cardsContainer}>
        {programData.map((item) => (
          <ProgramCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
