import React from 'react';
import styles from './StatBand.module.css';

const STATS = [
  { value: '4', label: 'Months, start to capstone' },
  { value: '35+', label: 'AI tools used hands-on' },
  { value: '100+', label: 'Hours on real startup AI problems' },
  { value: '3', label: 'Credentials, each earned separately' },
  { value: '0', label: 'Lines of code required' },
];

export default function StatBand() {
  return (
    <dl className={styles.band}>
      {STATS.map((stat) => (
        <div key={stat.label} className={styles.stat}>
          <dt className={styles.value}>{stat.value}</dt>
          <dd className={styles.label}>{stat.label}</dd>
        </div>
      ))}
    </dl>
  );
}
