'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Domains.module.css';
import { DOMAINS, TOOL_LOGOS } from './domains';
import { CheckCircleIcon, DomainIcon, SparkleIcon } from './icons';

export default function Domains() {
  const [activeId, setActiveId] = useState(DOMAINS[0].id);
  const active = DOMAINS.find((d) => d.id === activeId) || DOMAINS[0];

  return (
    <section className={styles.section} id="domains">
      <div className={styles.headRow}>
        <header className={styles.head}>
          <p className={styles.kicker}>
            Domain specialisations · pick your industry
          </p>
          <h2 className={styles.title}>
            Industry-focused AI. Real skills, real impact.
          </h2>
          <p className={styles.lede}>
            Generic AI skills get generic interviews. Pick the industry you
            already understand, build inside it, and walk into the room with
            projects that match the job description.
          </p>
        </header>

        <p className={styles.badge}>
          <span className={styles.badgeMark}>
            <CheckCircleIcon className={styles.badgeIcon} />
          </span>
          Same curriculum · your problem set
        </p>
      </div>

      {/* ---- Tabs ---- */}
      <div className={styles.tabs} role="tablist" aria-label="Domain specialisations">
        {DOMAINS.map((domain) => {
          const selected = domain.id === activeId;
          return (
            <button
              key={domain.id}
              type="button"
              role="tab"
              id={`domain-tab-${domain.id}`}
              aria-selected={selected}
              aria-controls={`domain-panel-${domain.id}`}
              className={`${styles.tab} ${selected ? styles.tabActive : ''}`}
              style={{ '--accent': domain.accent }}
              onClick={() => setActiveId(domain.id)}
            >
              <span className={styles.tabIcon}>
                <DomainIcon name={domain.icon} className={styles.tabIconSvg} />
              </span>
              {domain.label}
            </button>
          );
        })}
      </div>

      {/* ---- Panel ---- */}
      <div
        className={styles.panel}
        role="tabpanel"
        id={`domain-panel-${active.id}`}
        aria-labelledby={`domain-tab-${active.id}`}
        style={{ '--accent': active.accent }}
      >
        <div className={styles.choose}>
          <div className={styles.chooseCopy}>
            <p className={styles.panelKicker}>You choose</p>
            <h3 className={styles.domainName}>{active.label}</h3>
            <p className={styles.domainSummary}>{active.summary}</p>
          </div>
          <ul className={styles.chips}>
            {active.chips.map((chip) => (
              <li key={chip} className={styles.chip}>
                {chip}
              </li>
            ))}
          </ul>
          <span className={styles.watermark} aria-hidden="true">
            {active.label}
          </span>
        </div>

        <div className={styles.column}>
          <p className={styles.panelKicker}>Projects you&rsquo;ll build</p>
          <ol className={styles.projects}>
            {active.projects.map((project, i) => (
              <li key={project.title} className={styles.project}>
                <span className={styles.projectNum}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={styles.projectCopy}>
                  <strong>{project.title}</strong>
                  <span>{project.body}</span>
                </span>
              </li>
            ))}
          </ol>
          <ul className={`${styles.chips} ${styles.tagChips}`}>
            {active.tags.map((tag) => (
              <li key={tag} className={styles.chip}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <p className={styles.panelKicker}>Where it can take you</p>
          <ol className={styles.ladder}>
            {active.ladder.map((step, i) => (
              <li key={step.title} className={styles.step}>
                <span
                  className={`${styles.stepDot} ${i === 0 ? styles.stepDotActive : ''}`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={styles.stepCopy}>
                  <strong>{step.title}</strong>
                  <span>{step.body}</span>
                </span>
              </li>
            ))}
          </ol>
          <div className={styles.futureReady}>
            <p className={styles.futureReadyHead}>
              <SparkleIcon className={styles.sparkle} />
              Future-ready
            </p>
            <p className={styles.futureReadyBody}>{active.futureReady}</p>
          </div>
        </div>
      </div>

      {/* ---- Tools ---- */}
      <div className={styles.tools}>
        <p className={styles.toolsLabel}>Tools you&rsquo;ll master</p>
        <ul className={styles.toolChips}>
          {TOOL_LOGOS.map((tool) => (
            <li key={tool.alt} className={styles.toolChip}>
              <Image
                src={tool.src}
                alt={tool.alt}
                width={tool.width}
                height={20}
                className={styles.toolLogo}
              />
            </li>
          ))}
          <li className={`${styles.toolChip} ${styles.toolMore}`}>25 more +</li>
        </ul>
      </div>
    </section>
  );
}
