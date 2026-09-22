import React from 'react';
import styles from './WhyProgram.module.css';

/* Each card carries a bespoke "artefact" mock that stands in for the outcome.
   They are drawn in markup rather than exported as images so they stay crisp
   and recolour with the card accent. */

function ProductArtefact() {
  return (
    <div className={styles.browser}>
      <div className={styles.chrome}>
        <span className={styles.chromeDot} />
        <span className={styles.chromeDot} />
        <span className={styles.chromeDot} />
        <span className={styles.chromeUrl}>claims-triage.app</span>
      </div>
      <div className={styles.browserBody}>
        <span className={styles.line} style={{ width: '153.6px' }} />
        <span className={styles.line} style={{ width: '211.2px' }} />
        <span className={styles.lineAccent} style={{ width: '105.6px' }} />
        <span className={styles.deployed}>Deployed</span>
      </div>
    </div>
  );
}

const TOOL_ROWS = [
  [
    { label: 'LangChain', on: true },
    { label: 'CrewAI' },
    { label: 'Dify.ai' },
  ],
  [{ label: 'AutoGen' }, { label: 'Vector DB', on: true }, { label: 'Power BI' }],
  [
    { label: 'RAG', dim: true },
    { label: 'Agents', dim: true },
    { label: '+27', dim: true },
  ],
];

function ToolWallArtefact() {
  return (
    <div className={styles.toolWall}>
      {TOOL_ROWS.map((row, i) => (
        <div key={i} className={styles.toolRow}>
          {row.map((chip) => (
            <span
              key={chip.label}
              className={[
                styles.chip,
                chip.on ? styles.chipOn : '',
                chip.dim ? styles.chipDim : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {chip.label}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

function BriefArtefact() {
  return (
    <div className={styles.brief}>
      <div className={styles.briefHead}>
        <span className={styles.briefFrom}>
          <span className={styles.briefAvatar}>AI</span>
          BRIEF #04
        </span>
        <span className={styles.briefStatus}>In review</span>
      </div>
      <p className={styles.briefQuote}>
        &ldquo;We need underwriting questions answered from our own policy PDFs,
        with the clause cited.&rdquo;
      </p>
      <div className={styles.briefTags}>
        <span className={styles.tag}>BFSI</span>
        <span className={styles.tag}>RAG</span>
        <span className={styles.tag}>Founder-reviewed</span>
      </div>
    </div>
  );
}

const CARDS = [
  {
    n: '01',
    accent: 'blue',
    insteadOf: 'A notebook that stops at model.fit()',
    title: 'A product you can send someone a link to',
    body: 'Create and deploy your own AI-powered app or workflow using the same methods industry teams use specified, built, shipped.',
    Artefact: ProductArtefact,
  },
  {
    n: '02',
    accent: 'green',
    insteadOf: 'A guided tour of one chatbot UI',
    title: '35+ tools, pointed at a business problem',
    body: 'Master the platforms real teams run, and learn exactly where each one belongs in a workflow rather than on a toy dataset.',
    Artefact: ToolWallArtefact,
  },
  {
    n: '03',
    accent: 'brass',
    insteadOf: 'A dataset with a published solution',
    title: 'A live brief from a startup that reviews your work',
    body: 'Through AI Co-Lab you build against a real problem statement and leave with portfolio work the founder who filed it has signed off.',
    Artefact: BriefArtefact,
  },
];

export default function WhyProgram() {
  return (
    <section className={styles.section} id="why">
      <header className={styles.head}>
        <p className={styles.kicker}>Why this program</p>
        <h2 className={styles.title}>
          Outcome-driven, and built for people with a full-time job.
        </h2>
        <p className={styles.lede}>
          Three things separate this from a prompt-engineering short course: you
          ship a product, you learn the tools teams actually run, and you do it
          against a live startup brief.
        </p>
      </header>

      <div className={styles.cards}>
        {CARDS.map(({ n, accent, insteadOf, title, body, Artefact }) => (
          <article
            key={n}
            className={`${styles.card} ${styles[accent]}`}
          >
            <span className={styles.accentBar} aria-hidden="true" />
            <div className={styles.stage}>
              <span className={styles.stageNumber} aria-hidden="true">
                {n}
              </span>
              <Artefact />
            </div>
            <div className={styles.cardBody}>
              <p className={styles.killLine}>
                <span className={styles.killLabel}>Instead of</span>
                <s>{insteadOf}</s>
              </p>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardText}>{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
