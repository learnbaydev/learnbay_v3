import React from 'react';
import Image from 'next/image';
import styles from './Certification.module.css';

const CERTIFICATES = [
  {
    id: 'iit',
    seal: '#1b1338',
    face: { kind: 'crest', src: '/applied-ai/crest.png' },
    eyebrow: 'Academic co-credential',
    eyebrowColor: '#2c1e48',
    title: 'Vishlesan i-Hub Foundation, IIT Patna',
    body: 'The i-Hub contributes research-backed curriculum input and independent oversight of the capstone evaluation, and co-credentials the certificate.',
    issued: 'Released on assessment',
  },
  {
    id: 'ibm',
    seal: '#2563eb',
    face: { kind: 'logo', src: '/applied-ai/ibm-full.png' },
    eyebrow: 'Industry certification',
    eyebrowColor: '#2563eb',
    title: 'IBM Certification',
    body: 'Industry-recognised certification validating capability across enterprise-grade data science and AI systems.',
    issued: 'Released on assessment',
  },
  {
    id: 'startup',
    seal: '#ff7a1a',
    face: { kind: 'wordmark', text: 'AI Co-Lab' },
    eyebrow: 'Project credential',
    eyebrowColor: '#ff7a1a',
    title: 'AI Startup Certificate',
    body: 'Issued by the partner startup in the AI Co-Lab, against the capstone you built and defended in front of their team.',
    issued: 'Released on a shipped capstone',
  },
];

export default function Certification() {
  return (
    <section className={styles.section} id="certification">
      <header className={styles.head}>
        <p className={styles.kicker}>Certification</p>
        <h2 className={styles.title}>Three credentials, each earned separately.</h2>
        <p className={styles.lede}>
          None of these are issued for turning up. Each is released against an
          assessment or a shipped piece of work.
        </p>
      </header>

      <div className={styles.cards}>
        {CERTIFICATES.map((cert) => (
          <article key={cert.id} className={styles.card}>
            <div className={styles.face}>
              <span className={styles.ornament} aria-hidden="true" />
              <p className={styles.faceIssuer}>
                Vishlesan i-Hub Foundation · IIT Patna · Learnbay
              </p>

              {cert.face.kind === 'wordmark' ? (
                <p className={styles.faceWordmark}>{cert.face.text}</p>
              ) : (
                <Image
                  src={cert.face.src}
                  alt=""
                  width={cert.face.kind === 'crest' ? 58 : 145}
                  height={58}
                  className={
                    cert.face.kind === 'crest' ? styles.faceCrest : styles.faceLogo
                  }
                />
              )}

              <span className={styles.faceRule} aria-hidden="true" />
              <p className={styles.faceAwarded}>Awarded on assessment</p>

              <span
                className={styles.waxSeal}
                style={{ background: cert.seal }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24">
                  <path
                    d="m7 12.4 3.2 3.2L17 8.8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>

            <div className={styles.body}>
              <p
                className={styles.eyebrow}
                style={{ color: cert.eyebrowColor }}
              >
                {cert.eyebrow}
              </p>
              <h3 className={styles.cardTitle}>{cert.title}</h3>
              <p className={styles.cardText}>{cert.body}</p>
              <p className={styles.issued}>
                <span className={styles.dot} aria-hidden="true" />
                {cert.issued}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
