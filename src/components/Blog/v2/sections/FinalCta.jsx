import Link from 'next/link';
import styles from './Sections.module.css';

const FinalCta = ({ config }) => {
  if (!config) return null;

  return (
    <section className={styles.finalCta}>
      <div className={styles.finalInner}>
        <div className={styles.finalMain}>
          <h2 className={styles.finalTitle}>{config.title}</h2>
          {config.text && <p className={styles.finalText}>{config.text}</p>}
        </div>

        <div className={styles.finalActions}>
          {config.primaryCta && (
            <Link
              href={config.primaryHref || '#'}
              className={styles.finalPrimary}
            >
              {config.primaryCta}
            </Link>
          )}
          {config.secondaryCta && (
            <Link
              href={config.secondaryHref || '#'}
              className={styles.finalSecondary}
            >
              {config.secondaryCta}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
