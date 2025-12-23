import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import styles from "./Syllabus.module.css";
import Image from "next/image";

const NewSyllabusMap = ({ masterSyllabusMobile, onlyGENAIPage }) => {
  const [mSyllabus, setMSyllabus] = useState(masterSyllabusMobile);

  const handleChangeMobile = (index) => {
    const updatedSyllabus = mSyllabus.map((item, i) => {
      const moduleKey = Object.keys(item)[0];
      const moduleData = item[moduleKey];

      if (i === index) {
        moduleData.open = !moduleData.open;
        if (moduleData.open) {
          trackTabExpansion(moduleData.title);
        }
      } else {
        moduleData.open = false;
      }

      return item;
    });

    setMSyllabus([...updatedSyllabus]);
  };

  const trackTabExpansion = (moduleTitle) => {
    console.log(`Module "${moduleTitle}" expanded`);
  };

  return mSyllabus.map((data, i) => {
    const moduleKey = Object.keys(data)[0];
    const Module = data[moduleKey]; // 👈 dynamic module

    if (!Module) return null;

    return (
      <div className={styles.maindiv} key={`module-${i}`}>
        {/* Image */}
        <div>
          {!Module.open ? (
            <Image
              src={Module.imageUrl}
              alt={`Module ${i + 1}`}
              className={styles.moduleImage}
              width={80}
              height={80}
            />
          ) : (
            <div className={styles.trackimgStrt}>
              <Image
                src={Module.StartImageUrl}
                alt={`Module ${i + 1}`}
                className={styles.moduleImage}
                width={80}
                height={80}
              />
            </div>
          )}
        </div>

        {/* Module Content */}
        <div className={`${styles.QOuter} ${Module.open ? styles.open : ""}`}>
          <div className={styles.QInner}>
            <div className={styles.line}></div>

            <div
              className={styles.FaqWrapper}
              onClick={() => handleChangeMobile(i)}
            >
              <div
                className={
                  onlyGENAIPage
                    ? `${styles.GenAIQues} ${
                        Module.open ? styles.quesO : styles.ques
                      }`
                    : Module.open
                    ? styles.quesO
                    : styles.ques
                }
              >
                <div
                  className={`${styles.pointsdiv} ${
                    onlyGENAIPage ? styles.pointsdivGEnAI : ""
                  }`}
                >
                  <h2>{Module.title}</h2>
                </div>

                {onlyGENAIPage && (
                  <span className={styles.hoursSpan}>{Module.hours}</span>
                )}

                <span>{Module.open ? <FaChevronUp /> : <FaChevronDown />}</span>
              </div>

              {Module.open && (
                <div className={styles.ans}>
                  {Module.content.map((content, j) => (
                    <div key={`content-${j}`}>
                      {content.chap.section && <h5>{content.chap.section}</h5>}
                      <h5>{content.chap.title}</h5>

                      {content.chap.desc.map((desc, k) => (
                        <li key={`desc-${k}`}>{desc}</li>
                      ))}

                      {content.chap.note && (
                        <p className={styles.note}>{content.chap.note}</p>
                      )}
                    </div>
                  ))}

                  <div className={styles.trackimgend}>
                    <Image
                      src={Module.endImageUrl}
                      alt={`Module ${i + 1}`}
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default NewSyllabusMap;
