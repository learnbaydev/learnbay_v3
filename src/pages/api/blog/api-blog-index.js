// src/pages/api/blog/index.js
//
// GET /api/blog  ->  { slugs: string[] }
// Lists every *.md in src/blog so the composer can load posts for revision.

import fs from 'fs';
import path from 'path';
import { assertEnabled } from './_guard';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  if (!assertEnabled(res)) return;

  try {
    const dir = path.join(process.cwd(), 'src', 'blog');
    if (!fs.existsSync(dir)) return res.status(200).json({ slugs: [] });
    const slugs = fs
      .readdirSync(dir)
      .filter((f) => f.endsWith('.md'))
      .map((f) => f.replace(/\.md$/, ''))
      .sort();
    return res.status(200).json({ slugs });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
