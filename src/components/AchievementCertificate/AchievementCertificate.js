import React, { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./CertificateComponent.module.css";
import PopupContent from "@/components/Global/PopupContent/PopupContent";

const CertificateComponent = ({
  interstedInHide,
  titleCourse,
  brochureLink,
  brochurePdf,
  downloadBrochure,
}) => {
  const [popups, setPopups] = useState(false);
  const [requestDemoPopup, setRequestDemoPopup] = useState(false);

  const popupShow = useCallback(() => {
    setPopups(true);
  }, []);

  const requestDemoShow = useCallback(() => {
    setRequestDemoPopup(true);
  }, []);

  useEffect(() => {
    // console.log(brochurePdf);
  }, []);
  const certificates = [
    {
      id: 1,
      url: "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/OUTSPOKEN+CERTIFICATE+1.webp",
      alt: "Outspoken Certificate",
    },
    {
      id: 2,
      url: "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/ELEVON+1.webp",
      alt: "Elevon Certificate",
    },
  ];

  return (
    <div className={styles.certificateContainer}>
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Download Syllabus"
        downloadBrochure
        dataScience={true}
        interstedInHide={interstedInHide}
        upSkillingHide={true}
        titleCourse={titleCourse}
        brochureLink={brochureLink}
        brochurePdf={brochurePdf}
        // DSADemoSession={true}
      />
      <PopupContent
        popups={requestDemoPopup}
        setPopups={setRequestDemoPopup}
        heading="Book Your Demo Session"
        // downloadBrochure
        dataScienceCounselling={true}
        interstedInHide={interstedInHide}
        DSADemoSession={true}
      />
      <div className={styles.contentBox}>
        <div className="containerWidth">
          <div className={styles.gridLayout}>
            {/* Left Side - Text */}
            <div className={styles.certificateTextSection}>
              <h2 className={styles.certificateTitle}>
                Certificate for professionals
              </h2>
              <ul className={styles.certificateBenefits}>
                <li>Gain practical AI experience</li>
                <li>Get startup-certified proof of work</li>
                <li>Stand out in interviews</li>
                <li>Build a portfolio recruiters love</li>
              </ul>
              <button onClick={popupShow} className={styles.knowMoreBtn}>
                Know More
              </button>
            </div>

            {/* Right Side - Certificate Slider */}
            <div className={styles.certificateOverlay}>
              <div className={styles.swiperContainer}>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation={true}
                  pagination={{
                    clickable: true,
                    bulletClass: `swiper-pagination-bullet ${styles.customBullet}`,
                    bulletActiveClass: `swiper-pagination-bullet-active ${styles.customBulletActive}`,
                  }}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  loop={true}
                  className={styles.certificateSwiper}
                >
                  {certificates.map((certificate) => (
                    <SwiperSlide key={certificate.id}>
                      <div className={styles.certificateSlide}>
                        <img
                          src={certificate.url}
                          alt={certificate.alt}
                          className={styles.certificateImage}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateComponent;

// import React, { useCallback, useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import styles from "./CertificateComponent.module.css";
// import PopupContent from "@/components/Global/PopupContent/PopupContent";

// const CertificateComponent = ({
//   interstedInHide,
//   titleCourse,
//   brochureLink,
//   brochurePdf,
//   downloadBrochure,
// }) => {
//   const [popups, setPopups] = useState(false);
//   const [requestDemoPopup, setRequestDemoPopup] = useState(false);

//   const popupShow = useCallback(() => {
//     setPopups(true);
//   }, []);

//   const requestDemoShow = useCallback(() => {
//     setRequestDemoPopup(true);
//   }, []);

//   useEffect(() => {
//     // console.log(brochurePdf);
//   }, []);
//   const certificates = [
//     {
//       id: 1,
//       url: "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/OUTSPOKEN+CERTIFICATE+1.webp",
//       alt: "Outspoken Certificate",
//     },
//     {
//       id: 2,
//       url: "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/ELEVON+1.webp",
//       alt: "Elevon Certificate",
//     },
//   ];

//   return (
//     <div className={styles.certificateContainer}>
//       <PopupContent
//         popups={popups}
//         setPopups={setPopups}
//         heading="Download Syllabus"
//         downloadBrochure
//         dataScience={true}
//         interstedInHide={interstedInHide}
//         upSkillingHide={true}
//         titleCourse={titleCourse}
//         brochureLink={brochureLink}
//         brochurePdf={brochurePdf}
//         // DSADemoSession={true}
//       />
//       <PopupContent
//         popups={requestDemoPopup}
//         setPopups={setRequestDemoPopup}
//         heading="Book Your Demo Session"
//         // downloadBrochure
//         dataScienceCounselling={true}
//         interstedInHide={interstedInHide}
//         DSADemoSession={true}
//       />
//       <div className={styles.contentBox}>
//         <div className="containerWidth">
//           <div className={styles.gridLayout}>
//             {/* Left Side - Text */}
//             <div className={styles.certificateTextSection}>
//               <h2 className={styles.certificateTitle}>
//                 Certificate for professionals
//               </h2>
//               <ul className={styles.certificateBenefits}>
//                 <li>Gain practical AI experience</li>
//                 <li>Get startup-certified proof of work</li>
//                 <li>Stand out in interviews</li>
//                 <li>Build a portfolio recruiters love</li>
//               </ul>
//               <button onClick={popupShow} className={styles.knowMoreBtn}>
//                 Know More
//               </button>
//             </div>

//             {/* Right Side - Certificate Slider */}
//             <div className={styles.certificateOverlay}>
//               <div className={styles.swiperContainer}>
//                 <Swiper
//                   modules={[Navigation, Pagination, Autoplay]}
//                   spaceBetween={30}
//                   slidesPerView={1}
//                   navigation={true}
//                   pagination={{
//                     clickable: true,
//                     bulletClass: `swiper-pagination-bullet ${styles.customBullet}`,
//                     bulletActiveClass: `swiper-pagination-bullet-active ${styles.customBulletActive}`,
//                   }}
//                   autoplay={{ delay: 4000, disableOnInteraction: false }}
//                   loop={true}
//                   className={styles.certificateSwiper}
//                 >
//                   {certificates.map((certificate) => (
//                     <SwiperSlide key={certificate.id}>
//                       <div className={styles.certificateSlide}>
//                         <img
//                           src={certificate.url}
//                           alt={certificate.alt}
//                           className={styles.certificateImage}
//                         />
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CertificateComponent;
