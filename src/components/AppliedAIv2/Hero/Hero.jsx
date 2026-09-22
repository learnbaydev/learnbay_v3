'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import PopupContent from '@/components/Global/PopupContent/PopupContent';
import { CREDENTIALS, HERO_FACTS, LOGOS } from '../programData';

export default function Hero() {
  const [popups, setPopups] = useState(false);

  return (
    <section className={styles.hero} id="program">
      <div className={styles.watermark} aria-hidden="true">
        <Image src={LOGOS.tih} alt="" fill sizes="600px" />
      </div>

      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.lockup}>
            <Image
              src={LOGOS.tih}
              alt="Vishlesan i-Hub Foundation, IIT Patna"
              width={64}
              height={66}
              priority
              className={styles.lockupLogo}
            />
            <div>
              <p className={styles.institution}>
                Vishlesan i-Hub Foundation, IIT Patna
              </p>
              <p className={styles.eyebrow}>
                Technology Innovation Hub · National Mission
              </p>
            </div>
          </div>

          <div className={styles.headlineBlock}>
            <h1 className={styles.headline}>Applied AI Practitioner Program.</h1>
            <p className={styles.sub}>
              Master 35+ AI tools, build real AI products and work directly with
              startups in four months, without writing code. Delivered by
              Learnbay in collaboration with Vishlesan i-Hub Foundation, IIT
              Patna.
            </p>
          </div>

          <ul className={styles.facts}>
            {HERO_FACTS.map((fact) => (
              <li key={fact.value} className={styles.fact}>
                <span className={styles.dot} aria-hidden="true" />
                <strong>{fact.value}</strong>
                {fact.label ? <span>{fact.label}</span> : null}
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <PopupContent
              dataScienceGeneric={true}
              popups={popups}
              setPopups={setPopups}
              heading="Apply For Counselling"
            />
            <button
              type="button"
              onClick={() => setPopups(true)}
              className={styles.primaryBtn}
            >
              Talk to a program advisor
            </button>
            <a href="#curriculum" className={styles.ghostBtn}>
              Explore the curriculum
              <svg viewBox="0 0 18 18" className={styles.arrow} aria-hidden="true">
                <path
                  d="M3.75 9h10.5M9.75 4.5 14.25 9l-4.5 4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <p className={styles.finePrint}>
            Program designed and delivered by Learnbay. Certification
            co-credentialled by Vishlesan i-Hub Foundation, IIT Patna, and IBM.
          </p>
        </div>

        <aside className={styles.plaque}>
          <div className={styles.plaqueHead}>
            <p className={styles.eyebrow}>What you earn</p>
            <span className={styles.rule} aria-hidden="true" />
          </div>

          <ul className={styles.credentials}>
            {CREDENTIALS.map((credential) => (
              <li key={credential.title} className={styles.credential}>
                <span
                  className={
                    credential.badge
                      ? styles.credentialBadge
                      : styles.credentialLogo
                  }
                >
                  <Image
                    src={LOGOS[credential.logo]}
                    alt=""
                    width={credential.badge ? 35 : 49}
                    height={credential.badge ? 18 : 50}
                  />
                </span>
                <span className={styles.credentialCopy}>
                  <strong>{credential.title}</strong>
                  <span>{credential.description}</span>
                </span>
              </li>
            ))}
          </ul>

          <p className={styles.plaqueFoot}>
            Certificates are issued on assessment and a shipped capstone not on
            attendance.
          </p>
        </aside>
      </div>
    </section>
  );
}
