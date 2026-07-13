# Blog CMS — role-based editorial workflow

A CMS for the file-based blog: BLOGGERs write posts and submit them for review;
ADMINs accept / request changes / comment; accepted posts publish; posts can be
unpublished. Auth is NextAuth (email/password + Google). SEO for published posts
is unchanged from the existing renderer.

## Storage model

A post lives in exactly one place at a time:

| State | Stored in | Public? |
| --- | --- | --- |
| draft, in_review, changes_requested, unpublished | MongoDB `posts` | No |
| **published** | `src/blog/<slug>.md` (existing renderer) | Yes |

- **Publish** writes `src/blog/<slug>.md` (and marks the DB doc `published` for
  durability). The existing `/blogs/[slug]` page serves it.
- **Unpublish** rehydrates a DB `unpublished` doc from the `.md`, then deletes the
  file — so the URL 404s and drops out of `/blogs` and `sitemap.xml` immediately.

The 21 legacy posts exist only as `.md` files and count as *published*.

## Roles

- **ADMIN** — reviews, publishes/unpublishes, manages users.
- **BLOGGER** — writes drafts, submits for review, addresses change requests.
- Extensible (e.g. `EDITOR`) via the capability map in `src/lib/postWorkflow.js`.

Accounts are **admin-provisioned** — there is no public signup. Google login is
allowed only for emails already present (and active) in the `users` collection.

## Setup

1. Install deps (already added): `next-auth`, `bcryptjs`.
2. Set environment variables (in `.env.local`, never committed):

   | Var | Purpose |
   | --- | --- |
   | `MONGODB_URI` | existing — Mongo connection |
   | `NEXTAUTH_SECRET` | required — session signing (`openssl rand -base64 32`) |
   | `NEXTAUTH_URL` | e.g. `http://localhost:3000` (prod: site URL) |
   | `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | optional — enables Google login |
   | `SMTP_USER` / `SMTP_PASS` | existing — editorial email notifications |
   | `SEED_ADMIN_EMAIL` / `SEED_ADMIN_PASSWORD` | first-admin bootstrap (seed only) |
   | `NEXT_PUBLIC_SITE_URL` | existing — used in emails/sitemap |
   | `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` | existing — S3 image uploads |
   | `BLOG_S3_BUCKET` | image bucket (default `learnbay-s3`) |
   | `BLOG_S3_REGION` | bucket region (default `us-east-2`) |
   | `BLOG_S3_PREFIX` | key prefix for uploads (default `blog/uploads/`) |
   | `BLOG_S3_PUBLIC_BASE` | public delivery base, e.g. your CloudFront URL (default: the S3 URL) |
   | `BLOG_S3_ACL` | optional — set to `public-read` only if the bucket has ACLs enabled |

   > Uploaded objects must be publicly readable. Either serve them through
   > CloudFront (set `BLOG_S3_PUBLIC_BASE` to the distribution URL — recommended,
   > keeps the bucket private) **or** add a bucket policy granting `s3:GetObject`
   > on `arn:aws:s3:::<bucket>/blog/uploads/*` to `Principal: "*"`. A direct S3
   > URL on a private bucket returns `AccessDenied`.

3. Seed the first admin:

   ```bash
   node scripts/seed-admin.mjs
   ```

4. `npm run dev`, open `/login`, sign in, and manage everything under `/admin`.

## Key modules

| File | Responsibility |
| --- | --- |
| `src/lib/posts.js` | collections, frontmatter contract, published-file helpers, CRUD |
| `src/lib/publish.js` | publish/unpublish DB↔file handoff (with rollback) |
| `src/lib/postWorkflow.js` | state machine + role permissions |
| `src/lib/auth.js` | `getSessionUser`, `requireRole` (API), `guardPage` (SSR) |
| `src/lib/authOptions.js` | NextAuth providers + callbacks |
| `src/lib/mailer.js` | editorial notification emails |
| `src/lib/markdown.js` | shared slug/heading/TOC helpers |

## Authoring quality gates

Enforced in the editor (live) **and** server-side in `POST /api/posts/[id]/submit`
(`src/lib/postValidation.js`), so a post cannot be submitted for review until:

- **Required fields** are filled: title, SEO title (Stitle), meta description,
  keywords, cover image, image alt, content.
- **SEO title** is 30–60 chars (≈200–600px) — live meter turns green in range,
  red outside; shows chars + measured pixel width.
- **Meta description** is 70–160 chars (≈430–920px) — same meter.
- **Links**: at least **1 internal** and **2 outbound** links in the body. A link
  is internal if it is relative (`/…`) or points to `*.learnbay.co`; other
  `http(s)` links are outbound. Live counter shows `internal x/1`, `outbound y/2`.

Editor toolbar:

- A **formatting toolbar** over the markdown box (bold, italic, strikethrough,
  inline code, H2/H3, quote, bullet/numbered lists, code block, divider) that
  wraps/prefixes the current selection — rich-text ease of use while the source
  stays markdown.
- **Paste-to-table**: copy a range from Google Sheets / Excel and paste it into
  the content box — the paste handler reads the clipboard's HTML table (or the
  tab-separated fallback) and inserts a clean styled HTML `<table>` matching the
  convention existing posts use, preserving bold, alignment, and links. HTML
  tables render via `rehype-raw` in both preview and published page — no
  `remark-gfm` and no change to the SEO renderer.

Images & editor UX:

- **No image URLs are typed.** Cover image, mobile image, and in-body images are
  chosen as files; the client uploads to `POST /api/upload-image`, which converts
  to **WebP** (`sharp`) and stores them in S3 (`src/lib/s3.js`). The returned
  public URL is written into the field.
- The editor shows the **full public blog URL** with a copy-to-clipboard button.
- **Fields collapse** ("Hide fields") so a blogger/admin can view the full
  rendered blog (the live preview) full-width.

Auto-populated (not hand-entered):

- **Author** → the logged-in user.
- **Read time** → computed from content length (~200 wpm).
- **Publish date** → set automatically in **IST** at publish time
  (`src/lib/dateIST.js`); the editor previews today's IST date.

## SEO guarantees

- Published posts render through the unchanged `src/pages/blogs/[slug].js`
  (canonical, OG, Twitter, Article + FAQ JSON-LD preserved).
- Unpublished/draft content is never publicly reachable, never in `/blogs`, never
  in `sitemap.xml`.
- `/admin/*` pages are `noindex`.
