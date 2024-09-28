import { useState } from "react";
import styles from "./ProjectSection.module.css";
import data from "./ProjectSectionData";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import Popup from "../../Global/Popup/Popup";
import Form from "@/components/Global/Form/Form";
import PopupContent from "@/components/Global/PopupContent/PopupContent";

const ProjectSection = ({
  interstedInHide,
  brochureLink,
  brochurePdf,
  ADS,
  formotp,
}) => {
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <section className={styles.projectSection}>
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Download Syllabus"
        downloadBrochure
        dataScience={true}
        interstedInHide={interstedInHide}
        brochureLink={brochureLink}
        brochurePdf={brochurePdf}
        ADS={ADS}
        formotp={formotp}
      />
      <h2 className={styles.headline}>
        Industry <span>Projects</span>
      </h2>
      <div className={styles.subheadingContainer}>
        <div className={styles.orangeBox}>95% industry relevance</div>
        <div className={styles.blueBox}>22+ tools and modules</div>
        <div className={styles.greenBox}>100% real-world experience</div>
      </div>
      <div className={styles.projectsConatiner}>
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1.1, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1440: { slidesPerView: 3, spaceBetween: 30 },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className={styles.mySwiper}
        >
          {data.map((item, id) => (
            <SwiperSlide key={id} className={styles.sliderWrapper}>
              <div className={styles.projectCard}>
                <div className={styles.upperPart}>
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={900}
                    height={200}
                    loading="lazy"
                    className={styles.projectIcon}
                  />
                  <div className={styles.upperRight}>
                    {/* <p className={styles.boxNum}>{item.number}</p> */}
                    <p className={styles.hrsBox}>{item.number}</p>
                  </div>
                </div>
                <div className={styles.cardTitle}>{item.title}</div>
                <div className={styles.cardText}>{item.text}</div>
                <div className={styles.lowerBox}>
                  <Image
                    src={item.tool1}
                    alt="icon"
                    width={900}
                    height={200}
                    loading="lazy"
                    className={styles.projectIcon}
                  />
                </div>
                <div className={styles.cardText}>
                  <span style={{ color: "#0072BC" }}>
                    <b>Outcome:</b>
                  </span>{" "}
                  {item.cta}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.botDiv}>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/practical_Project.webp"
          alt="practical"
          width={900}
          height={200}
          loading="lazy"
        />
        <h4 className={styles.h4Bot}>Practical Project Experience</h4>
        <p className={styles.pBot}>
          <span className={styles.spanOrange}>Important Note:</span> The final
          number of quizzes, assignments and discussions will be confirmed
          closer to the programme start. To know more{" "}
          <span className={styles.blueSpan} onClick={popupShow}>
            check eligibility
          </span>
        </p>
      </div>
      <div className={styles.botDivMobile}>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/practical_bot_mobile.webp"
          alt="practical"
          width={555}
          height={313}
          loading="lazy"
        />
        <p className={styles.pBot}>
          <span className={styles.spanOrange}>Important Note:</span> The final
          number of quizzes, assignments and discussions will be confirmed
          closer to the programme start. To know more{" "}
          <span className={styles.blueSpan} onClick={popupShow}>
            check eligibility
          </span>
        </p>
      </div>
    </section>
  );
};

export default ProjectSection;
