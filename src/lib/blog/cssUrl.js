/**
 * Wraps a URL for use as a CSS `url()` value.
 *
 * An unquoted `url(...)` ends at the first `)`, so any cover filename
 * containing a literal parenthesis silently breaks and falls back to the
 * placeholder gradient — which is exactly what happened to
 * "…Here+Are+The+9+That+Stand+Out).webp". Quoting fixes parentheses, spaces and
 * commas in one go; the escapes stop an embedded quote closing it early.
 */
export function cssUrl(value) {
  if (!value) return undefined;
  const escaped = String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  return `url("${escaped}")`;
}

export default cssUrl;
