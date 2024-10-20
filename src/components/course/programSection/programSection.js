import Image from "next/image";
import styles from "./programSection.module.css";
import Popup from "../../Global/Popup/Popup";
import Form from "../../Global/Form/Form";
import { useState, memo } from "react";

const ProgramSection = memo(({
  ProggramSectionData,
  designOverrides,
  formProps,
  popupProps,
  popupTitle,
  radio,
  dataScience,
  dataScienceCounselling,
  interstedInHide,
}) => {
  const [popups, setPopups] = useState(false);
  const popupShow = () => setPopups(true);

  return (
    <section
      className={`${styles.container} ${designOverrides?.container || ""}`}
      style={designOverrides?.containerStyle}
    >
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        popup={true}
        {...popupProps}
      >
        <div className="leftPopup">
          <div className="whiteP" style={{ width: "340px", height: "400px" }}></div>
        </div>
        <div className="RightPopup">
          <h5>{popupTitle || "Apply For Counselling"}</h5>
          <Form
            popup={true}
            setTrigger={setPopups}
            radio={radio}

            dataScience={dataScience}
            dataScienceCounselling={dataScienceCounselling}
            upSkillingHide={true}
            interstedInHide={interstedInHide}
          />
        </div>
      </Popup>

      <div className="containerWidth">
        <div className={styles.innerDiv}>
          <h2>
            Who is this program for?
            <hr className={styles.hrline} />
          </h2>
          <p className={styles.pHead}>
            Work on projects based on real-world scenarios
          </p>
          <div className={styles.twoSection}>
            {ProggramSectionData.map((section, index) => {
              const { content } = section;

              return (
                <div key={index} className={styles.firstSection}>
                  <h3 className={styles.H3}>
                    <span className={styles.blackSpan}>{content.BoldText} </span>
                    {content.nonBold} 
                    <span className={styles.colors}> {content.yearExp}</span>
                  </h3>
                  <p className={styles.pTop}>
                    {content.description
                      .split("not mandatory")
                      .map((segment, index, array) => (
                        <span key={index}>
                          {segment}
                          {index < array.length - 1 && (
                            <span className={styles.green}>not mandatory</span>
                          )}
                        </span>
                      ))}
                  </p>

                  <div className={styles.innerBoxDiv}>
                    {content?.points?.map((point, index) => (
                      <div key={index} className={styles.innerBox}>
                     <div>   <Image
                          src={point.icon}
                          alt={point.title}
                          quality={100}
                          layout="responsive" 
                          width={40} 
                          height={40}
                          loading="lazy" 
                        />
                        </div>
                        <h3>{point.title}</h3>
                      </div>
                    ))}
                  </div>

                  <p className={styles.pBot}>
                    <span className={styles.orangeSpan}>Important Note:</span>
                    {content.importantNote}
                     
                     <span className={styles.blueSpan} onClick={popupShow}>
                      {""}  check eligibility
                    </span>
                  </p>
                </div>
              );
            })}

            <div className={styles.secondSection}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/ryt_programImg+(2).webp"
                alt="Learnbay"
                quality={100}
                layout="responsive"
                width={611} // Maintain aspect ratio
                height={506}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ProgramSection;
