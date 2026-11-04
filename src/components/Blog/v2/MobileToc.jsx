import { useRef } from 'react';
import { PiCaretDownBold } from 'react-icons/pi';
import styles from './MobileToc.module.css';

/**
 * Narrow-screen table of contents: a collapsed disclosure above the article,
 * the same affordance v1 gives on mobile. Above 1180px the sticky rail owns
 * the TOC and this is hidden by CSS.
 *
 * Built on <details> so it opens and closes without JavaScript and is keyboard
 * accessible for free; the only script is closing it after a jump.
 */
const MobileToc = ({ headings }) => {
  const ref = useRef(null);

  if (!headings?.length) return null;

  return (
    <details className={styles.toc} ref={ref}>
      <summary className={styles.summary}>
        In this article
        <span className={styles.count}>{headings.length}</span>
        <PiCaretDownBold className={styles.caret} aria-hidden />
      </summary>

      <ol className={styles.list}>
        {headings.map((heading, index) => (
          <li
            className={`${styles.item} ${
              heading.level > 2 ? styles.sub : ''
            }`}
            key={heading.id}
          >
            <a
              className={styles.link}
              href={`#${heading.id}`}
              // Collapse after jumping, so the reader lands on the section
              // rather than on a long open list.
              onClick={() => {
                if (ref.current) ref.current.open = false;
              }}
            >
              <span className={styles.num}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={styles.text}>{heading.text}</span>
            </a>
          </li>
        ))}
      </ol>
    </details>
  );
};

export default MobileToc;
