// PostEditor — the authoring surface used by /admin/compose, /admin/edit/[id]
// and /admin/review/[id]. Adapted from the original file-based BlogComposer:
// same markdown editor, faithful preview (reuses the published stylesheet),
// link insert (nofollow/dofollow) and image insert (required alt). Persistence
// is now the DB (/api/posts) and it carries the editorial workflow.

import { useEffect, useMemo, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import rehypeRaw from 'rehype-raw';
import blogStyles from '@/pages/blogs/slug.module.css';
import { slugify, headingId } from '@/lib/markdown';

const ReactMarkdown = dynamic(() => import('react-markdown'), { ssr: false });

const EMPTY = {
  title: '', slug: '', Stitle: '', description: '', keywords: '', date: '', author: '',
  readTime: '', image: '', imagephone: '', alt: '', publishedDate: '', canonicalUrl: '',
  authorUrl: '', faqs: [], content: '# New post\n\nStart writing in **markdown**. Raw HTML is supported.',
};

const FIELDS = [
  { key: 'title', label: 'Title', required: true },
  { key: 'slug', label: 'Slug (auto from title)', placeholder: 'my-post' },
  { key: 'Stitle', label: 'SEO title (Stitle)' },
  { key: 'author', label: 'Author' },
  { key: 'authorUrl', label: 'Author URL' },
  { key: 'date', label: 'Date', placeholder: 'DD-MM-YYYY' },
  { key: 'publishedDate', label: 'Published date (JSON-LD)', placeholder: 'DD-MM-YYYY' },
  { key: 'readTime', label: 'Read time', placeholder: '8 min' },
  { key: 'keywords', label: 'Keywords (comma separated)' },
  { key: 'image', label: 'Cover image URL' },
  { key: 'imagephone', label: 'Mobile image URL' },
  { key: 'alt', label: 'Cover image alt text' },
  { key: 'canonicalUrl', label: 'Canonical URL (optional override)' },
];

const STATUS_LABEL = {
  draft: 'Draft', in_review: 'In review', changes_requested: 'Changes requested',
  published: 'Published', unpublished: 'Unpublished',
};

export default function PostEditor({ initialPost = null, user, mode = 'create' }) {
  const router = useRouter();
  const [form, setForm] = useState(() => ({ ...EMPTY, ...(initialPost || {}) }));
  const [postId, setPostId] = useState(initialPost?.id || null);
  const [status, setStatus] = useState(initialPost?.status || 'draft');
  const [comments, setComments] = useState(initialPost?.comments || []);
  const [slugTouched, setSlugTouched] = useState(Boolean(initialPost?.slug));
  const [msg, setMsg] = useState(null);
  const [busy, setBusy] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [decisionComment, setDecisionComment] = useState('');
  const contentRef = useRef(null);

  const isAdmin = user?.role === 'ADMIN';
  const readOnly = mode === 'review' || status === 'in_review' || (status === 'published' && !isAdmin);
  const effectiveSlug = slugify(slugTouched ? form.slug : form.title);

  const markdownComponents = useMemo(
    () => ({
      h1: ({ node, ...p }) => <h1 id={headingId(childText(p.children))} {...p} />,
      h2: ({ node, ...p }) => <h2 id={headingId(childText(p.children))} {...p} />,
      h3: ({ node, ...p }) => <h3 id={headingId(childText(p.children))} {...p} />,
    }),
    []
  );

  useEffect(() => {
    if (mode === 'create' && !form.date) {
      const d = new Date();
      const dd = String(d.getDate()).padStart(2, '0');
      const mm = String(d.getMonth() + 1).padStart(2, '0');
      setForm((f) => ({ ...f, date: `${dd}-${mm}-${d.getFullYear()}` }));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function payload() {
    return { ...form, slug: effectiveSlug };
  }

  // ---- persistence ----
  async function save() {
    if (!form.title.trim()) return setMsg({ ok: false, text: 'Title is required.' });
    if (!effectiveSlug) return setMsg({ ok: false, text: 'Could not derive a slug.' });
    setBusy(true);
    setMsg(null);
    try {
      const url = postId ? `/api/posts/${postId}` : '/api/posts';
      const method = postId ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload()),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Save failed.');
      setPostId(data.post.id);
      setStatus(data.post.status);
      setMsg({ ok: true, text: 'Saved.' });
      return data.post.id;
    } catch (err) {
      setMsg({ ok: false, text: err.message });
      return null;
    } finally {
      setBusy(false);
    }
  }

  async function act(path, body, successText, redirectTo) {
    setBusy(true);
    setMsg(null);
    try {
      const res = await fetch(path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body || {}),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Action failed.');
      setMsg({ ok: true, text: successText });
      if (data.status) setStatus(data.status);
      if (redirectTo) router.push(redirectTo);
      return data;
    } catch (err) {
      setMsg({ ok: false, text: err.message });
      return null;
    } finally {
      setBusy(false);
    }
  }

  async function submitForReview() {
    const id = await save();
    if (id) await act(`/api/posts/${id}/submit`, {}, 'Submitted for review.', '/admin/my-posts');
  }

  async function addComment() {
    if (!newComment.trim() || !postId) return;
    const data = await act(`/api/posts/${postId}/comments`, { comment: newComment }, 'Comment added.');
    if (data?.comment) {
      setComments((c) => [...c, { ...data.comment, name: user.name, role: user.role }]);
      setNewComment('');
    }
  }

  async function review(action) {
    if (action === 'request_changes' && !decisionComment.trim()) {
      return setMsg({ ok: false, text: 'Add a comment describing the requested changes.' });
    }
    await act(
      `/api/posts/${postId}/review`,
      { action, comment: decisionComment },
      action === 'accept' ? 'Accepted & published.' : 'Changes requested.',
      '/admin/review'
    );
  }

  async function republish() {
    await act(`/api/posts/${postId}/publish`, {}, 'Published.', '/admin');
  }

  function insertIntoContent(snippet) {
    const el = contentRef.current;
    const start = el ? el.selectionStart : form.content.length;
    const end = el ? el.selectionEnd : form.content.length;
    update('content', form.content.slice(0, start) + snippet + form.content.slice(end));
    requestAnimationFrame(() => {
      if (!el) return;
      el.focus();
      const pos = start + snippet.length;
      el.setSelectionRange(pos, pos);
    });
  }

  // ---- faqs ----
  function setFaq(i, key, value) {
    setForm((f) => {
      const faqs = [...(f.faqs || [])];
      faqs[i] = { ...faqs[i], [key]: value };
      return { ...f, faqs };
    });
  }
  function addFaq() {
    setForm((f) => ({ ...f, faqs: [...(f.faqs || []), { question: '', answer: '' }] }));
  }
  function removeFaq(i) {
    setForm((f) => ({ ...f, faqs: (f.faqs || []).filter((_, idx) => idx !== i) }));
  }

  return (
    <div>
      <div style={S.topbar}>
        <div>
          <span style={S.statusBadge(status)}>{STATUS_LABEL[status] || status}</span>
          <span style={S.slugHint}>
            /blogs/{effectiveSlug || 'slug'}
          </span>
        </div>
        <div style={S.actions}>
          {!readOnly && (
            <button style={S.ghost} onClick={save} disabled={busy}>
              {busy ? 'Saving…' : 'Save draft'}
            </button>
          )}
          {!readOnly && (status === 'draft' || status === 'changes_requested' || (!postId && mode === 'create')) && (
            <button style={S.primary} onClick={submitForReview} disabled={busy}>
              Submit for review
            </button>
          )}
          {isAdmin && status === 'unpublished' && (
            <button style={S.primary} onClick={republish} disabled={busy}>
              Publish
            </button>
          )}
        </div>
      </div>

      {msg && <p style={{ ...S.msg, color: msg.ok ? '#0a7' : '#c33' }}>{msg.text}</p>}

      {/* Reviewer comment thread */}
      {comments.length > 0 && (
        <div style={S.thread}>
          <strong style={{ fontSize: 13 }}>Editorial notes</strong>
          {comments.map((c, i) => (
            <div key={i} style={S.commentRow}>
              <span style={S.commentMeta}>
                {c.name} <em>({c.role})</em>
              </span>
              <span>{c.body}</span>
            </div>
          ))}
        </div>
      )}

      <div style={S.columns}>
        {/* editor */}
        <div style={S.col}>
          <fieldset disabled={readOnly} style={S.fieldset}>
            <div style={S.grid}>
              {FIELDS.map((f) => (
                <label key={f.key} style={S.label}>
                  <span>{f.label}{f.required ? ' *' : ''}</span>
                  <input
                    style={S.input}
                    value={f.key === 'slug' ? (slugTouched ? form.slug : effectiveSlug) : form[f.key] || ''}
                    placeholder={f.placeholder || ''}
                    onChange={(e) => {
                      if (f.key === 'slug') setSlugTouched(true);
                      update(f.key, e.target.value);
                    }}
                  />
                </label>
              ))}
            </div>

            <label style={{ ...S.label, marginTop: 12 }}>
              <span>Description (meta)</span>
              <textarea style={{ ...S.input, minHeight: 56 }} value={form.description || ''} onChange={(e) => update('description', e.target.value)} />
            </label>

            {/* FAQs */}
            <div style={{ marginTop: 14 }}>
              <div style={S.faqHead}>
                <span style={{ fontSize: 12, color: '#444' }}>FAQs (emit FAQ schema)</span>
                <button type="button" style={S.smallBtn} onClick={addFaq} disabled={readOnly}>+ Add FAQ</button>
              </div>
              {(form.faqs || []).map((faq, i) => (
                <div key={i} style={S.faqRow}>
                  <input style={S.input} placeholder="Question" value={faq.question || ''} onChange={(e) => setFaq(i, 'question', e.target.value)} />
                  <textarea style={{ ...S.input, minHeight: 44 }} placeholder="Answer" value={faq.answer || ''} onChange={(e) => setFaq(i, 'answer', e.target.value)} />
                  <button type="button" style={S.removeBtn} onClick={() => removeFaq(i)} disabled={readOnly}>Remove</button>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 14 }}>
              <span style={{ fontSize: 12, color: '#444' }}>Content (markdown + raw HTML)</span>
              {!readOnly && <InsertToolbar onInsert={insertIntoContent} onError={(text) => setMsg({ ok: false, text })} />}
              <textarea
                ref={contentRef}
                style={{ ...S.input, minHeight: 340, fontFamily: 'monospace', marginTop: 8 }}
                value={form.content || ''}
                onChange={(e) => update('content', e.target.value)}
              />
            </div>
          </fieldset>

          {/* Reviewer decision panel */}
          {mode === 'review' && isAdmin && status === 'in_review' && (
            <div style={S.decision}>
              <strong style={{ fontSize: 14 }}>Review decision</strong>
              <textarea
                style={{ ...S.input, minHeight: 70, marginTop: 8 }}
                placeholder="Comment (required to request changes)"
                value={decisionComment}
                onChange={(e) => setDecisionComment(e.target.value)}
              />
              <div style={S.actions}>
                <button style={S.primary} onClick={() => review('accept')} disabled={busy}>Accept &amp; publish</button>
                <button style={S.warn} onClick={() => review('request_changes')} disabled={busy}>Request changes</button>
              </div>
            </div>
          )}

          {/* Comment box (non-review interactions) */}
          {postId && mode !== 'review' && (
            <div style={{ marginTop: 16 }}>
              <textarea style={{ ...S.input, minHeight: 50 }} placeholder="Add a note…" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
              <button style={S.ghost} onClick={addComment} disabled={busy}>Add note</button>
            </div>
          )}
        </div>

        {/* faithful preview */}
        <div style={S.col}>
          <h2 style={S.previewTitle}>Preview (as published)</h2>
          <div style={S.previewFrame}>
            <div className={blogStyles.blogPage} style={{ marginTop: 0, minHeight: 'auto' }}>
              {form.image && <img src={form.image} alt={form.alt} width="100%" height="auto" className={blogStyles.blogHeader} />}
              <div className={blogStyles.metaContainer}>
                <h1 className={blogStyles.blogTitle}>{form.title || 'Untitled'}</h1>
                <div className={blogStyles.metaInfo}>
                  <span className={blogStyles.author}>By: {form.author || '—'}</span>
                  <span className={blogStyles.readTime}>Read Time : {form.readTime || '—'}</span>
                  <span className={blogStyles.date}>Publish on: {form.date || '—'}</span>
                </div>
              </div>
              <div className={blogStyles.blogContainer}>
                <div className={blogStyles.blogContent}>
                  <ReactMarkdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>
                    {form.content || ''}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Extract plain text from react-markdown heading children (for anchor ids).
function childText(children) {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(childText).join('');
  if (children?.props?.children) return childText(children.props.children);
  return '';
}

function InsertToolbar({ onInsert, onError }) {
  const [open, setOpen] = useState(null);
  const [link, setLink] = useState({ url: '', text: '', nofollow: false, newTab: true });
  const [img, setImg] = useState({ url: '', alt: '' });

  function insertLink() {
    if (!link.url.trim()) return onError('Link URL is required.');
    const rel = [];
    if (link.nofollow) rel.push('nofollow');
    if (link.newTab) rel.push('noopener', 'noreferrer');
    const relAttr = rel.length ? ` rel="${rel.join(' ')}"` : '';
    const target = link.newTab ? ' target="_blank"' : '';
    onInsert(`<a href="${link.url.trim()}"${target}${relAttr}>${link.text.trim() || link.url.trim()}</a>`);
    setLink({ url: '', text: '', nofollow: false, newTab: true });
    setOpen(null);
  }
  function insertImage() {
    if (!img.url.trim()) return onError('Image URL is required.');
    if (!img.alt.trim()) return onError('Alt text is required for images.');
    onInsert(`![${img.alt.trim()}](${img.url.trim()})`);
    setImg({ url: '', alt: '' });
    setOpen(null);
  }

  return (
    <div style={{ marginTop: 6 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <button type="button" style={S.toolBtn} onClick={() => setOpen(open === 'link' ? null : 'link')}>🔗 Insert link</button>
        <button type="button" style={S.toolBtn} onClick={() => setOpen(open === 'image' ? null : 'image')}>🖼️ Insert image</button>
      </div>
      {open === 'link' && (
        <div style={S.panel}>
          <input style={S.pInput} placeholder="https://example.com" value={link.url} onChange={(e) => setLink({ ...link, url: e.target.value })} />
          <input style={S.pInput} placeholder="Link text" value={link.text} onChange={(e) => setLink({ ...link, text: e.target.value })} />
          <label style={S.check}><input type="checkbox" checked={link.nofollow} onChange={(e) => setLink({ ...link, nofollow: e.target.checked })} /> nofollow {link.nofollow ? '' : '(dofollow)'}</label>
          <label style={S.check}><input type="checkbox" checked={link.newTab} onChange={(e) => setLink({ ...link, newTab: e.target.checked })} /> new tab</label>
          <button type="button" style={S.pInsert} onClick={insertLink}>Insert</button>
        </div>
      )}
      {open === 'image' && (
        <div style={S.panel}>
          <input style={S.pInput} placeholder="https://…/image.webp" value={img.url} onChange={(e) => setImg({ ...img, url: e.target.value })} />
          <input style={S.pInput} placeholder="Alt text (required)" value={img.alt} onChange={(e) => setImg({ ...img, alt: e.target.value })} />
          <button type="button" style={S.pInsert} onClick={insertImage}>Insert</button>
        </div>
      )}
    </div>
  );
}

const S = {
  topbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' },
  statusBadge: (status) => ({
    fontSize: 12, fontWeight: 600, padding: '3px 10px', borderRadius: 20, marginRight: 10,
    background: status === 'published' ? '#e6f7ee' : status === 'in_review' ? '#fff4e0' : status === 'changes_requested' ? '#fde8e8' : '#eef1f5',
    color: status === 'published' ? '#0a7' : status === 'in_review' ? '#b8860b' : status === 'changes_requested' ? '#c33' : '#556',
  }),
  slugHint: { fontSize: 13, color: '#888' },
  actions: { display: 'flex', gap: 8, flexWrap: 'wrap' },
  primary: { padding: '9px 16px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6, fontSize: 14, cursor: 'pointer' },
  warn: { padding: '9px 16px', background: '#fff', color: '#c33', border: '1px solid #e0a3a3', borderRadius: 6, fontSize: 14, cursor: 'pointer' },
  ghost: { padding: '9px 16px', background: '#fff', color: '#333', border: '1px solid #ccc', borderRadius: 6, fontSize: 14, cursor: 'pointer' },
  msg: { fontSize: 13, margin: '0 0 12px' },
  thread: { background: '#fff', border: '1px solid #eee', borderRadius: 8, padding: 12, marginBottom: 16, display: 'flex', flexDirection: 'column', gap: 6 },
  commentRow: { display: 'flex', flexDirection: 'column', fontSize: 13, borderTop: '1px solid #f2f2f2', paddingTop: 6 },
  commentMeta: { color: '#888', fontSize: 11 },
  columns: { display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' },
  col: { flex: '1 1 460px', minWidth: 300 },
  fieldset: { border: 'none', padding: 0, margin: 0 },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 },
  label: { display: 'flex', flexDirection: 'column', gap: 4, fontSize: 12, color: '#444' },
  input: { padding: '8px 10px', border: '1px solid #ccc', borderRadius: 6, fontSize: 14, width: '100%', boxSizing: 'border-box' },
  faqHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  faqRow: { display: 'flex', flexDirection: 'column', gap: 6, border: '1px solid #eee', borderRadius: 6, padding: 8, marginTop: 8 },
  smallBtn: { background: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: 6, fontSize: 12, padding: '4px 8px', cursor: 'pointer' },
  removeBtn: { alignSelf: 'flex-start', background: 'none', border: 'none', color: '#c33', fontSize: 12, cursor: 'pointer' },
  decision: { marginTop: 16, background: '#fff', border: '1px solid #eee', borderRadius: 8, padding: 14 },
  previewTitle: { fontSize: 14, fontWeight: 600, margin: '0 0 8px' },
  previewFrame: { border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden', background: '#f9f9f9' },
  toolBtn: { padding: '6px 10px', background: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: 6, fontSize: 13, cursor: 'pointer' },
  panel: { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginTop: 8, padding: 10, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 6 },
  pInput: { flex: '1 1 160px', padding: '6px 8px', border: '1px solid #ccc', borderRadius: 6, fontSize: 13 },
  check: { display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: '#444' },
  pInsert: { padding: '6px 14px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6, fontSize: 13, cursor: 'pointer' },
};
