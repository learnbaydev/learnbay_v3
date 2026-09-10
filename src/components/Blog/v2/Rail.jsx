import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  PiLinkedinLogoFill,
  PiFacebookLogoFill,
  PiWhatsappLogoFill,
  PiClipboardTextBold,
  PiCheckBold,
} from 'react-icons/pi';
import { FaXTwitter } from 'react-icons/fa6';
import { getAuthorByName, getAuthorHref } from '@/lib/blog/authors';
import styles from './Rail.module.css';

const FALLBACK_THUMB = 'linear-gradient(135deg, #2563eb 0%, #7c5ce6 71%)';

/**
 * Copies text without the async Clipboard API, which only exists on secure
 * origins — so sharing still works when the site is opened over plain http,
 * e.g. a LAN IP during review. Returns whether the copy succeeded.
 */
function legacyCopy(text) {
  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  // Keep it off-screen and non-focusing so the page does not scroll or flash.
  field.style.cssText = 'position:fixed;top:0;left:-9999px;opacity:0;';
  document.body.appendChild(field);
  field.select();
  let ok = false;
  try {
    ok = document.execCommand('copy');
  } catch {
    ok = false;
  }
  document.body.removeChild(field);
  return ok;
}

function ShareBlock({ title, url }) {
  const [copied, setCopied] = useState(false);

  const share = (href) =>
    window.open(href, '_blank', 'noopener,noreferrer,width=640,height=560');

  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copy = async () => {
    let ok = false;
    try {
      // Absent on http origins, and can reject if the document is not focused.
      await navigator.clipboard.writeText(url);
      ok = true;
    } catch {
      ok = legacyCopy(url);
    }
    if (!ok) return;
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`${styles.block} ${styles.hideOnNarrow}`}>
      <p className={styles.label}>SHARE THIS ARTICLE</p>
      <div className={styles.share}>
        <button
          type="button"
          className={styles.shareBtn}
          aria-label="Share on LinkedIn"
          onClick={() =>
            share(`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`)
          }
        >
          <PiLinkedinLogoFill />
        </button>
        <button
          type="button"
          className={styles.shareBtn}
          aria-label="Share on X"
          onClick={() =>
            share(`https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`)
          }
        >
          <FaXTwitter />
        </button>
        <button
          type="button"
          className={styles.shareBtn}
          aria-label="Share on Facebook"
          onClick={() =>
            share(`https://www.facebook.com/sharer/sharer.php?u=${encoded}`)
          }
        >
          <PiFacebookLogoFill />
        </button>
        <button
          type="button"
          className={styles.shareBtn}
          aria-label="Share on WhatsApp"
          onClick={() =>
            share(`https://api.whatsapp.com/send?text=${encodedTitle}%20${encoded}`)
          }
        >
          <PiWhatsappLogoFill />
        </button>
        <button
          type="button"
          className={`${styles.shareBtn} ${copied ? styles.copied : ''}`}
          aria-label={copied ? 'Link copied' : 'Copy link'}
          onClick={copy}
        >
          {copied ? <PiCheckBold /> : <PiClipboardTextBold />}
        </button>
      </div>
    </div>
  );
}

// Highlights the section currently under the top third of the viewport.
function useActiveHeading(headings) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!headings.length || typeof IntersectionObserver === 'undefined') return;

    const visible = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.set(entry.target.id, entry);
          else visible.delete(entry.target.id);
        });

        // Of everything on screen, the topmost heading wins.
        const first = headings.find((heading) => visible.has(heading.id));
        if (first) setActiveId(first.id);
      },
      { rootMargin: '0px 0px -66% 0px', threshold: 0 }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  return activeId;
}

const Rail = ({ post, headings }) => {
  const activeId = useActiveHeading(headings);
  // Registry photo when we have one; the initials disc is the fallback for a
  // byline with no author profile.
  const authorPhoto = getAuthorByName(post.author)?.photo;

  return (
    <aside className={styles.rail}>
      <ShareBlock title={post.title} url={post.canonicalUrl} />

      {headings.length > 0 && (
        <div className={styles.block}>
          <p className={styles.label}>IN THIS ARTICLE</p>
          <div className={styles.tocList}>
            {headings.map((heading, index) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={`${styles.toc} ${
                  heading.level > 2 ? styles.tocSub : ''
                } ${activeId === heading.id ? styles.tocActive : ''}`}
              >
                <span className={styles.tocRow}>
                  <span className={styles.tocNum}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.tocText}>{heading.text}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      {post.authorBio && (
        <div className={styles.block}>
          <p className={styles.label}>AUTHOR</p>
          <div className={styles.author}>
            {authorPhoto ? (
              <img
                className={styles.avatarPhoto}
                src={authorPhoto}
                alt={post.author}
                width={44}
                height={44}
                loading="lazy"
              />
            ) : (
              <span className={styles.avatar}>{post.authorInitials}</span>
            )}
            <div>
              <p className={styles.authorName}>
                {getAuthorHref(post.author) ? (
                  <Link href={getAuthorHref(post.author)}>{post.author}</Link>
                ) : (
                  post.author
                )}
              </p>
              <p className={styles.authorBio}>{post.authorBio}</p>
            </div>
          </div>
        </div>
      )}

      {post.programCard && (
        <div className={styles.block}>
          <p className={styles.label}>LEARNBAY PROGRAM</p>
          <Link href={post.programCard.href || '#'} className={styles.card}>
            <span className={styles.cardLabel}>
              {post.programCard.label || 'LEARNBAY PROGRAM'}
            </span>
            <span className={styles.cardTitle}>{post.programCard.title}</span>
            <span className={styles.cardMeta}>{post.programCard.meta}</span>
            <span className={styles.cardCta}>
              {post.programCard.cta || 'Explore the program'}
            </span>
          </Link>
        </div>
      )}

      {post.editorsPicks?.length > 0 && (
        <div className={`${styles.block} ${styles.hideOnNarrow}`}>
          <p className={styles.label}>EDITOR’S PICKS</p>
          {post.editorsPicks.map((pick) => (
            <Link
              key={pick.slug}
              href={`/blogs/${pick.slug}`}
              className={styles.pick}
            >
              <span
                className={styles.thumb}
                style={{
                  backgroundImage: pick.image
                    ? `url(${pick.image})`
                    : pick.accent || FALLBACK_THUMB,
                }}
              />
              <span>
                {pick.category && (
                  <span className={styles.pickCategory}>
                    {pick.category.toUpperCase()}
                  </span>
                )}
                <span className={styles.pickTitle}>{pick.title}</span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </aside>
  );
};

export default Rail;
