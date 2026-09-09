import { useState } from 'react';
import Link from 'next/link';
import { PiStackBold, PiCheckCircleFill } from 'react-icons/pi';
import styles from './Blocks.module.css';

/**
 * The in-article Learnbay promo units. All four are frontmatter-driven so the
 * offer copy, pricing and links live in one place per post rather than being
 * retyped mid-prose.
 */

export function LearnbayStrip({ data }) {
  if (!data) return null;

  return (
    <aside className={styles.strip}>
      <span className={styles.stripAccent} aria-hidden />
      <span className={styles.stripIcon} aria-hidden>
        <PiStackBold />
      </span>
      <div className={styles.stripBody}>
        <p className={styles.stripTitle}>{data.title}</p>
        {data.text && <p className={styles.stripText}>{data.text}</p>}
      </div>
      {data.cta && (
        <Link href={data.href || '#'} className={styles.btnPrimary}>
          {data.cta}
        </Link>
      )}
    </aside>
  );
}

export function LearnbaySplitCard({ data }) {
  if (!data) return null;
  const { label, title, text, points = [], facts = [], finePrint } = data;

  return (
    <aside className={styles.splitCard}>
      <div className={styles.splitMain}>
        {label && <p className={styles.eyebrow}>{label}</p>}
        <p className={styles.splitTitle}>{title}</p>
        {text && <p className={styles.splitText}>{text}</p>}
        {points.length > 0 && (
          <ul className={styles.splitPoints}>
            {points.map((point, index) => (
              <li className={styles.splitPoint} key={index}>
                <PiCheckCircleFill className={styles.checkIcon} aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.splitSide}>
        {facts.length > 0 && (
          <div className={styles.splitFacts}>
            {facts.map((fact, index) => (
              <div className={styles.splitFact} key={index}>
                <p className={styles.splitFactLabel}>{fact.label}</p>
                <p className={styles.splitFactValue}>{fact.value}</p>
              </div>
            ))}
          </div>
        )}
        {data.primaryCta && (
          <Link href={data.primaryHref || '#'} className={styles.btnPrimary}>
            {data.primaryCta}
          </Link>
        )}
        {data.secondaryCta && (
          <Link
            href={data.secondaryHref || '#'}
            className={styles.btnSecondary}
          >
            {data.secondaryCta}
          </Link>
        )}
        {finePrint && <p className={styles.splitFinePrint}>{finePrint}</p>}
      </div>
    </aside>
  );
}

export function LearnbayDarkBand({ data }) {
  if (!data) return null;
  const { label, title, titleAccent, text, tags = [], stats = [] } = data;

  return (
    <aside className={styles.darkBand}>
      {label && <p className={styles.darkLabel}>{label}</p>}
      <p className={styles.darkTitle}>
        {title}
        {titleAccent && (
          <span className={styles.darkTitleAccent}> {titleAccent}</span>
        )}
      </p>
      {text && <p className={styles.darkText}>{text}</p>}

      {tags.length > 0 && (
        <ul className={styles.darkTags}>
          {tags.map((tag, index) => (
            <li className={styles.darkTag} key={index}>
              {tag}
            </li>
          ))}
        </ul>
      )}

      {(data.primaryCta || data.secondaryCta) && (
        <div className={styles.darkActions}>
          {data.primaryCta && (
            <Link href={data.primaryHref || '#'} className={styles.btnWhite}>
              {data.primaryCta}
            </Link>
          )}
          {data.secondaryCta && (
            <Link href={data.secondaryHref || '#'} className={styles.btnGhost}>
              {data.secondaryCta}
            </Link>
          )}
        </div>
      )}

      {stats.length > 0 && (
        <div className={styles.darkStats}>
          {stats.map((stat, index) => (
            <div key={index}>
              <p className={styles.darkStatValue}>{stat.value}</p>
              <p className={styles.darkStatLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

/**
 * Gated PDF download. The block only collects the address and hands it to the
 * endpoint named in frontmatter (`action`); it deliberately owns no submission
 * logic of its own so it can point at whichever form handler a post needs.
 */
export function ReportDownload({ data }) {
  const [email, setEmail] = useState('');
  if (!data) return null;

  return (
    <aside className={styles.report}>
      <div className={styles.reportIcon} aria-hidden>
        <span className={styles.reportLine} style={{ top: 12 }} />
        <span className={styles.reportLine} style={{ top: 20 }} />
        <span className={styles.reportLine} style={{ top: 28 }} />
        <span className={styles.reportLine} style={{ top: 36 }} />
        <p className={styles.reportKind}>PDF</p>
      </div>

      <div className={styles.reportBody}>
        <p className={styles.reportTitle}>{data.title}</p>
        {data.text && <p className={styles.reportText}>{data.text}</p>}
      </div>

      <form
        className={styles.reportForm}
        action={data.action || undefined}
        method="post"
      >
        <input
          className={styles.reportInput}
          type="email"
          name="email"
          required
          placeholder={data.placeholder || 'Work email'}
          aria-label="Work email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit" className={styles.btnDark}>
          {data.cta || 'Download the report'}
        </button>
      </form>
    </aside>
  );
}
