// Compact table of working-store posts, shared by my-posts and the dashboard.
import Link from 'next/link';

const STATUS_LABEL = {
  draft: 'Draft', in_review: 'In review', changes_requested: 'Changes requested',
  published: 'Published', unpublished: 'Unpublished',
};

export default function PostTable({ posts, emptyText = 'No posts yet.' }) {
  if (!posts.length) return <p style={{ color: '#888', fontSize: 14 }}>{emptyText}</p>;
  return (
    <div style={S.wrap}>
      <table style={S.table}>
        <thead>
          <tr>
            <th style={S.th}>Title</th>
            <th style={S.th}>Status</th>
            <th style={S.th}>Updated</th>
            <th style={S.th}></th>
          </tr>
        </thead>
        <tbody>
          {posts.map((p) => (
            <tr key={p.id || p.slug}>
              <td style={S.td}>
                <div style={{ fontWeight: 600 }}>{p.title || p.slug}</div>
                <div style={S.slug}>{p.slug}</div>
              </td>
              <td style={S.td}>
                <span style={badge(p.status)}>{STATUS_LABEL[p.status] || p.status}</span>
              </td>
              <td style={S.td}>{p.updatedAt ? new Date(p.updatedAt).toLocaleDateString() : '—'}</td>
              <td style={S.td}>
                {p.id && (
                  <Link href={`/admin/edit/${p.id}`} style={S.link}>Edit</Link>
                )}
                {p.status === 'published' && (
                  <a href={`/blogs/${p.slug}`} target="_blank" rel="noreferrer" style={S.link}>View</a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function badge(status) {
  const c = status === 'published' ? ['#e6f7ee', '#0a7'] : status === 'in_review' ? ['#fff4e0', '#b8860b'] : status === 'changes_requested' ? ['#fde8e8', '#c33'] : ['#eef1f5', '#556'];
  return { fontSize: 12, fontWeight: 600, padding: '2px 8px', borderRadius: 20, background: c[0], color: c[1] };
}

const S = {
  wrap: { overflowX: 'auto', background: '#fff', border: '1px solid #eee', borderRadius: 8 },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: 14 },
  th: { textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid #eee', color: '#888', fontSize: 12, fontWeight: 600 },
  td: { padding: '10px 14px', borderBottom: '1px solid #f4f4f4', verticalAlign: 'top' },
  slug: { fontSize: 12, color: '#999' },
  link: { color: '#2563eb', textDecoration: 'none', marginRight: 12, fontSize: 13 },
};
