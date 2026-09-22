import React from 'react';
import styles from './Marquee.module.css';

const ITEMS = [
  '4-month applied programme',
  'Co-credentialled by Vishlesan i-Hub, IIT Patna',
  'IBM certification included',
  '35+ AI tools, hands-on',
  'AI Co-Lab startup capstone',
  'No coding prerequisite',
];

function Track({ ariaHidden }) {
  return (
    <ul className={styles.track} aria-hidden={ariaHidden || undefined}>
      {ITEMS.map((item) => (
        <li key={item} className={styles.item}>
          <span className={styles.dot} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <div className={styles.marquee}>
      {/* The second track is a duplicate that makes the scroll seamless. */}
      <Track />
      <Track ariaHidden />
    </div>
  );
}
