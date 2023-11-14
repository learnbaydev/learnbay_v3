import React from "react";
import styles from "./ContactUs.module.css";
import FormInline from "../../Global/FormSection/FormInline";
import Image from "next/image";

function ContactUs({ dataScience, dataScienceCounselling, radio }) {
  // console.log("Contact us");
  return (
    <section className={styles.ContactUs}>
      <div className={styles.LeftSide}>
        <h1 className={styles.h1}>
          Get Ahead with Industry-Leading Courses <br />
        </h1>

        <div className={styles.conpara}>
          <p>
            <span className={styles.paraspan}>“</span>
            <br />I had a great learning experience at Learnbay. The faculties
            here are top notch. Right from enrollment to getting a good job,
            they keep putting enormous efforts for each and every candidate.
            Thanks to all the trainers, backend team, the HR team and to the
            directors for making this journey smooth.
          </p>
        </div>

        <div className={styles.leftpaerson}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/preksha-home.png"
            width={50}
            height={50}
          />

          <p>
            Preksha Mishra
            <br />
            <span>Working at HCL</span>
          </p>
        </div>
      </div>

      <div className={styles.RightSide}>
        <p className={styles.NormalPForm}>
          Apply for <span className={styles.span}>Career Counselling</span>
        </p>
        <FormInline
          dataScience={dataScience}
          dataScienceCounselling={dataScienceCounselling}
          radio={radio}
          upSkillingHide={true}
        />
      </div>
    </section>
  );
}

export default ContactUs;
