import Image from "next/image";
import styles from "./LJourney.module.css";
import { useEffect, useRef } from "react";
import { BsPersonFill } from "react-icons/bs";

const LJourney = () => {
  const animationDivRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elements = animationDivRef.current.querySelectorAll(`.${styles.cercleone}`);
          const svgs = animationDivRef.current.querySelectorAll("svg");
          const arrows = animationDivRef.current.querySelectorAll(`.${styles.arrow}`);

          if (entry.isIntersecting) {
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add(styles.animate);
                svgs[index].classList.add(styles.animate);
                if (index < arrows.length) {
                  arrows[index].classList.add(styles.animate);
                }
              }, index * 500); // Adjust delay as needed
            });
          } else {
            elements.forEach((element, index) => {
              element.classList.remove(styles.animate);
              svgs[index].classList.remove(styles.animate);
              if (index < arrows.length) {
                arrows[index].classList.remove(styles.animate);
              }
            });
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    if (animationDivRef.current) {
      observer.observe(animationDivRef.current);
    }

    return () => {
      if (animationDivRef.current) {
        observer.unobserve(animationDivRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.animHead}>
      <h2>Learning journey at Learnbay</h2>

      <div ref={animationDivRef} className={styles.animationdiv}>
        <div className={`${styles.cercleone}`}>
          <BsPersonFill className={styles.icons} />
          <Image  className={styles.icons} src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ani_person.gif" width={100} height={100} loading="lazy"/>
        </div>
        <div className={styles.arrow}></div>
        <div className={`${styles.cercleone}`}>
          <BsPersonFill className={styles.icons} />
        </div>
        <div className={styles.arrow}></div>
        <div className={`${styles.cercleone}`}>
          <BsPersonFill className={styles.icons} />
        </div>
        <div className={styles.arrow}></div>
        <div className={`${styles.cercleone}`}>
          <BsPersonFill />
   
        </div>
      </div>

      <div className={styles.boxmain}>
        <div className={styles.box}>
          <p>Join our upskilling program</p>
          <span>
            Understand key concepts with live sessions, 1:1 doubt clearing with
            experts, and quizzes.
          </span>
        </div>

        <div className={styles.box}>
          <p>Complete real-world projects</p>
          <span>
            Work alongside industry experts on practical projects to enhance
            your portfolio.
          </span>
        </div>

        <div className={styles.box}>
          <p>Enhance your resume & interview skills</p>
          <span>
            Benefit from mock interviews and resume-building sessions to prepare
            for the job market.
          </span>
        </div>

        <div className={styles.box}>
          <p>Achieve your career goals</p>
          <span>
            Receive dedicated placement assistance to land interviews with top
            companies.
          </span>
        </div>
      </div>
    </div>
  );
};

export default LJourney;
