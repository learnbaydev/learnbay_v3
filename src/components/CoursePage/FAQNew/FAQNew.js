import React, { useState } from 'react';
import styles from './FAQNew.module.css';
import FAQ from '../FAQNew/FAQ';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';

function FAQNew({ background, FAQNewData, toolsdynamic, DSAFresherFAQT }) {
  // Initialize state based on your categories
  const [dataLoop, setDataLoop] = useState([
    { title: 'Course Related', value: true },
    { title: 'Domain Electives', value: false },
    { title: 'Payments and Scholarships', value: false },
    { title: 'Capstone and Real-Time Projects', value: false },
    { title: 'Certification', value: false },
    { title: 'Job Assistance', value: false },
    { title: 'Mentorship', value: false },
    { title: 'Support', value: false },
    { title: 'Eligiblity Criteria', value: false },
    { title: 'Generic Queries', value: false },
  ]);

  // Optimized function to change tabs
  const menuChange = (index) => {
    const updatedData = dataLoop.map((item, i) => ({
      ...item,
      value: i === index, // Set clicked index to true, all others to false
    }));
    setDataLoop(updatedData);
  };

  return (
    <div className={styles.course} id="faqs">
      {/* Header Logic */}
      {toolsdynamic ? (
        <h4 className={styles.infop}>
          Business Analyst Certification Course FAQs
        </h4>
      ) : DSAFresherFAQT ? (
        <h4 className={styles.infop}>FAQs for DSA Course [Freshers]</h4>
      ) : (
        <h4 className={styles.infop}>FAQs</h4>
      )}

      <p>
        Curriculum is specifically engineered to meet the expectations of
        leading tech companies.
      </p>

      {/* DESKTOP VIEW */}
      <div className={background ? styles.backgroundcolor : styles.courseM}>
        <div className={styles.courses}>
          <div className={styles.listPanel}>
            {FAQNewData?.map((data, index) => (
              <span
                key={index}
                onClick={() => menuChange(index)}
                style={
                  dataLoop[index]?.value
                    ? {
                        background: 'white',
                        color: '#000',
                        borderLeft: '4px solid #2D9CD7',
                      }
                    : {}
                }
              >
                {data.sectionName}
              </span>
            ))}
          </div>

          {FAQNewData?.map((dataF, index) =>
            dataLoop[index]?.value ? (
              <div className={styles.gridPanel} key={index}>
                <FAQ FaqData={dataF.data} />
              </div>
            ) : null
          )}
        </div>
      </div>

      {/* MOBILE VIEW (SWIPER) */}
      <div className={styles.courseD}>
        <div className={styles.listPanel}>
          <Swiper
            slidesPerView={2}
            spaceBetween={0}
            grabCursor={true}
            navigation={true}
            style={{
              paddingLeft: '5px',
              paddingRight: '5px',
              overflow: 'hidden',
              '--swiper-navigation-color': '#0072BC',
              '--swiper-navigation-size': '20px',
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {FAQNewData?.map((data, index) => (
              <SwiperSlide className={styles.slide} key={index}>
                <span
                  onClick={() => menuChange(index)}
                  style={
                    dataLoop[index]?.value
                      ? {
                          background: '#E1F1F566',
                          color: '#0072BC',
                          textAlign: 'center',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }
                      : {
                          background: 'none',
                          textAlign: 'center',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }
                  }
                >
                  {data.sectionName}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {FAQNewData?.map((dataF, index) =>
          dataLoop[index]?.value ? (
            <div className={styles.gridPanel} key={index}>
              <FAQ FaqData={dataF.data} />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default FAQNew;
