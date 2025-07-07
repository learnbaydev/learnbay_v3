import React from "react";
import styles from "./HighlightsSection.module.css";
import Image from "next/image";
import highlightsData from "./highlightsData";
import { useState } from "react";
import dynamic from "next/dynamic";
const Popup = dynamic(() => import("@/components/Global/Popup/Popup"));
const FormCareer = dynamic(() =>
  import("@/components/Global/CareerPortal/Form/Form")
);
const Button = dynamic(() => import("@/components/Global/Button/Button"));
const Form = dynamic(() => import("@/components/Global/Form/Form"));
const HighlightsSection = ({
  careerForm,
  radio,
  fullStack,
  dataScience,
  dataScienceGeneric,
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
            className={styles.box}
            style={{
              background: item.bg,
              borderColor: item.border,
              boxShadow: `0px 4px 30px 1px ${item.shadow}`,
            }}
          >
            <div className={styles.contentWrapper}>
              <div className={styles.left}>
                <div
                  className={styles.top}
                  style={{
                    borderColor: item.tagColor,
                    background: `${item.tagColor}33`,
                  }}
                >
                  <span style={{ color: item.tagColor }}>{item.tag}</span>
                </div>
                <h5 className={styles.h5} style={{ color: item.headingColor }}>
                  {item.heading}
                </h5>
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

              <div
                className={styles.right}
                style={{ top: `${item.top}px`, right: `${item.right}px` }}
              >
                <Image
                  src={item.image}
                  alt="highlight-img"
                  width={item.width}
                  height={item.height}
                  style={{ objectFit: "contain" }}
                  loading="lazy"
                />
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
          {/* <p>Fill the below details to get started</p> */}
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

export default HighlightsSection;
