import styles from './Blocks.module.css';
import { slugToId } from '@/lib/blog/slug';

/**
 * Blocks whose body is prose. Each is authored as a container directive and
 * receives its markdown children already rendered by react-markdown:
 *
 *   :::callout{title="What I found"}
 *   Body copy, **still markdown**.
 *   :::
 */

export function Callout({ title, children }) {
  return (
    <div className={styles.callout}>
      {title && <p className={styles.calloutTitle}>{title}</p>}
      <div className={styles.calloutBody}>{children}</div>
    </div>
  );
}

export function PullQuote({ cite, children }) {
  return (
    <figure className={styles.pullQuote}>
      <span className={styles.quoteMark} aria-hidden="true">
        “
      </span>
      <blockquote className={styles.quoteBody}>
        {children}
        {cite && <cite className={styles.quoteCite}>— {cite}</cite>}
      </blockquote>
    </figure>
  );
}

export function Note({ children }) {
  return <div className={styles.note}>{children}</div>;
}

/**
 * A numbered article section. The heading it renders is what the rail's TOC
 * links to, so the id must match the one `extractHeadings` derives from the
 * title — hence the shared `slugToId`.
 */
export function Section({ n, title, id, children }) {
  const headingId = id || slugToId(title || '');
  return (
    <section className={styles.section} id={headingId}>
      {title && (
        <div className={styles.sectionHead}>
          {n && <span className={styles.sectionNum}>{n}</span>}
          <h2 className={styles.sectionTitle}>{title}</h2>
        </div>
      )}
      {children}
    </section>
  );
}

/**
 * `::spec-line{from=learnbaySpec}` where the frontmatter holds an object of
 * label → value pairs. Rendered as one dense run-on line, as in the design.
 */
export function SpecLine({ data }) {
  const entries = Object.entries(data || {});
  if (!entries.length) return null;

  return (
    <p className={styles.specLine}>
      {entries.map(([key, value], index) => (
        <span key={key}>
          <span className={styles.specKey}>{key}</span> {value}
          {index < entries.length - 1 ? ' · ' : ''}
        </span>
      ))}
    </p>
  );
}

/**
 * `::verdict{from=learnbayVerdict}` with `{ bestFor, tradeOff }`.
 */
export function Verdict({ data }) {
  if (!data) return null;
  const { bestFor, tradeOff, bestForLabel, tradeOffLabel } = data;

  return (
    <div className={styles.verdict}>
      {bestFor && (
        <div className={styles.verdictCell}>
          <p className={`${styles.verdictLabel} ${styles.verdictPositive}`}>
            {bestForLabel || 'BEST FOR'}
          </p>
          <p className={styles.verdictText}>{bestFor}</p>
        </div>
      )}
      {tradeOff && (
        <div className={styles.verdictCell}>
          <p className={`${styles.verdictLabel} ${styles.verdictCaution}`}>
            {tradeOffLabel || 'TRADE-OFF'}
          </p>
          <p className={styles.verdictText}>{tradeOff}</p>
        </div>
      )}
    </div>
  );
}
