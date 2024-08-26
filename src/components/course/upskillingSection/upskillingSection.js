import React from "react";
import styles from "./upskillingSection.module.css";
import Image from "next/image";
// import excel_icon from '../../../public/assets/excel-icon.png'
// import python_icon from '../../../public/assets/python-icon.png'
// import genai_icon from '../../../public/assets/genai-icon.png'

const upskillingSection = () => {
  return (
    <section className={styles.sectionWrapper}>
      <h2 className={styles.upskillHeading}>
        Journey towards <span className={styles.spanHead}>Upskilling</span>
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
            <span className={styles.textHead}>Use cases in:</span> BFSI,
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
            />
          </div>
        </div>
        <div className={styles.boxContainer}>
          <div className={styles.upperBox}>
            <h5>Term 2</h5>
            <p>6 Weeks</p>
          </div>
          <h4 className={styles.boxTitle}>
            Foundation for Data Science
            <br /> and Leadership
          </h4>
          <div className={styles.boxText}>
            <span className={styles.textHead}>Use cases in:</span> BFSI,
            Manufacturing, Retail,
            <br /> HR, Marketing, Sales, Healthcare
          </div>
          <div className={styles.toolBox}>
            <p>tool:</p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/py_gen_tool.webp"
              alt="icon"
              width={326}
              height={56}
              className={styles.toolPyIcon}
            />
          </div>
        </div>
        <div className={styles.boxContainer}>
          <div className={styles.upperBox}>
            <h5>Term 3</h5>
            <p>6 Weeks</p>
          </div>
          <h4 className={styles.boxTitle}>
            Foundation for Data Science
            <br /> and Leadership
          </h4>
          <div className={styles.boxText}>
            <span className={styles.textHead}>Use cases in:</span> BFSI,
            Manufacturing, Retail,
            <br /> HR, Marketing, Sales, Healthcare
          </div>
          <div className={styles.toolBox}>
            <p>tool:</p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/power_bi_tool.webp"
              alt="icon"
              width={156}
              height={47}
              className={styles.toolIcon}
            />
          </div>
        </div>
      </div>

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
            <span className={styles.textHead}>Use cases in:</span> BFSI,
            Manufacturing, Retail,
            <br /> HR, Marketing, Sales, Healthcare
          </p>
          <div className={styles.toolBox}>
            <p>tool:</p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/excel_yl_tool.webp"
              alt="icon"
              width={120}
              height={51}
              className={styles.toolIcon}
            />
          </div>
        </div>
        <div className={styles.boxContainer}>
          <div className={styles.upperBox}>
            <h5>Term 2</h5>
            <p>6 Weeks</p>
          </div>
          <h4 className={styles.boxTitle}>
            Foundation for Data Science
            <br /> and Leadership
          </h4>
          <div className={styles.boxText}>
            <span className={styles.textHead}>Use cases in:</span> BFSI,
            Manufacturing, Retail,
            <br /> HR, Marketing, Sales, Healthcare
          </div>
          <div className={styles.toolBox}>
            <p>tool:</p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/excel_yl_tool.webp"
              alt="icon"
              width={120}
              height={51}
              className={styles.toolIcon}
            />
          </div>
        </div>
        <div className={styles.boxContainer}>
          <div className={styles.upperBox}>
            <h5>Term 3</h5>
            <p>6 Weeks</p>
          </div>
          <h4 className={styles.boxTitle}>
            Foundation for Data Science
            <br /> and Leadership
          </h4>
          <div className={styles.boxText}>
            <span className={styles.textHead}>Use cases in:</span> BFSI,
            Manufacturing, Retail,
            <br /> HR, Marketing, Sales, Healthcare
          </div>
          <div className={styles.toolBox}>
            <p>tool:</p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/excel_yl_tool.webp"
              alt="icon"
              width={120}
              height={51}
              className={styles.toolIcon}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default upskillingSection;
