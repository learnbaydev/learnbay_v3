# Writing a v2 blog post

The blog has two layouts. Which one a post uses is decided by a single line of
frontmatter:

```yaml
layout: 'v2'
```

Leave it out and the post renders in the original design, exactly as before. All
25 existing posts have no `layout` key, so nothing about them changed. An
unknown value (`layout: 'v3'`, a typo) silently falls back to v1 rather than
breaking the build.

A complete, working post using every block is in
[`docs/examples/blog-v2-example.md`](examples/blog-v2-example.md). Copy it into
`src/blog/` and run `npm run dev` to see the whole library rendered. Do not
leave it there when you commit — anything in `src/blog/` publishes.

---

## The two halves of a v2 post

v2 splits a post into **prose** and **data**:

- **Prose** is the markdown body, written the way posts have always been
  written. Headings, paragraphs, lists, links, tables.
- **Data** is everything structured — stat cards, comparison tables, FAQs,
  pricing, CTAs. It lives in the frontmatter under `data:`, and the body just
  says *where* it goes.

The reason for the split: a comparison table written as YAML in frontmatter is
editable and consistent. The same table written inline in prose is not. Long
prose in YAML is miserable, so prose stays in the body.

---

## Part 1 — Frontmatter

### Fields v1 already had

`title`, `Stitle`, `description`, `keywords`, `date`, `author`, `readTime`,
`canonicalUrl`, `image`, `imagephone`, `alt`, `publishedDate`, `faqs`.

These all still work and still drive the `<title>`, OG/Twitter tags and
Article/FAQ schema. That block is shared between both layouts, so SEO markup
cannot drift between the old and new designs.

Note `faqs:` (top level) feeds the **FAQ schema** in `<head>`. It does not
render anything. To show an FAQ accordion on the page you also need a
`data:` entry and a `::faq` block — see below.

### Fields v2 adds

```yaml
layout: 'v2'

eyebrow: 'AI careers · 2026 guide'      # small blue line above the headline
category: 'AI careers, Course comparison'
titleHighlight: '9 That Stand Out'      # tail of the headline shown in blue
standfirst: 'Fees, curriculum and placement compared…'   # large grey intro
caption: 'The nine programs that stood out…'             # under the cover image

authorInitials: 'NB'    # optional; derived from `author` when omitted
authorBio: 'Writes Learnbay’s long-form guides on AI careers.'

# The pills under the standfirst. `value` is emphasised in blue.
facts:
  - { value: '50+', label: 'programs reviewed' }
  - { value: '9', label: 'shortlisted' }
  - { label: 'Updated', value: 'Sept 2026', valueAfter: true }   # value last

# Dark card in the sidebar
programCard:
  label: 'LEARNBAY PROGRAM'
  title: 'GenAI & Agentic AI Master Program'
  meta: '9 months · 100% live · IBM, Microsoft, IIT Patna certified'
  cta: 'Explore the program'
  href: '/genai-and-agentic-ai-master-program'

# Both take slugs of other posts in src/blog. Title, date, read time and cover
# image are read from that post's own frontmatter, so they stay in sync.
# A slug that does not exist is dropped, not an error.
editorsPicks:
  - 'best-generative-ai-agentic-ai-courses'
relatedPosts:
  - 'best-ai-courses-in-india-compared'

finalCta:
  title: 'Ready to choose the right AI career path?'
  text: 'Compare programs and choose the path that fits your goals.'
  primaryCta: 'Explore Learnbay programs'
  primaryHref: '/genai-and-agentic-ai-master-program'
  secondaryCta: 'Talk to a career expert'
  secondaryHref: '/contact-us'
```

Omit any of these and the corresponding piece of the page simply does not
render. There are no placeholders to clean up.

There is deliberately **no newsletter or email-capture block**. Learnbay has no
mailing list behind it, and a form that posts nowhere is worse than no form —
so `report-download` links straight to the asset via `href` instead of asking
for an address.

---

## Part 2 — Placing blocks in the body

Two syntaxes, matching the two kinds of block.

### Prose blocks — `:::name` … `:::`

Wrap markdown. The content between the fences is still markdown.

```markdown
:::callout{title="Here’s a quick summary"}
From more than 50 programs, these are the **9 best** for 2026.
:::
```

| Block | Attributes | Notes |
|---|---|---|
| `callout` | `title` | Cream panel. The summary box near the top of a guide. |
| `pull-quote` | `cite` | Large quote with the blue quote mark. |
| `note` | — | Small aside with a blue left rule. |
| `section` | `n`, `title`, `id` | Numbered section wrapper: `:::section{n="01" title="Pick your scenario"}`. Optional — a plain `##` heading also works and is simpler. |

### Data blocks — `::name{from=key}`

One line. `from` names a key under `data:` in the frontmatter.

