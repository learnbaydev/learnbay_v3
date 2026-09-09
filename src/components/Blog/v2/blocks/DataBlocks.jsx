import { PiCheckCircleFill, PiXCircleFill, PiMinusCircleFill } from 'react-icons/pi';
import styles from './Blocks.module.css';

/**
 * Blocks driven entirely by structured frontmatter. Each is placed with a leaf
 * directive that names the frontmatter key:
 *
 *   ::stat-cards{from=hiringStats cols=2}
 */

export function StatCards({ data, cols }) {
  const items = Array.isArray(data) ? data : [];
  if (!items.length) return null;

  const columns =
    cols === '3'
      ? styles.statCardsThreeCol
      : cols === '1'
        ? ''
        : styles.statCardsTwoCol;

  return (
    <div className={`${styles.statCards} ${columns}`}>
      {items.map((item, index) => (
        <div className={styles.statCard} key={index}>
          <p className={styles.statValue}>{item.value}</p>
          <p className={styles.statText}>{item.text}</p>
          {item.source && <p className={styles.statSource}>{item.source}</p>}
        </div>
      ))}
    </div>
  );
}

// Cell values of `yes` / `no` / `partial` render as the design's icons; every
// other value renders as text.
function Cell({ value }) {
  if (value === 'yes')
    return <PiCheckCircleFill className={styles.markYes} aria-label="Yes" />;
  if (value === 'no')
    return <PiXCircleFill className={styles.markNo} aria-label="No" />;
  if (value === 'partial')
    return (
      <PiMinusCircleFill className={styles.markPartial} aria-label="Partial" />
    );
  return value ?? '';
}

function Table({ columns, rows, caption }) {
  if (!columns?.length || !rows?.length) return null;

  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => {
            // A row may be a bare array, or an object carrying `highlight` to
            // mark the recommended option.
            const cells = Array.isArray(row) ? row : row.cells;
            const highlight = !Array.isArray(row) && row.highlight;
            return (
              <tr key={rowIndex} className={highlight ? styles.highlight : ''}>
                {cells.map((cell, cellIndex) => (
                  <td key={cellIndex}>
                    <Cell value={cell} />
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function ScenarioTable({ data }) {
  if (!data) return null;
  return <Table {...data} />;
}

export function ComparisonMatrix({ data }) {
  if (!data) return null;
  return <Table {...data} />;
}

export function Takeaways({ data }) {
  const items = Array.isArray(data) ? data : data?.items;
  if (!items?.length) return null;

  return (
    <div className={styles.takeaways}>
      {data?.title && <p className={styles.eyebrow}>{data.title}</p>}
      <ol className={styles.takeawayList}>
        {items.map((item, index) => (
          <li className={styles.takeawayItem} key={index}>
            <span className={styles.takeawayNum}>{index + 1}</span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Checklist({ data, cols }) {
  const items = Array.isArray(data) ? data : [];
  if (!items.length) return null;

  return (
    <ul
      className={`${styles.checklist} ${
        cols === '2' ? styles.checklistTwoCol : ''
      }`}
    >
      {items.map((item, index) => {
        // An item is either a plain string, or an object that can mark itself
        // as a "don't" with `ok: false`.
        const text = typeof item === 'string' ? item : item.text;
        const title = typeof item === 'string' ? null : item.title;
        const ok = typeof item === 'string' ? true : item.ok !== false;

        return (
          <li className={styles.checkItem} key={index}>
            {ok ? (
              <PiCheckCircleFill className={styles.checkIcon} aria-hidden />
            ) : (
              <PiXCircleFill className={styles.crossIcon} aria-hidden />
            )}
            <span>
              {title && <strong className={styles.checkTitle}>{title}</strong>}
              {text}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export function Glossary({ data }) {
  const items = Array.isArray(data) ? data : [];
  if (!items.length) return null;

  return (
    <dl className={styles.glossary}>
      {items.map((item, index) => (
        <div className={styles.glossaryRow} key={index}>
          <dt className={styles.glossaryTerm}>{item.term}</dt>
          <dd className={styles.glossaryDef}>{item.definition}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ProgressStats({ data }) {
  const items = Array.isArray(data) ? data : [];
  if (!items.length) return null;

  return (
    <div className={styles.progressStats}>
      {items.map((item, index) => {
        const percent = Math.max(0, Math.min(100, Number(item.percent) || 0));
        return (
          <div className={styles.progressRow} key={index}>
            <div className={styles.progressHead}>
              <span className={styles.progressLabel}>{item.label}</span>
              <span>{item.value ?? `${percent}%`}</span>
            </div>
            <div
              className={styles.progressTrack}
              role="img"
              aria-label={`${item.label}: ${item.value ?? `${percent}%`}`}
            >
              <div
                className={styles.progressBar}
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
