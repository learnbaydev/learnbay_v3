import React from "react";
import styles from "./CertificateSection.module.css";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

function CertificateSection({ certificateNew }) {
  return (
    <section className="containerWidth">
      <div className={styles.mainBg}>
        <h2 className={styles.upskillHeading}>
          Get certified and accelerate your
          <span className={styles.spanHead}>&nbsp;career growth</span>
        </h2>
        <div className={styles.innerDiv}>
          {certificateNew.map((certificate, index) => (
            <React.Fragment key={certificate.id}>
              <div className={styles.certBox}>
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
              {(index === 1) && <div className={styles.middleLine}></div>} {/* Line after the second certificate */}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificateSection;
