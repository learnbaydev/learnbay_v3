import { useState } from "react";
import Image from "next/image";
import styles from "./Realstory.module.css";
import sliderData from "./SliderData";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; // Import fade effect style
import VideoPopup from "@/components/Global/VideoPopup/VideoPopup";
import PopupContent from "@/components/Global/PopupContent/PopupContent";
import { FaYoutube } from "react-icons/fa";


SwiperCore.use([Navigation]);

const Slider = (idss) => {
  const [bigImageIndex, setBigImageIndex] = useState(0);
  const [profileIndex, setProfileIndex] = useState(0);

  const handleNextSlide = () => {
    if (bigImageIndex < sliderData.length - 1) {
      setBigImageIndex((prevIndex) => prevIndex + 1);
      setProfileIndex((prevIndex) => (prevIndex + 1) % profileData.length);
    }
  };

  const handlePrevSlide = () => {
    if (bigImageIndex > 0) {
      setBigImageIndex((prevIndex) => prevIndex - 1);
      setProfileIndex(
        (prevIndex) => (prevIndex - 0 + profileData.length) % profileData.length
      );
    }
  };

  const handleProfileClick = (index) => {
    setProfileIndex(index);
    setBigImageIndex(index);
  };

  const handleSlideChange = (swiper) => {
    setProfileIndex(swiper.activeIndex % profileData.length);
  };

  

  const profileData = [
    {
      id: 1,
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/jaya-amazon-one.webp",
    },
    {
      id: 2,
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/shiubam-crn.webp",
    },
    {
      id: 3,
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/arvind_math.webp",
    },
    {
      id: 4,
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/preksha-hcl.webp",
    },
    // {
    //   id: 5,
    //   imageUrl:
    //     "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/real-stroy-profile-one.webp",
    // },
    // {
    //   id: 6,
    //   imageUrl:
    //     "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/real-stroy-profile-one.webp",
    // },
    // {
    //   id: 7,
    //   imageUrl:
    //     "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/real-stroy-profile-one.webp",
    // },
    // {
    //   id: 8,
    //   imageUrl:
    //     "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/real-stroy-profile-one.webp",
    // },
    // {
    //   id: 9,
    //   imageUrl:
    //     "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/real-stroy-profile-one.webp",
    // },
    // {
    //   id: 10,
    //   imageUrl:
    //     "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/real-stroy-profile-one.webp",
    // },
    // {
    //   id: 11,
    //   imageUrl:
    //     "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/real-stroy-profile-one.webp",
    // },

    // Add more profiles as needed
  ];

  const [vId, setVId] = useState("");

  const videoShow = (id) => {
    setVideo(true);
    setVId(id);
  };
  const [video, setVideo] = useState(false);
  
  
  return (
    <div className={styles["slider-container"]}>
    <VideoPopup triggers={video} setTriggers={setVideo} ids={vId} />
      <div className={styles["big-image-container"]}>
        <div
          className={styles["big-image"]}
          style={{ transform: `translateX(-${bigImageIndex * 100}%)` }}
        >
          {/* <div className={styles.leftcardmain}>
            <div  className={styles.greenbox}>
          <span className={styles.greenbox1}>150% Hike</span>
          </div>
          <div className={styles.leftcard}>
            <Image src=" https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/real-story-one.webp" width={150} height={180} />
            <div className={styles.insideryt}  >
            
              <h2 clas>Jaya sinha</h2>
              <h4>Data Scientist</h4>
              <p>
                Transitioning from a non-tech role, LearnBay's IBM data science
                certification equipped me with the skills needed in today's
                market. The course's interactive sessions and personalized
                guidance from Abhishek sir were invaluable.{" "}
              </p>
            </div>
            
       </div>
       <div className={styles.ytbtn}>
              <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/amazon.webp" width={60} height={50}/>
             <div className={styles.ytbtn}>
              <button>
                <p></p><span><FaYoutube/></span>
              </button>
              </div>
            </div>
          </div> */}
          {sliderData.map((slide) => (
                <img
                  key={slide.id}
                  src={slide.bigImage}
                  alt={`Big Image ${slide.id}`}
                  // onClick={() => videoSHow(popupShow)}
                  onClick={() => videoShow(slide.link)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
        </div>
      </div>
      <div className={styles.rytside}>
        <h2 className={styles.header}>Real Stories, Real Success</h2>
        <p className={styles.para}>Discover what our learners say about us</p>
        <div className={styles.slider}>
          <div className={styles.doubleSlider}>
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              navigation={{
                nextEl: `.${styles.nextarrow}`,
                prevEl: `.${styles.prevarrow}`,
              }}
              onSlideChange={(swiper) => {
                setProfileIndex(swiper.activeIndex % profileData.length);
              }}
            >
              {profileData.map((profile, index) => (
                <SwiperSlide key={profile.id}>
                  <div
                    className={`${styles.sliderContent} ${
                      index === profileIndex && styles.active
                    }`}
                    onClick={() => handleProfileClick(index)}
                  >
                    <img
                      src={profile.imageUrl}
                      width={300}
                      height={100}
                      alt={profile.name}
                      className={styles["big-image"]}
                      onClick={() => handleSlideChange(index)}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* <div className={styles.arrowButtons}>
          <div
            className={`${styles.prevarrow} ${
              profileIndex === 0 && styles.activeProfile
            }`}
          >
            <p onClick={handlePrevSlide}>
              <GrLinkPrevious />
            </p>
          </div>
          <div
            className={`${styles.nextarrow} ${
              profileIndex === profileData.length - 4 && styles.activeProfile
            }`}
          >
            <p onClick={handleNextSlide}>
              <GrLinkNext />
            </p>
          </div>
        </div> */}
        <div className={styles.downcontent}>
          <div className={styles.contenthead}>
            <h2>9K+</h2>
            <p>Successful Career Transitions</p>
          </div>
          <hr />
          <div className={styles.contenthead}>
            <h2>175%</h2>
            <p>Average Salary Hike</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
