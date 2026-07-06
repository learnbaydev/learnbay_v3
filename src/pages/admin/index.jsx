import Link from 'next/link';
import AdminLayout from '@/components/cms/AdminLayout';
import { getSessionUser, guardPage } from '@/lib/auth';
import { ROLES } from '@/lib/postWorkflow';
import { STATUS, listPosts, listPublishedSlugs } from '@/lib/posts';

function Card({ href, label, value, hint }) {
  return (
    <Link href={href} style={S.card}>
      <div style={S.value}>{value}</div>
      <div style={S.label}>{label}</div>
      {hint && <div style={S.hint}>{hint}</div>}
    </Link>
  );
}

export default function Dashboard({ user, stats }) {
  const isAdmin = user.role === ROLES.ADMIN;
  return (
    <AdminLayout user={user} title="Dashboard">
      <h1 style={{ fontSize: 22, fontWeight: 700, marginTop: 0 }}>Welcome, {user.name}</h1>
      <div style={S.grid}>
        <Card href="/admin/compose" label="Write a new post" value="✍️" />
        <Card href="/admin/my-posts" label="My posts" value={stats.mine} hint={`${stats.changesRequested} need changes`} />
        {isAdmin && <Card href="/admin/review" label="Awaiting review" value={stats.inReview} hint="Review queue" />}
        {isAdmin && <Card href="/blogs" label="Published" value={stats.published} hint="Live posts" />}
        {isAdmin && <Card href="/admin/users" label="Users" value="⚙️" hint="Manage accounts" />}
      </div>
    </AdminLayout>
  );
}

export async function getServerSideProps(ctx) {
  const redirect = await guardPage(ctx, [ROLES.ADMIN, ROLES.BLOGGER]);
  if (redirect) return redirect;
  const user = await getSessionUser(ctx.req, ctx.res);

  const mineDocs = await listPosts({ mine: true, authorId: user.userId });
  const stats = {
    mine: mineDocs.length,
    changesRequested: mineDocs.filter((d) => d.status === STATUS.CHANGES_REQUESTED).length,
    inReview: 0,
    published: 0,
  };
  if (user.role === ROLES.ADMIN) {
    stats.inReview = (await listPosts({ status: STATUS.IN_REVIEW })).length;
    stats.published = listPublishedSlugs().length;
  }
  return { props: { user, stats } };
}

const S = {
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16, marginTop: 20 },
  card: { display: 'block', background: '#fff', border: '1px solid #eee', borderRadius: 10, padding: 20, textDecoration: 'none', color: 'inherit' },
  value: { fontSize: 28, fontWeight: 700, color: '#2372bc' },
  label: { fontSize: 14, fontWeight: 600, marginTop: 6 },
  hint: { fontSize: 12, color: '#999', marginTop: 2 },
};
