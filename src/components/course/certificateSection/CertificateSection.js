import React from "react";
import styles from "./CertificateSection.module.css";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

function CertificateSection({ certificateNew = [] }) {
  if (!certificateNew || certificateNew.length === 0) {
    return <p>No certificates available at the moment.</p>;
  }

  return (
    <section className="containerWidth">
      <div className={styles.mainBg}>
        <h2 className={styles.upskillHeading}>
          Get certified and accelerate your
          <span className={styles.spanHead}>&nbsp;career growth</span>
        </h2>
        <div className={styles.innerDiv}>
          {/* First two certificates */}
          <div className={styles.certBoxWrapperTop}>
            {certificateNew.slice(0, 2).map((certificate) => (
              <div key={certificate.id} className={styles.certBox}>
                <Image
                  src={certificate.imageUrl}
                  alt={certificate.title}
                  width={certificate.imageWidth}
                  height={certificate.imageHeight}
                  className={styles.toolIcon}
                  loading="lazy"
                />
                <div className={styles.iconDivMain}>
                  <h4>{certificate.title}</h4>
                  {certificate.description.map((desc, descIndex) => (
                    <div key={descIndex} className={styles.iconDiv}>
                      <FaCheckCircle />
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Remaining certificate */}
          <div className={styles.certBoxWrapperBottom}>
            {certificateNew.slice(2).map((certificate) => (
              <div key={certificate.id} className={styles.certBoxDemo}>
    
                <Image
                  src={certificate.imageUrl}
                  alt={certificate.title}
                  width={certificate.imageWidth}
                  height={certificate.imageHeight}
                  className={`${styles.toolIcon} ${styles.toolIconThree}`}
                  loading="lazy"
                />
                <div className={styles.iconDivMain}>
            <div className={styles.Addon}><p>Add on</p></div>
                  <h4>{certificate.title}</h4>
                  {certificate.description.map((desc, descIndex) => (
                    <div key={descIndex} className={styles.iconDiv}>
                      <FaCheckCircle />
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificateSection;
