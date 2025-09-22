import React from "react";
import styles from "./Benefits.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const benefitsData = [
  {
    title: "What skills will I actually build?",
    description:
      "Problem-solving on real datasets, GenAI application, and end-to-end project execution.",
    image:
      "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Benefit-1.webp",
    alt: "Stacking wooden blocks",
  },
  {
    title: "How does this help in jobs?",
    description:
      "Recruiters see validated, company-backed projects on your profile — which makes you job-ready faster.",
    image:
      "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Benefit-2.webp",
    alt: "Candidate in an interview",
  },
  {
    title: "Do I get interview support after this?",
    description:
      "Yes, these projects strengthen your portfolio + interview prep sessions, improving hiring chance.",
    image:
      "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Benefit-3.webp",
    alt: "Interview discussion at a table",
  },
];

export default function Benefits() {
  // Mobile breakpoint: same as your CSS grid swap
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 960px)");
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener
      ? mq.addEventListener("change", onChange)
      : mq.addListener(onChange);
    return () => {
      mq.removeEventListener
        ? mq.removeEventListener("change", onChange)
        : mq.removeListener(onChange);
    };
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={`${styles.header} ${styles.headerResponsive}`}>
        <h2 className={styles.title}>What Benefits Can I Expect to Receive?</h2>
        <p className={styles.subtitle}>
          Gain insights from AI visionaries. Our podcast shares lessons and
          predictions from leaders.
        </p>
      </div>

      {/* Desktop / tablet (unchanged): grid cards */}
      {!isMobile && (
        <div className={styles.cards}>
          {benefitsData.map((b, i) => (
            <article className={styles.card} key={i}>
              <h3 className={styles.cardTitle}>{b.title}</h3>
              <p className={styles.cardDesc}>{b.description}</p>

              <div className={styles.imageBlock}>
                <div className={styles.badge} aria-hidden="true">
                  ↗
                </div>
                <img
                  className={styles.image}
                  src={b.image}
                  alt={b.alt}
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Mobile only: swiper */}
      {isMobile && (
        <div className={styles.mobileCarousel}>
          <Swiper
            modules={[Pagination]}
            slidesPerView={1.08}
            spaceBetween={16}
            pagination={{ clickable: true }}
          >
            {benefitsData.map((b, i) => (
              <SwiperSlide key={i}>
                <article className={styles.card}>
                  <h3 className={styles.cardTitle}>{b.title}</h3>
                  <p className={styles.cardDesc}>{b.description}</p>

                  <div className={styles.imageBlock}>
                    <div className={styles.badge} aria-hidden="true">
                      ↗
                    </div>
                    <img
                      className={styles.image}
                      src={b.image}
                      alt={b.alt}
                      loading="lazy"
                    />
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
}
