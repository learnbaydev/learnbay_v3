import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { markPopupSeen } from '@/components/Blog/popupSession';
import { isGatedHref } from '@/lib/blog/links';

const BlogLeadPopup = dynamic(() => import('@/components/Blog/BlogLeadPopup'));

/**
 * Any CTA href set to `popup` opens the blog lead popup instead of navigating.
 * Lets a post turn a counselling link into the form from frontmatter alone:
 *
 *   secondaryCta: 'Talk to a counsellor'
 *   secondaryHref: 'popup'
 *
 * A brochure-bucket PDF href is gated the same way: the form opens, and the PDF
 * opens in a new tab only after it submits. The real URL never lands in the DOM, so
 * middle-click or "copy link" cannot skip the form.
 */
export function isPopupHref(href) {
  return (
    typeof href === 'string' &&
    ['popup', '#popup'].includes(href.trim().toLowerCase())
  );
}

// Form copy for a gated download, so a post only has to supply the pitch.
const DOWNLOAD_COPY = {
  formTitle: 'Get the PDF',
  formSubtitle: 'Enter your details and the PDF opens in a new tab.',
  submitCta: 'Download the PDF',
  secondaryCta: null,
};

/**
 * `inline` renders the trigger as an anchor rather than a button, for links in
 * running text, so prose link styling still applies.
 */
const BlogCta = ({ href, className, children, popupConfig, inline = false }) => {
  const [open, setOpen] = useState(false);
  const gated = isGatedHref(href);

  // Other PDFs (not on the brochure bucket) open in a new tab so the reader
  // keeps the post.
  if (!gated && typeof href === 'string' && /\.pdf(\?|#|$)/i.test(href.trim())) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener">
        {children}
      </a>
    );
  }

  if (!gated && !isPopupHref(href)) {
    return (
      <Link href={href || '#'} className={className}>
        {children}
      </Link>
    );
  }

  const openPopup = (event) => {
    event.preventDefault();
    // Opening it deliberately counts as seen, so the scroll-triggered popup
    // does not interrupt a moment later.
    markPopupSeen();
    setOpen(true);
  };

  const config = gated
    ? { ...DOWNLOAD_COPY, ...popupConfig, brochure: popupConfig?.brochure || href }
    : popupConfig || {};

  return (
    <>
      {inline ? (
        <a href="#" role="button" className={className} onClick={openPopup}>
          {children}
        </a>
      ) : (
        <button type="button" className={className} onClick={openPopup}>
          {children}
        </button>
      )}
      {open && (
        <BlogLeadPopup
          open={open}
          onClose={() => setOpen(false)}
          config={config}
        />
      )}
    </>
  );
};

export default BlogCta;
