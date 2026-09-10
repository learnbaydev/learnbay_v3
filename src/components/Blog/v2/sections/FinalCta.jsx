import BlogCta from '../blocks/BlogCta';
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
            <BlogCta href={config.primaryHref || '#'} className={styles.finalPrimary} popupConfig={config.primaryPopup || config.popup}>
              {config.primaryCta}
            </BlogCta>
          )}
          {config.secondaryCta && (
            <BlogCta href={config.secondaryHref || '#'} className={styles.finalSecondary} popupConfig={config.secondaryPopup || config.popup}>
              {config.secondaryCta}
            </BlogCta>
          )}
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
