import React, { useState } from "react";
import styles from "./Certificate.module.css";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";
function CertificateTab({ data }) {
  const [DCActive, setDCActive] = useState(true);
  const [PCActive, setPCActive] = useState(false);

  return (
    <section className={styles.CertificateTab}>
      <div className={styles.header}>
        <div className={styles.pWrap}>
          <p
            onClick={() => {
              setDCActive(true);
              setPCActive(false);
            }}
            className={DCActive ? styles.activeP : styles.inactiveP}
          >
            Degree
          </p>
          <p
            onClick={() => {
              setDCActive(false);
              setPCActive(true);
            }}
            className={PCActive ? styles.activeP : styles.inactiveP}
          >
            Project Certificate
          </p>
        </div>
      </div>
      {DCActive ? (
        <div className={styles.MicroCert}>
          <div className={styles.rightSide}>
            <h6>{data.degreeCertificate.title}</h6>
            {data.degreeCertificate.para.map((data, i) => {
              return (
                <>
                  <p key={i}>
                    <BsCheckCircle className={styles.checkCircle} />
                    {data}
                  </p>
                </>
              );
            })}
            {data.degreeCertificate.link ? (
              <a
                href={data.degreeCertificate.linkUrl}
                style={{ color: "#0072bc" }}
              >
                {data.degreeCertificate.linkText}
              </a>
            ) : (
              ""
            )}

            <Image
              className={styles.clogo}
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/certificate/clogo.webp"
              alt="Certificate"
              loading="lazy"
              width={350}
              height={60}
            />
          </div>
          <div className={styles.leftSide}>
            <div className={`${styles.CertificateDiv} imgWrapper`}>
              <Image
                src={data.degreeCertificate.img}
                alt="Certificate"
                loading="lazy"
                width={900}
                height={800}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {PCActive ? (
        <div className={styles.MicroCert}>
          <div className={styles.rightSide}>
            <h6>{data.projectCertificate.title}</h6>
            {data.projectCertificate.para.map((data, i) => {
              return (
                <>
                  <p key={i}>
                    <BsCheckCircle className={styles.checkCircle} />
                    {data}
                  </p>
                </>
              );
            })}

            <Image
              className={styles.clogo}
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/certificate/clogo.webp"
              alt="Certificate"
              loading="lazy"
              width={380}
              height={70}
            />
          </div>
          <div className={styles.leftSide}>
            <div className={`${styles.CertificateDiv} imgWrapper`}>
              <Image
                src={data.projectCertificate.img}
                alt="Certificate"
                loading="lazy"
                width={900}
                height={800}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
export default CertificateTab;
