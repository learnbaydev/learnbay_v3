import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { getSessionUser } from '@/lib/auth';

export default function LoginPage({ googleEnabled }) {
  const router = useRouter();
  const callbackUrl = typeof router.query.callbackUrl === 'string' ? router.query.callbackUrl : '/admin';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setBusy(true);
    setError('');
    const res = await signIn('credentials', { email, password, redirect: false, callbackUrl });
    setBusy(false);
    if (res?.error) return setError('Invalid email or password.');
    router.push(res?.url || callbackUrl);
  }

  return (
    <>
      <Head>
        <title>Sign in — Learnbay Blog CMS</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div style={S.page}>
        <div style={S.card}>
          <h1 style={S.h1}>Blog CMS</h1>
          <p style={S.sub}>Sign in to write or manage posts.</p>

          <form onSubmit={onSubmit}>
            <label style={S.label}>
              <span>Email</span>
              <input
                style={S.input}
                type="email"
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label style={{ ...S.label, marginTop: 12 }}>
              <span>Password</span>
              <input
                style={S.input}
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            {error && <p style={S.error}>{error}</p>}
            <button style={S.primary} type="submit" disabled={busy}>
              {busy ? 'Signing in…' : 'Sign in'}
            </button>
          </form>

          {googleEnabled && (
            <>
              <div style={S.divider}>
                <span style={S.dividerText}>or</span>
              </div>
              <button style={S.google} onClick={() => signIn('google', { callbackUrl })}>
                Sign in with Google
              </button>
            </>
          )}

          <p style={S.note}>
            Accounts are created by an administrator. Contact your admin if you need access.
          </p>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const user = await getSessionUser(ctx.req, ctx.res);
  if (user) {
    return { redirect: { destination: '/admin', permanent: false } };
  }
  return { props: { googleEnabled: Boolean(process.env.GOOGLE_CLIENT_ID) } };
}

const S = {
  page: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9f9f9', fontFamily: 'system-ui, sans-serif', padding: 16 },
  card: { width: '100%', maxWidth: 380, background: '#fff', border: '1px solid #eee', borderRadius: 12, padding: 32, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' },
  h1: { fontSize: 24, fontWeight: 700, margin: 0, color: '#2372bc' },
  sub: { color: '#666', fontSize: 14, margin: '4px 0 24px' },
  label: { display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, color: '#444' },
  input: { padding: '10px 12px', border: '1px solid #ccc', borderRadius: 8, fontSize: 14, width: '100%', boxSizing: 'border-box' },
  primary: { width: '100%', marginTop: 20, padding: '11px 18px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 8, fontSize: 15, cursor: 'pointer' },
  google: { width: '100%', padding: '11px 18px', background: '#fff', color: '#333', border: '1px solid #ccc', borderRadius: 8, fontSize: 15, cursor: 'pointer' },
  divider: { display: 'flex', alignItems: 'center', textAlign: 'center', margin: '20px 0', color: '#aaa', fontSize: 12 },
  dividerText: { margin: '0 auto', background: '#fff', padding: '0 10px' },
  error: { color: '#c33', fontSize: 13, marginTop: 12 },
  note: { color: '#999', fontSize: 12, marginTop: 20, textAlign: 'center' },
};