```yaml
data:
  hiringStats:
    - value: '1.25M+'
      text: 'AI professionals India needs by 2027.'
      source: 'Deloitte–NASSCOM'
```

```markdown
::stat-cards{from=hiringStats cols=2}
```

| Block | `data` shape | Extra attributes |
|---|---|---|
| `stat-cards` | list of `{value, text, source}` | `cols=1\|2\|3` (default 2) |
| `scenario-table` | `{columns: [...], rows: [...]}` | — |
| `comparison-matrix` | same as above | — |
| `verdict` | `{bestFor, tradeOff}` | also `bestForLabel`, `tradeOffLabel` |
| `spec-line` | object of label → value | Renders as one dense `Fee ₹… · Duration 9 months` line |
| `takeaways` | `{title, items: [...]}` or a plain list | Numbered blue badges |
| `checklist` | list of strings, or `{title, text, ok}` | `cols=2`; `ok: false` renders a red ✕ |
| `faq` | list of `{question, answer}` | `open=0` opens the first item |
| `glossary` | list of `{term, definition}` | — |
| `progress-stats` | list of `{label, percent, value}` | — |
| `course-carousel` | `{title, items: [{tag,title,meta,price,href}]}` | `title` |
| `success-stories` | list of `{before, after, quote, name, role, photo}` | — |
| `reels` | list of `{href, poster, title}` | — |
| `learnbay-strip` | `{title, text, cta, href}` | Slim inline CTA |
| `learnbay-split-card` | `{label,title,text,points,facts,primaryCta,…}` | Grey card with pricing panel |
| `learnbay-dark-band` | `{label,title,titleAccent,text,tags,stats,…}` | Full dark gradient band |
| `report-download` | `{title, text, cta, href}` | Report/PDF card linking straight to the asset |
| `youtube` | *no `from`* | `::youtube{id=abc123 title="…" caption="…"}` |

**Tables** (`scenario-table`, `comparison-matrix`) take:

```yaml
columns: ['Program', 'GenAI', 'Agentic AI']
rows:
  - cells: ['Learnbay', 'yes', 'yes']
    highlight: true          # blue row, for the recommended option
  - ['upGrad', 'yes', 'partial']   # a bare list works when nothing is highlighted
```

Cell values `yes`, `no` and `partial` render as the green tick, grey cross and
amber dash. Anything else renders as text.

---

## Rules worth knowing

- **The sidebar table of contents is generated from your `##` and `###`
  headings.** You do not write it. Numbering is automatic, and the current
  section highlights as the reader scrolls.
- **A typo'd block name renders nothing** and logs a warning in `npm run dev`.
  Check the browser console if a block does not appear.
- **A `from=` key that isn't in `data:`** also warns in dev and renders nothing.
- **Blocks are full width (894px); prose is 720px.** That is deliberate — the
  measure stays readable while tables and cards use the full column.
- **Don't put `<style>` tags in a post.** They are stripped on both layouts;
  unscoped `table`/`td` rules used to leak site-wide.

## Switching an existing post to v2

1. Add `layout: 'v2'`.
2. Add `standfirst`, `eyebrow`, `category` and a few `facts` — that is the
   minimum for the hero to look right.
3. Add `authorBio` and `programCard` so the sidebar is not half empty.
4. Convert any hand-rolled HTML tables in the body to `scenario-table` data.
5. Add `relatedPosts` so the post does not end on a bare footer.

Revert by deleting the `layout` line. The post returns to the old design
unchanged; none of the v2 frontmatter is read by v1.

---

## Where the code lives

| Path | What |
|---|---|
| [`src/pages/blogs/[slug].js`](../src/pages/blogs/%5Bslug%5D.js) | Shared `<head>` + layout switch |
| [`src/lib/blog/posts.js`](../src/lib/blog/posts.js) | Frontmatter loading, heading extraction (server only) |
| [`src/lib/blog/slug.js`](../src/lib/blog/slug.js) | Heading-id helper (safe on both sides) |
| [`src/lib/blog/remarkBlocks.js`](../src/lib/blog/remarkBlocks.js) | Turns `:::directives` into block elements |
| [`src/components/Blog/v1/`](../src/components/Blog/v1/) | The original design, unchanged |
| [`src/components/Blog/v2/`](../src/components/Blog/v2/) | Layout, hero, rail, sections |
| [`src/components/Blog/v2/blocks/`](../src/components/Blog/v2/blocks/) | The block library + registry |

To add a new block: write the component, register it in
[`blocks/index.js`](../src/components/Blog/v2/blocks/index.js), and add its name
to `BLOCK_NAMES` in `remarkBlocks.js`.

> `src/lib/blog/posts.js` imports `fs` and `path`. Never import it from a
> component — `package.json` stubs both to `false` in the browser, so it throws
> the moment it reaches the client bundle. Import `slug.js` instead.
