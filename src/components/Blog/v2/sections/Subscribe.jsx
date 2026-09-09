import { useState } from 'react';
import styles from './Sections.module.css';

/**
 * Newsletter band. Like the report block, it collects the address and posts to
 * whichever endpoint the post's frontmatter names — no submission logic here.
 */
const Subscribe = ({ config }) => {
  const [email, setEmail] = useState('');
  if (!config) return null;

  return (
    <section className={styles.wrap}>
      <div className={styles.subscribe}>
        <h2 className={styles.subscribeTitle}>
          {config.title || 'Get the next guide before anyone else'}
        </h2>
        {config.text && <p className={styles.subscribeText}>{config.text}</p>}

        <form
          className={styles.subscribeForm}
          action={config.action || undefined}
          method="post"
        >
          <input
            className={styles.subscribeInput}
            type="email"
            name="email"
            required
            placeholder={config.placeholder || 'Your work email'}
            aria-label="Your work email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button type="submit" className={styles.subscribeBtn}>
            {config.cta || 'Subscribe'}
          </button>
        </form>

        {config.finePrint && (
          <p className={styles.subscribeFinePrint}>{config.finePrint}</p>
        )}
      </div>
    </section>
  );
};

export default Subscribe;
