'use client';

import React, { useState } from 'react';
import styles from './Faq.module.css';
import { FAQS } from './faqs';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.section} id="faq">
      <header className={styles.head}>
        <p className={styles.kicker}>Questions, answered</p>
        <h2 className={styles.title}>Everything asked before enrolling.</h2>
      </header>

      <div className={styles.list}>
        {FAQS.map((faq, i) => {
          const open = openIndex === i;
          return (
            <div key={faq.q} className={styles.item}>
              <h3 className={styles.questionHeading}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={open}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span
                    className={`${styles.toggle} ${open ? styles.toggleOpen : ''}`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24">
                      <path
                        d={open ? 'M8 12h8' : 'M12 8v8M8 12h8'}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
              </h3>

              {open ? (
                <div id={`faq-${i}`} className={styles.answer}>
                  <p>{faq.a}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
