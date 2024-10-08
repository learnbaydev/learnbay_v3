import React, { useEffect, useRef } from "react";
import styles from "./whyChooseSection.module.css";
import Image from "next/image";
import whyChooseData from "./WhyChooseData"; // Import the data

function AnimationNew() {
 const divRefs = useRef([]);

 useEffect(() => {
  const options = {
      threshold: 0.7, // Trigger when 50% of the element is in view
  };

 const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
       if (entry.isIntersecting) {
      entry.target.classList.add(styles.highlight); // Add highlight class when in view
      } else {
         entry.target.classList.remove(styles.highlight); // Remove highlight class when out of view
     }
    });
   }, options);

  divRefs.current.forEach((div) => {
    if (div) observer.observe(div); // Observe each div
  });

 // Cleanup observer on component unmount
  return () => {
    divRefs.current.forEach((div) => {
     if (div) observer.unobserve(div);
    });
   };
 }, []);

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.containerMain}>
        <div className={styles.header}>
          <h2>
            Why choose <span>Learnbay ?</span>
          </h2>
        </div>
        <div className={styles.columnDiv}>
          <div className={`${styles.divContainer} ${styles.divContainerANI}`}  >
            <div className={styles.svglogo}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/blue_why.webp"
                alt="Learnbay"
                quality={100}
                loading="lazy"
                width={70}
                height={70}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="300"
                viewBox="0 0 24 455"
                fill="none"
              >
                <path
                  d="M13.5 1.99756C13.5 1.16913 12.8284 0.497559 12 0.497559C11.1716 0.497559 10.5 1.16913 10.5 1.99756H13.5ZM10.9393 454.058C11.5251 454.644 12.4749 454.644 13.0607 454.058L22.6066 444.512C23.1924 443.927 23.1924 442.977 22.6066 442.391C22.0208 441.805 21.0711 441.805 20.4853 442.391L12 450.876L3.51472 442.391C2.92893 441.805 1.97919 441.805 1.3934 442.391C0.807611 442.977 0.807611 443.927 1.3934 444.512L10.9393 454.058ZM10.5 1.99756L10.5 452.998H13.5L13.5 1.99756H10.5Z"
                  fill="url(#paint0_linear_2844_6338)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2844_6338"
                    x1="12.5"
                    y1="2.01352"
                    x2="5.43854"
                    y2="452.895"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#6E7D87" stop-opacity="0" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className={styles.Contents}>
              <h5>Training mode </h5>
              <p className={styles.pTag}>
                You can choose from two flexible training modes to suit your
                needs and preferences:
              </p>
              <div className={styles.downBox}>
                <div className={styles.insideBox}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/3dicons+(1).webp"
                    alt="logo"
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                  <p>100% Live online classes</p>
                </div>
                <div className={styles.insideBox}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/iconnN.webp"
                    alt="logo"
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                  <p>Hybrid * classes</p>
                </div>
              </div>

              <span className={styles.noteP}>
                <span className={styles.orgText}>*Important Note:</span> Hybrid
                mode allows learners to benefit from both flexible, remote
                learning and direct, face-to-face interaction. Classroom
                training are available in{" "}
                <b>
                  Pune, Mumbai, Delhi, Chennai, Hyderabad, Kolkata, Bangalore.
                </b>
              </span>
            </div>

            <div className={styles.downArrow}></div>
          </div>

          <div className={`${styles.divContainer} ${styles.divContainerANI}`}>
            <div className={styles.svglogo}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/green_why.webp"
                alt="Learnbay"
                quality={100}
                loading="lazy"
                width={70}
                height={70}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="300"
                viewBox="0 0 24 455"
                fill="none"
              >
                <path
                  d="M13.5 1.99756C13.5 1.16913 12.8284 0.497559 12 0.497559C11.1716 0.497559 10.5 1.16913 10.5 1.99756H13.5ZM10.9393 454.058C11.5251 454.644 12.4749 454.644 13.0607 454.058L22.6066 444.512C23.1924 443.927 23.1924 442.977 22.6066 442.391C22.0208 441.805 21.0711 441.805 20.4853 442.391L12 450.876L3.51472 442.391C2.92893 441.805 1.97919 441.805 1.3934 442.391C0.807611 442.977 0.807611 443.927 1.3934 444.512L10.9393 454.058ZM10.5 1.99756L10.5 452.998H13.5L13.5 1.99756H10.5Z"
                  fill="url(#paint0_linear_2844_6338)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2844_6338"
                    x1="12.5"
                    y1="2.01352"
                    x2="5.43854"
                    y2="452.895"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#6E7D87" stop-opacity="0" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className={styles.Contents}>
              <h5>Specialize in your Domain</h5>
              <p className={styles.pTag}>
                Choose from BFSI, Retail, Healthcare, and more for focused,
                relevant learning.
              </p>
              <div className={styles.mainDivS}>
                <div className={styles.smalDiv}>
                  <Image src="" width={20} height={20} alt="" loading="lazy" />
                  <span>BFSI</span>
                </div>
                <div className={styles.smalDiv}>
                  <Image src="" width={20} height={20} alt="" loading="lazy" />
                  <span>Retail</span>
                </div>

                <div className={styles.smalDiv}>
                  <Image src="" width={20} height={20} alt="" loading="lazy" />
                  <span>Manufacturing</span>
                </div>
                <div className={styles.smalDiv}>
                  <Image src="" width={20} height={20} alt="" loading="lazy" />
                  <span>Technology</span>
                </div>
                <div className={styles.smalDiv}>
                  <Image src="" width={20} height={20} alt="" loading="lazy" />
                  <span>Consulting</span>
                </div>
                <div className={styles.smalDiv}>
                  <Image src="" width={20} height={20} alt="" loading="lazy" />
                  <span>Healthcare</span>
                </div>
              </div>
            </div>

            <div className={styles.downArrow}></div>
          </div>

          <div className={`${styles.divContainer} ${styles.divContainerANI}`}>
            <div className={styles.svglogo}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/green_why.webp"
                alt="Learnbay"
                quality={100}
                loading="lazy"
                width={70}
                height={70}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="300"
                viewBox="0 0 24 455"
                fill="none"
              >
                <path
                  d="M13.5 1.99756C13.5 1.16913 12.8284 0.497559 12 0.497559C11.1716 0.497559 10.5 1.16913 10.5 1.99756H13.5ZM10.9393 454.058C11.5251 454.644 12.4749 454.644 13.0607 454.058L22.6066 444.512C23.1924 443.927 23.1924 442.977 22.6066 442.391C22.0208 441.805 21.0711 441.805 20.4853 442.391L12 450.876L3.51472 442.391C2.92893 441.805 1.97919 441.805 1.3934 442.391C0.807611 442.977 0.807611 443.927 1.3934 444.512L10.9393 454.058ZM10.5 1.99756L10.5 452.998H13.5L13.5 1.99756H10.5Z"
                  fill="url(#paint0_linear_2844_6338)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2844_6338"
                    x1="12.5"
                    y1="2.01352"
                    x2="5.43854"
                    y2="452.895"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#6E7D87" stop-opacity="0" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className={styles.Contents}>
              <h5>Real Projects, Real Experience</h5>
              <p className={styles.pTag}>
                Master data science & AI by working on 100+ real-world projects
                with expert guidance.
              </p>
            <div className={styles.IBMDiv}>
<span>Get project Certification from:</span>
<Image src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/IBM_+(1).webp" width={60} height={60} alt="IBM" loading="lazy"/>

            </div>
            </div>

            <div className={styles.downArrow}></div>
          </div>



          <div className={`${styles.divContainer} ${styles.divContainerANI}`}>
            <div className={styles.svglogo}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/purple_why.webp"
                alt="Learnbay"
                quality={100}
                loading="lazy"
                width={70}
                height={70}
              />
     
            </div>

            <div className={styles.Contents}>
              <h5>Reach your career goals </h5>
              <p className={styles.pTag}>
              Advance your career with our effective Placement Support.
              </p>
            </div>

            <div className={styles.downArrow}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnimationNew;
