import PopupContent from "@/components/Global/PopupContent/PopupContent";
import Link from "next/link";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import Button from "../../Global/Button/Button";
import Form from "../../Global/Form/Form";
import NewSyllabusMap from "./NewSyllabusMap";
import styles from "./Syllabus.module.css";

function SyllabusNew({
  masterSyllabusMobile,
  dataScience,
  fullStack,
  titleCourse,
  brochureLink,
  buttonHide,
  dataScienceCounselling,
  interstedInHide,
}) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  return (
    <>
      <div id="curriculum" className={styles.containerDiv}>
        <PopupContent
          dataScience={dataScience}
          downloadBrochure
          titleCourse={titleCourse}
          brochureLink={brochureLink}
          interstedInHide={interstedInHide}
          upSkillingHide={true}
          popups={popups}
          setPopups={setPopups}
        heading="Download Brochure"
        />

        <div className={styles.project}>
          <h4 className={styles.h1}>Explore our Syllabus</h4>
          <p className={styles.ptop}>
            Curriculum is specifically engineered to meet the expectations of
            leading tech companies
          </p>
        </div>

        <section className={styles.Syllabus}>
          <div className={styles.syllabusLeft}>
            <NewSyllabusMap Syllabus={masterSyllabusMobile} />
          </div>
          <div className={styles.button}>
            <div className={styles.formWrapper}>
              <div className={styles.boxDiv}>
                <div className={styles.formBox}>
                  {" "}
                  <FaRegUser className={styles.iconUser} /> 7,568 people filled
                </div>
              </div>
              <h4>
                Interested in <span>Master’s Degree?</span>
              </h4>
              <Form
                dataScienceCounselling={dataScienceCounselling}
                interstedInHide={interstedInHide}
                titleCourse={titleCourse}
                brochureLink={brochureLink}
                fullStack={fullStack}
                syllabus={true}
                upSkillingHide={true}
              />
            </div>
          </div>
        </section>
        <div className={styles.buttonDiv}>
          {buttonHide ? (
            ""
          ) : (
            <Link href="/master-application">
              <div>
                <Button
                  bannerButton={true}
                  text="START YOUR APPLICATION"
                  // passIcon={<FaDownload style={{ marginLeft: "10px" }} />}
                />
              </div>
            </Link>
          )}
          <div onClick={popupShow}>
            <Button
              nobannerButton={true}
              text="DOWNLOAD BROCHURE"
              // passIcon={<FaDownload style={{ marginLeft: "10px" }} />}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SyllabusNew;
