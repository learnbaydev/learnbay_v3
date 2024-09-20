import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { courses } from './NewCourseData'; 
import styles from './DataScienceCard.module.css';
import { Navigation, Pagination } from 'swiper'; 
import Image from 'next/image';
import { MdOutlineFileDownload } from 'react-icons/md';
import Link from 'next/link';

const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then((mod) => mod.SwiperSlide), { ssr: false });
const Popup = dynamic(() => import('@/components/Global/Popup/Popup'), { ssr: false });
const Form = dynamic(() => import('@/components/Global/Form/Form'), { ssr: false });


const CERTIFICATE_ICON = 'https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Cer_icons.webp';
const DATE_ICON = 'https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Date_icons.webp';
const SAVE_ICON = 'https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Save_icons.webp';

const DataScienceCard = React.memo(({ dataScience, radio, dataScienceCounselling, organicADS, dataScienceGeneric, interstedInHide, brochurePdf }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [titleCourse, setTitleCourse] = useState('');
  const [brochureLinks, setBrochureLinks] = useState('');
  const [brochurePdfs, setBrochurePdf] = useState('');
  const [popups, setPopups] = useState(false);

  // Debounce utility to reduce excessive function calls on resize
  const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const debouncedResize = debounce(handleResize, 300); // 300ms delay
    window.addEventListener('resize', debouncedResize);

    handleResize(); // Initial check

    return () => window.removeEventListener('resize', debouncedResize);
  }, []);

  const popupShow = useCallback(() => {
    setPopups(true);
  }, []);

  const renderSwiper = useCallback((sectionData, sectionTitle, sectionClass = '') => (
    <div className={`${styles.sectionContainer} ${sectionClass}`}>
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className={styles.swiperContainer}
      >
        {sectionData.map((course) => (
          <SwiperSlide key={course.title}>
            <div className={styles.maindiv}>
              <Image
                src={course.image}
                width={410}
                height={120}
                alt={course.title}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.mainImage}
                priority={course.isFeatured}
              />
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{course.title}</h3>
                <div className={styles.lists}>
                  <div className={styles.listicondiv}>
                    <Image src={CERTIFICATE_ICON} width={25} height={25} alt="certificate_icon" loading="lazy" />
                    <span>{course.duration}</span>
                  </div>
                  <div className={styles.listicondiv}>
                    <Image src={DATE_ICON} width={25} height={25} alt="date_icon" loading="lazy" />
                    <span>{course.certification}</span>
                  </div>
                  <div className={styles.listicondiv}>
                    <Image src={SAVE_ICON} width={25} height={25} alt="save_icon" loading="lazy" />
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
                      <button className={styles.viewDetailsButton}>View Details</button>
                    </Link>
                  ) : (
                    <button disabled className={styles.viewDetailsButton}>No Details Available</button>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  ), []);

  const renderDesktop = useCallback((sectionData, sectionTitle, sectionClass = '') => (
    <div className={`${styles.mainContainer} ${sectionClass}`}>
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      <div className={styles.desktopContainer}>
        {sectionData.map((course) => (
          <div key={course.title} className={styles.maindiv}>
            <Image
              src={course.image}
              width={410}
              height={120}
              alt={course.title}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.mainImage}
              priority={course.isFeatured}
            />
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>{course.title}</h3>
              <div className={styles.lists}>
                <div className={styles.listicondiv}>
                  <Image src={CERTIFICATE_ICON} width={25} height={25} alt="certificate_icon" loading="lazy" />
                  <span>{course.duration}</span>
                </div>
                <div className={styles.listicondiv}>
                  <Image src={DATE_ICON} width={25} height={25} alt="date_icon" loading="lazy" />
                  <span>{course.certification}</span>
                </div>
                <div className={styles.listicondiv}>
                  <Image src={SAVE_ICON} width={25} height={25} alt="save_icon" loading="lazy" />
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
                    <button className={styles.viewDetailsButton}>View Details</button>
                  </Link>
                ) : (
                  <button disabled className={styles.viewDetailsButton}>No Details Available</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ), []);

  return (
    <div className={styles.cardContainer}>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div className="whiteP" style={{ width: '340px', height: '400px' }}></div>
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

   
      {isMobile
        ? renderSwiper(courses.dataScienceAndAI, 'Data Science and AI')
        : renderDesktop(courses.dataScienceAndAI, 'Data Science and AI')}


      {isMobile
        ? renderSwiper(courses.DABA, 'Business Analytics & Data Analytics', styles.BADA)
        : renderDesktop(courses.DABA, 'Business Analytics & Data Analytics', styles.BADA)}

      {isMobile
        ? renderSwiper(courses.CloudS, 'Cloud Computing & Software Development', styles.CloudS)
        : renderDesktop(courses.CloudS, 'Cloud Computing & Software Development', styles.CloudS)}
    </div>
  );
});

export default DataScienceCard;
