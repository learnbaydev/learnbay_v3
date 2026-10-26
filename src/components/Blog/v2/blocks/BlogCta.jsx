import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { markPopupSeen } from '@/components/Blog/popupSession';

const BlogLeadPopup = dynamic(() => import('@/components/Blog/BlogLeadPopup'));

/**
 * Any CTA href set to `popup` opens the blog lead popup instead of navigating.
 * Lets a post turn a counselling link into the form from frontmatter alone:
 *
 *   secondaryCta: 'Talk to a counsellor'
 *   secondaryHref: 'popup'
 */
export function isPopupHref(href) {
  return (
    typeof href === 'string' &&
    ['popup', '#popup'].includes(href.trim().toLowerCase())
  );
}

const BlogCta = ({ href, className, children, popupConfig }) => {
  const [open, setOpen] = useState(false);

  // PDFs (brochures, checklists) open in a new tab so the reader keeps the post.
  if (typeof href === 'string' && /\.pdf(\?|#|$)/i.test(href.trim())) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener">
        {children}
      </a>
    );
  }

  if (!isPopupHref(href)) {
    return (
      <Link href={href || '#'} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          // Opening it deliberately counts as seen, so the scroll-triggered
          // popup does not interrupt a moment later.
          markPopupSeen();
          setOpen(true);
        }}
      >
        {children}
      </button>
      {open && (
        <BlogLeadPopup
          open={open}
          onClose={() => setOpen(false)}
          config={popupConfig || {}}
        />
      )}
    </>
  );
};

export default BlogCta;
