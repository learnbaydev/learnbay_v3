// import React, { Suspense, lazy, useRef, useState } from "react";
// import { FaPlay } from "react-icons/fa";
// import styles from "./FirstSection.module.css";
// import Image from "next/image";
// import dynamic from "next/dynamic";

// const Form = lazy(() => import("../../Global/Form/Form"));
// const Button = dynamic(() => import("../../Global/Button/Button"));
// const VideoPopup = dynamic(() => import("../../Seo/VideoPopup/VideoPopup"));
// const Popup = dynamic(() => import("../../Global/Popup/Popup"));

// function FirstSection({
//   dataScience,
//   softwareBtnHide,
//   idss,
//   firstToparaImg,
//   firstHeading,
//   FirstRightImg,
//   firstTopPara,
//   titleCourse,
//   brochureLink,
//   dataScienceCounselling,
//   microsSoftOnly,
//   ibmOnly,
//   cityParaCont,
//   interstedInHide,
//   brochurePdf,
// }) {
//   const [popups, setPopups] = useState(false);
//   const [video, setVideo] = useState(false);

//   const videoSHow = () => {
//     setVideo(true);
//   };

//   const el = useRef(null);

//   const popupShow = () => {
//     setPopups(true);
//   };

//   return (
//     <>
//       <div className={styles.First}>
//         <Popup
//           trigger={popups}
//           setTrigger={setPopups}
//           className="popupModal"
//           downloadBrochure
//         >
//           <div className="leftPopup">
//             <div
//               className="whiteP"
//               style={{ width: "340px", height: "400px" }}
//             ></div>
//           </div>
//           <div className="RightPopup">
//             <h5>Download Syllabus</h5>
//             <Suspense fallback={<div>Loading...</div>}>
//               <Form
//                 dataScience={dataScience}
//                 dataScienceCounselling={dataScienceCounselling}
//                 downloadBrochure
//                 upSkillingHide={true}
//                 titleCourse={titleCourse}
//                 brochureLink={brochureLink}
//                 brochurePdf={brochurePdf}
//                 interstedInHide={interstedInHide}
//               />
//             </Suspense>
//           </div>
//         </Popup>
//         <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />

//         {/* For Mobile View */}
//         <div className={styles.FirstLeft}>
//           <p className={styles.ptopC}>{firstTopPara}</p>
//           <h1 className={styles.h1}>
//             {firstHeading}{" "}
//             <span className={styles.h1Span}>{firstToparaImg}</span>
//           </h1>
//           <p className={styles.ptopCiity}>{cityParaCont}</p>
//           <div className={styles.IBMlogoPlay}>
//             <Image
//               src={FirstRightImg}
//               width={508}
//               height={327}
//               alt="data science course"
//               priority // Priority for critical images
//             />
//           </div>
//           <div className={styles.Desktop}>
//             <p className={styles.ptop}>In Collaboration With</p>
//             <div className={styles.ImageBlock}>
//               {microsSoftOnly ? (
//                 <Image
//                   src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/micrososfttss.webp"
//                   width={150}
//                   height={30}
//                   priority
//                   alt="data science course"
//                 />
//               ) : (
//                 <>
//                   {" "}
//                   {ibmOnly ? (
//                     <Image
//                       src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/ibm-single-home.png"
//                       width={127}
//                       height={51}
//                       loading="lazy" // Lazy load non-critical images
//                       alt="data science course"
//                     />
//                   ) : (
//                     <Image
//                       src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/DABAImage2026.webp"
//                       width={266}
//                       height={48}
//                       loading="lazy" // Lazy load non-critical images
//                       alt="data science course"
//                     />
//                   ):(
//                     <Image
//                 src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/woolf_logo.webp"
//                 alt="woolf-university"
//                 priority
//                 width="230"
//                 height="50"
//                 style={{
//                   backgroundColor: "white",
//                   padding: "8px",
//                   borderRadius: "4px",
//                 }}
//               />
//                   )}
//                 </>
//               )}
//             </div>
//           </div>
//           <div className={styles.animationTextWrap}>
//             <span className={styles.animationText}>
//               Job-ready with interview support
//             </span>
//           </div>
//           {/* Button */}
//           <div className={styles.btnImage}>
//             <div onClick={popupShow}>
//               <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
//             </div>
//             {!softwareBtnHide && (
//               <div onClick={videoSHow}>
//                 <Button
//                   whiteBgButton={true}
//                   text="INTRO VIDEO"
//                   passIcon={<FaPlay className="bIconS" fontSize="14px" />}
//                 />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* For desktop View */}
//         <div className={styles.secondLeft}>
//           <div className="imgWrapper">
//             <Image
//               src={FirstRightImg}
//               width={600}
//               height={460}
//               alt="data science course"
//               priority // Priority for critical images
//             />
//           </div>
//         </div>
//         <div className={styles.Mobile}>
//           <p className={styles.ptop}>In Collaboration With</p>
//           <div className={styles.ImageBlock}>
//             {microsSoftOnly ? (
//               <Image
//                 src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/micrososfttss.webp"
//                 width={190}
//                 height={40}
//                 priority
//                 alt="data science course"
//               />
//             ) : (
//               <>
//                 {ibmOnly ? (
//                   <Image
//                     src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/ibm-single-home.png"
//                     width={127}
//                     height={51}
//                     loading="lazy" // Lazy load non-critical images
//                     alt="data science course"
//                   />
//                 ) : (
//                   <Image
//                     src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ibm%26microsoft.webp"
//                     width={283}
//                     height={51}
//                     loading="lazy" // Lazy load non-critical images
//                     alt="data science course"
//                   />
//                 ):(
//                   <Image
//                 src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/woolf_logo.webp"
//                 alt="woolf-university"
//                 priority
//                 width="230"
//                 height="50"
//                 style={{
//                   backgroundColor: "white",
//                   padding: "8px",
//                   borderRadius: "4px",
//                 }}
//               />
//                 )

