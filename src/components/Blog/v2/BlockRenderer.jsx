import { createContext, useContext } from 'react';
import BLOCKS from './blocks';

/**
 * Carries the post's `data:` frontmatter down to whichever block asks for a key
 * with `from=`. Using context keeps the react-markdown `components` map free of
 * per-post closures, so it can stay memoised.
 */
const BlockDataContext = createContext({});

export const BlockDataProvider = BlockDataContext.Provider;

/**
 * Renders one `<div data-block="...">` emitted by `remarkBlocks` as its real
 * component. Anything that is not a block div is passed through untouched.
 */
export default function BlockRenderer({ node, children, ...props }) {
  const blockData = useContext(BlockDataContext);
  const name = props['data-block'];

  if (!name) {
    // An ordinary <div> the author wrote in raw HTML.
    const { 'data-props': _ignored, ...rest } = props;
    return <div {...rest}>{children}</div>;
  }

  const entry = BLOCKS[name];
  if (!entry) {
    // Unknown directive name — almost always a typo. Warn while developing and
    // render nothing, rather than dumping an empty div into the article.
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[blog v2] Unknown block ":::${name}". Check the spelling.`);
    }
    return null;
  }

  let attrs = {};
  try {
    attrs = JSON.parse(props['data-props'] || '{}') || {};
  } catch {
    attrs = {};
  }

  const { component: Component, prose, attrsOnly } = entry;
  const { from, ...rest } = attrs;

  if (prose) {
    return <Component {...rest}>{children}</Component>;
  }

  if (attrsOnly) {
    return <Component {...rest} />;
  }

  const data = from ? blockData?.[from] : undefined;

  if (from && data === undefined && process.env.NODE_ENV !== 'production') {
    console.warn(
      `[blog v2] Block "${name}" asked for data.${from}, which is not in this post's frontmatter.`
    );
  }

  return <Component {...rest} data={data} />;
}
