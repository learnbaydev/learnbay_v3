// src/pages/api/blog/[slug].js
//
// GET /api/blog/:slug  -> { data, content }   (frontmatter + body, via gray-matter)
// PUT /api/blog/:slug  -> writes src/blog/:slug.md
//     body: { markdown: string, overwrite?: boolean }
//     409 if the file already exists and overwrite !== true

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { assertEnabled } from './_guard';

const BLOG_DIR = path.join(process.cwd(), 'src', 'blog');

// strict slug sanitiser — blocks path traversal
const clean = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9-]/g, '');

export default function handler(req, res) {
  if (!assertEnabled(res)) return;

  const slug = clean(req.query.slug);
  if (!slug) return res.status(400).json({ error: 'Invalid slug' });

  const file = path.join(BLOG_DIR, `${slug}.md`);
  // defence in depth: ensure the resolved path stays inside BLOG_DIR
  if (!file.startsWith(BLOG_DIR + path.sep)) {
    return res.status(400).json({ error: 'Invalid path' });
  }

  if (req.method === 'GET') {
    try {
      if (!fs.existsSync(file)) return res.status(404).json({ error: 'Not found' });
      const raw = fs.readFileSync(file, 'utf8');
      const { data, content } = matter(raw);
      return res.status(200).json({ data, content });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  if (req.method === 'PUT') {
    try {
      const { markdown, overwrite } = req.body || {};
      if (!markdown || typeof markdown !== 'string') {
        return res.status(400).json({ error: 'markdown (string) required' });
      }
      if (fs.existsSync(file) && overwrite !== true) {
        return res.status(409).json({ error: 'File already exists', exists: true });
      }
      fs.mkdirSync(BLOG_DIR, { recursive: true });
      fs.writeFileSync(file, markdown, 'utf8');
      return res.status(200).json({ ok: true, path: `src/blog/${slug}.md` });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  res.setHeader('Allow', 'GET, PUT');
  return res.status(405).json({ error: 'Method not allowed' });
}
