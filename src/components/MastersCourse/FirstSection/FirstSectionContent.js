import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./FirstSection.module.css";
import Button from "@/components/Global/Button/Button";
import Form from "@/components/Global/Form/Form";

const FirstSectionContent = ({
  setPopups,
  fullStack,
  dataScienceCounselling,
  interstedInHide,
}) => {
  const popupShow = () => {
    setPopups(true);
  };
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 641) {
      setMobile(true);
    }
  }, []);

  return (
    <section className={styles.container}>
      <div className="bgWrap">
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/masterPage/newmaster-web.webp"
          fill
          priority
          alt="Master program by learnbay"
        />
      </div>
      {mobile ? (
        <>
          <span className={styles.topSpan}>Learnbay Excelvarsity</span>
          <div className={styles.DivContent}>
            <h1 className={styles.h1}>
              Masters in Computer Science:
              <br />
              <span style={{ color: "#F99600" }}>Data Science and AI</span>
            </h1>
          </div>
          <div className={styles.paraCollab}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/woolf-univer.webp"
              alt="woolf-university"
              priority
              width="180"
              height="20"
            />
          </div>
          <div className={styles.boxDivGreen}>
            <p className={styles.special}>SPECIALIZATION IN</p>
            <div className={styles.iconPara}>
              <p className={styles.boxGreen}>Data Science & Analytics</p>
              <p className={styles.boxGreen}>Artificial Intelligence & ML</p>
            </div>
          </div>
          <div className={styles.FormDiv}>
            <p className={styles.NormalPForm}>
              Interested in{" "}
              <span className={styles.span}>Master’s Degree?</span>
            </p>
            <Form
              dataScienceCounselling={dataScienceCounselling}
              fullStack={fullStack}
              syllabus={true}
              upSkillingHide={true}
              interstedInHide={interstedInHide}
            />
          </div>
        </>
      ) : (
        <>
          <div className={styles.DivContent}>
            <div className={styles.firstDiv}>
              <p className={styles.ptopC}>Learnbay Excelvarsity</p>
              <h1 className={styles.h1}>
                Master's in Computer Science:
                <br />
                <span style={{ color: "#F99600" }}>Data Science and AI</span>
              </h1>
              <div className={styles.paraCollab}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/woolf-univer.webp"
                  alt="woolf-university"
                  priority
                  width="268"
                  height="28"
                />
              </div>
              <div className={styles.boxDivGreen}>
                <p className={styles.special}>SPECIALIZATION IN</p>
                <div className={styles.iconPara}>
                  <p className={styles.boxGreen}>Data Science & Analytics</p>
                  <p className={styles.boxGreen}>
                    Artificial Intelligence & ML
                  </p>
                </div>
              </div>
              <div className={styles.BtnDiv}>
                <div onClick={() => popupShow()}>
                  <Button bannerButton={true} text="DOWNLOAD BROCHURE" />
                </div>

                <a href="/master-application">
                  <Button whiteBgButton={true} text="START YOUR APPLICATION" />
                </a>
              </div>
            </div>
            <div className={styles.FormDiv}>
              {/* <div className={styles.boxDiv}>
            <div className={styles.formBox}>
              {" "}
              <FaRegUser className={styles.iconUser} /> 7,568 people filled
            </div>
          </div> */}
              <h4>
                Interested in <span>Master’s Degree?</span>
              </h4>
              <Form
                dataScienceCounselling={dataScienceCounselling}
                fullStack={fullStack}
                syllabus={true}
                upSkillingHide={true}
                interstedInHide={interstedInHide}
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default FirstSectionContent;