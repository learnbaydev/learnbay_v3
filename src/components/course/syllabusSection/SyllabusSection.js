import React, { useState } from "react";
import styles from "./SyllabusSection.module.css";
import Image from "next/image";

const SyllabusSection = ({ sections = [] }) => {
  // State to manage the currently open popup
  const [openPopupIndex, setOpenPopupIndex] = useState(null);

  // Function to toggle popup
  const togglePopup = (index) => {
    setOpenPopupIndex(openPopupIndex === index ? null : index);
  };

  // Return if sections is not an array or is empty
  if (!Array.isArray(sections) || sections.length === 0) {
    return <div>No sections available.</div>;
  }

  return (
    <div className={styles.mainConteiner}>
      <h2>Explore Our Syllabus</h2>
      {sections.map((section, index) => (
        <div key={index} className={styles.gridConteiner}>
          <div className={styles.gridleft}>
            <div className={styles.leftinside}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
              >
                <circle
                  cx="45"
                  cy="45"
                  r="44"
                  stroke="#0072BC"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              </svg>
              <h3>{section.title}</h3>
            </div>
          </div>

          <div className={styles.gridryt}>
            <div className={styles.rytmain}>
              <div className={styles.ryttop}>
                <p>{section.description}</p>
                <div className={styles.date}>
                  <p>{section.duration}</p>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.contentlist}>
                  <p className={styles.pline}>
                    <span className={styles.org}>
                      {section.contentModule}:{" "}
                    </span>
                    {section.contentDescription}
                  </p>
                  <ul className={styles.lists}>
                    {section.contentDetails.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  <div
                    className={styles.popupbtn}
                    onClick={() => togglePopup(index)}
                  >
                    Read more
                  </div>
                </div>

                <div className={styles.tools}>
                  <p>Tools and topics covered:</p>
                  <Image
                    src=""
                    width={100}
                    height={50}
                    alt="tools"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Popup Component */}
          {openPopupIndex === index && (
            <div className={styles.popupOverlay}>
              <div
                className={styles.closeBtn}
                onClick={() => togglePopup(index)}
              >
                X
              </div>
              <div className={styles.popupContent}>
                <div className={styles.popuptop}>
                  <h2 className={styles.h2}>{section.contentTitle}</h2>
                  <div className={styles.popupdate}>
                    <p>{section.duration}</p>
                  </div>
                </div>
                <div className={styles.popupPoints}>
                  <div className={styles.popupleft}>
                    <span className={styles.rotateText}>
                      {section.popupModule}
                    </span>
                  </div>

                  <div>
                    <p className={styles.listTitle}>{section.popupContent}</p>
                    <ul>
                      {section.popuplist.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.popupPoints}>
                  <div className={styles.popupleft}>
                    <span className={styles.rotateText}>
                      {section.popupModule}
                    </span>
                  </div>

                  <div>
                    <p className={styles.listTitle}>{section.popupContent}</p>
                    <ul>
                      {section.popuplist.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SyllabusSection;