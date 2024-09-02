import React, { useState, useRef, useEffect } from "react";
import styles from "./SyllabusSection.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { EffectCoverflow } from "swiper";
import { MdOutlineTouchApp } from "react-icons/md";
import PopupContent from "@/components/Global/PopupContent/PopupContent";

const SyllabusSection = ({
  sections = [],
  brochureLink,
  brochurePdf,
  idss,
  videoId,
  interstedInHide,
  upSkillingHide,
  dataScience,
  dataScienceCounselling,
  radio,
  downloadBrochure,
  dataScienceGeneric,
}) => {
  const [openSliderIndex, setOpenSliderIndex] = useState(null);
  const [initialSlide, setInitialSlide] = useState(0);
  const [activeSlides, setActiveSlides] = useState([]);
  const swiperRef = useRef(null);

  const toggleSlider = (index) => {
    setInitialSlide(index * 1);
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

  const [popups, setPopups] = useState(false);

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
                  <p>Tools and topics covered:</p>
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
                  initialSlide={initialSlide} // Set the initial slide dynamically
                  onSlideChange={updateActiveSlides}
                >
                  {section.popuplist.map((item, idx) => (
                    <SwiperSlide
                      key={idx}
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
                              <span>{section.duration}</span>
                            </div>
                          </div>
                          <h5 className={styles.titleH}>{item.title}</h5>
                          <div className={styles.slidercontent}>
                            {item.modules.map((module, moduleIdx) => (
                              <div className={styles.module} key={moduleIdx}>
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
        <div className={styles.btnone}>
          {" "}
          <svg
            height="42"
            width="42"
            fill="none"
            viewBox="0 0 42 42"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              height="42"
              id="mask0_1326_328"
              style={{ maskType: "alpha" }}
              width="42"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
            >
              <rect height="42" width="42" fill="url(#pattern0_1326_328)" />
            </mask>
            <g mask="url(#mask0_1326_328)">
              <rect height="40" width="40" fill="#72BC00" x="2" y="2" />
            </g>
            <defs>
              <pattern
                height="1"
                id="pattern0_1326_328"
                width="1"
                patternContentUnits="objectBoundingBox"
              >
                <use
                  transform="scale(0.0104167)"
                  xlinkHref="#image0_1326_328"
                />
              </pattern>
              <image
                height="96"
                id="image0_1326_328"
                width="96"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>{" "}
          Start Your Application
        </div>
        <div className={styles.btntwo} onClick={popupShow}>
          <svg
            height="34"
            width="46"
            fill="none"
            viewBox="0 0 46 34"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              height="34"
              id="mask0_1326_335"
              style={{ maskType: "alpha" }}
              width="46"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
            >
              <rect height="34" width="46" fill="url(#pattern0_1326_335)" />
            </mask>
            <g mask="url(#mask0_1326_335)">
              <rect
                height="41.0833"
                width="52.7083"
                fill="#F21010"
                x="0.957031"
                y="0.708252"
              />
            </g>
            <defs>
              <pattern
                height="1"
                id="pattern0_1326_335"
                width="1"
                patternContentUnits="objectBoundingBox"
              >
                <use
                  transform="matrix(0.00769928 0 0 0.0104167 0.130435 0)"
                  xlinkHref="#image0_1326_335"
                />
              </pattern>
              <image
                height="96"
                id="image0_1326_335"
                width="96"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE9klEQVR4nO2dS4gdRRSG2yATBUXJLjEbYchKQdGIEswiD4hxBJdudCFBFEVXakBFBDNJwFVw4QvcuAwSQjIGEgcFRUhAcCNBUBTMw0fUeM1DxXxSuWdxU+murunbXVXdp34YuNM3U+ec+qqruh59UhRZWVlZWVlZWVlZWVktCNgMvAscB/4inE4Au4DlKkECa4BPia8FdRCA9cBvpKMFNRCk5adU+bogAIukq0PAdcXAB9zUtTDYO0Gedsr0N/ACsKpj+7ohyKNmmV4MZB/VEIBRRbArA9nXPSZURRnbvhoIVRHGts+4uxl+d5QwgBlg/+DvhFQBFOPvhg8hZQAqIKQOYPAQ+gBg0BD6AmCwEPoEYJAQ+gZgcBD6CGBQEPoKYDAQ+gxgEBD6DqD3EBIAMKpwYZUKCAkAOF7hwvYGZS3v3SpqAgDecWyJbm9wJ/QLQgIANhFHaUCo8i6wD58QR7tCxlkVfKkC+3Ar8AvhdSpknFXBlyqCH/cDZ8LWf/g4ywJPxjFgNvQpvRhx2kEn5xiwEXgb+NoxT8gA+qQUG1rajmmJM5RjwBzwsbxxM5LPW9u247CvFwDwuqPDfq1NWw4fdAJg3PLr9EBb9hx+qAWw6AHgSFv2HH6oBfCnVfS9wH3WtbNt2XP4oRbARavoG4AbrWv/tGXP4YdaAD9YRa+VlwIn9Xtb9hx+qAVw0Cr6JZnpTurHtuw5/FAL4BmraLO88Kx17Whb9hx+qAWwGrhkFX/M+v3Dtuw5/NAJwMgj/cEbRccCdgB3AzfJj/m8o2u7qQCYqwHwWKFVgQBcA3zlAHBHoVUhABgBD1WYMgtz1xZaFQqAEXCgxNThIoDk4NZu4OREXqKZELZTAjBrZr2hn4DEtqlw3aciKH8kNdrchT3Ltmn5uk9FAM9VmDOVc3sXNmPEmaxjwGdV9sx6kAzUdwGPAK8AH8gc4kvgW+BXObK45B019QAYL8BNdj9lXVETee2oZQBcfgKZ1L+0p9odNbUAGE/CtgA/052OxI6zsbpyjPF6ixl0v5myck8DTwJ3ArcA1zfZUVMDgPGO18vAHx6VO5Jj4s8DDwPfVfy7i5JabYOAXZcBXF3xy4CngZ9qKt08xbwvTzxXvC4ErKiYLdepdjbddkNrTW04BtwGfOFZWW96jBnblnhcfUuIODvRtI4Bj5dsvFfpvO8rR3I37AHO1ZT5aog4O9M0jgHzFX9+qWLSteSNFwHxhFkzAr4XiOaoy2Gflt9GnJ2qqWMyaJbpc+AeYJ913XQpK8JEVepvqWL5M7VjJe91XZDNdtOHP1VS5LYwEekBMLL+ZL1cXyswJmUG6GVBAlIMYJ1MkOwZr+mvZ8NEowvAIn56tEhAQwQw51H580UiGhyAmhcv/gtV+bLXa7YbT8lP6f9B4xunpDqwy5tJtmUAD0p3ZMaEs8BHZizozGG/vd6r0hD4xOnIM7EzWQCxJa20NjVNXZw16W5OJ5+vJ0EAV0BwAfDINXSiF/l6Ysh0D7h1uTtyfO+T3ma+N/l6QmsJ+YGafNd9WpuI+Xqayqwp3dwAQro5hSLm62mqvWbNqWMI4RI6RczXM43es9eXPBP3+Sh8cr9Y+Xqm1Fsd3AnxUpnFyNeTGIRk8sgFy9eTEIQ0Kn9Iwn9MSC+hqyIIh3Llx4OQKz+UZEzYKe8inJTPuc/PysrKyiqa6n+6q7y7mWXSQgAAAABJRU5ErkJggg=="
              />
            </defs>
          </svg>{" "}
          DownLoad Brochure
        </div>
      </div>
    </div>
  );
};

export default SyllabusSection;
