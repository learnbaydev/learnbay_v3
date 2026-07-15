// /admin/published — manage the publish lifecycle in one place:
//   • Published section: the live .md posts, with Unpublish (→ stored to Mongo,
//     .md deleted, dropped from /blogs + sitemap).
//   • Unpublished section: posts held in Mongo, with Republish (→ .md rewritten
//     exactly, back on /blogs + sitemap).
// Works for CMS posts and legacy file-only posts alike.

import { useCallback, useEffect, useState } from 'react';
import AdminLayout from '@/components/cms/AdminLayout';
import { getSessionUser, guardPage } from '@/lib/auth';
import { ROLES } from '@/lib/postWorkflow';

export default function PublishedPage({ user }) {
  const [published, setPublished] = useState([]);
  const [unpublished, setUnpublished] = useState([]);
  const [msg, setMsg] = useState(null);
  const [busy, setBusy] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [pRes, uRes] = await Promise.all([
        fetch('/api/posts?view=published'),
        fetch('/api/posts?status=unpublished'),
      ]);
      const p = await pRes.json();
      const u = await uRes.json();
      if (pRes.ok) setPublished(p.posts || []);
      if (uRes.ok) setUnpublished(u.posts || []);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    load();
  }, [load]);

  async function run(key, url, body, okText) {
    setBusy(key);
    setMsg(null);
    try {
      const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Action failed.');
      setMsg({ ok: true, text: okText });
      load();
    } catch (err) {
      setMsg({ ok: false, text: err.message });
    } finally {
      setBusy(null);
    }
  }

  function unpublish(slug, title) {
    if (!window.confirm(`Unpublish "${title || slug}"?\n\nThe live page and sitemap entry are removed, the .md file is deleted, and the post is stored in the database as Unpublished.`)) return;
    run(`u:${slug}`, '/api/posts/unpublish', { slug }, `Unpublished "${slug}".`);
  }
  function republish(id, slug) {
    run(`p:${id}`, `/api/posts/${id}/publish`, {}, `Republished "${slug}".`);
  }

  return (
    <AdminLayout user={user} title="Published">
      {msg && <p style={{ color: msg.ok ? '#0a7' : '#c33', fontSize: 13 }}>{msg.text}</p>}

      <h1 style={{ fontSize: 22, fontWeight: 700, marginTop: 0 }}>Published ({published.length})</h1>
      {loading ? (
        <p style={{ color: '#888' }}>Loading…</p>
      ) : published.length === 0 ? (
        <p style={{ color: '#888' }}>No published posts.</p>
      ) : (
        <Table
          rows={published.map((p) => ({ key: p.slug, title: p.title, sub: p.slug, author: p.author }))}
          actions={(r) => (
            <>
              <a href={`/blogs/${r.key}`} target="_blank" rel="noreferrer" style={S.link}>View</a>
              <button style={S.unpub} onClick={() => unpublish(r.key, r.title)} disabled={busy === `u:${r.key}`}>
                {busy === `u:${r.key}` ? 'Unpublishing…' : 'Unpublish'}
              </button>
            </>
          )}
        />
      )}

      <h2 style={{ fontSize: 18, fontWeight: 700, marginTop: 32 }}>Unpublished ({unpublished.length})</h2>
      {unpublished.length === 0 ? (
        <p style={{ color: '#888' }}>Nothing unpublished.</p>
      ) : (
        <Table
          rows={unpublished.map((p) => ({ key: p.id, title: p.title || p.slug, sub: p.slug, author: p.author }))}
          actions={(r) => (
            <>
              <a href={`/admin/edit/${r.key}`} style={S.link}>Edit</a>
              <button style={S.pub} onClick={() => republish(r.key, r.sub)} disabled={busy === `p:${r.key}`}>
                {busy === `p:${r.key}` ? 'Republishing…' : 'Republish'}
              </button>
            </>
          )}
        />
      )}

      <p style={{ color: '#999', fontSize: 12, marginTop: 16 }}>
        Unpublish stores the post in MongoDB and deletes its <code>.md</code> file; the URL leaves <code>/blogs</code> and{' '}
        <code>sitemap.xml</code> immediately. Republish rewrites the same <code>.md</code> and restores it exactly.
      </p>
    </AdminLayout>
  );
}

function Table({ rows, actions }) {
  return (
    <div style={S.wrap}>
      <table style={S.table}>
        <thead>
          <tr>
            <th style={S.th}>Title</th>
            <th style={S.th}>Author</th>
            <th style={S.th}></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.key}>
              <td style={S.td}>
                <div style={{ fontWeight: 600 }}>{r.title}</div>
                <div style={S.slug}>{r.sub}</div>
              </td>
              <td style={S.td}>{r.author || '—'}</td>
              <td style={{ ...S.td, whiteSpace: 'nowrap' }}>{actions(r)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const redirect = await guardPage(ctx, [ROLES.ADMIN]);
  if (redirect) return redirect;
  const user = await getSessionUser(ctx.req, ctx.res);
  return { props: { user } };
}

const S = {
  wrap: { overflowX: 'auto', background: '#fff', border: '1px solid #eee', borderRadius: 8 },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: 14 },
  th: { textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid #eee', color: '#888', fontSize: 12 },
  td: { padding: '10px 14px', borderBottom: '1px solid #f4f4f4', verticalAlign: 'top' },
  slug: { fontSize: 12, color: '#999' },
  link: { color: '#2563eb', textDecoration: 'none', fontSize: 13, marginRight: 14 },
  unpub: { padding: '6px 14px', background: '#fff', color: '#c33', border: '1px solid #e0a3a3', borderRadius: 6, fontSize: 13, cursor: 'pointer' },
  pub: { padding: '6px 14px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6, fontSize: 13, cursor: 'pointer' },
};
