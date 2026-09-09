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
import styles from './Rail.module.css';

const FALLBACK_THUMB = 'linear-gradient(135deg, #2563eb 0%, #7c5ce6 71%)';

function ShareBlock({ title }) {
  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);

  // Read the canonical URL on the client so the markup stays identical between
  // the static build and hydration.
  useEffect(() => setUrl(window.location.href), []);

  const share = (href) =>
    window.open(href, '_blank', 'noopener,noreferrer,width=640,height=560');

  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard is unavailable over http or when permission is denied. The
      // address bar already has the URL, so failing quietly is fine.
    }
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

  return (
    <aside className={styles.rail}>
      <ShareBlock title={post.title} />

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
            <span className={styles.avatar}>{post.authorInitials}</span>
            <div>
              <p className={styles.authorName}>{post.author}</p>
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
