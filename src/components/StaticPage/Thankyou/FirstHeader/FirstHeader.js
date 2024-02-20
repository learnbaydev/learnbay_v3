import Head from "next/head";
import Navbar from "../../../Global/Navbar/Navbar";
import styles from "./FirstHeader.module.css";

const FirstHeader = ({ donwnload, brochureLink }) => {
  return (
    <>
      <Head>
        <title>Thank you!</title>
        <meta name="description" content="Thank you!" />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link rel="canonical" href="https://www.learnbay.co/Thank-you" />
      </Head>
      <Navbar popup={true} dataScienceCounselling={true} radio={true} />
      <div className={styles.headerWrap}>
        <p>
          <b>Maximize</b> Your Career Opportunities with
          <br />
          Premium Guidance from Industry Expert's
        </p>
        <h1>
          at <span className={styles.cutText}>Rs. 2999/-</span>{" "}
          <span className={styles.greenText}>FREE</span>
        </h1>
        <div className={styles.btnFlex}>
          {/* <PopupButton
            id="jpqC3A6g"
            style={{
              backgroundColor: "#0072bc",
              color: "#fff",
              borderRadius: "4px",
              border: "1px solid #0072bc",
              fontSize: "20px",
            }}
            className="my-button"
          >
            Know More
          </PopupButton> */}
          {donwnload ? (
            <a href={brochureLink}>
              <button className={styles.btnDownload}>Download Syllabus</button>
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default FirstHeader;
