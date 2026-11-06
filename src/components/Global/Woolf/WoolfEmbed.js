import Script from 'next/script';
import { memo } from 'react';
import styles from './WoolfEmbed.module.css';

// Woolf's sponsor embed (see "Learnbay: Woolf Badge and Block update", Oct 2026).
// The placeholder markup below is Woolf's snippet as given: Woolf checks it to
// confirm the Badge/Block is live, so don't change the attributes or link.
// v1.js swaps each placeholder for an iframe and watches the DOM, so it also
// picks up placeholders rendered after a client-side route change. It is safe
// to load more than once; next/script loads it once per session anyway.
// Woolf's rules: use these only on Woolf degree pages.
const WOOLF_EMBED_SRC = 'https://woolf.education/embed/v1.js';

// The one-line statement Woolf asked for, worded as Woolf wrote it.
export const WOOLF_COLLEGE_LINE =
  'Learnbay Excelversity is a college of Woolf, and Woolf awards the MSc.';

// The script empties these placeholders, so React must never re-render them.
export const WoolfBadge = memo(function WoolfBadge({ skin = 'light', className }) {
  return (
    <div className={className}>
      <Script src={WOOLF_EMBED_SRC} strategy="afterInteractive" />
      <div
        data-woolf-embed="badge"
        data-college="learnbay"
        data-skin={skin}
      >
        <a href="https://woolf.education/verify/learnbay#badge">
          Check Learnbay&apos;s status with Woolf
        </a>
      </div>
    </div>
  );
});

// The Block is full width, so it gets its own section.
export const WoolfBlock = memo(function WoolfBlock({ id = 'woolf' }) {
  return (
    <section className={styles.blockSection} id={id}>
      <Script src={WOOLF_EMBED_SRC} strategy="afterInteractive" />
      <div data-woolf-embed="block" data-college="learnbay">
        <a href="https://woolf.education/verify/learnbay#block">
          Check Learnbay&apos;s status with Woolf
        </a>
      </div>
    </section>
  );
});
