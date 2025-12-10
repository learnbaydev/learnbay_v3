// components/StrategyModal.js
import React from "react";
import styles from "./StrategyModal.module.css";

const StrategyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Stop click propagation so clicking inside the modal doesn't close it
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={handleModalClick}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            {/* Clock Icon */}
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <h2 className={styles.title}>Book Your Strategy Call</h2>
          <p className={styles.subtitle}>
            Cloud & DevOps Roadmap: 2026 Job Roles + Skill Path
          </p>
        </div>

        {/* Form */}
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Full Name */}
          <div className={styles.formGroup}>
            <label className={styles.label}>
              <svg
                className={styles.labelIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              Full Name
            </label>
            <input
              type="text"
              placeholder="Jane Doe"
              className={styles.input}
            />
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label className={styles.label}>
              <svg
                className={styles.labelIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              Email Address
            </label>
            <input
              type="email"
              placeholder="jane@company.com"
              className={styles.input}
            />
          </div>

          {/* Phone Number */}
          <div className={styles.formGroup}>
            <label className={styles.label}>
              <svg
                className={styles.labelIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className={styles.input}
            />
          </div>

          {/* Current Job Role */}
          <div className={styles.formGroup}>
            <label className={styles.label}>
              <svg
                className={styles.labelIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              Current Job Role
            </label>
            <input
              type="text"
              placeholder="Software Developer"
              className={styles.input}
            />
          </div>

          {/* Work Experience Dropdown */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Work Experience</label>
            <select className={styles.select} defaultValue="">
              <option value="" disabled>
                Select your experience level
              </option>
              <option value="fresher">Fresher / Student</option>
              <option value="1-3">1 - 3 Years</option>
              <option value="4-6">4 - 6 Years</option>
              <option value="7+">7+ Years</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className={styles.submitButton}>
            Book My Slot
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>

          <p className={styles.footerText}>
            By booking, you agree to receive a calendar invitation.
          </p>
        </form>
      </div>
    </div>
  );
};

export default StrategyModal;
