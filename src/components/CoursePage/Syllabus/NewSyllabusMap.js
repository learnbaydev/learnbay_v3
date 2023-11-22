import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import styles from "./Syllabus.module.css";

const NewSyllabusMap = ({ Syllabus }) => {
  const [mSyllabus, setMSyllabus] = useState(Syllabus);
  const handleChangeMobile = (index) => {
    setMSyllabus(
      mSyllabus.map((faq, i) => {
        if (i === index) {
          faq.Module0.open = !faq.Module0.open;
        } else {
          faq.Module0.open = false;
        }
        return faq;
      })
    );
  };
  return mSyllabus.map((data, i) => {
    const { Module0 } = data;

    return (
      <div key={`Module0.title${i + Module0.title + Math.random()}`}>
        <div
          className={styles.QOuter}
          key={`Module0.title${i + Module0.title + Math.random()}`}
        >
          <div
            className={styles.QInner}
            key={`Module0.title${i + Module0.title + Math.random()}`}
          >
            <div className={styles.line}></div>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = i;
                handleChangeMobile(id);
              }}
              key={Module0.title}
            >
              {Module0.open ? (
                <div className={styles.quesO}>
                  <h2>{Module0.title}</h2>

                  <span>
                    {Module0.open ? (
                      <FaChevronUp className="icon" />
                    ) : (
                      <FaChevronDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>{Module0.title}</h2>
                  <span>
                    {Module0.open ? (
                      <FaChevronUp className="icon" />
                    ) : (
                      <FaChevronDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {Module0.open ? (
                <div className={styles.ans}>
                  <p>{Module0.desc}</p>
                  {Module0.content.map((content, i) => {
                    return (
                      <div key={content.chap.title}>
                        <h5>{content.chap.title}</h5>
                        {content.chap.desc.map((desc, i) => {
                          return (
                            <div key={i}>
                              {desc === "" ? "" : <li key={desc}>{desc}</li>}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default NewSyllabusMap;
