import React, { useState, useEffect } from "react";
import styles from "./FAQ.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = ({ FaqData }) => {
  // State for the Active Category (Sidebar)
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  // State for the Open Question (Accordion)
  // Default to 0 so the first question is always open
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  // When Category changes, reset Question to 0 (top one)
  const handleCategoryChange = (index) => {
    setActiveCategoryIndex(index);
    setActiveQuestionIndex(0);
  };

  // Toggle question: If clicking open one, close it (-1). If closed, open it.
  const handleQuestionToggle = (index) => {
    setActiveQuestionIndex((prev) => (prev === index ? -1 : index));
  };

  // Get current category data safely
  const currentCategory = FaqData[activeCategoryIndex];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      <p className={styles.subHeading}>
        Everything you need to know about the course and curriculum.
      </p>

      <div className={styles.layout}>
        {/* --- LEFT SIDEBAR (Categories) --- */}
        <div className={styles.sidebar}>
          {FaqData.map((category, index) => (
            <button
              key={category.id || index}
              onClick={() => handleCategoryChange(index)}
              className={`${styles.sidebarItem} ${
                activeCategoryIndex === index ? styles.activeSidebar : ""
              }`}
            >
              {category.sectionName}
            </button>
          ))}
        </div>

        {/* --- RIGHT CONTENT (Questions) --- */}
        <div className={styles.content}>
          {currentCategory?.data.map((faq, index) => {
            const isOpen = activeQuestionIndex === index;

            return (
              <div key={faq.id || index} className={styles.accordionItem}>
                {/* Header */}
                <button
                  className={styles.questionHeader}
                  onClick={() => handleQuestionToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.ques}</span>
                  <span className={styles.icon}>
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                {/* Body / Answer */}
                <div
                  className={`${styles.answerContainer} ${
                    isOpen ? styles.open : ""
                  }`}
                >
                  <div className={styles.answerText}>
                    {faq.ans}

                    {/* DYNAMIC CONTENT RENDERING */}
                    {/* If your data object has keys like list1, list2, render them here */}
                    {hasLists(faq) && (
                      <ul className={styles.listGroup}>
                        {extractLists(faq).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// --- HELPER FUNCTIONS FOR YOUR DATA STRUCTURE ---

// check if object has keys starting with "list"
const hasLists = (obj) => {
  return Object.keys(obj).some((key) => key.startsWith("list"));
};

// Extract list1, list2... listN into an array
const extractLists = (obj) => {
  return (
    Object.keys(obj)
      .filter((key) => key.startsWith("list"))
      // Sort them numerically so list2 comes after list1
      .sort((a, b) => {
        const numA = parseInt(a.replace("list", ""));
        const numB = parseInt(b.replace("list", ""));
        return numA - numB;
      })
      .map((key) => obj[key])
  );
};

export default FAQ;
