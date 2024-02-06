import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "./ProjectSection.module.css";
import { BsBank } from "react-icons/bs";
import { FaClinicMedical } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import Image from "next/image";
import { FaCheckCircle, FaDownload } from "react-icons/fa";
import Button from "@/components/Global/Button/Button";
const VideoPopup = dynamic(() => import("../../Global/VideoPopup/VideoPopup"));
import Link from "next/link";
import Popup from "../../Global/Popup/Popup";
import Form from "../../Global/Form/Form";

const ProjectContent = ({ 
  dataScience,
  radio,
  dataScienceGeneric,
  dataScienceCounselling,
  interstedInHide,
  HideDmd,
 }) => {
  const [popups, setPopups] = useState(false);
  const el = useRef(null);
  const [video, setVideo] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };

  return (
    <>
      <h4 className={styles.h4}>
        Work on Real Project with Learnbay’s{" "}
        <span className={styles.span}>ProjectLab</span>
      </h4>
      <div className={styles.box}>
      <Popup
          trigger={popups}
          setTrigger={setPopups}
          className="popupModal"
          popup={true}
          radio={radio}
          dataScience={dataScience}
          dataScienceGeneric={dataScienceGeneric}
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
              dataScience={dataScience}
              upSkillingHide={true}
              dataScienceGeneric={dataScienceGeneric}
              dataScienceCounselling={dataScienceCounselling}
              radio={radio}
  interstedInHide={interstedInHide}
            />
          </div>
        </Popup>
       
        <div className={styles.InnerBox1}>
          <div className="imgWrapper">
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/project-innovation.webp"
              loading="lazy"
              quality={40}
              width="358"
              height="212"
              alt="profile-Img"
              onClick={() => videoSHow()}
            />
          </div>
          <p className={styles.BlueHed}>Project Innovation Lab</p>
          <div className={styles.iconPara}>
            <p className={styles.para}>
              <FaCheckCircle className={styles.greenIcon} />
              Work in an industry like environment and gain practical hands-on
              experience
            </p>
            <p className={styles.para}>
              <FaCheckCircle className={styles.greenIcon} />
              Gain the work experience of data scientist with dedicated project
              mentors from industry.
            </p>
            <p className={styles.para}>
              <FaCheckCircle className={styles.greenIcon} />
              Build project portfolio with domain specific capstone projects
            </p>
          </div>
        </div>
        <div className={styles.InnerBox2}>
          <div className="imgWrapper">
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/Project-Certification.webp"
              loading="lazy"
              quality={40}
              width="358"
              height="212"
              alt="profile-Img"
              onClick={() => videoSHow()}
            />
          </div>
          <p className={styles.BlueHed}>Project Certification from IBM</p>
          <div className={styles.iconPara}>
            <p className={styles.para}>
              <FaCheckCircle className={styles.greenIcon} />
              Gain real proof of hands-on experience by having your project
              certified by the industry
            </p>
            <p className={styles.para}>
              <FaCheckCircle className={styles.greenIcon} />
              Make your past experiences count with domain specialisation and
              Project certification
            </p>
          </div>
        </div>
      </div>
      {HideDmd ? ("") : (
      <div className={styles.secondDiv}>
        <div className={styles.firstDiv}>
          <p className={styles.BlueHed}>Domain Specialization</p>
          <p className={styles.para}>
            With domain specialization, we help you in leveraging your prior
            work experience to ensure its relevance in your career transition,
            aiming to get a good salary hike for you.
          </p>
          <div className={styles.iconBoxDesktop}>
            <div className={styles.iconBox}>
              <div className={styles.BoxIconinner}>
                <BsBank className={styles.icon} />

                <p>BFSI</p>
              </div>
              <div className={styles.BoxIconinner}>
                <FaClinicMedical className={styles.icon1} />
                <p>HEALTHCARE</p>
              </div>
              <div className={styles.BoxIconinner}>
                <AiOutlineFundProjectionScreen className={styles.icon1} />
                <p>MARKETING & HR</p>
              </div>
            </div>
            <div className={styles.iconButton}>
              <div className={styles.BoxIconinner}>
                <BsTruck className={styles.icon1} />
                <p>SUPPLYCHAIN</p>
              </div>
            <div    onClick={popupShow}>
                <Button
                  bannerButton={true}
                  text="Download Domain Brochures"
                  passIcon={<FaDownload className="bIconS" />}
             />
             </div>
               
           
               
            
              
            </div>
          </div>
          <div className={styles.iconBoxMobile}>
            <div className={styles.iconBox}>
              <div className={styles.BoxIconinner}>
                <BsBank className={styles.icon} />
                <p>BFSI</p>
              </div>
              <div className={styles.BoxIconinner}>
                <FaClinicMedical className={styles.icon1} />
                <p>HEALTHCARE</p>
              </div>
              <div className={styles.BoxIconinner}>
                <AiOutlineFundProjectionScreen className={styles.icon1} />
                <p>MARKETING & HR</p>
              </div>
              <div className={styles.BoxIconinner}>
                <BsTruck className={styles.icon1} />
                <p>SUPPLYCHAIN</p>
              </div>
            </div>
           <div className={styles.buttonDiv}
              onClick={popupShow}>
          
                <Button
                  bannerButton={true}
                  text="Download Domain Brochures"
                  passIcon={<FaDownload className="bIconS" />
                }
             
                />
          
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <div className="imgWrapper">
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/domainSlider.png"
              loading="lazy"
              quality={40}
              width="517"
              height="300"
              alt="profile-Img"
            />
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default ProjectContent;
