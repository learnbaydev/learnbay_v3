import React from 'react';
import styles from './Capstone.module.css';

const STEPS = [
  {
    n: '01',
    title: 'Build a real AI product',
    body: 'An end-to-end AI product, co-pilot or automation system specified, built and deployed, not prototyped in a notebook.',
  },
  {
    n: '02',
    title: 'Work with a startup',
    body: 'Against a live problem statement from a startup in the AI Co-Lab network, reviewed by the team that filed it.',
  },
  {
    n: '03',
    title: 'Deploy and showcase',
    body: 'Ship it, document it, and leave with portfolio-ready work plus a certificate signed by the partner.',
  },
];

export default function Capstone() {
  return (
    <section className={styles.section} id="capstone">
      <header className={styles.head}>
        <p className={styles.kicker}>The capstone · weeks 12–14</p>
        <h2 className={styles.title}>From prototype to portfolio.</h2>
        <p className={styles.lede}>
          Your capstone is scoped by a partner startup and evaluated by their
          team. That evaluation is what the AI Startup Certificate is issued
          against — which is why it means something.
        </p>
      </header>

      <ol className={styles.steps}>
        {STEPS.map((step) => (
          <li key={step.n} className={styles.step}>
            <span className={styles.dot}>{step.n}</span>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepBody}>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
