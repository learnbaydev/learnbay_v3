import React from "react";
import style from "./WhyThisProgram.module.css";

const programData = [
  {
    id: 1,
    title: "Real-world AI Product",
    description:
      "Create and deploy your own AI-powered app or workflow using real industry methods.",
  },
  {
    id: 2,
    title: "Learn the tools top companies use",
    description:
      "Master the tools top teams use and learn exactly how to apply them to real business problems.",
  },
  {
    id: 3,
    title: "Work on real startup project",
    description:
      "With AI CoLab Experience work with AI startup and gain hands-on, portfolio-ready experience.",
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
  const renderTitle = () => {
    // Card 1: "Build real AI" / "products from scratch"
    if (item.id === 1) {
      return <>Real AI products</>;
    }
    // Card 2: "Learn the tools top" / "companies use"
    if (item.id === 2) {
      return (
        <>
          Learn the tools{" "}
          <span style={{ color: "#4ade80;", fontWeight: "700" }}>
            top
            <br />
            companies
          </span>{" "}
          use
        </>
      );
    }

    // Card 3: "Work on real startup" / "project"
    if (item.id === 3) {
      return (
        <>
          Real startup
          <br />
          projects.
        </>
      );
    }

    // Default (card 1)
    return item.title;
  };

  return (
    <div className={style.cardOuter}>
      <div className={style.card}>
        <div className={style.cardTop}>
          <span className={style.cardNumber}>{item.id}</span>
          <h3 className={style.cardTitle}>{renderTitle()}</h3>
        </div>
        <div className={style.cardBody}>
          <p className={style.cardText}>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default function WhyThisProgram() {
  return (
    <div className={style.programSectionWrapper}>
      <SectionHeader
        title="Why this program?"
        subtitle="Outcome-driven program designed for professionals"
      />

      <div className={style.cardsContainer}>
        {programData.map((item) => (
          <ProgramCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
