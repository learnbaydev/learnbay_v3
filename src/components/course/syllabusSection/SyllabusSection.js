import React, { useState, useRef, useEffect } from "react";
import styles from "./SyllabusSection.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { EffectCoverflow } from "swiper";
import { FaRegFilePdf } from "react-icons/fa";
import PopupContent from "@/components/Global/PopupContent/PopupContent";

const SyllabusSection = ({
  sections = [],
  brochureLink,
  brochurePdf,
  interstedInHide,
  radio,
}) => {
  const [openSliderIndex, setOpenSliderIndex] = useState(null);
  const [initialSlide, setInitialSlide] = useState(0);
  const [activeSlides, setActiveSlides] = useState([]);
  const swiperRef = useRef(null);
  const [popups, setPopups] = useState(false);

  const toggleSlider = (index) => {
    setInitialSlide(index);
    setOpenSliderIndex(openSliderIndex === index ? null : index);
  };

  const updateActiveSlides = () => {
    if (!swiperRef.current) return;

    const swiperInstance = swiperRef.current.swiper;
    const slides = Array.from(swiperInstance.slides);
    const swiperRect = swiperInstance.el.getBoundingClientRect();
    const swiperCenter = swiperRect.left + swiperRect.width / 2;
    const activeRange = 0.3 * swiperRect.width;

    const newActiveSlides = slides
      .filter((slide) => {
        const slideRect = slide.getBoundingClientRect();
        const slideCenter = (slideRect.left + slideRect.right) / 2;
        return Math.abs(swiperCenter - slideCenter) < activeRange;
      })
      .map((slide) => slide.getAttribute("data-swiper-slide-index"));

    setActiveSlides(newActiveSlides);
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;

    if (swiperInstance) {
      swiperInstance.on("slideChange", updateActiveSlides);
      swiperInstance.on("transitionEnd", updateActiveSlides);
      updateActiveSlides();
    }

    return () => {
      swiperInstance?.off("slideChange", updateActiveSlides);
      swiperInstance?.off("transitionEnd", updateActiveSlides);
    };
  }, [openSliderIndex]);

  if (!Array.isArray(sections) || sections.length === 0) {
    return <div>No sections available.</div>;
  }

  const popupShow = () => {
    setPopups(true);
  };

  return (
    <div className={styles.mainConteiner}>
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Download Syllabus"
        downloadBrochure
        dataScience={true}
        interstedInHide={interstedInHide}
        brochureLink={brochureLink}
        brochurePdf={brochurePdf}
        radio={radio}
      />
      <h2 className={styles.headline}>
        Explore Our <span>Syllabus</span>
      </h2>
      {sections.map((section, index) => (
        <div key={section.id} className={styles.gridConteiner}>
          <div className={styles.gridleft}>
            <div className={styles.leftinside}>
              <Image
                src={section.trackIcon}
                width={section.width}
                height={section.height}
                alt="trackIcon"
              />
              <h3>{section.title}</h3>
            </div>
            {index < 3 && <div className={styles.verticalLine}></div>}
          </div>
          <div className={styles.gridryt}>
            <div className={styles.rytmain}>
              <div className={styles.ryttop}>
                <p>{section.description}</p>
                <div className={styles.date}>
                  <p>{section.duration}</p>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.contentlist}>
                  <p className={styles.pline}>
                    <span className={styles.org}>
                      {section.contentModule}:{" "}
                    </span>
                    {section.contentDescription}
                  </p>
                  <ul className={styles.lists}>
                    {section.contentDetails.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  <div
                    className={styles.popupbtn}
                    onClick={() => toggleSlider(index)}
                  >
                    Read more
                  </div>
                </div>
                <div className={styles.tools}>
                  <p>Topics</p>
                  <Image
                    src={section.toolsImg}
                    width={section.toolwidth}
                    height={section.toolheight}
                    alt="tools"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {openSliderIndex === index && (
            <div className={styles.popup}>
              {Array.isArray(section.popuplist) &&
              section.popuplist.length > 0 ? (
                <Swiper
                  spaceBetween={40}
                  slidesPerView={3}
                  centeredSlides={true}
                  className={styles.swiper}
                  ref={swiperRef}
                  modules={[EffectCoverflow]}
                  effect="coverflow"
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 40,
                    depth: 100,
                    modifier: 2,
                  }}
                  initialSlide={initialSlide}
                  onSlideChange={updateActiveSlides}
                  breakpoints={{
                    320: { slidesPerView: 1.1, spaceBetween: 10 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                    1440: { slidesPerView: 3, spaceBetween: 30 },
                  }}
                >
                  {section.popuplist.map((item, idx) => (
                    <SwiperSlide
                      key={item.id}
                      data-swiper-slide-index={idx}
                      className={`${styles.swiperSlide} ${
                        activeSlides.includes(idx.toString())
                          ? styles.active
                          : ""
                      }`}
                    >
                      <div className={styles.card}>
                        <div className={styles.cardContent}>
                          <div className={styles.cardHead}>
                            <div className={styles.termGreen}>{item.term}</div>
                            <div className={styles.date}>
                              <span>{item.duration}</span>
                            </div>
                          </div>
                          <h5 className={styles.titleH}>{item.title}</h5>
                          <div className={styles.slidercontent}>
                            {item.modules.map((module, moduleIdx) => (
                              <div
                                className={styles.module}
                                key={module.moduleTitle}
                              >
                                <div className={styles.popupleft}>
                                  <span className={styles.rotateText}>
                                    {module.moduleTitle}
                                  </span>
                                </div>
                                <div className={styles.rytdiv}>
                                  <p>{module.moduleContent}</p>
                                  <ul className={styles.listItem}>
                                    {module.moduleList.map(
                                      (detail, detailIdx) => (
                                        <li key={detailIdx}>{detail}</li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <p>No content available.</p>
              )}
              <button
                className={styles.closePopup}
                onClick={() => toggleSlider(null)}
              >
                &#x2715;
              </button>
            </div>
          )}
        </div>
      ))}
      <div className={styles.buttondiv}>
        <div className={styles.btnone} onClick={popupShow}>
          Start Your Application
        </div>
        <div className={styles.btntwo} onClick={popupShow}>
          <div className={styles.pdficon}>
            <FaRegFilePdf />
          </div>
          Download Brochure
        </div>
      </div>
    </div>
  );
};

export default SyllabusSection;
