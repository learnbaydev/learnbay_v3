'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './CoLab.module.css';
import PopupContent from '@/components/Global/PopupContent/PopupContent';

const FEATURES = [
  {
    icon: 'command',
    title: 'Prompt & retrieval lab',
    body: 'Chunking, embeddings and the failure modes nobody demos',
  },
  {
    icon: 'cube',
    title: 'Agent orchestration workshop',
    body: 'Multi-step tools, guardrails and a cost ceiling that holds',
  },
  {
    icon: 'rocket',
    title: 'Ship it live, then watch what it costs',
    body: 'Latency, tokens and evaluation once real people use it',
  },
];

const ICON_PATHS = {
  command:
    'M9 3a3 3 0 1 0 0 6h6a3 3 0 1 0 0-6M9 21a3 3 0 1 1 0-6h6a3 3 0 1 1 0 6M9 9h6v6H9z',
  cube: 'M12 3 4 7v10l8 4 8-4V7l-8-4Zm0 0v18M4 7l8 4 8-4',
  rocket:
    'M14 4c3.5 0 6 2.5 6 6 0 5-5 9-8 10-1-3-1-4-3-6s-3-2-6-3c1-3 5-8 10-8Zm-1 6.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM7 17l-3 3',
};

const RUNS_ON = [
  { src: '/applied-ai/tools/langchain.png', alt: 'LangChain', width: 113 },
  { src: '/applied-ai/tools/llamaindex.png', alt: 'LlamaIndex', width: 61 },
  { src: '/applied-ai/tools/crewai.png', alt: 'CrewAI', width: 63 },
  { src: '/applied-ai/tools/autogen.png', alt: 'AutoGen', width: 55 },
  { src: '/applied-ai/tools/dify.png', alt: 'Dify.ai', width: 44 },
];

const PIPELINE = [
  { n: '01', label: 'Prompt', state: 'done' },
  { n: '02', label: 'Model', state: 'done' },
  { n: '03', label: 'Agent', state: 'done' },
  { n: '04', label: 'Output', state: 'active' },
  { n: '05', label: 'Deploy', state: 'idle' },
];

const OUTPUT_LINES = [
  { text: 'Ingested 42 policy PDFs', time: '1.8s', done: true },
  { text: 'Chunked & embedded 1,204 passages', time: '4.2s', done: true },
  { text: 'Retrieval eval — hit@5 = 0.91', time: '0.6s', done: true },
  { text: 'Drafting answer with 3 cited clauses…', time: '—', done: false },
];

const STATS = [
  ['tokens', '8,412'],
  ['latency', '1.2s'],
  ['est. cost', '₹0.94'],
  ['model', 'gpt-class'],
];

export default function CoLab() {
  const [popups, setPopups] = useState(false);

  return (
    <section className={styles.section} id="co-lab">
      <PopupContent
        dataScienceGeneric={true}
        popups={popups}
        setPopups={setPopups}
        heading="Apply For Counselling"
      />

      <div className={styles.layout}>
        <div className={styles.copy}>
          <p className={styles.kicker}>Build · Test · Deploy AI</p>

          <div className={styles.wordmarkBlock}>
            <h2 className={styles.wordmark}>AI Co-Lab</h2>
            <p className={styles.tagline}>Build AI instead of just studying it.</p>
          </div>

          <p className={styles.lede}>
            A working AI studio, not a sandbox. You assemble real systems —
            retrieval over your own documents, multi-step agents, deployed
            workflows — using no-code builders and the orchestration layers teams
            actually run.
          </p>

          <ul className={styles.features}>
            {FEATURES.map((feature) => (
              <li key={feature.title} className={styles.feature}>
                <span className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d={ICON_PATHS[feature.icon]}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className={styles.featureCopy}>
                  <strong>{feature.title}</strong>
                  <span>{feature.body}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className={styles.runsOn}>
            <p className={styles.runsOnLabel}>Runs on</p>
            <ul className={styles.marks}>
              {RUNS_ON.map((mark) => (
                <li key={mark.alt} className={styles.mark}>
                  <Image
                    src={mark.src}
                    alt={mark.alt}
                    width={mark.width}
                    height={20}
                    className={styles.markLogo}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---- Terminal mock ---- */}
        <div className={styles.terminal}>
          <div className={styles.titleBar}>
            <span className={`${styles.tDot} ${styles.tDotRed}`} />
            <span className={`${styles.tDot} ${styles.tDotAmber}`} />
            <span className={`${styles.tDot} ${styles.tDotGreen}`} />
            <span className={styles.tTitle}>Learnbay AI Co-Lab</span>
          </div>

          <div className={styles.terminalBody}>
            <div className={styles.prompt}>
              <p className={styles.comment}>{'// Describe what you want to build'}</p>
              <p className={styles.input}>
                &gt; Build a claims-triage assistant that reads policy PDFs,
                answers underwriting questions with citations, and posts the
                summary to the team channel
              </p>
            </div>

            <ol className={styles.pipeline}>
              {PIPELINE.map((node, i) => (
                <React.Fragment key={node.n}>
                  {i > 0 ? <li className={styles.link} aria-hidden="true" /> : null}
                  <li className={`${styles.node} ${styles[node.state]}`}>
                    <span className={styles.nodeNum}>{node.n}</span>
                    {node.label}
                  </li>
                </React.Fragment>
              ))}
            </ol>

            <div className={styles.output}>
              <p className={styles.comment}>{'// Output'}</p>
              <ul className={styles.lines}>
                {OUTPUT_LINES.map((line) => (
                  <li key={line.text} className={styles.line}>
                    <span className={styles.lineLeft}>
                      {line.done ? (
                        <svg viewBox="0 0 18 18" className={styles.lineCheck} aria-hidden="true">
                          <circle cx="9" cy="9" r="8" fill="none" stroke="currentColor" strokeWidth="1.3" />
                          <path d="m5.6 9.2 2.3 2.3 4.5-4.8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 14 14" className={styles.lineCaret} aria-hidden="true">
                          <path d="m5 3 5 4-5 4z" fill="currentColor" />
                        </svg>
                      )}
                      <span className={line.done ? styles.lineText : styles.lineTextActive}>
                        {line.text}
                      </span>
                    </span>
                    <span className={styles.lineTime}>{line.time}</span>
                  </li>
                ))}
              </ul>

              <dl className={styles.status}>
                {STATS.map(([label, value]) => (
                  <div key={label} className={styles.stat}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <button
              type="button"
              className={styles.run}
              onClick={() => setPopups(true)}
            >
              Run in Co-Lab
              <svg viewBox="0 0 14 14" className={styles.runArrow} aria-hidden="true">
                <path
                  d="M2.5 7h9M8 3.5 11.5 7 8 10.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
