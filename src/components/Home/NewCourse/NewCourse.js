import React, { useState, useRef, useEffect, memo } from "react";
import styles from "./NewCourse.module.css";
import Image from "next/image";
import { courses, masterCourse } from "./NewCourseData"; // Import course and master data
import Link from "next/link";
import dynamic from "next/dynamic";
import { MdOutlineFileDownload } from "react-icons/md";
import DataScienceCard from "./DataScienceCard";

const Popup = dynamic(() => import("@/components/Global/Popup/Popup"));
const Form = dynamic(() => import("@/components/Global/Form/Form"));

const NewCourse = ({
  dataScience,
  radio,
  dataScienceCounselling,
  organicADS,
  dataScienceGeneric,
  interstedInHide,
}) => {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleCount, setVisibleCount] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [popups, setPopups] = useState(false);
  const [titleCourse, setTitleCourse] = useState();
  const [brochureLinks, setBrochureLinks] = useState();
  const [brochurePdfs, setBrochurePdfs] = useState();
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        setVisibleCount(0);
      } else {
        setIsMobile(false);
        setVisibleCount(0);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const svgFile = (isActive)=> {

    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="12"
    viewBox="0 0 12 20"
    fill="none"
    className={isActive ? styles.svgActive : styles.svgIcon}
  >
    <path
      d="M10.884 10.8839C11.3721 10.3957 11.3721 9.60427 10.884 9.11612L2.92903 1.16117C2.44088 0.67301 1.64942 0.67301 1.16127 1.16117C0.67311 1.64932 0.67311 2.44078 1.16127 2.92893L8.23233 10L1.16127 17.0711C0.67311 17.5592 0.67311 18.3507 1.16127 18.8388C1.64942 19.327 2.44088 19.327 2.92903 18.8388L10.884 10.8839ZM10 11.25H10.0001V8.75H10V11.25Z"
fill="black"
    />
  </svg>
  } 
  
  
  const renderCourses = () => {
    const selectedCourses = courses[activeTab];
    const visibleCourses = selectedCourses.slice(0, visibleCount);

    return (
      <>
        {visibleCourses.map((course, index) => (
          <div className={styles.courseCard} key={index}>
         
            <Image
              src={course.image}
              width={360}
              height={120}
              alt={course.title}
              loading="lazy"
              className={styles.mainImage}
            />
            <div className={styles.cardContent}>
              <h3>{course.title}</h3>
              <div className={styles.lists}>
                <div className={styles.listicondiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Cer_icons.webp"
                    width={25}
                    height={25}
                    alt="certificate_icon"
                    loading="lazy"
                  />
                  <span>{course.duration}</span>
                </div>
                <div className={styles.listicondiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Date_icons.webp"
                    width={25}
                    height={25}
                    alt="certificate_icon"
                    loading="lazy"
                  />
                  <span>{course.certification}</span>
                </div>
                <div className={styles.listicondiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Save_icons.webp"
                    width={25}
                    height={25}
                    alt="certificate_icon"
                    loading="lazy"
                  />
                  <span>{course.description}</span>
                </div>
              </div>
              <div className={styles.buttons}>
                <button
                  className={styles.brochurebtn}
                  onClick={() => {
                    setTitleCourse(course.titleCourse);
                    setBrochureLinks(course.brochureLinks);
                    setBrochurePdfs(course.brochurePdfs);
                    setPopups(true);
                  }}
                >
                  Brochure <MdOutlineFileDownload />
                </button>

                {course.link ? (
                  <Link href={course.link} passHref>
                    <button className={styles.viewDetailsButton}>
                      View Details
                    </button>
                  </Link>
                ) : (
                  <button disabled className={styles.viewDetailsButton}>
                    No Details Available
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  const renderMasterCourse = () => (
    <div className={styles.MasterCard}>
      <Image
        src={isMobile ? masterCourse.mImage : masterCourse.image}
        width={isMobile ? 375 : 1200}
        height={isMobile ? 300 : 200}
        alt="MasterCard"
        loading="lazy"
        className={styles.bgImageMaster}
      />
      <div className={styles.contentConteiner}>
        <h2>{masterCourse.title}</h2>
        <div>
          <div className={styles.mastericon}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/yellow_save+(1).webp"
              width={25}
              height={25}
              alt="certificate_icon"
              loading="lazy"
            />
            <p>{masterCourse.duration}</p>
          </div>
        </div>

        <div>
          <div className={styles.buttons}>
            <button
              className={`${styles.brochurebtn} ${styles.brochurebtnMaster}`}
              onClick={() => {
                setTitleCourse(masterCourse.title);
                setBrochureLinks(masterCourse.brochureLinks);
                setBrochurePdfs(masterCourse.brochurePdfs);
                setPopups(true);
              }}
            >
              Brochure <MdOutlineFileDownload />
            </button>

            {masterCourse.link ? (
              <Link href={masterCourse.link} passHref>
                <button className={`${styles.viewDetailsButton} ${styles.viewDetailsButtonmaster}`}>
                  View Details
                </button>
              </Link>
            ) : (
              <button disabled className={styles.viewDetailsButton}>
                No Details Available
              </button>
            )}
          </div>
        </div>
      </div>
      <div className={styles.absloute}>
        <div>
          <h4>
            90+
            <span>Transferrable ECTS Credits</span>
          </h4>
        </div>
        <div>
          <h4>
            60+
            <span>Countries Recognition</span>
          </h4>
        </div>
      </div>
    </div>
  );

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setVisibleCount(isMobile ? 3 : 9);
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + (isMobile ? 3 : 9));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.newSection}>
          <div className={styles.tabHead}>
            <div className={styles.tabMain}>
              <div
                className={`${styles.tabdiv} ${
                  activeTab === "all" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("all")}
              >
                <div className={styles.sliders}>
                <div className={styles.imgText}>
                  <Image src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/round_side.webp" width={30} height={30} loading="lazy" alt="slide_icon"/>
                  <p>Popular Program </p>
                  </div>
                  {svgFile}
                </div>
              </div>
              {}
              <div
                className={`${styles.tabdiv} ${
                  activeTab === "Certifications" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("Certifications")}
              >
                <div className={styles.sliders}>
                <div className={styles.imgText}>
                <Image src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/cer_side.webp" width={30} height={30} loading="lazy" alt="slide_icon"/>
                  <p>Certification Courses</p>
                  </div>
                  {svgFile}
                </div>
              </div>
              <div
                className={`${styles.tabdiv} ${
                  activeTab === "domainCourse" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("domainCourse")}
              >
                <div className={styles.sliders}>
                <div className={styles.imgText}>
                <Image src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/level_side.webp" width={30} height={30} loading="lazy" alt="slide_icon"/>
                  <p>Domain Certification </p>
                  </div>
                  {svgFile}
              
                </div>
              </div>

              <div
                className={`${styles.tabdiv} ${
                  activeTab === "CloudDevops" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("CloudDevops")}
              >
                <div className={styles.sliders}>
                <div className={styles.imgText}>
                <Image src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/level_side.webp" width={30} height={30} loading="lazy" alt="slide_icon"/>
                  <p>Cloud & DevOps</p>
                  </div>
                  {svgFile}
            
                </div>
              </div>
              {/* <div
                className={`${styles.tabdiv} ${
                  activeTab === "dataScience" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("dataScience")}
              >
                            <div className={styles.sliders}>
                <p>Data Science</p>
                {svgFile}
              </div>
              </div> */}
              {/* <div
                className={`${styles.tabdiv} ${
                  activeTab === "MasterDegree" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("MasterDegree")}
              >
                             <div className={styles.sliders}>
                <p>Master's Degree</p>
                {svgFile}
              </div>
              </div> */}
              <div
                className={`${styles.tabdiv} ${
                  activeTab === "bfsi" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("bfsi")}
              >
                <div className={styles.sliders}>
                <div className={styles.imgText}>
                <Image src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/cer_side.webp" width={30} height={30} loading="lazy" alt="slide_icon"/>
                  <p>BFSI</p>
                  </div>
                  {svgFile}
                </div>
              </div>
              <div
                className={`${styles.tabdiv} ${
                  activeTab === "hr" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("hr")}
              >
                <div className={styles.sliders}>
                <div className={styles.imgText}>
                <Image src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/level_side.webp" width={30} height={30} loading="lazy" alt="slide_icon"/>
                  <p>HR</p>
                  </div>
                  {svgFile}
                </div>
              </div>
              <div
                className={`${styles.tabdiv} ${
                  activeTab === "manager" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("manager")}
              >
                <div className={styles.sliders}>
            <div className={styles.imgText}>
            <Image src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/level_side.webp" width={30} height={30} loading="lazy" alt="slide_icon"/>
            <p>Managers </p>
            </div>
                  {svgFile}
                </div>
              </div>
            </div>
          </div>
          
       <div>
       {activeTab === "all" && (
          <DataScienceCard dataScience={true} radio={true} />
        )}

          <div className={styles.CourseCardHead}>{renderCourses()}</div>
       </div>


          {/* Render the Master Course after the View More button */}
        </div>

        {courses[activeTab].length > visibleCount && (
            <div className={styles.viewMoreContainer}>
              <button
                onClick={handleViewMore}
                className={styles.viewMoreButton}
              >
                View More
              </button>
            </div>
          )}
      </div>
      {['all', 'bfsi', 'Certifications', 'hr', 'manager','CloudDevops', 'domainCourse'  ].includes(activeTab) && renderMasterCourse()}
    </section>
  );
};

export default memo(NewCourse);
