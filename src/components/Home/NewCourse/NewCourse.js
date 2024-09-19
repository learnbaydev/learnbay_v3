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

  const renderCourses = () => {
    const selectedCourses = courses[activeTab];
    const visibleCourses = selectedCourses.slice(0, visibleCount);

    return (
      <>
        {visibleCourses.map((course, index) => (
          <div className={styles.courseCard} key={index}>
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
                <Form
                  titleCourse={titleCourse}
                  brochureLink={brochureLinks}
                  brochurePdf={brochurePdfs}
                  dataScience={dataScience}
                  dataScienceCounselling={dataScienceCounselling}
                  dataScienceGeneric={dataScienceGeneric}
                  radio={radio}
                  downloadBrochure
                  upSkillingHide={true}
                  interstedInHide={interstedInHide}
                />
              </div>
            </Popup>

            <Image
              src={course.image}
              width={410}
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
        width={isMobile ? 375 : 1350}
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
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Save_icons.webp"
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
              className={styles.brochurebtn}
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
        <div className={styles.tabHead}>
          <div className={styles.tabMain}>
            <div
              className={`${styles.tabdiv} ${
                activeTab === "all" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("all")}
            >
              <p>All Courses</p>
            </div>
            <div
              className={`${styles.tabdiv} ${
                activeTab === "domainCourse" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("domainCourse")}
            >
              <p>Domain Course</p>
            </div>
            <div
              className={`${styles.tabdiv} ${
                activeTab === "dataScience" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("dataScience")}
            >
              <p>Data Science</p>
            </div>
            <div
              className={`${styles.tabdiv} ${
                activeTab === "MasterDegree" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("MasterDegree")}
            >
              <p>Master's Degree</p>
            </div>
            <div
              className={`${styles.tabdiv} ${
                activeTab === "CloudDevops" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("CloudDevops")}
            >
              <p>Cloud & DevOps</p>
            </div>
          </div>
        </div>

        {activeTab === "all" && (
          <DataScienceCard dataScience={true} radio={true} />
        )}

        <div className={styles.CourseCardHead}>{renderCourses()}</div>

        {courses[activeTab].length > visibleCount && (
          <div className={styles.viewMoreContainer}>
            <button onClick={handleViewMore} className={styles.viewMoreButton}>
              View More
            </button>
          </div>
        )}

        {/* Render the Master Course after the View More button */}
        {activeTab === "all" && renderMasterCourse()}
      </div>
    </section>
  );
};

export default memo(NewCourse);
