import { externalLinkProps } from '@/lib/blog/links';

// `[text](url)` inside a frontmatter string. Frontmatter is not run through
// react-markdown, so links written there would otherwise print as raw text.
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/**
 * Renders a frontmatter string with its markdown links as real anchors, under
 * the same outbound-link policy as the post body. Anything without a link (or
 * that is not a string) is returned unchanged.
 */
export default function InlineLinks({ text }) {
  if (typeof text !== 'string' || !text.includes('](')) return text ?? null;

  const parts = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const [, label, href] = match;
    parts.push(
      <a key={match.index} href={href} {...externalLinkProps(href)}>
        {label}
      </a>
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
