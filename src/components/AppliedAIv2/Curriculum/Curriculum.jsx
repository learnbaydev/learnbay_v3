'use client';

import React, { useState } from 'react';
import styles from './Curriculum.module.css';
import { TERMS } from './terms';

export default function Curriculum() {
  const [openId, setOpenId] = useState(TERMS[0].id);

  return (
    <section className={styles.section} id="curriculum">
      <header className={styles.head}>
        <p className={styles.kicker}>Six terms · 14 weeks of taught content</p>
        <h2 className={styles.title}>The syllabus, week by week.</h2>
      </header>

      <div className={styles.accordion}>
        {TERMS.map((term) => {
          const open = term.id === openId;
          return (
            <div
              key={term.id}
              className={styles.term}
              style={{ '--accent': term.accent }}
            >
              <h3 className={styles.summaryHeading}>
                <button
                  type="button"
                  className={styles.summary}
                  aria-expanded={open}
                  aria-controls={`${term.id}-body`}
                  onClick={() => setOpenId(open ? null : term.id)}
                >
                  <span className={styles.termLabel}>{term.term}</span>
                  <span className={styles.termTitle}>{term.title}</span>
                  <span className={styles.weeks}>{term.weeks}</span>
                  <span
                    className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
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
                <div id={`${term.id}-body`} className={styles.body}>
                  <ul className={styles.topics}>
                    {term.topics.map((topic) => (
                      <li key={topic} className={styles.topic}>
                        <span className={styles.dot} aria-hidden="true" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
