import React from "react";
import styles from "./DecisionSection.module.css";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import Form from "@/components/Global/Form/Form";

function DecisionSection() {
  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <div className={styles.innerDiv}>
          <div className={styles.firstSection}>
            <span>
              <FaRegUser className={styles.icon} /> 7,568 people filled
            </span>
            <div className={styles.formSection}>
              <h3>
                Interested in <span>Degree?</span>
              </h3>
              <Form
                dataScienceCounselling={true}
                upSkillingHide={true}
                interstedInHide={true}
              />
            </div>
          </div>
          <div className={styles.secondSection}>
            <h2>
              <span>Lead with Data</span>: AI for Decision Makers
            </h2>
            <div className={styles.innerBoxDiv}>
              <div className={styles.innerBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/campus_d.webp"
                  alt="Learnbay"
                  quality={100}
                  priority
                  width="50"
                  height="50"
                />
                <h3>Campus Immersion @IIT</h3>
                <p>
                  Turn AI insights into business strategies for competitive
                  edge.
                </p>
              </div>
              <div className={styles.innerBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/certificate_d.webp"
                  alt="Learnbay"
                  quality={100}
                  priority
                  width="50"
                  height="50"
                />
                <h3>Certification from IIT</h3>
                <p>Get Add-on Certificate from</p>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/ibm_microsoft_combined.webp"
                  alt="Learnbay"
                  quality={100}
                  priority
                  width="200"
                  height="50"
                  style={{ marginTop: "10px" }}
                />
              </div>
              <div className={styles.innerBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/eligible_d.webp"
                  alt="Learnbay"
                  quality={100}
                  priority
                  width="50"
                  height="50"
                />
                <h3>Eligibility</h3>
                <p>
                  Turn AI insights into business strategies for competitive
                  edge.
                </p>
              </div>
              <div className={styles.innerBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/faculty_d.webp"
                  alt="Learnbay"
                  quality={100}
                  priority
                  width="60"
                  height="60"
                />
                <h3>Faculty</h3>
                <p>
                  Turn AI insights into business strategies for competitive
                  edge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DecisionSection;
