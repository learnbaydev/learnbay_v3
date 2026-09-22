import React from 'react';
import Image from 'next/image';
import styles from './Employers.module.css';

/* Wordmarks set in type where the design has no logo asset, images where it does. */
const EMPLOYERS = [
  { name: 'Google' },
  { name: 'Microsoft' },
  { name: 'Amazon' },
  { name: 'IBM' },
  { name: 'Adobe' },
  { name: 'Salesforce', logo: '/applied-ai/employers/salesforce.png', width: 144 },
  { name: 'Oracle', logo: '/applied-ai/employers/oracle.png', width: 127 },
  { name: 'Accenture', logo: '/applied-ai/employers/accenture.png', width: 93 },
  { name: 'Flipkart', logo: '/applied-ai/employers/flipkart.png', width: 105 },
  { name: 'Razorpay', logo: '/applied-ai/employers/razorpay.png', width: 127 },
  { name: 'Freshworks', logo: '/applied-ai/employers/freshworks.png', width: 132 },
  { name: 'Meesho', logo: '/applied-ai/employers/meesho.png', width: 128 },
  { name: 'Google', logo: '/applied-ai/employers/google.png', width: 92 },
  { name: 'Microsoft', logo: '/applied-ai/employers/microsoft.png', width: 134 },
];

function Track({ ariaHidden }) {
  return (
    <ul className={styles.track} aria-hidden={ariaHidden || undefined}>
      {EMPLOYERS.map((employer, i) => (
        <li key={`${employer.name}-${i}`} className={styles.item}>
          {employer.logo ? (
            <Image
              src={employer.logo}
              alt={employer.name}
              width={employer.width}
              height={30}
              className={styles.logo}
            />
          ) : (
            <span className={styles.wordmark}>{employer.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Employers() {
  return (
    <section className={styles.section} aria-label="Alumni employers">
      <p className={styles.kicker}>
        Learnbay alumni across all programmes work at
      </p>

      <div className={styles.marquee}>
        {/* The duplicate track makes the scroll seamless. */}
        <Track />
        <Track ariaHidden />
      </div>

      <p className={styles.footnote}>
        Logos indicate employers of Learnbay alumni across all programmes. They
        are not hiring guarantees and not partners of this programme.
      </p>
    </section>
  );
}
