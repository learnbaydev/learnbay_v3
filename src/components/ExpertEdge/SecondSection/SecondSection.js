import React from "react";
import Image from "next/image";
import styles from "./SecondSection.module.css";

function SecondSection() {
  return (
    <section className={styles.container}>
      <div className={styles.innerBox}>
        <div className={`${styles.CertificateDiv} imgWrapper`}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/expertEdge/first.webp"
            alt="Certificate"
            loading="lazy"
            quality={100}
            width={1150}
            height={800}
          />
        </div>
        <h4 className={styles.blue}>Learn from top 1% tech mentors</h4>
        <p>Comprehensive self-paced courses designed by industry experts</p>
      </div>
      <div className={styles.innerBox}>
        <div className={`${styles.CertificateDiv} imgWrapper`}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/expertEdge/third.webp"
            alt="Certificate"
            loading="lazy"
            quality={100}
            width={1150}
            height={800}
          />
        </div>
        <h4 className={styles.orange}>Learn anytime, anywhere</h4>
        <p>Learn along with your job on any device, anywhere</p>
      </div>
      <div className={styles.innerBox}>
        <div className={`${styles.CertificateDiv} imgWrapper`}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/expertEdge/second.webp"
            alt="Certificate"
            loading="lazy"
            quality={100}
            width={1150}
            height={800}
          />
        </div>
        <h4 className={styles.green}>Lifetime free course access</h4>
        <p>Free courses are available to you for lifetime</p>
      </div>
    </section>
  );
}

export default SecondSection;
