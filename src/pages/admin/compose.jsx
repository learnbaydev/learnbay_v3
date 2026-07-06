import AdminLayout from '@/components/cms/AdminLayout';
import PostEditor from '@/components/cms/PostEditor';
import { getSessionUser, guardPage } from '@/lib/auth';
import { ROLES } from '@/lib/postWorkflow';

export default function ComposePage({ user }) {
  return (
    <AdminLayout user={user} title="Write">
      <h1 style={{ fontSize: 22, fontWeight: 700, marginTop: 0 }}>Write a new post</h1>
      <PostEditor user={user} mode="create" />
    </AdminLayout>
  );
}

export async function getServerSideProps(ctx) {
  const redirect = await guardPage(ctx, [ROLES.ADMIN, ROLES.BLOGGER]);
  if (redirect) return redirect;
  const user = await getSessionUser(ctx.req, ctx.res);
  return { props: { user } };
}
