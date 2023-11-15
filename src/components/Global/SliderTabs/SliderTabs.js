import Image from "next/image";
import { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import dynamic from "next/dynamic";

const Form = dynamic(() => import("../../Global/Form/Form"));
const Popup = dynamic(() => import("../../Global/Popup/Popup"));
import styles from "./SliderTab.module.css";


const SliderTabs = ({ dataScience, dataScienceCounselling }) => {
  const [bfsiButton, setBfsiButton] = useState();
  const [healthCare, setHealthCare] = useState(false);
  const [supplyChain, setSupplyChain] = useState(false);

  const [manufacture, setManufacture] = useState(false);


  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 960) {
      setTab(true);
    }
  });

  useEffect(() => {
    let width = window.innerWidth;
    if (width > 960) {
      setBfsiButton(true);
    }
  }, [0]);

  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  return (
    <div className={styles.Course} id="servicePro">
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        popup={true}
        // radio={radio}
        dataScience={dataScience}
        dataScienceCounselling={dataScienceCounselling}
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "340px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <Form
            dataScience={dataScience}
            dataScienceCounselling={dataScienceCounselling}
            // radio={radio}
            upSkillingHide={true}
          />
        </div>
      </Popup>
      <h2>
        Get job ready within 6 months with Career Services{" "}
        <span style={{ color: "#f99600" }}>PRO</span>
      </h2>

      <div className={styles.courses}>
        <div className={styles.listPanel}>
          <div
            onClick={() => {
              setManufacture(false);
              setBfsiButton(true);

              setHealthCare(false);
              setSupplyChain(false);
            }}
            className={bfsiButton ? styles.ActiveSpan : styles.span}
          >
            <div className={styles.img}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/career1.webp"
                loading="lazy"
                width="25"
                height="25"
                alt="Bulb"
                quality={40}
              />
              Placement Support
              {/* {mobile ? bfsiButton ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""} */}
            </div>

            <div>
              <IoIosArrowForward className={styles.rightIcon} />
            </div>
          </div>

          {bfsiButton ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                  Unleash your career potential with unlimited job access, interview support, and profile review.
                  </p>
                </div>
                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                  Receive unlimited interview calls from a diverse pool of interested employers/recruiters until you successfully secure a job.
                  </p>
                </div>

                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                  Find the best suited job role that meets your career and salary expectations.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <div
            onClick={() => {
              setManufacture(false);
              setBfsiButton(false);

              setHealthCare(true);
              setSupplyChain(false);
            }}
            className={healthCare ? styles.ActiveSpan : styles.span}
          >
            <div className={styles.img}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/career2.webp"
                loading="lazy"
                width="25"
                height="25"
                alt="Bulb"
                quality={40}
              />
              Mock Interviews
              {/* {mobile ? bfsiButton ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""} */}
            </div>

            <div>
              <IoIosArrowForward className={styles.rightIcon} />
            </div>
          </div>

          {healthCare ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    LearnBay's targeted mock interviews sessions to ready you
                    for your dream role.
                  </p>
                </div>
                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    Actionable feedback for skill enhancement that keeps you in
                    pace with interview trends.
                  </p>
                </div>

                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                  Industry-specific interview practice so that you can crack your dream job.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <div
            onClick={() => {
              setManufacture(false);
              setBfsiButton(false);

              setHealthCare(false);
              setSupplyChain(true);
            }}
            className={supplyChain ? styles.ActiveSpan : styles.span}
          >
            <div className={styles.img}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/career3.webp"
                loading="lazy"
                width="25"
                height="25"
                alt="Bulb"
                quality={40}
              />
              Resume BuildUp
              {/* {mobile ? supplyChain ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""} */}
            </div>
            <div>
              <IoIosArrowForward className={styles.rightIcon} />
            </div>
          </div>

          {supplyChain ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    LearnBay's tailored resume-building guidance.
                  </p>
                </div>
                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    Strategic advice for impactful resumes.
                  </p>
                </div>

                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    Tools and tips for resume optimization.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <div
            onClick={() => {
              setBfsiButton(false);

              setHealthCare(false);

              setSupplyChain(false);

              setManufacture(true);
            }}
            className={manufacture ? styles.ActiveSpan : styles.span}
          >
            <div className={styles.img}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/career4.webp"
                loading="lazy"
                width="25"
                height="25"
                alt="Bulb"
                quality={40}
              />
              Unlimited Interview Calls
              {/* {mobile ? manufacture ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""} */}
            </div>

            <div>
              <IoIosArrowForward className={styles.rightIcon} />
            </div>
          </div>

          {manufacture ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    LearnBay's promise of unlimited interview calls.
                  </p>
                </div>
                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    Continuous interview opportunities.
                  </p>
                </div>

                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    Open-ended access to potential employers.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.middlePanel}>
          {bfsiButton ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>Placement Support</h6>

                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                  Unleash your career potential with unlimited job access, interview support, and profile review.
                  </p>
                </div>
                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                  Receive unlimited interview calls from a diverse pool of interested employers/recruiters until you successfully secure a job.
                  </p>
                </div>

                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                  Find the best suited job role that meets your career and salary expectations.
                  </p>
                </div>
              </div>

              <div className={`imgWrapper ${styles.right}`}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/doamain-new.webp"
                  width="200"
                  height="200"
                  quality={40}
                />
              </div>
            </div>
          ) : (
            ""
          )}

          {healthCare ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>Mock Interviews</h6>

                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    LearnBay's targeted mock interviews sessions to ready you
                    for your dream role.
                  </p>
                </div>
                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    Actionable feedback for skill enhancement that keeps you in
                    pace with interview trends.
                  </p>
                </div>

                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    Industry-specific interview practice so you can crack your
                    dream job.
                  </p>
                </div>

                {/* <div className={styles.buttonDiv}
               onClick={popupShow}>
                 <Button
                   bannerButton={true}
                   text="Download Domain Brochures"
                   passIcon={<FaDownload className="bIconS" />}
               
                 />
               </div> */}
              </div>

              <div className={`imgWrapper ${styles.right}`}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/doamain-new.webp"
                  width="200"
                  height="200"
                  quality={40}
                />
              </div>
            </div>
          ) : (
            ""
          )}

          {supplyChain ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>Resume BuildUp</h6>

                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    LearnBay's tailored resume-building guidance.
                  </p>
                </div>
                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    Strategic advice for impactful resumes.
                  </p>
                </div>

                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    Tools and tips for resume optimization.
                  </p>
                </div>

                {/* <div className={styles.buttonDiv}
             onClick={popupShow}>
               <Button
                 bannerButton={true}
                 text="Download Domain Brochures"
                 passIcon={<FaDownload className="bIconS" />}
             
               />
             </div> */}
              </div>

              <div className={`imgWrapper ${styles.right}`}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/doamain-new.webp"
                  width="200"
                  height="200"
                  quality={40}
                />
              </div>
            </div>
          ) : (
            ""
          )}
          {manufacture ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>Unlimited Interview Calls</h6>

                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    LearnBay's promise of unlimited interview calls.
                  </p>
                </div>
                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    Continuous interview opportunities.
                  </p>
                </div>

                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    Open-ended access to potential employers.
                  </p>
                </div>

                {/* <div className={styles.buttonDiv}
                onClick={popupShow}>
                  <Button
                    bannerButton={true}
                    text="Download Domain Brochures"
                    passIcon={<FaDownload className="bIconS" />}
                
                  />
                </div> */}
              </div>

              <div className={`imgWrapper ${styles.right}`}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/doamain-new.webp"
                  width="200"
                  height="200"
                  quality={40}
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SliderTabs;
