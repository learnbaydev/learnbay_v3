import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Suspense, lazy, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from "./DevOpsProject.module.css"
const Button = dynamic(() => import("../../../Global/Button/Button"));
const Popup = dynamic(() => import("../../../Global/Popup/Popup"));
const Form = lazy(() => import("../../../Global/Form/Form"));

const DevOpsProject = ({ titleCourse,
  brochureLink, dataScience,   interstedInHide, }) => {

  const projectImg = [
    
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/c3.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/c4.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/c5.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/c6.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/c1.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/c2.webp",
  ];

  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <section className={Styles.container}>
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
          <Suspense>
            <Form
              dataScience={dataScience}
              downloadBrochure
              upSkillingHide={true}
              titleCourse={titleCourse}
              brochureLink={brochureLink}
              interstedInHide={interstedInHide}
            />
          </Suspense>
        </div>
      </Popup>
      <h4>Industry Projects</h4>
      <p>
      Work on live capstone projects{" "}
      </p>
      <div>
        <Swiper

          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1} // This will show 4 cards on desktop
          breakpoints={{
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2.8,
              spaceBetween: 45,
            },
            961: {
              slidesPerView: 2.1,
              spaceBetween: 40,
            },
            761: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          
          }}
        >
          {projectImg.map((mentor, index) => (
            <SwiperSlide key={`mentor-${index}`}>
              <div className={Styles.slideDiv}>
                <div>
                  <Image
                    src={mentor}
                    width={350}
                    height={400}
                    alt="mentor"
                   
                    loading="lazy"
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div onClick={popupShow} className={Styles.buttonDiv}>
        <Button bannerButton={true} text="DOWNLOAD BROCHURE" />
      </div>
    </section>
  )
}

export default DevOpsProject
