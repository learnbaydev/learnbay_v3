import React from "react";
import styles from "./NewCourse.module.css";
import Image from "next/image";
const NewCourse = () => {
  return (
    <section className={styles.section}>
      <div className={styles.conteiner}>
        <div className={styles.tabMain}>
          <div className={styles.tabdiv}>
            <p>All Courses</p>
          </div>

          <div className={styles.tabdiv}>
            <p>Domain Courses</p>
          </div>

          <div className={styles.tabdiv}>
            <p>Data Science</p>
          </div>

          <div className={styles.tabdiv}>
            <p>Master's Degree</p>
          </div>

          <div className={styles.tabdiv}>
            <p>Cloud & Devops</p>
          </div>
        </div>


        <div className={styles.CourseCardHead}>



            <div className={styles.courseCard}>
<Image src="" width={200} height={100} alt="data Science Course card" loading="lazy"/>

<div className={styles.cardContent}>

    <h3>
    Data Science and AI Master Certification Program
    </h3>
    <div className={styles.lists}>
        <span>13 months</span>
        <span>Project Certification form IBM</span>
        <span>Project Certification form IBM</span>
    </div>

    <div className={styles.buttons}>
        <button>
        Brochure
        </button>
        <button>
        View Details
        </button>
    </div>
</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default NewCourse;
