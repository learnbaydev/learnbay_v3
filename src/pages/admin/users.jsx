import { useEffect, useState } from 'react';
import AdminLayout from '@/components/cms/AdminLayout';
import { getSessionUser, guardPage } from '@/lib/auth';
import { ROLES } from '@/lib/postWorkflow';

export default function UsersPage({ user }) {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ email: '', name: '', role: 'BLOGGER', password: '' });
  const [msg, setMsg] = useState(null);
  const [busy, setBusy] = useState(false);

  async function load() {
    const res = await fetch('/api/admin/users');
    const data = await res.json();
    if (res.ok) setUsers(data.users);
  }
  useEffect(() => {
    load();
  }, []);

  async function create(e) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    try {
      const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setMsg({ ok: true, text: `Created ${data.user.email}.` });
      setForm({ email: '', name: '', role: 'BLOGGER', password: '' });
      load();
    } catch (err) {
      setMsg({ ok: false, text: err.message });
    } finally {
      setBusy(false);
    }
  }

  async function patch(id, body) {
    setMsg(null);
    const res = await fetch(`/api/admin/users/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok) return setMsg({ ok: false, text: data.error });
    load();
  }

  async function resetPassword(id) {
    const pw = window.prompt('New password (min 8 chars):');
    if (pw) patch(id, { password: pw });
  }

  return (
    <AdminLayout user={user} title="Users">
      <h1 style={{ fontSize: 22, fontWeight: 700, marginTop: 0 }}>Users</h1>
      {msg && <p style={{ color: msg.ok ? '#0a7' : '#c33', fontSize: 13 }}>{msg.text}</p>}

      <form onSubmit={create} style={S.form}>
        <input style={S.input} type="email" placeholder="email@learnbay.co" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input style={S.input} placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <select style={S.input} value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
          <option value="BLOGGER">BLOGGER</option>
          <option value="ADMIN">ADMIN</option>
        </select>
        <input style={S.input} type="password" placeholder="Temp password (min 8)" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        <button style={S.primary} disabled={busy}>{busy ? 'Creating…' : 'Create user'}</button>
      </form>

      <div style={S.wrap}>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Email</th><th style={S.th}>Name</th><th style={S.th}>Role</th>
              <th style={S.th}>Status</th><th style={S.th}>Provider</th><th style={S.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td style={S.td}>{u.email}</td>
                <td style={S.td}>{u.name}</td>
                <td style={S.td}>
                  <select value={u.role} onChange={(e) => patch(u.id, { role: e.target.value })} style={S.miniSelect}>
                    <option value="BLOGGER">BLOGGER</option>
                    <option value="ADMIN">ADMIN</option>
                  </select>
                </td>
                <td style={S.td}>{u.active ? 'Active' : 'Disabled'}</td>
                <td style={S.td}>{u.provider}</td>
                <td style={S.td}>
                  <button style={S.linkBtn} onClick={() => patch(u.id, { active: !u.active })}>{u.active ? 'Disable' : 'Enable'}</button>
                  <button style={S.linkBtn} onClick={() => resetPassword(u.id)}>Reset password</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ color: '#999', fontSize: 12, marginTop: 12 }}>
        Google sign-in works only for emails listed here (active). There is no public signup.
      </p>
    </AdminLayout>
  );
}

export async function getServerSideProps(ctx) {
  const redirect = await guardPage(ctx, [ROLES.ADMIN]);
  if (redirect) return redirect;
  const user = await getSessionUser(ctx.req, ctx.res);
  return { props: { user } };
}

const S = {
  form: { display: 'flex', gap: 8, flexWrap: 'wrap', margin: '16px 0', alignItems: 'center' },
  input: { padding: '8px 10px', border: '1px solid #ccc', borderRadius: 6, fontSize: 14 },
  primary: { padding: '9px 16px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6, fontSize: 14, cursor: 'pointer' },
  wrap: { overflowX: 'auto', background: '#fff', border: '1px solid #eee', borderRadius: 8 },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: 14 },
  th: { textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid #eee', color: '#888', fontSize: 12 },
  td: { padding: '10px 14px', borderBottom: '1px solid #f4f4f4' },
  miniSelect: { padding: '4px 6px', border: '1px solid #ccc', borderRadius: 4, fontSize: 13 },
  linkBtn: { background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', fontSize: 13, marginRight: 10, padding: 0 },
};
