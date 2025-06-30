"use client";
import Image from "next/image";
import styles from "./AlumniCompanies.module.css";
import { lazy, Suspense, useState } from "react";
import dynamic from "next/dynamic";
const Popup = dynamic(() => import("../../../components/Global/Popup/Popup"));
const Form = lazy(() => import("../../../components/Global/Form/Form"));
const companyLogos = [
  { name: "Microsoft", src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/micro_ss1.webp", width: 100, height: 50 },
  { name: "Amazon", src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/amaz-a.webp", width: 100, height: 50 },
  { name: "Meta", src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/meta-1.webp", width: 100, height: 50 },
  { name: "Brillio", src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/brillo-1.webp", width: 100, height: 50 },
  { name: "Fractal", src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/frac-1.webp", width: 100, height: 50 },
  { name: "Genpact", src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/genp-1.webp", width: 100, height: 50 },
  { name: "Razorpay", src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/razorpa.webp", width: 100, height: 50 },
  { name: "EY", src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/ey-1.webp", width: 100, height: 50 },
  { name: "Bridgei2i", src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/brid-2.webp", width: 100, height: 50 },
  { name: "Ola", src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/ola-2.webp", width: 100, height: 50 },
  { name: "Mu Sigma", src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/mu-2.webp", width: 100, height: 50 },
  { name: "Wells Fargo", src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/well-1.webp", width: 100, height: 50 },
];

 
const AlumniCompanies = ({
  titleCourse,
  brochureLink,
  dataScience,
  interstedInHide,
  adsHide,
  CloudAWs,
  brochurePdf,
}) => {

  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <section className={styles.container}>
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
                <Suspense>
                  <Form
                    dataScience={dataScience}
                    downloadBrochure
                    upSkillingHide={true}
                    titleCourse={titleCourse}
                    brochureLink={brochureLink}
                    interstedInHide={interstedInHide}
                    brochurePdf={brochurePdf}
                  />
                </Suspense>
              </div>
            </Popup>
      <h2 className={styles.heading}>
        Alumni in <span className={styles.highlight}>350+</span> Companies,{" "}
        <span className={styles.underline}>You're Next!</span>
      </h2>

      <div className={styles.logos}>
        {companyLogos.map((company, index) => (
          <div key={index} className={styles.logoWrapper}>
            <Image
              src={company.src}
              alt={company.name}
              width={company.width}
              height={company.height}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.cta} onClick={popupShow}>Get personalized career report →</button>
      </div>
    </section>
  );
};

export default AlumniCompanies;
