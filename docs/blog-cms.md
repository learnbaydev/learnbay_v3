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

## SEO guarantees

- Published posts render through the unchanged `src/pages/blogs/[slug].js`
  (canonical, OG, Twitter, Article + FAQ JSON-LD preserved).
- Unpublished/draft content is never publicly reachable, never in `/blogs`, never
  in `sitemap.xml`.
- `/admin/*` pages are `noindex`.
