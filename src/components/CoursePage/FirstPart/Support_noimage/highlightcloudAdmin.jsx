import React from "react";
import styles from "./HighlightsAdminSection.module.css";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
const Popup = dynamic(() => import("@/components/Global/Popup/Popup"));
const FormCareer = dynamic(() =>
  import("@/components/Global/CareerPortal/Form/Form")
);
const Button = dynamic(() => import("@/components/Global/Button/Button"));
const Form = dynamic(() => import("@/components/Global/Form/Form"));

const HighlightsAdminSection = ({
  careerForm,
  radio,
  fullStack,
  dataScience,
  dataScienceGeneric,
  highlightsData,
}) => {
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.main}>
      <div className={styles.titleDiv}>
        <p>Support that matters</p>
        <h4>
          From Day One to Dream Role—
          <span className={styles.colors}>We’re with you</span>
        </h4>
      </div>

      <div className={styles.container}>
        {highlightsData.map((item, index) => (
          <div
            key={index}
            className={styles.highlightBox}
            style={{
              background: item.bg,
              borderColor: item.border,
              boxShadow: `0px 4px 30px 1px ${item.shadow}`,
            }}
          >
            <div className={styles.contentWrapper}>
              <div className={styles.left}>
                <div
                  style={{
                    display: "Flex",
                    justifyContent: "space-between",
                    // alignItems: "center",
                  }}
                >
                  <div
                    className={styles.top}
                    style={{
                      borderColor: item.tagColor,
                      background: `${item.tagColor}33`,
                    }}
                  >
                    <div style={{ color: item.tagColor }}>{item.tag}</div>
                  </div>
                  <div
                    style={{
                      backgroundColor: item.headingColor,
                      color: "#fff",
                      fontWeight: 600,
                      borderRadius: "20px",
                      padding: "6px 15px",
                      fontSize: "15px",
                      whiteSpace: "nowrap",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "40px",
                    }}
                  >
                    {item.duaration}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "15px",
                  }}
                >
                  <div>
                    <h5
                      className={styles.h5}
                      style={{
                        color: item.headingColor,
                        margin: 0,
                        lineHeight: "1.2",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.heading}
                    </h5>
                  </div>
                </div>
                <p
                  className={styles.desc}
                  style={{
                    color: item.descColor,
                    maxWidth: item.descWidth ? `${item.descWidth}px` : "100%",
                  }}
                >
                  {item.description.split(" ").map((word, i) =>
                    word.includes("product-based") ||
                    word.includes("real-world") ||
                    word.includes("sharpen") ||
                    word.includes("enterprise") ||
                    word.includes("automating cloud workflows") ||
                    word.includes("AI pipelines") ||
                    word.includes("hiring") ? (
                      <span key={i} className={styles.dark}>
                        {word + " "}
                      </span>
                    ) : (
                      word + " "
                    )
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          {careerForm ? (
            <FormCareer />
          ) : (
            <Form
              popup={true}
              setTrigger={setPopups}
              radio={radio}
              fullStack={true}
              dataScience={dataScience}
              dataScienceGeneric={dataScienceGeneric}
              dataScienceCounselling={true}
              upSkillingHide={true}
              interstedInHide={true}
            />
          )}
        </div>
      </Popup>
      <div className={styles.applyButton} onClick={popupShow}>
        <Button text="Start Your Application" outline={true} />
      </div>
    </div>
  );
};

export default HighlightsAdminSection;
