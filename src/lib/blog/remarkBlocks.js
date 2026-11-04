/**
 * Turns `remark-directive` nodes into plain <div> elements carrying the block
 * name and its attributes, e.g.
 *
 *   :::callout{title="What I found"}
 *   Body markdown, still rendered as markdown.
 *   :::
 *
 *   ::stat-cards{from=hiringStats}
 *
 * becomes `<div data-block="callout" data-props='{"title":"What I found"}'>`.
 * `BlockRenderer` picks those up and swaps in the real component.
 *
 * Emitting a <div> rather than a custom element keeps the output valid HTML, so
 * `rehype-raw` and react-markdown both leave it alone.
 */

// The directive names the renderer knows about. An unrecognised name is left as
// a labelled div, which `BlockRenderer` renders as nothing in production — a
// typo should not blank the whole article.
export const BLOCK_NAMES = [
  'callout',
  'pull-quote',
  'note',
  'section',
  'stat-cards',
  'scenario-table',
  'comparison-matrix',
  'verdict',
  'spec-line',
  'takeaways',
  'checklist',
  'faq',
  'glossary',
  'progress-stats',
  'course-carousel',
  'success-stories',
  'reels',
  'learnbay-strip',
  'learnbay-split-card',
  'learnbay-dark-band',
  'report-download',
  'top-pick',
  'program-lineup',
  'youtube',
];

const DIRECTIVE_TYPES = new Set([
  'containerDirective',
  'leafDirective',
  'textDirective',
]);

function walk(node, visitor) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node.children)) {
    node.children.forEach((child) => {
      visitor(child, node);
      walk(child, visitor);
    });
  }
}

export default function remarkBlocks() {
  return (tree) => {
    walk(tree, (node) => {
      if (!DIRECTIVE_TYPES.has(node.type)) return;

      // A text directive (`:name`) is almost always a false positive — a stray
      // colon in prose. Restore it as literal text rather than dropping it.
      if (node.type === 'textDirective' && !BLOCK_NAMES.includes(node.name)) {
        node.type = 'text';
        node.value = `:${node.name}`;
        node.children = [];
        return;
      }

      const attributes = node.attributes || {};
      node.data = node.data || {};
      node.data.hName = 'div';
      node.data.hProperties = {
        'data-block': node.name,
        'data-props': JSON.stringify(attributes),
      };
    });
  };
}
