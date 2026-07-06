import AdminLayout from '@/components/cms/AdminLayout';
import PostEditor from '@/components/cms/PostEditor';
import { getSessionUser, guardPage } from '@/lib/auth';
import { ROLES } from '@/lib/postWorkflow';
import { findPostById } from '@/lib/posts';

export default function ReviewDetailPage({ user, initialPost }) {
  return (
    <AdminLayout user={user} title="Review">
      <h1 style={{ fontSize: 22, fontWeight: 700, marginTop: 0 }}>Review post</h1>
      <PostEditor user={user} mode="review" initialPost={initialPost} />
    </AdminLayout>
  );
}

export async function getServerSideProps(ctx) {
  const redirect = await guardPage(ctx, [ROLES.ADMIN]);
  if (redirect) return redirect;
  const user = await getSessionUser(ctx.req, ctx.res);
  const post = await findPostById(ctx.params.id);
  if (!post) return { notFound: true };
  const initialPost = JSON.parse(JSON.stringify({ ...post, id: String(post._id) }));
  return { props: { user, initialPost } };
}
