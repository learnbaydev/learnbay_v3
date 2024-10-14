import React, { useMemo } from "react";
import styles from "./whyChooseSection.module.css";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

function WhyChooseSection() {

  const SVgRightMark = useMemo(() => (
    <svg
      height="25"
      width="25"
      fill="none"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        height="30"
        id="mask0_324_1939"
        style={{ maskType: "alpha" }}
        width="30"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <rect height="30" width="30" fill="url(#pattern0_324_1939)" />
      </mask>
      <g mask="url(#mask0_324_1939)">
        <rect
          height="36"
          width="34.5"
          fill="#FE7A36"
          x="-1.50073"
          y="-2.99951"
        />
      </g>
      <defs>
        <pattern
          height="1"
          id="pattern0_324_1939"
          width="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(0.01)" xlinkHref="#image0_324_1939" />
        </pattern>
        <image
          height="100"
          id="image0_324_1939"
          width="100"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEsklEQVR4nO1dPWtUQRQ9ovEjWMQi2UTRQD5AcCERXDBGLExMIrGRrEkuqGChFiLI21/hD7DW0jJYWFhaCCIiqcXWQkRLO1cG7sMQsrvv7c7HnXn3wCFk2X375px983HnzgygUCgUCoVCoVAoFIpuGAYwDmAWQB3APIAGgCvMBr9W5/eM82cUFnAEwAQLvArgDgDqk+azK3ytCb62ogCGAEwDWAKwNYABvWiufZ2/y3ynYh9qABYBbDo0oRM3uboz91B5mDr+RgATqAPXAJyroivm13hTgAHUxZgxVADHASwIEJwK8lrKvbQZAE0BIlNJNrnxTwZD3GhS5LwK4GjBMh/iLvZt/mv+F4FTAG4JEJMs0ZRlpEeZzdP0CUB7Dz9KeMpqkVZRVGCQaQaXB+E8gO/7zMj5DcBJBMKk44EdBeYWl7GoGTmfhDDDxJC2BYhGjrnNHZWiZhi+8m3GZEXMoD1cLmiG4QvfbUbK1RQdwBaA3wXNaPOA01tvapBobBXMeO3LDBPKXhcgEHlkBuBXCTPeAjjmy5CYQiGUuhkzAgQiNeN/oDDFgR/F+GQgkfgUOTLjg28zxgSIRELN+ALgvu8ZSMmTSyTADPI55jgjQCgSbkbO0z4MkTQHToLNINbKKWoCxKJIzMjptC1ZFCAYRWQGcW/U2VRsiLwpitgMYs2cJONNCxCNIjMj55QLQ5YECEcRmkGctmo9opviXEfmwQxi7awmeE8IEI8iNSOnSZu1hnkBAlLEZhjO2TRkVYCIFLEZxOtTrCGV6dkskBnEGlrBsAAhKXIzcp6wYci4ADEpATOshVFmHYv1EMAzAPeEZId8dngveWLdQKg7urmnAHYB/GUh/gDYAXA3UTMML9gw5KKDG3sM4KdjUVrCzCAePgyMhoMbe+NYnJZAMwwvSc27+upQpJZQM4i1jNaQdh9iSTbDmiEuqqwdB6K1hJthrcpy0ag/6tKot/sQLwYzrDXqdeGDtUzIoM9bt9flwHBQMbOIzLA2MHQdOulX1CwyM6yFTnwEF8u2AbuRtBlOgou+wu9ZyV98TE8G8UoBa1jxdNOZZVOkmGE9i9HnFG5myRRJZlifwvWd5JANaIo0M6wnOYRIA8r6NEWiGdbTgMDJXr4LkkXYtfWSKBcylTQraIpUM5ylkoZMts56mCLZDGfJ1qGXI2QAfnRYYClh0Od9OYKEBTsPALwE8B7AOwDPBQjei84301wWUEiKhM6XtIEXMoYuKEXCTjvPWceagMKScJp8aG8YFVBgEk7vGzFXbRcgKsHLCACz+cyGgMKTMDZtznuURcoLQUnSqLwMtOqCn0FgUVRxiz/qsOu1mMNhRhJaZUV9thu9tiD3jipuE0tcZquTTzZRtY2Ut2M4kWemgluNi8fZxDeq2TpgM37xqOJxFeIxktiBLusSe1NlMZTI4HEhtRNCpyOtwjYkhENcIbZj8xb5npPHmPBJrlWe86kcRgMl4FGXOXCzL3HlUeNI6WbAw4krcdRqPz2yKX5qfBzfPSUpQhvLAfdzvD5lkGhyk6ujOQ4EHg5duFQwzBGAWV7ROsfr6BeYDX7tAr+nFnI6VaFQKBQKhUKhUCgQAf4B6mw/oZlF0aYAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  ), []);

  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <h2>
          Why choose <span className={styles.orangeLine}>Learnbay ?</span>
        </h2>
        <div className={styles.innerDivOne}>
          <div className={styles.oneFirst}>
            <h3>Training mode</h3>
            <p>
              You can choose from two flexible training modes to suit your needs
              and preferences:
            </p>
            <div className={styles.innerBox}>
              <div className={styles.iconBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/online_why.webp"
                  alt="Learnbay"
                  quality={100}
                loading="lazy"
                  width="80"
                  height="80"
                />
                <p>100% Live online classes</p>
              </div>
              <div className={styles.iconBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/location_why.webp"
                  alt="Learnbay"
                  quality={100}
                loading="lazy"
                  width="80"
                  height="80"
                />
                <p>Hybrid * classes</p>
              </div>
            </div>
            <div className={styles.botDiv}>
              <p>
                <span>*Important Note:</span> Hybrid mode allows learners to
                benefit from both flexible, remote learning and direct,
                face-to-face interaction.{" "}
              </p>
              <p>
              Classroom training are available in <b>Pune, Mumbai, Delhi, Chennai,
                Hydrabad, Kolkata, Bangalore.</b>
              </p>
            </div>
          </div>

          <div className={styles.oneSecond}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/choose_first_right.webp"
              alt="Learnbay"
              quality={100}
            loading="lazy"
              width="795"
              height="770"
            />
          </div>
        </div>
        <div className={styles.innerDivTwo}>
          <div className={styles.twoFirst}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/Domain_left_side.webp"
              alt="Learnbay"
              quality={100}
            loading="lazy"
              width="711"
              height="335"
            />
          </div>
          <div className={styles.twoSecond}>
            <p className={styles.twoSecondTop}>
              How can you make your previous experience count?
            </p>
            <h3>Domain electives</h3>
            <p className={styles.domainText}>
              Select your domain electives and engage in live projects across
              various industries to gain hands-on experience. This practical
              approach will deepen your understanding of real-world challenges
              and enhance your expertise.
            </p>
          </div>
        </div>
        {/* <div className={styles.innerDivThree}>
          <div className={styles.threeFirst}>
            <h3 className={styles.ytHead}>Practical project experience</h3>
            <div className={styles.contentIconDiv}>
              <div>
                <FaCheckCircle className={styles.icon} />
                <div>
                  <p className={styles.pHead}>Practical Skills</p>
                  <p className={styles.pBot}>
                    Gain practical experience in project management.
                  </p>
                </div>
              </div>
              <div>
                <FaCheckCircle className={styles.icon} />
                <div>
                  <p className={styles.pHead}>Project Life Cycle</p>
                  <p className={styles.pBot}>
                    Learn to oversee the entire project.
                  </p>
                </div>
              </div>
              <div>
                <FaCheckCircle className={styles.icon} />
                <div>
                  <p className={styles.pHead}>Lead a Team</p>
                  <p className={styles.pBot}>
                    Manage a data science and AI real-time project
                  </p>
                </div>
              </div>
              <div>
                <FaCheckCircle className={styles.icon} />
                <div>
                  <p className={styles.pHead}>Industry Knowledge</p>
                  <p className={styles.pBot}>
                    Develop expertise in your specific domain.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.threeSecond}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/project_img.webp"
              alt="Learnbay"
              quality={100}
            loading="lazy"
              width="550"
              height="250"
            />
            <div className={styles.ytBot}>
              <p>
                <span>Important Note:</span> You will be assigned 5 members to
                oversee the entire project life-cycle and gain practical project
                management skills.
              </p>
            </div>
          </div>
        </div> */}
             <div className={`${styles.innerDivFour} ${styles.innerDivFourLast}`}>
          <div className={styles.SecondFour}>
            <h3>How will our placement assistance help you succeed?</h3>
            <div className={styles.listhree}>
              <p>{SVgRightMark} Personalized career guidance and resume support.</p>
              <p>{SVgRightMark} Mock interviews with expert feedback.</p>
              <p>{SVgRightMark} Exclusive job opportunities via our hiring network.</p>
            </div>
          </div>
          <div className={styles.oneFour}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/Doubt_Learnbay.webp"
              alt="Learnbay"
              quality={100}
              loading="lazy"
              width={684}
              height={527}
            />
          </div>
        </div>
        {/* <div className={styles.innerDivFour}>
          <div className={styles.oneFour}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/Doubt_Learnbay.webp"
              alt="Learnbay"
              quality={100}
            loading="lazy"
              width="684"
              height="527"
            />
          </div>
          <div className={styles.SecondFour}>
            <h3>1:1 Doubt Clearing Session</h3>
            <p>
            You can book personalized doubt classes for modules or projects with experts. These tailored sessions will help you understand concepts better and address any questions or challenges you might have.

            </p>
            <div className={styles.botDivYellow}>
              <p>
              <span>Important Note:</span> Schedule your sessions from 10 AM - 6 PM (Mon-Sat) to secure your preferred time slot.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default WhyChooseSection;
