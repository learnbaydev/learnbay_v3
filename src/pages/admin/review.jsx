import Link from 'next/link';
import AdminLayout from '@/components/cms/AdminLayout';
import { getSessionUser, guardPage } from '@/lib/auth';
import { ROLES } from '@/lib/postWorkflow';
import { STATUS, listPosts } from '@/lib/posts';

export default function ReviewQueuePage({ user, posts }) {
  return (
    <AdminLayout user={user} title="Review queue">
      <h1 style={{ fontSize: 22, fontWeight: 700, marginTop: 0 }}>Review queue</h1>
      {posts.length === 0 ? (
        <p style={{ color: '#888' }}>Nothing awaiting review. 🎉</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {posts.map((p) => (
            <Link key={p.id} href={`/admin/review/${p.id}`} style={S.row}>
              <div>
                <div style={{ fontWeight: 600 }}>{p.title || p.slug}</div>
                <div style={{ fontSize: 12, color: '#999' }}>
                  {p.author ? `by ${p.author} · ` : ''}submitted {p.submittedAt ? new Date(p.submittedAt).toLocaleString() : '—'}
                </div>
              </div>
              <span style={{ color: '#2563eb', fontSize: 14 }}>Review →</span>
            </Link>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}

export async function getServerSideProps(ctx) {
  const redirect = await guardPage(ctx, [ROLES.ADMIN]);
  if (redirect) return redirect;
  const user = await getSessionUser(ctx.req, ctx.res);
  const docs = await listPosts({ status: STATUS.IN_REVIEW });
  const posts = JSON.parse(JSON.stringify(docs.map((d) => ({ ...d, id: String(d._id) }))));
  return { props: { user, posts } };
}

const S = {
  row: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', border: '1px solid #eee', borderRadius: 8, padding: '14px 16px', textDecoration: 'none', color: 'inherit' },
};
