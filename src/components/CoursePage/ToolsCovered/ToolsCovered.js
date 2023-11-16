import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import styles from "./ToolsCovered.module.css";
import Image from "next/image";
const ToolsCovered = () => {
  // Sample image URLs, replace these with your own image URLs
  const images = [
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/masterPage/tool1.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/masterPage/tool2.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/masterPage/tool3.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/masterPage/tool4.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/masterPage/tool5.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/masterPage/tool1.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/masterPage/tool2.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/masterPage/tool3.webp",
  ];
  return (
    <>
      <p className={styles.infop}>Programming Languages & Tools Covered</p>
      <div className={styles.sliderContainer}>
        <Swiper
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          grabCursor={true}
          breakpoints={{
            1280: { slidesPerView: 5, spaceBetween: 30 },
            481: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            393: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className={styles.margin}>
              <div className={`${styles.column} imgWrapper`}>
                <Image
                  src={image}
                  alt="tools covered"
                  width={80}
                  height={60}
                  loading="lazy"
                  quality={60}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default ToolsCovered;
