import Image from "next/image";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./MentorsSection.module.css";

function MentorsSection() {
  const [mobile, setMobile] = useState(false);
  const [value, setValue] = useState(3.68);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 641) {
      setMobile(true);
    }
  }, []);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setValue(1.4);
      setMobile(true);
    }
    if (width < 600) {
      setValue(1.2);
      setMobile(true);
    } else if (width <= 641) {
      setValue(1.5);
    } else if (width <= 801) {
      setValue(2);
    } else if (width <= 961) {
      setValue(2.3);
    } else if (width <= 1025) {
      setValue(2.6);
    } else if (width <= 1280) {
      setValue(3);
    } else if (width <= 1281) {
      setValue(2.4);
    } else if (width > 1281) {
      setValue(4);
    }
  }, []);

  const mentorImg = [
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/mentor-desktop.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/puulkit.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/tripti.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/AnkurK.webp",
  ];

  const companyImg = [
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/kryndal.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/paypal.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/paytm.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/walmart.webp",
  ];

  const mentorNames = ["Mohit S.", "Pulkit Jain", "Tripti Jain", "Ankur K."];


  return (
    <section className={styles.container}>
      <h4>Meet Our Mentors</h4>
      <p>Guiding You Every Step of the Way Towards Professional Excellence</p>
      <div className={styles.SliderDiv}>
        <Swiper
          loop={true}
          slidesPerView={value}
          spaceBetween={20}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          grabCursor={true}
          style={{ width: "100%" }}
          modules={[Pagination, Navigation, Scrollbar]}
          className="mySwiper"
        >
          {mentorImg.map((mentor, index) => (
            <SwiperSlide key={`mentor-${index}`} className={styles.slide}>
              <div className={styles.box}>
                <div>
                  <Image
                    src={mentor}
                    width={100}
                    height={100}
                    alt="mentor"
                    quality={80}
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className={styles.Name}>{mentorNames[index]}</p>
                  <Image
                    src={companyImg[index]}
                    width={100}
                    height={25}
                    alt="company"
                    quality={80}
                    loading="lazy"
                  />
                
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default MentorsSection;
