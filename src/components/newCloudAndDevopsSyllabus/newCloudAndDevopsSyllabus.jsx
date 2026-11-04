// components/Syllabus.jsx
import styles from "./newCloudAndDevopsSyllabus.module.css";
// data/syllabus.js
export const SYLLABUS = [
  {
    id: 1,
    term: "Term 1",
    duration: "20 Hours",
    title: "Cloud Basics and Linux Fundamentals",
    description: "Linux fundamentals, commands, SSH and utilities",
  },
  {
    id: 2,
    term: "Term 2",
    duration: "25 Hours",
    title: "Python Programming Essentials",
    description: "Python for DevOps, pip, virtual environments",
  },
  {
    id: 3,
    term: "Term 3",
    duration: "20–25 Hours",
    title: "AWS Cloud Practitioner",
    description: "Essential AWS skills to build, secure and manage workloads",
  },
  {
    id: 4,
    term: "Term 4",
    duration: "30 Hours",
    title: "AWS Professional Solutions Architect",
    description: "Advanced AWS skills to plan, run and protect large setups",
  },
  {
    id: 5,
    term: "Term 3",
    duration: "20–25 Hours",
    title: "AWS Cloud Practitioner",
    description: "Essential AWS skills to build, secure and manage workloads",
  },
  {
    id: 6,
    term: "Term 4",
    duration: "30 Hours",
    title: "AWS Professional Solutions Architect",
    description: "Advanced AWS skills to plan, run and protect large setups",
  },
];

export default function Syllabus() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.list}>
        {SYLLABUS.map((item) => (
          <div key={item.id} className={styles.row}>
            {/* TIMELINE COLUMN */}
            <div className={styles.timelineCol}>
              <span className={styles.dot}>{item.id}</span>
              <span className={styles.line} />
            </div>

            {/* CONTENT */}
            <div className={styles.card}>
              <div className={styles.badges}>
                <span className={styles.term}>{item.term}</span>
                <span className={styles.duration}>
                  Duration: {item.duration}
                </span>
              </div>

              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
