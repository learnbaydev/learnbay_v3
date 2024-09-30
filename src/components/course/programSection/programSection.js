import Image from "next/image";
import styles from "./programSection.module.css";
import Popup from "../../Global/Popup/Popup";
import Form from "../../Global/Form/Form";
import { useState } from "react";

function ProgramSection({
  dataScience,
  dataScienceCounselling,
  interstedInHide,
  titleCourse,
  brochureLink,
  formotp,
  ADS,
  adPage,
  HideInterest,
  OS,
  DomainInput,
  upSkillingHide,
}) {

  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <section className={styles.container}>
            <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        popup={true}
        // radio={radio}
        dataScience={dataScience}
        dataScienceCounselling={dataScienceCounselling}
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "340px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
        <Form
dataScienceCounselling={dataScienceCounselling}
upSkillingHide={upSkillingHide}
interstedInHide={interstedInHide}
        />
        </div>
      </Popup>
      <div className="containerWidth">
        <div className={styles.innerDiv}>
          <h2> Who is this <span className={styles.topSpan}>program for ?</span></h2>
          <div className={styles.twoSection}>
            <div className={styles.firstSection}>
              <h3>
                Mid <span className={styles.lightGray}>to</span> Senior <span className={styles.lightGray}>Level 
                Professionals with</span><span className={styles.orangeHead}> 4+
                Years of Experience</span>
              </h3>
              <p className={styles.pTop}>
              This program is perfect for <span>Business Analysts, Data Scientist, Consultant, Finance Professional, Entrepreneurs, IT Professionals</span>
              </p>
              <div className={styles.innerBoxDiv}>
                <div className={styles.innerBox}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/project_ma.webp"
                    alt="Learnbay"
                    quality={100}
                    priority
                    width="40"
                    height="40"
                  />
                  <h3>Project Manager</h3>
                </div>
                <div className={styles.innerBox}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/eligible_de.webp"
                    alt="Learnbay"
                    quality={100}
                    priority
                    width="50"
                    height="50"
                  />
                  <h3 className={styles.dShow}>Tech Lead(IT/Non-IT)</h3>
                  <h3 className={styles.dHide}>Team Lead</h3>
                </div>
              </div>
              <p className={styles.pBot}>
                <span className={styles.orangeSpan}>Important Note:</span> This program is not for fresh graduates. You must have at least 4 years of work experience and should have managed a team or project. To know more{" "}
                <span className={styles.blueSpan} onClick={popupShow}>check eligibility</span>
              </p>
            </div>
            <div className={styles.secondSection}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/program_right_side.webp"
                alt="Learnbay"
                quality={100}
                priority
                width="611"
                height="506"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramSection;
