import React from "react";
import styles from "./TrustedByCompanies.module.css";

const TrustedByCompanies = () => {
  const companies = [
    {
      id: 1,
      name: "Outspokn",
      logo: "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/outspokn.webp", // Replace with actual logo
      alt: "Outspokn Logo",
    },
    {
      id: 2,
      name: "ELEVEN",
      logo: "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/elevon.webp", // Replace with actual logo
      alt: "Eleven Logo",
    },
    {
      id: 3,
      name: "Outspokn",
      logo: "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/outspokn.webp", // Replace with actual logo
      alt: "Outspokn Logo",
    },
    {
      id: 4,
      name: "ELEVEN",
      logo: "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/elevon.webp", // Replace with actual logo
      alt: "Eleven Logo",
    },
  ];

  return (
    <section className={styles.trustedSection}>
      <div className={styles.container}>
        <div className={styles.card}>
          {/* Header with Icon */}
          <div className={styles.header}>
            <div className={styles.iconContainer}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className={styles.briefcaseIcon}
              >
                <path
                  d="M20 7H16V6C16 4.9 15.1 4 14 4H10C8.9 4 8 4.9 8 5V7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7ZM10 6H14V7H10V6Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className={styles.headerText}>
              <h2 className={styles.mainTitle}>Trusted by 30+ AI Companies</h2>
              <p className={styles.subtitle}>
                Comprehensive Overview of How It Functions Overview
              </p>
            </div>
          </div>

          {/* Company Logos */}
          <div className={styles.companiesGrid}>
            {companies.map((company) => (
              <div key={company.id} className={styles.companyLogo}>
                <img
                  src={company.logo}
                  alt={company.alt}
                  className={styles.logoImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByCompanies;
