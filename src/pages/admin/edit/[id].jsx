import AdminLayout from '@/components/cms/AdminLayout';
import PostEditor from '@/components/cms/PostEditor';
import { getSessionUser, guardPage } from '@/lib/auth';
import { ROLES } from '@/lib/postWorkflow';
import { findPostById } from '@/lib/posts';

export default function EditPage({ user, initialPost }) {
  return (
    <AdminLayout user={user} title="Edit">
      <h1 style={{ fontSize: 22, fontWeight: 700, marginTop: 0 }}>Edit post</h1>
      <PostEditor user={user} mode="edit" initialPost={initialPost} />
    </AdminLayout>
  );
}

export async function getServerSideProps(ctx) {
  const redirect = await guardPage(ctx, [ROLES.ADMIN, ROLES.BLOGGER]);
  if (redirect) return redirect;
  const user = await getSessionUser(ctx.req, ctx.res);
  const post = await findPostById(ctx.params.id);
  if (!post) return { notFound: true };
  const isOwner = String(post.authorId) === String(user.userId);
  if (user.role !== ROLES.ADMIN && !isOwner) {
    return { redirect: { destination: '/admin/my-posts', permanent: false } };
  }
  const initialPost = JSON.parse(JSON.stringify({ ...post, id: String(post._id) }));
  return { props: { user, initialPost } };
}
