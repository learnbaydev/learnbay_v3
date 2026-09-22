'use client';

import React, { useState } from 'react';
import styles from './WhoCanApply.module.css';
import PopupContent from '@/components/Global/PopupContent/PopupContent';

const PERSONAS = [
  {
    key: 'leaders',
    experience: '5+ years experience',
    title: 'Leaders & entrepreneurs',
    roles: 'Managers · founders · product owners',
    summary: 'For people who need to lead AI, not operate it',
    bullets: [
      'Evaluate AI tools and vendors without taking the demo at face value.',
      'Design an AI roadmap your team can actually execute.',
      'Set the guardrails before the tooling decides them for you.',
    ],
  },
  {
    key: 'business',
    experience: '1+ years experience',
    title: 'Non-tech & business',
    roles: 'Marketing · sales · operations · training',
    summary: 'For the people whose week is full of repeatable work',
    bullets: [
      'Automate the repetitive half of your week without an engineering ticket.',
      'Generate campaigns, content and reports at a pace the team notices.',
      'Turn customer conversations and survey data into decisions.',
    ],
  },
  {
    key: 'tech',
    experience: '1+ years experience',
    title: 'Tech professionals',
    roles: 'Developers · data & ML · QA · analysts',
    summary: 'For engineers adding AI to systems they already maintain',
    bullets: [
      'Build copilots and internal tools on top of your existing stack.',
      'Add retrieval and agent workflows without rebuilding the product.',
      'Ship AI features without waiting on a dedicated ML team.',
    ],
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 18 18" className={styles.check} aria-hidden="true">
      <circle
        cx="9"
        cy="9"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="m5.6 9.2 2.3 2.3 4.5-4.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhoCanApply() {
  const [popups, setPopups] = useState(false);

  return (
    <section className={styles.section} id="who">
      <PopupContent
        dataScienceGeneric={true}
        popups={popups}
        setPopups={setPopups}
        heading="Apply For Counselling"
      />

      <header className={styles.head}>
        <p className={styles.kicker}>Who can apply</p>
        <h2 className={styles.title}>
          Built for professionals bringing AI into the work they already do.
        </h2>
        <p className={styles.lede}>
          No coding experience needed, at any of the three entry points. Find the
          profile closest to yours.
        </p>
      </header>

      <div className={styles.personas}>
        {PERSONAS.map((persona) => (
          <article
            key={persona.key}
            className={`${styles.card} ${styles[persona.key]}`}
          >
            <div className={styles.cardHead}>
              <span className={styles.pill}>{persona.experience}</span>
              <h3 className={styles.cardTitle}>{persona.title}</h3>
              <p className={styles.noCoding}>
                <svg viewBox="0 0 13 13" className={styles.seal} aria-hidden="true">
                  <circle
                    cx="6.5"
                    cy="6.5"
                    r="5.6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
                No coding required
              </p>
            </div>

            <div className={styles.cardBody}>
              <p className={styles.roles}>{persona.roles}</p>
              <p className={styles.summary}>{persona.summary}</p>
              <ul className={styles.bullets}>
                {persona.bullets.map((bullet) => (
                  <li key={bullet}>
                    <CheckIcon />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={styles.cardFooter}
                onClick={() => setPopups(true)}
              >
                <span>See if this fits</span>
                <span className={styles.go} aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M8 16 16 8M9.5 8H16v6.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
