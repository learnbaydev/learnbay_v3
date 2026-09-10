import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  PiTrophyFill,
  PiCheckCircleFill,
  PiPhoneFill,
  PiArrowRightBold,
} from 'react-icons/pi';
import { markPopupSeen } from '@/components/Blog/popupSession';
import styles from './Blocks.module.css';

// The shared blog lead popup. Loaded on demand so a post that never opens it
// does not ship the modal and form.
const BlogLeadPopup = dynamic(() => import('@/components/Blog/BlogLeadPopup'));

/**
 * Renders `**bold**` runs inside an otherwise plain frontmatter string, so the
 * pitch can emphasise who the program is for without needing a markdown body.
 */
function withBold(text) {
  return String(text || '')
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((part, index) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={index}>{part.slice(2, -2)}</strong>
      ) : (
        part
      )
    );
}

/**
 * The "our top pick" promo card: badge, gradient headline, two-column tick
 * list, and a pair of CTAs.
 *
 * The primary CTA opens the site's standard lead form rather than linking out.
 * That form resolves its own endpoint from `getEndPoint(router.pathname)`, and
 * `/blogs/[slug]` is not special-cased there, so it posts to exactly the same
 * destination as the homepage form.
 */
export function TopPick({ data }) {
  const [formOpen, setFormOpen] = useState(false);
  if (!data) return null;

  const { badge, title, text, points = [] } = data;

  return (
    <aside className={styles.topPick}>
      {badge && (
        <p className={styles.topPickBadge}>
          <PiTrophyFill aria-hidden />
          {badge}
        </p>
      )}

      <p className={styles.topPickTitle}>{title}</p>
      {text && <p className={styles.topPickText}>{withBold(text)}</p>}

      {points.length > 0 && (
        <ul className={styles.topPickPoints}>
          {points.map((point, index) => (
            <li className={styles.topPickPoint} key={index}>
              <PiCheckCircleFill className={styles.topPickTick} aria-hidden />
              {point}
            </li>
          ))}
        </ul>
      )}

      <div className={styles.topPickActions}>
        {data.primaryCta && (
          <button
            type="button"
            className={styles.topPickPrimary}
            onClick={() => {
              // Opening it deliberately counts as seen, so the scroll-triggered
              // popup does not interrupt them a moment later.
              markPopupSeen();
              setFormOpen(true);
            }}
          >
            <PiPhoneFill aria-hidden />
            {data.primaryCta}
          </button>
        )}
        {data.secondaryCta && (
          <Link
            href={data.secondaryHref || '#'}
            className={styles.topPickSecondary}
          >
            {data.secondaryCta}
            <PiArrowRightBold aria-hidden />
          </Link>
        )}
      </div>

      {/* Mounted only once opened, so the modal stays out of the initial page
          cost. Copy defaults live in the popup; `data.popup` overrides per post. */}
      {formOpen && (
        <BlogLeadPopup
          open={formOpen}
          onClose={() => setFormOpen(false)}
          config={{
            secondaryHref: data.secondaryHref,
            ...(data.popup || {}),
          }}
        />
      )}
    </aside>
  );
}

export default TopPick;
