import React, { useState, useRef, useEffect, memo } from "react";
import styles from "./NewCourse.module.css";
import Image from "next/image";
import { courses } from "./NewCourseData"; // Import the course data
import Link from "next/link";
import dynamic from "next/dynamic";
import { MdOutlineFileDownload } from "react-icons/md";

const Popup = dynamic(() => import("@/components/Global/Popup/Popup"));
const Form = dynamic(() => import("@/components/Global/Form/Form"));

const NewCourse = ({
  dataScience,
  radio,
  dataScienceCounselling,
  organicADS,
  dataScienceGeneric,
  interstedInHide,
  brochurePdf,
}) => {
  const [activeTab, setActiveTab] = useState("all"); // State for active tab
  const [visibleCount, setVisibleCount] = useState(9); // State to manage the number of visible cards
  const [isMobile, setIsMobile] = useState(false); // State to manage if the view is mobile or not
  const containerRef = useRef(null); // Create a ref for the container element

  useEffect(() => {
    // Detect if the user is on mobile and set the visible count to 3
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        setVisibleCount(3); // Show only 3 cards initially for mobile view
      } else {
        setIsMobile(false);
        setVisibleCount(9); // Show 9 cards initially for desktop view
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Add event listener for resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup event listener
  }, []);

  const renderCourses = () => {
    const selectedCourses = courses[activeTab]; // Get selected courses based on active tab
    const visibleCourses = selectedCourses.slice(0, visibleCount); // Show only a limited number of courses

    const [titleCourse, setTitleCourse] = useState();
    const [brochureLinks, setBrochureLinks] = useState();
    const [brochurePdfs, setBrochurePdf] = useState();
    const [popups, setPopups] = useState(false);
    const popupShow = () => {
      setPopups(true);
    };

    return visibleCourses.map((course, index) => (
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
                setBrochurePdf(course.brochurePdfs);
                popupShow();
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
    ));
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setVisibleCount(isMobile ? 3 : 9); // Reset visible count when switching tabs, based on mobile or desktop view
    // Scroll to the top of the container
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the top of the container
    }
  };

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + (isMobile ? 3 : 9)); // Load 3 more cards for mobile, 9 for desktop
  };

  return (
    <section className={styles.section}>
      <div className={styles.container} ref={containerRef}>
        {/* Tab section with click handlers */}
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
              <p>Cloud & Devops</p>
            </div>
          </div>
        </div>

        <div className={styles.CourseCardHead}>{renderCourses()}</div>

        {/* "View More" button */}
        {courses[activeTab].length > visibleCount && ( // Show button only if there are more courses to show
          <div className={styles.viewMoreContainer}>
            <button onClick={handleViewMore} className={styles.viewMoreButton}>
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(NewCourse);
