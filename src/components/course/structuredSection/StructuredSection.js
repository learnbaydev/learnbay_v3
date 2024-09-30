import React from "react";
import styles from "./structuredSection.module.css";
import Image from "next/image";
import { BsPatchCheckFill } from "react-icons/bs";

function StructuredSection() {
  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <h2 className={styles.headH4}>Structured Admission Process</h2>
        <div className={styles.topDiv}>
        <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/Coursepage/line_247.webp"
              alt="Learnbay"
              width="698"
              height="93"
            />
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/Coursepage/line_247.webp"
              alt="Learnbay"
              width="698"
              height="93"
            />
        </div>
        <div className={styles.innerdiv}>
          <div className={styles.innerbox}>
            <p className={styles.bgBlue}><span>1</span></p>
            <h4>Application Submission</h4>
            <p>
              Share your professional background and aspirations with us by
              filling out a simple application form.
            </p>
          </div>
          <div className={styles.innerbox}>
          <p className={styles.bgBlue}><span>2</span></p>
            <h4>Application Evaluation</h4>
            <p>
              Our admissions team will review your application, assessing your
              experience and goals to ensure the program fits your career
              objectives.
            </p>
          </div>
          <div className={styles.innerbox}>
          <BsPatchCheckFill className={styles.icons} />
            <h4>Start Learning</h4>
            <p>
              Once selected, you'll receive confirmation and onboarding support
              to quickly start your learning journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StructuredSection;
