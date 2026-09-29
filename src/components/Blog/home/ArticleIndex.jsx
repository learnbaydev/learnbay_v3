import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  PiBookmarkSimple,
  PiBookmarkSimpleFill,
  PiMagnifyingGlass,
} from 'react-icons/pi';
import styles from './BlogHome.module.css';

const SAVED_KEY = 'lb-saved-guides';

// Saved guides are a per-browser convenience. Storage can be missing or throw
// (private windows, blocked site data), so every access degrades to "nothing
// saved" instead of breaking the page.
function readSaved() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(SAVED_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeSaved(slugs) {
  try {
    window.localStorage.setItem(SAVED_KEY, JSON.stringify(slugs));
  } catch {
    // Not persisted; the in-memory state still reflects the click.
  }
}

// The grid runs in a repeating beat of two large cards, then three small ones.
const isLarge = (index) => index % 5 < 2;

const ArticleCard = ({ post, large, saved, onToggleSave }) => (
  <article className={`${styles.card} ${large ? styles.cardLarge : ''}`}>
    <div className={styles.cardBanner}>
      {post.image && (
        <img src={post.image} alt={post.alt} loading="lazy" decoding="async" />
      )}
    </div>

    <h3 className={large ? styles.cardTitleLarge : styles.cardTitleSmall}>
      <Link href={`/blogs/${post.slug}`} className={styles.cardLink}>
        {post.title}
      </Link>
    </h3>

    {large && post.excerpt && (
      <p className={styles.cardExcerpt}>{post.excerpt}</p>
    )}

    <div className={styles.cardMeta}>
      <span className={styles.cardCategory}>{post.label}</span>
      {post.readTime && (
        <>
          <span className={styles.dot} aria-hidden />
          <span>{post.readTime}</span>
        </>
      )}
      {post.date && (
        <>
          <span className={styles.dot} aria-hidden />
          <span>{post.date}</span>
        </>
      )}
      <button
        type="button"
        className={`${styles.save} ${saved ? styles.saveActive : ''}`}
        aria-pressed={saved}
        aria-label={
          saved ? `Remove "${post.title}" from saved` : `Save "${post.title}"`
        }
        onClick={() => onToggleSave(post.slug)}
      >
        {saved ? <PiBookmarkSimpleFill /> : <PiBookmarkSimple />}
      </button>
    </div>

    {large && (post.evidence || post.author) && (
      <div className={styles.cardEvidence}>
        {post.evidence && (
          <span className={styles.evidencePill}>{post.evidence}</span>
        )}
        {post.author && <span>{post.author}</span>}
      </div>
    )}
  </article>
);

const ArticleIndex = ({ posts, topics, totalGuides }) => {
  const [active, setActive] = useState('all');
  const [query, setQuery] = useState('');
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    setSaved(readSaved());
  }, []);

  const toggleSave = (slug) => {
    setSaved((prev) => {
      const next = prev.includes(slug)
        ? prev.filter((item) => item !== slug)
        : [...prev, slug];
      writeSaved(next);
      return next;
    });
  };

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return posts.filter((post) => {
      if (active === 'saved' && !saved.includes(post.slug)) return false;
      if (active !== 'all' && active !== 'saved' && post.topic !== active)
        return false;
      if (!needle) return true;
      return [post.title, post.excerpt, post.label, post.author]
        .join(' ')
        .toLowerCase()
        .includes(needle);
    });
  }, [posts, active, query, saved]);

  const chips = [
    { id: 'all', label: 'Everything', count: posts.length },
    ...topics,
    {
      id: 'saved',
      label: 'Saved',
      count: posts.filter((post) => saved.includes(post.slug)).length,
    },
  ];

  return (
    <>
      <div className={styles.filterBar}>
        <div className={`${styles.container} ${styles.filterInner}`}>
          <div
            className={styles.chips}
            role="group"
            aria-label="Filter by topic"
          >
            {chips.map((chip) => (
              <button
                key={chip.id}
                type="button"
                className={`${styles.chip} ${active === chip.id ? styles.chipActive : ''}`}
                aria-pressed={active === chip.id}
                onClick={() => setActive(chip.id)}
              >
                {chip.label}
                <span className={styles.chipCount}>{chip.count}</span>
              </button>
            ))}
          </div>

          <label className={styles.search}>
            <PiMagnifyingGlass className={styles.searchIcon} aria-hidden />
            <span className={styles.srOnly}>Search guides</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={`Search ${totalGuides} guides`}
            />
          </label>
        </div>
      </div>

      <section className={styles.gridSection} id="latest">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={styles.headCopy}>
              <p className={styles.eyebrow}>Latest from the desk</p>
              <h2 className={`${styles.d2} ${styles.d2Wide}`}>
                Everything we&apos;ve published, most recent first.
              </h2>
            </div>
            <p className={styles.headAside}>
              Read times are measured, not estimated. Long guides say so up
              front.
            </p>
          </div>

          {visible.length > 0 ? (
            <div className={styles.grid}>
              {visible.map((post, index) => (
                <ArticleCard
                  key={post.slug}
                  post={post}
                  large={isLarge(index)}
                  saved={saved.includes(post.slug)}
                  onToggleSave={toggleSave}
                />
              ))}
            </div>
          ) : (
            <p className={styles.empty}>
              {active === 'saved' && !query
                ? 'Nothing saved yet. Use the bookmark on any guide to keep it here.'
                : 'No guides match that search. Try a broader word, or clear the filter.'}
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default ArticleIndex;
