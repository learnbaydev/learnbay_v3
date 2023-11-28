import React, { useState } from "react";
import styles from "./KeyFeatures.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaChair,
  FaChartLine,
  FaClock,
  FaDownload,
  FaRupeeSign,
  FaUser,
} from "react-icons/fa";
import VideoPopup from "../../Global/VideoPopup/VideoPopup";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import required modules
import { Autoplay } from "swiper";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import Image from "next/image";
import { KeyFeaturesSwiper } from "./KeyFeatureSwiperData";
import VideoTestimonial from "../../VideoTestimonial/VideoTestimonial";
import { switchData } from "./switchData";
import { AiFillStar } from "react-icons/ai";
import WhyLearnbay from "../../MastersCourse/WhyLearnbay/WhyLearnbay";

const KeyFeatures = ({
  dataScience,
  radio,
  idss,
  titleCourse,
  brochureLink,
  dataScienceCounselling,
}) => {
  const [popups, setPopups] = useState(false);
  const [popupsB, setPopupsB] = useState(false);

  const popupShowD = () => {
    setPopupsB(true);
  };

  const popupShow = () => {
    setPopups(true);
  };
  const [video, setVideo] = useState(false);
  const videoSHow = () => {
    setVideo(true);
  };
  return (
    <>
      <section className={`${styles.Features} wrapper`}>
        <Popup
          trigger={popups}
          setTrigger={setPopups}
          className="popupModal"
          downloadBrochure
        >
          <div className="leftPopup">
            <div
              className="whiteP"
              style={{ width: "340px", height: "400px" }}
            ></div>
          </div>
          <div className="RightPopup">
            <h5>Download Brochure</h5>
            <Form
              dataScience={dataScience}
              dataScienceCounselling={dataScienceCounselling}
              downloadBrochure
              upSkillingHide={true}
            />
          </div>
        </Popup>
        <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />
        <WhyLearnbay />
      </section>

      <div className={styles.RightWrap}>
        <h2>The Network Reach of Our Bay</h2>
        <div className={styles.imgWrap}>
          <div className={`${styles.imgShow} imgWrapper`}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Network-reach-company-logos.png"
              width={1148}
              height={414}
              alt="Learnbay"
            />
          </div>
          <div className={styles.imgShowM}></div>
          <button onClick={popupShow} className={styles.btn}>
            Download Placement Report{" "}
            <FaDownload style={{ marginLeft: "10px" }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
