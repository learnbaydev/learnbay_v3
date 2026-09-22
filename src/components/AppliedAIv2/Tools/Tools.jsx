'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Tools.module.css';
import { TOOL_CATEGORIES } from './toolCategories';

export default function Tools() {
  const [activeId, setActiveId] = useState(TOOL_CATEGORIES[0].id);
  const active =
    TOOL_CATEGORIES.find((c) => c.id === activeId) || TOOL_CATEGORIES[0];

  return (
    <section className={styles.section} id="tools">
      <header className={styles.head}>
        <p className={styles.kicker}>Tools and platforms</p>
        <h2 className={styles.title}>35+ tools, across six working categories.</h2>
        <p className={styles.lede}>
          Hands-on exposure, not slide-deck familiarity. Every tool below is used
          inside something you build during the programme.
        </p>
      </header>

      <div className={styles.layout}>
        <div className={styles.rail} role="tablist" aria-label="Tool categories">
          {TOOL_CATEGORIES.map((category) => {
            const selected = category.id === activeId;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`tool-tab-${category.id}`}
                aria-selected={selected}
                aria-controls={`tool-panel-${category.id}`}
                className={`${styles.railItem} ${selected ? styles.railItemActive : ''}`}
                onClick={() => setActiveId(category.id)}
              >
                <span>{category.label}</span>
                <span className={styles.railCount}>{category.tools.length}</span>
              </button>
            );
          })}
        </div>

        <div
          className={styles.panel}
          role="tabpanel"
          id={`tool-panel-${active.id}`}
          aria-labelledby={`tool-tab-${active.id}`}
        >
          <div className={styles.panelCopy}>
            <h3 className={styles.panelTitle}>{active.label}</h3>
            <p className={styles.panelBlurb}>{active.blurb}</p>
          </div>

          <ul className={styles.toolChips}>
            {active.tools.map((tool) => (
              <li key={tool.name} className={styles.toolChip}>
                {tool.logo ? (
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={tool.width}
                    height={20}
                    className={styles.toolLogo}
                  />
                ) : (
                  tool.name
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
