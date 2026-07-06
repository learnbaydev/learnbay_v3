// Shared chrome for all /admin pages: top nav (role-aware) + sign out.
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';

export default function AdminLayout({ user, title, children }) {
  const router = useRouter();
  const isAdmin = user?.role === 'ADMIN';

  const nav = [
    { href: '/admin', label: 'Dashboard' },
    { href: '/admin/compose', label: 'Write' },
    { href: '/admin/my-posts', label: 'My posts' },
    ...(isAdmin
      ? [
          { href: '/admin/review', label: 'Review queue' },
          { href: '/admin/users', label: 'Users' },
        ]
      : []),
  ];

  return (
    <>
      <Head>
        <title>{title ? `${title} — Blog CMS` : 'Blog CMS'}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div style={S.shell}>
        <header style={S.header}>
          <div style={S.brand}>Blog CMS</div>
          <nav style={S.nav}>
            {nav.map((n) => {
              const active = router.pathname === n.href;
              return (
                <Link key={n.href} href={n.href} style={{ ...S.link, ...(active ? S.linkActive : {}) }}>
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <div style={S.userBox}>
            <span style={S.userName}>
              {user?.name} <span style={S.roleTag}>{user?.role}</span>
            </span>
            <button style={S.signout} onClick={() => signOut({ callbackUrl: '/login' })}>
              Sign out
            </button>
          </div>
        </header>
        <main style={S.main}>{children}</main>
      </div>
    </>
  );
}

const S = {
  shell: { minHeight: '100vh', background: '#f5f6f8', fontFamily: 'system-ui, sans-serif' },
  header: { display: 'flex', alignItems: 'center', gap: 20, padding: '12px 24px', background: '#fff', borderBottom: '1px solid #e5e7eb', flexWrap: 'wrap' },
  brand: { fontWeight: 700, color: '#2372bc', fontSize: 16 },
  nav: { display: 'flex', gap: 4, flex: 1, flexWrap: 'wrap' },
  link: { padding: '6px 12px', borderRadius: 6, color: '#444', textDecoration: 'none', fontSize: 14 },
  linkActive: { background: '#eef4fb', color: '#2372bc', fontWeight: 600 },
  userBox: { display: 'flex', alignItems: 'center', gap: 12 },
  userName: { fontSize: 13, color: '#555' },
  roleTag: { fontSize: 11, background: '#eef4fb', color: '#2372bc', padding: '2px 6px', borderRadius: 4, marginLeft: 4 },
  signout: { padding: '6px 12px', background: '#fff', border: '1px solid #ccc', borderRadius: 6, fontSize: 13, cursor: 'pointer' },
  main: { maxWidth: 1200, margin: '0 auto', padding: '24px 16px' },
};
