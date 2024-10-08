import Image from "next/image";
import styles from "./programSection.module.css";
import Popup from "../../Global/Popup/Popup";
import Form from "../../Global/Form/Form";
import { useState } from "react";

function ProgramSection({
  ProggramSectionData,
  designOverrides,  // Dynamic design (custom classes or styles)
  formProps,        // Props for the form component
  popupProps,       // Props for the popup component
  popupTitle,       // Popup title
  rightImg,         // Right side image for this section
}) {
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
          <Form {...formProps} />
        </div>
      </Popup>

      <div className="containerWidth">
        <div className={styles.innerDiv}>
          <h2>
            Who is this <span className={styles.topSpan}>program for?</span>
          </h2>

          <div className={styles.twoSection}>
            {ProggramSectionData.map((section, index) => {
              const { content, rightImg, popupTitle, formProps } = section;

              return (
                <div key={index} className={styles.firstSection}>
                  <h3>
                    {content?.mid || "Default Mid"}{" "}
                    <span className={styles.lightGray}>{content?.to || "Default To"}</span>{" "}
                    {content?.senior || "Default Senior"}{" "}
                    <span className={styles.lightGray}>Level Professionals with</span>{" "}
                    <span className={styles.orangeHead}>{content?.yearExp}</span>
                  </h3>
                  <p className={styles.pTop}>{content?.description}</p>

                  <div className={styles.innerBoxDiv}>
                    {content?.points?.map((point, index) => (
                      <div key={index} className={styles.innerBox}>
                        <Image
                          src={point.icon}
                          alt={point.title}
                          quality={100}
                          priority
                          width={40}
                          height={40}
                        />
                        <h3>{point.title}</h3>
                      </div>
                    ))}
                  </div>

                  <p className={styles.pBot}>
                    <span className={styles.orangeSpan}>Important Note:</span> {content?.importantNote}{" "}
                    <span className={styles.blueSpan} onClick={popupShow}>
                      check eligibility
                    </span>
                  </p>
                </div>
              );
            })}

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
