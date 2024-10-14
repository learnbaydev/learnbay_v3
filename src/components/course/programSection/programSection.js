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
  mid,
  senoir,
  yearExp,
  to,
  PointOne,
  pointTwo,
  pointTwoIcon,
  PointOneIcon,
  rightImg,
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
          <h2>
            {" "}
            Who is this <span className={styles.topSpan}>program for ?</span>
          </h2>
          <div className={styles.twoSection}>
            <div className={styles.firstSection}>
              <h3>
                {mid} <span className={styles.lightGray}>{to}</span> {senoir}{" "}
                <span className={styles.lightGray}>
                  Level Professionals with
                </span>
                <span className={styles.orangeHead}> {yearExp}</span>
              </h3>
              <p className={styles.pTop}>
                This program is perfect for{" "}
                <span>
                  Business Analysts, Data Scientist, Consultant, Finance
                  Professional, Entrepreneurs, IT Professionals
                </span>
              </p>
              <div className={styles.innerBoxDiv}>
                <div className={styles.innerBox}>
                  <Image
                    src={PointOneIcon}
                    alt="Learnbay"
                    quality={100}
                    priority
                    width={40}
                    height={40}
                  />
                  <h3>{PointOne}</h3>
                </div>
                <div className={styles.innerBox}>
                  <Image
                    src={pointTwoIcon}
                    alt="Learnbay"
                    quality={100}
                    priority
                    width="50"
                    height="50"
                  />
                  <h3 className={styles.dShow}>{pointTwo}</h3>
                  <h3 className={styles.dHide}>Team Lead</h3>
                </div>
              </div>
              <p className={styles.pBot}>
                <span className={styles.orangeSpan}>Important Note:</span> This
                program is not for fresh graduates. You must have at least 4
                years of work experience and should have managed a team or
                project. To know more{" "}
                <span className={styles.blueSpan} onClick={popupShow}>
                  check eligibility
                </span>
              </p>
            </div>
            <div className={styles.secondSection}>
              <Image
                src={rightImg}
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
