import React from "react";
import styles from "./upskillingSection.module.css";
import Image from "next/image";

const UpskillingSection = () => {
  return (
    <section className={styles.sectionWrapper}>
      <h2 className={styles.upskillHeading}>
        Journey towards<span className={styles.spanHead}>&nbsp;Upskilling</span>
      </h2>
      <div className={styles.UpperBoxContainer}>
        <div className={styles.boxContainer}>
          <div className={styles.upperBox}>
            <h5>Term 1</h5>
            <p>6 Weeks</p>
          </div>
          <h4 className={styles.boxTitle}>
            Foundation for Data Science <br /> and Leadership
          </h4>
          <p className={styles.boxText}>
            <span className={styles.textHead}>Use cases in:</span> BFSI,
            Manufacturing, Retail,
            <br /> HR, Marketing, Sales, Healthcare
          </p>
          <div className={styles.toolBox}>
            <p>tool:</p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/excel_tool.webp"
              alt="icon"
              width={122}
              height={69}
              className={styles.toolIcon}
              loading="lazy"
            />
          </div>
        </div>

        <div className={styles.svgLine}>
          <svg height="190" width="300" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50 L200 50 Q250 50 250 100 L250 200" stroke="white" strokeWidth="4" strokeDasharray="8, 5" fill="none" />
          </svg>
        </div>

        <div className={styles.boxContainer}>
          <div className={styles.upperBox}>
            <h5>Term 2</h5>
            <p>6 Weeks</p>
          </div>
          <h4 className={styles.boxTitle}>
            Technical Skills for
            <br /> Data Science
          </h4>
          <p className={styles.boxText}>
            <span className={styles.textHead}>Use cases in:</span> Data Analysis Using Numpy
            <br /> Data Visualization Using Matplotlib
          </p>
          <div className={styles.toolBox}>
            <p>tool:</p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/py_gen_tool.webp"
              alt="icon"
              width={326}
              height={56}
              className={styles.toolPyIcon}
              loading="lazy"
            />
          </div>
        </div>


        <div className={styles.boxContainer}>
          <div className={styles.upperBox}>
            <h5>Term 3</h5>
            <p>6 Weeks</p>
          </div>
          <h4 className={styles.boxTitle}>
            SQL, Tableau, Power BI,
            <br /> and Big Data
          </h4>
          <p className={styles.boxText}>
            <span className={styles.textHead}>Use cases in:</span> Introduction to Big Data
            <br />Core Technologies in Big Data
          </p>
          <div className={styles.toolBox}>
            <p>tool:</p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/power_bi_tool.webp"
              alt="icon"
              width={156}
              height={47}
              className={styles.toolIcon}
              loading="lazy"
            />
          </div>
        </div>

        <div className={styles.svgLine}>
          <svg height="190" width="300" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50 L200 50 Q250 50 250 100 L250 200" stroke="white" strokeWidth="4" strokeDasharray="8, 5" fill="none" />
          </svg>
        </div>

        <div className={styles.boxContainer}>
          <div className={styles.upperBox}>
            <h5>Term 4</h5>
            <p>6 Weeks</p>
          </div>
          <h4 className={styles.boxTitle}>
            AI TOOLS
          </h4>
          <p className={styles.boxText}>
            <span className={styles.textHead}>Domain expertise will be covered this term, along with the opportunity to select 2 capstone projects from the following domains: BFSI, Manufacturing, Retail, HR, Marketing, Sales, and Healthcare.</span>
          </p>
          <div className={styles.toolBox}>
            <p>tool:</p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/excel_yl_tool.webp"
              alt="icon"
              width={120}
              height={51}
              className={styles.toolIcon}
              loading="lazy"
            />
          </div>
        </div>

        <div className={styles.svgLine}>
        
        </div>

        <div className={styles.boxContainer}>
          <div className={`${styles.upperBox} ${styles.bonus}`}>
            <h5>Bonus</h5>
            <p>6 Weeks</p>
          </div>
          <h4 className={styles.boxTitle}>
            Domain + 2 Capstone Projects
          </h4>
          <p className={styles.boxText}>
            <span className={styles.textHead}>
              This term covers AI for Leaders, delving deeply into Deep Learning, NLP, Deployment, and Project Management.
            </span>
          </p>
          <div className={styles.toolBox}>
            <p>tool:</p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/excel_yl_tool.webp"
              alt="icon"
              width={120}
              height={51}
              className={styles.toolIcon}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpskillingSection;