//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className={styles.btnImageMobile}>
//         <div onClick={popupShow}>
//           <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
//         </div>
//         {!softwareBtnHide && (
//           <div onClick={videoSHow}>
//             <Button
//               whiteBgButton={true}
//               text="INTRO VIDEO"
//               passIcon={<FaPlay className="bIconS" fontSize="14px" />}
//             />
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default React.memo(FirstSection);
import React, { Suspense, lazy, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import styles from "./FirstSection.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";

const Form = lazy(() => import("../../Global/Form/Form"));
const Button = dynamic(() => import("../../Global/Button/Button"));
const VideoPopup = dynamic(() => import("../../Seo/VideoPopup/VideoPopup"));
const Popup = dynamic(() => import("../../Global/Popup/Popup"));

function FirstSection({
  dataScience,
  softwareBtnHide,
  idss,
  firstToparaImg,
  firstHeading,
  FirstRightImg,
  firstTopPara,
  titleCourse,
  brochureLink,
  dataScienceCounselling,
  microsSoftOnly,
  ibmOnly,
  woolfOnly,
  cityParaCont,
  interstedInHide,
  brochurePdf,
}) {
  const [popups, setPopups] = useState(false);
  const [video, setVideo] = useState(false);

  const popupShow = () => setPopups(true);
  const videoShow = () => setVideo(true);

  const el = useRef(null);

  /* --------------------------------
     COLLAB IMAGE RENDER FUNCTION
  ----------------------------------*/
  const renderCollabImage = (isMobile = false) => {
    if (microsSoftOnly) {
      return (
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/micrososfttss.webp"
          width={isMobile ? 190 : 150}
          height={isMobile ? 40 : 30}
          priority
          alt="Microsoft Collaboration"
        />
      );
    }

    if (ibmOnly) {
      return (
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/ibm-single-home.png"
          width={127}
          height={51}
          loading="lazy"
          alt="IBM Collaboration"
        />
      );
    }

    if (woolfOnly) {
      return (
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/woolf_logo.webp"
          width={230}
          height={50}
          priority
          alt="Woolf University"
          style={{
            backgroundColor: "white",
            padding: "8px",
            borderRadius: "4px",
          }}
        />
      );
    }

    // DEFAULT IMAGE
    return (
      <Image
        src={
          isMobile
            ? "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ibm%26microsoft.webp"
            : "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/DABAImage2026.webp"
        }
        width={isMobile ? 283 : 266}
        height={48}
        loading="lazy"
        alt="IBM & Microsoft Collaboration"
      />
    );
  };

  return (
    <>
      <div className={styles.First}>
        {/* POPUP */}
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
            <h5>Download Syllabus</h5>
            <Suspense fallback={<div>Loading...</div>}>
              <Form
                dataScience={dataScience}
                dataScienceCounselling={dataScienceCounselling}
                downloadBrochure
                upSkillingHide
                titleCourse={titleCourse}
                brochureLink={brochureLink}
                brochurePdf={brochurePdf}
                interstedInHide={interstedInHide}
              />
            </Suspense>
          </div>
        </Popup>

        <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />

        {/* MOBILE LEFT */}
        <div className={styles.FirstLeft}>
          <p className={styles.ptopC}>{firstTopPara}</p>

          <h1 className={styles.h1}>
            {firstHeading}{" "}
            <span className={styles.h1Span}>{firstToparaImg}</span>
          </h1>

          <p className={styles.ptopCiity}>{cityParaCont}</p>

          <div className={styles.IBMlogoPlay}>
            <Image
              src={FirstRightImg}
              width={508}
              height={327}
              priority
              alt="course banner"
            />
          </div>

          {/* DESKTOP COLLAB */}
          <div className={styles.Desktop}>
            <p className={styles.ptop}>In Collaboration With</p>
            <div className={styles.ImageBlock}>{renderCollabImage(false)}</div>
          </div>

          <div className={styles.animationTextWrap}>
            <span className={styles.animationText}>
              Job-ready with interview support
            </span>
          </div>

          {/* BUTTONS */}
          <div className={styles.btnImage}>
            <div onClick={popupShow}>
              <Button bannerButton text="DOWNLOAD SYLLABUS" />
            </div>

            {!softwareBtnHide && (
              <div onClick={videoShow}>
                <Button
                  whiteBgButton
                  text="INTRO VIDEO"
                  passIcon={<FaPlay className="bIconS" fontSize="14px" />}
                />
              </div>
            )}
          </div>
        </div>

        {/* DESKTOP RIGHT IMAGE */}
        <div className={styles.secondLeft}>
          <div className="imgWrapper">
            <Image
              src={FirstRightImg}
              width={600}
              height={460}
              priority
              alt="course banner"
            />
          </div>
        </div>

        {/* MOBILE COLLAB */}
        <div className={styles.Mobile}>
          <p className={styles.ptop}>In Collaboration With</p>
          <div className={styles.ImageBlock}>{renderCollabImage(true)}</div>
        </div>
      </div>

      {/* MOBILE BUTTONS */}
      <div className={styles.btnImageMobile}>
        <div onClick={popupShow}>
          <Button bannerButton text="DOWNLOAD SYLLABUS" />
        </div>

        {!softwareBtnHide && (
          <div onClick={videoShow}>
            <Button
              whiteBgButton
              text="INTRO VIDEO"
              passIcon={<FaPlay className="bIconS" fontSize="14px" />}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default React.memo(FirstSection);
