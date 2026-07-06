import Link from 'next/link';
import AdminLayout from '@/components/cms/AdminLayout';
import PostTable from '@/components/cms/PostTable';
import { getSessionUser, guardPage } from '@/lib/auth';
import { ROLES } from '@/lib/postWorkflow';
import { listPosts } from '@/lib/posts';

export default function MyPostsPage({ user, posts }) {
  return (
    <AdminLayout user={user} title="My posts">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>My posts</h1>
        <Link href="/admin/compose" style={{ padding: '9px 16px', background: '#2563eb', color: '#fff', borderRadius: 6, textDecoration: 'none', fontSize: 14 }}>
          + New post
        </Link>
      </div>
      <PostTable posts={posts} emptyText="You haven't written any posts yet." />
    </AdminLayout>
  );
}

export async function getServerSideProps(ctx) {
  const redirect = await guardPage(ctx, [ROLES.ADMIN, ROLES.BLOGGER]);
  if (redirect) return redirect;
  const user = await getSessionUser(ctx.req, ctx.res);
  const docs = await listPosts({ mine: true, authorId: user.userId });
  const posts = JSON.parse(JSON.stringify(docs.map((d) => ({ ...d, id: String(d._id) }))));
  return { props: { user, posts } };
}
