// PostEditor — the authoring surface used by /admin/compose, /admin/edit/[id]
// and /admin/review/[id]. Markdown editor + faithful preview (reuses the
// published stylesheet), link insert (nofollow/dofollow), image insert (alt).
//
// Authoring guarantees:
//   - author is auto-set to the logged-in user
//   - read time is auto-computed from length
//   - publish date is set automatically in IST (at publish time; previewed here)
//   - live SEO-title / meta-description meters (chars + pixels, green/red)
//   - live internal/outbound link counter; submit is blocked until required
//     fields, meta lengths, and link minimums are all satisfied.

import { useEffect, useMemo, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import rehypeRaw from 'rehype-raw';
import blogStyles from '@/pages/blogs/slug.module.css';
import { slugify, headingId, estimateReadTime } from '@/lib/markdown';
import { istDateDDMMYYYY } from '@/lib/dateIST';
import { META, LINK_MIN, validateForReview } from '@/lib/postValidation';

const ReactMarkdown = dynamic(() => import('react-markdown'), { ssr: false });

const SITE = 'https://www.learnbay.co';

// Read a File as a base64 data URL, then upload → returns the public WebP URL.
async function uploadImageFile(file) {
  const dataUrl = await new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = () => reject(new Error('Could not read file.'));
    r.readAsDataURL(file);
  });
  const res = await fetch('/api/upload-image', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: dataUrl, filename: file.name }),
  });
  const d = await res.json();
  if (!res.ok) throw new Error(d.error || 'Upload failed.');
  return d.url;
}

const EMPTY = {
  title: '', slug: '', Stitle: '', description: '', keywords: '', date: '', author: '',
  readTime: '', image: '', imagephone: '', alt: '', publishedDate: '', canonicalUrl: '',
  authorUrl: '', faqs: [], content: '# New post\n\nStart writing in **markdown**. Raw HTML is supported.',
};

// User-entered fields (author/date/readTime are auto — see the info bar).
const FIELDS = [
  { key: 'title', label: 'Title', required: true },
  { key: 'slug', label: 'Slug (auto from title)', placeholder: 'my-post' },
  { key: 'keywords', label: 'Keywords (comma separated)', required: true },
  { key: 'alt', label: 'Cover image alt text', required: true },
  { key: 'authorUrl', label: 'Author URL' },
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
  const [fieldsOpen, setFieldsOpen] = useState(true);
  const [slugCheck, setSlugCheck] = useState(null); // { slug, available, message, url }
  const contentRef = useRef(null);

  const isAdmin = user?.role === 'ADMIN';
  const readOnly = mode === 'review' || status === 'in_review' || (status === 'published' && !isAdmin);
  const effectiveSlug = slugify(slugTouched ? form.slug : form.title);
  const fullUrl = `${SITE}/blogs/${effectiveSlug || 'slug'}`;
  // The final URL is taken by another post (checked live against published files
  // AND other working docs).
  const urlTaken = Boolean(slugCheck && slugCheck.slug === effectiveSlug && slugCheck.available === false);

  // Auto-derived values.
  const autoAuthor = form.author || user?.name || '';
  const autoReadTime = useMemo(() => estimateReadTime(form.content), [form.content]);
  const autoPublishDate = form.publishedDate || form.date || istDateDDMMYYYY();

  // Everything the quality gate + persistence should see.
  const effectiveDoc = useMemo(
    () => ({ ...form, slug: effectiveSlug, author: autoAuthor, readTime: autoReadTime }),
    [form, effectiveSlug, autoAuthor, autoReadTime]
  );
  const review = useMemo(() => validateForReview(effectiveDoc), [effectiveDoc]);

  const markdownComponents = useMemo(
    () => ({
      h1: ({ node, ...p }) => <h1 id={headingId(childText(p.children))} {...p} />,
      h2: ({ node, ...p }) => <h2 id={headingId(childText(p.children))} {...p} />,
      h3: ({ node, ...p }) => <h3 id={headingId(childText(p.children))} {...p} />,
    }),
    []
  );

  useEffect(() => {
    // Stamp the author onto a new post from the logged-in user.
    if (mode === 'create' && !form.author && user?.name) {
      setForm((f) => ({ ...f, author: user.name }));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Live-check the final blog URL as the title/slug changes (debounced), so a
  // collision is reported before saving rather than as a surprise 409.
  useEffect(() => {
    if (readOnly || !effectiveSlug) {
      setSlugCheck(null);
      return undefined;
    }
    let cancelled = false;
    const t = setTimeout(async () => {
      try {
        const res = await fetch('/api/posts/check-slug', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug: effectiveSlug, ignoreId: postId }),
        });
        const data = await res.json();
        if (!cancelled) setSlugCheck(data);
      } catch {
        /* availability check is best-effort; the API still enforces it */
      }
    }, 400);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [effectiveSlug, postId, readOnly]);

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function payload() {
    return {
      ...form,
      slug: effectiveSlug,
      author: autoAuthor,
      readTime: autoReadTime,
      // No mobile image chosen → reuse the cover image in both fields.
      imagephone: form.imagephone || form.image,
    };
  }

  async function save() {
    if (!form.title.trim()) return setMsg({ ok: false, text: 'Title is required.' });
    if (!effectiveSlug) return setMsg({ ok: false, text: 'Could not derive a slug.' });
    if (urlTaken) return setMsg({ ok: false, text: slugCheck.message });
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
      if (!res.ok) {
        const detail = Array.isArray(data.errors) ? ` ${data.errors.join(' ')}` : '';
        throw new Error((data.error || 'Action failed.') + detail);
      }
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
    // Block on the quality gate before touching the network.
    if (urlTaken) return setMsg({ ok: false, text: slugCheck.message });
    if (!review.ok) {
      return setMsg({ ok: false, text: `Not ready: ${review.errors[0]}` });
    }
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

  async function reviewDecision(action) {
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

  async function unpublish() {
    const slug = form.slug || effectiveSlug;
    if (!window.confirm(`Unpublish "${slug}"?\n\nThe live page and sitemap entry are removed, the .md file is deleted, and the post is stored as Unpublished. You can republish it later.`)) return;
    await act('/api/posts/unpublish', { slug }, 'Unpublished.', '/admin/published');
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

  // Selection-aware editing that powers the formatting toolbar.
  function editContent(transform) {
    const el = contentRef.current;
    const value = form.content || '';
    const start = el ? el.selectionStart : value.length;
    const end = el ? el.selectionEnd : value.length;
    const out = transform(value.slice(start, end), value, start, end);
    update('content', out.text);
    requestAnimationFrame(() => {
      if (!el) return;
      el.focus();
      el.setSelectionRange(out.selStart ?? out.text.length, out.selEnd ?? out.selStart ?? out.text.length);
    });
  }

  function wrapSel(before, after = before, placeholder = 'text') {
    editContent((sel, value, start, end) => {
      const inner = sel || placeholder;
      const insert = before + inner + after;
      return { text: value.slice(0, start) + insert + value.slice(end), selStart: start + before.length, selEnd: start + before.length + inner.length };
    });
  }

  // Prefix each line spanned by the selection (headings, quotes, lists).
  function linePrefix(makePrefix) {
    editContent((sel, value, start, end) => {
      const lineStart = value.lastIndexOf('\n', start - 1) + 1;
      const nl = value.indexOf('\n', end);
      const lineEnd = nl === -1 ? value.length : nl;
      const block = value.slice(lineStart, lineEnd).split('\n').map((l, i) => makePrefix(i) + l).join('\n');
      return { text: value.slice(0, lineStart) + block + value.slice(lineEnd), selStart: lineStart, selEnd: lineStart + block.length };
    });
  }

  function fenceSel() {
    editContent((sel, value, start, end) => {
      const inner = sel || 'code';
      const insert = '```\n' + inner + '\n```';
      return { text: value.slice(0, start) + insert + value.slice(end), selStart: start + 4, selEnd: start + 4 + inner.length };
    });
  }

  const format = {
    bold: () => wrapSel('**'),
    italic: () => wrapSel('*'),
    strike: () => wrapSel('<s>', '</s>'),
    inlineCode: () => wrapSel('`'),
    h2: () => linePrefix(() => '## '),
    h3: () => linePrefix(() => '### '),
    quote: () => linePrefix(() => '> '),
    ul: () => linePrefix(() => '- '),
    ol: () => linePrefix((i) => `${i + 1}. `),
    codeBlock: fenceSel,
    hr: () => insertIntoContent('\n\n---\n\n'),
  };

  // Paste a table copied from Google Sheets / Excel → styled HTML table.
  function onContentPaste(e) {
    if (readOnly || !e.clipboardData) return;
    const table = tableFromClipboard(e.clipboardData);
    if (table) {
      e.preventDefault();
      insertIntoContent('\n' + table + '\n');
      setMsg({ ok: true, text: 'Table pasted and formatted.' });
    }
  }

  function setFaq(i, key, value) {
    setForm((f) => {
      const faqs = [...(f.faqs || [])];
      faqs[i] = { ...faqs[i], [key]: value };
      return { ...f, faqs };
    });
  }
  const addFaq = () => setForm((f) => ({ ...f, faqs: [...(f.faqs || []), { question: '', answer: '' }] }));
  const removeFaq = (i) => setForm((f) => ({ ...f, faqs: (f.faqs || []).filter((_, idx) => idx !== i) }));

  // A post that was taken down can be revised and sent back through review
  // (blogger) or published straight away (admin, via the Publish button).
  const canSubmitHere =
    !readOnly &&
    (status === 'draft' || status === 'changes_requested' || status === 'unpublished' || (!postId && mode === 'create'));

  return (
    <div>
      <div style={S.topbar}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={S.statusBadge(status)}>{STATUS_LABEL[status] || status}</span>
          <CopyUrl url={fullUrl} />
          {!readOnly && effectiveSlug && slugCheck && slugCheck.slug === effectiveSlug && (
            <span style={{ ...S.urlState, color: slugCheck.available ? '#0a7' : '#c33' }}>
              {slugCheck.available ? '✓ URL available' : '✗ URL already taken'}
            </span>
          )}
        </div>
        <div style={S.actions}>
          <button style={S.ghost} onClick={() => setFieldsOpen((v) => !v)}>
            {fieldsOpen ? '⤢ Hide fields' : '⤡ Show fields'}
          </button>
          {!readOnly && (
            <button style={S.ghost} onClick={save} disabled={busy}>
              {busy ? 'Saving…' : 'Save draft'}
            </button>
          )}
          {canSubmitHere && (
            <button
              style={{ ...S.primary, ...(review.ok && !urlTaken ? {} : S.primaryDisabled) }}
              onClick={submitForReview}
              disabled={busy || !review.ok || urlTaken}
              title={urlTaken ? slugCheck.message : review.ok ? 'Submit for review' : review.errors[0]}
            >
              {status === 'unpublished' ? 'Submit for re-publish' : 'Submit for review'}
            </button>
          )}
          {isAdmin && status === 'unpublished' && (
            <button style={S.primary} onClick={republish} disabled={busy}>Publish</button>
          )}
          {isAdmin && status === 'published' && (
            <button style={S.warn} onClick={unpublish} disabled={busy}>Unpublish</button>
          )}
        </div>
      </div>

      {msg && <p style={{ ...S.msg, color: msg.ok ? '#0a7' : '#c33' }}>{msg.text}</p>}

      {/* Readiness checklist (hidden in review mode / when fields collapsed) */}
      {mode !== 'review' && fieldsOpen && (
        <div style={S.readiness}>
          <strong style={{ fontSize: 13 }}>
            {review.ok && !urlTaken
              ? '✅ Ready to submit for review'
              : `⚠️ ${review.errors.length + (urlTaken ? 1 : 0)} item(s) to fix before review`}
          </strong>
          {(!review.ok || urlTaken) && (
            <ul style={S.readList}>
              {urlTaken && <li>{slugCheck.message}</li>}
              {review.errors.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {comments.length > 0 && fieldsOpen && (
        <div style={S.thread}>
          <strong style={{ fontSize: 13 }}>Editorial notes</strong>
          {comments.map((c, i) => (
            <div key={i} style={S.commentRow}>
              <span style={S.commentMeta}>{c.name} <em>({c.role})</em></span>
              <span>{c.body}</span>
            </div>
          ))}
        </div>
      )}

      <div style={S.columns}>
        {fieldsOpen && (
        <div style={S.col}>
          {/* Auto-managed values */}
          <div style={S.autoBar}>
            <AutoChip label="Author" value={autoAuthor || '—'} />
            <AutoChip label="Read time" value={autoReadTime} />
            <AutoChip label="Publish date (IST)" value={autoPublishDate} note="set at publish" />
          </div>

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

            {/* Cover + mobile image: pick a file → converted to WebP → S3 URL */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 12 }}>
              <ImageField label="Cover image *" value={form.image} onChange={(url) => update('image', url)} disabled={readOnly} onError={(text) => setMsg({ ok: false, text })} />
              <ImageField label="Mobile image (defaults to cover)" value={form.imagephone} fallback={form.image} onChange={(url) => update('imagephone', url)} disabled={readOnly} onError={(text) => setMsg({ ok: false, text })} />
            </div>

            {/* SEO title with live meter */}
            <label style={{ ...S.label, marginTop: 12 }}>
              <span>SEO title (Stitle) *</span>
              <input style={S.input} value={form.Stitle || ''} onChange={(e) => update('Stitle', e.target.value)} />
            </label>
            <MetaMeter value={form.Stitle || ''} cfg={META.title} label="SEO title" />

            {/* Meta description with live meter */}
            <label style={{ ...S.label, marginTop: 12 }}>
              <span>Meta description *</span>
              <textarea style={{ ...S.input, minHeight: 60 }} value={form.description || ''} onChange={(e) => update('description', e.target.value)} />
            </label>
            <MetaMeter value={form.description || ''} cfg={META.description} label="Description" />

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

            {/* Content */}
            <div style={{ marginTop: 14 }}>
              <span style={{ fontSize: 12, color: '#444' }}>Content (markdown + raw HTML) *</span>
              {!readOnly && <FormatToolbar format={format} />}
              {!readOnly && <InsertToolbar onInsert={insertIntoContent} onError={(text) => setMsg({ ok: false, text })} />}
              {!readOnly && (
                <p style={S.pasteHint}>Tip: copy a table from Google Sheets / Excel and paste it here — it becomes a formatted table automatically.</p>
              )}
              <textarea
                ref={contentRef}
                style={{ ...S.input, minHeight: 340, fontFamily: 'monospace', marginTop: 8 }}
                value={form.content || ''}
                onChange={(e) => update('content', e.target.value)}
                onPaste={onContentPaste}
              />
              <LinkStats links={review.links} />
            </div>
          </fieldset>

          {mode === 'review' && isAdmin && status === 'in_review' && (
            <div style={S.decision}>
              <strong style={{ fontSize: 14 }}>Review decision</strong>
              <textarea style={{ ...S.input, minHeight: 70, marginTop: 8 }} placeholder="Comment (required to request changes)" value={decisionComment} onChange={(e) => setDecisionComment(e.target.value)} />
              <div style={S.actions}>
                <button style={S.primary} onClick={() => reviewDecision('accept')} disabled={busy}>Accept &amp; publish</button>
                <button style={S.warn} onClick={() => reviewDecision('request_changes')} disabled={busy}>Request changes</button>
              </div>
            </div>
          )}

          {postId && mode !== 'review' && (
            <div style={{ marginTop: 16 }}>
              <textarea style={{ ...S.input, minHeight: 50 }} placeholder="Add a note…" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
              <button style={S.ghost} onClick={addComment} disabled={busy}>Add note</button>
            </div>
          )}
        </div>
        )}

        {/* faithful preview — full width when fields are collapsed */}
        <div style={fieldsOpen ? S.col : S.colFull}>
          <h2 style={S.previewTitle}>Preview (as published)</h2>
          <div style={S.previewFrame}>
            <div className={blogStyles.blogPage} style={{ marginTop: 0, minHeight: 'auto' }}>
              {form.image && <img src={form.image} alt={form.alt} width="100%" height="auto" className={blogStyles.blogHeader} />}
              <div className={blogStyles.metaContainer}>
                <h1 className={blogStyles.blogTitle}>{form.title || 'Untitled'}</h1>
                <div className={blogStyles.metaInfo}>
                  <span className={blogStyles.author}>By: {autoAuthor || '—'}</span>
                  <span className={blogStyles.readTime}>Read Time : {autoReadTime}</span>
                  <span className={blogStyles.date}>Publish on: {autoPublishDate}</span>
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

function AutoChip({ label, value, note }) {
  return (
    <div style={S.chip}>
      <div style={S.chipLabel}>{label}{note ? ` · ${note}` : ''}</div>
      <div style={S.chipValue}>{value}</div>
    </div>
  );
}

// Canvas text-width measurement (browser only), memoized on a single canvas.
function useTextWidth(text, font) {
  const [px, setPx] = useState(null);
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const canvas = useTextWidth._c || (useTextWidth._c = document.createElement('canvas'));
    const ctx = canvas.getContext('2d');
    ctx.font = font;
    setPx(Math.round(ctx.measureText(text || '').width));
  }, [text, font]);
  return px;
}

function MetaMeter({ value, cfg, label }) {
  const px = useTextWidth(value, cfg.font);
  const chars = String(value || '').trim().length;
  const okChars = chars >= cfg.minChars && chars <= cfg.maxChars;
  const okPx = px == null ? true : px >= cfg.minPx && px <= cfg.maxPx;
  const ok = okChars && okPx;
  const color = chars === 0 ? '#999' : ok ? '#0a7' : '#c33';
  const pct = Math.min(100, cfg.maxChars ? (chars / cfg.maxChars) * 100 : 0);
  return (
    <div style={S.meter}>
      <div style={S.meterBarTrack}>
        <div style={{ ...S.meterBarFill, width: `${pct}%`, background: color }} />
      </div>
      <div style={{ ...S.meterText, color }}>
        {label}: {chars}/{cfg.maxChars} chars (min {cfg.minChars})
        {px != null && ` · ${px}px (${cfg.minPx}–${cfg.maxPx})`}
        {chars > 0 && (ok ? ' ✓' : ' ✗')}
      </div>
    </div>
  );
}

function LinkStats({ links }) {
  const okIn = links.internal >= LINK_MIN.internal;
  const okOut = links.outbound >= LINK_MIN.outbound;
  return (
    <div style={S.links}>
      <span style={{ color: okIn ? '#0a7' : '#c33' }}>
        Internal links: {links.internal}/{LINK_MIN.internal} {okIn ? '✓' : '✗'}
      </span>
      <span style={{ color: okOut ? '#0a7' : '#c33' }}>
        Outbound links: {links.outbound}/{LINK_MIN.outbound} {okOut ? '✓' : '✗'}
      </span>
    </div>
  );
}

// Cover/mobile image: pick a file, upload+convert to WebP, store the S3 URL.
function ImageField({ label, value, onChange, disabled, onError, fallback }) {
  const [busy, setBusy] = useState(false);
  // When empty, show the fallback (cover image) — that's what will be saved.
  const shown = value || fallback || '';
  const usingFallback = !value && Boolean(fallback);
  async function onFile(e) {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    setBusy(true);
    try {
      onChange(await uploadImageFile(file));
    } catch (err) {
      onError?.(err.message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <div style={S.imgField}>
      <div style={{ fontSize: 12, color: '#444', marginBottom: 6 }}>{label}</div>
      {shown ? (
        <img src={shown} alt="" style={{ ...S.thumb, ...(usingFallback ? { opacity: 0.65 } : {}) }} />
      ) : (
        <div style={S.thumbEmpty}>No image</div>
      )}
      {usingFallback && <div style={S.fallbackNote}>Using cover image</div>}
      <div style={{ display: 'flex', gap: 8, marginTop: 8, alignItems: 'center' }}>
        <label style={{ ...S.filePick, ...(disabled ? { opacity: 0.5, pointerEvents: 'none' } : {}) }}>
          {busy ? 'Uploading…' : value ? 'Replace' : 'Choose image'}
          <input type="file" accept="image/*" style={{ display: 'none' }} onChange={onFile} disabled={disabled || busy} />
        </label>
        {value && !disabled && (
          <button type="button" style={S.clearBtn} onClick={() => onChange('')}>Remove</button>
        )}
      </div>
    </div>
  );
}

// Full public URL with a copy-to-clipboard button.
function CopyUrl({ url }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard blocked — no-op */
    }
  }
  return (
    <span style={S.copyWrap} title={url}>
      <span style={S.urlText}>{url}</span>
      <button type="button" style={S.copyBtn} onClick={copy} aria-label="Copy blog URL">
        {copied ? '✓ Copied' : '📋 Copy'}
      </button>
    </span>
  );
}

function childText(children) {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(childText).join('');
  if (children?.props?.children) return childText(children.props.children);
  return '';
}

// ---- Paste-to-table (Google Sheets / Excel style) -------------------------
//
// Copying cells from a spreadsheet puts an HTML <table> on the clipboard (plus a
// tab-separated plaintext fallback). On paste we detect either and rebuild a
// clean table using the site's styling convention, preserving bold, alignment
// and links. Output is raw HTML → renders via rehype-raw in preview + published.

const TABLE_STYLE = 'width:100%; border-collapse:collapse; font-family:Arial, sans-serif; margin:20px 0;';

function esc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderRow(cells) {
  return (
    '    <tr>' +
    cells
      .map((c) => {
        const style = `border:1px solid #000; padding:12px;` + (c.align ? ` text-align:${c.align};` : c.tag === 'th' ? ' text-align:left;' : '');
        return `<${c.tag} style="${style}">${c.inner || ''}</${c.tag}>`;
      })
      .join('') +
    '</tr>\n'
  );
}

function buildTable(rows) {
  const header = rows.filter((r) => r.header);
  const body = rows.filter((r) => !r.header);
  let out = `<table style="${TABLE_STYLE}">\n`;
  if (header.length) out += '  <thead>\n' + header.map((r) => renderRow(r.cells)).join('') + '  </thead>\n';
  out += '  <tbody>\n' + body.map((r) => renderRow(r.cells)).join('') + '  </tbody>\n</table>';
  return out;
}

// Extract text + light formatting from a spreadsheet cell element.
function cellFrom(el, tag) {
  const style = (el.getAttribute('style') || '').toLowerCase();
  const align = (style.match(/text-align:\s*(left|center|right)/) || [])[1];
  const bold = /font-weight:\s*(bold|[6-9]00)/.test(style) || !!el.querySelector('b, strong');
  const link = el.querySelector('a[href]');
  let inner = esc((el.textContent || '').trim()).replace(/\n/g, '<br>');
  if (link) inner = `<a href="${esc(link.getAttribute('href'))}" target="_blank" rel="noopener noreferrer">${inner}</a>`;
  if (bold) inner = `<strong>${inner}</strong>`;
  return { tag, inner, align };
}

function htmlToStyledTable(html) {
  try {
    const table = new DOMParser().parseFromString(html, 'text/html').querySelector('table');
    if (!table) return null;
    const rows = [];
    table.querySelectorAll('tr').forEach((tr, idx) => {
      const inThead = !!tr.closest('thead');
      const cells = Array.from(tr.querySelectorAll('th, td')).map((el) =>
        cellFrom(el, el.tagName === 'TH' || inThead ? 'th' : 'td')
      );
      if (cells.length) rows.push({ cells, header: inThead || (idx === 0 && cells.every((c) => c.tag === 'th')) });
    });
    if (!rows.length) return null;
    if (!rows.some((r) => r.header)) {
      rows[0].header = true;
      rows[0].cells.forEach((c) => (c.tag = 'th'));
    }
    return buildTable(rows);
  } catch {
    return null;
  }
}

function tsvToStyledTable(text) {
  const lines = text.replace(/\r/g, '').replace(/\n+$/, '').split('\n');
  if (lines.length < 2) return null;
  const grid = lines.map((l) => l.split('\t'));
  const cols = Math.max(...grid.map((r) => r.length));
  if (cols < 2) return null;
  const rows = grid.map((cells, idx) => ({
    header: idx === 0,
    cells: Array.from({ length: cols }, (_, i) => ({ tag: idx === 0 ? 'th' : 'td', inner: esc((cells[i] || '').trim()) })),
  }));
  return buildTable(rows);
}

// Returns a styled HTML table from clipboard data, or null if it isn't tabular.
function tableFromClipboard(clipboard) {
  const html = clipboard.getData('text/html');
  if (html && /<table/i.test(html)) {
    const t = htmlToStyledTable(html);
    if (t) return t;
  }
  const text = clipboard.getData('text/plain');
  if (text && /\t/.test(text) && text.split(/\r?\n/).filter(Boolean).length >= 2) {
    return tsvToStyledTable(text);
  }
  return null;
}

// Rich-text-style formatting toolbar over the markdown source.
function FormatToolbar({ format }) {
  const B = ({ onClick, title, children }) => (
    <button type="button" style={S.fmtBtn} onMouseDown={(e) => e.preventDefault()} onClick={onClick} title={title}>
      {children}
    </button>
  );

  return (
    <div style={{ marginTop: 6 }}>
      <div style={S.fmtBar}>
        <B onClick={format.bold} title="Bold"><b>B</b></B>
        <B onClick={format.italic} title="Italic"><i>I</i></B>
        <B onClick={format.strike} title="Strikethrough"><s>S</s></B>
        <B onClick={format.inlineCode} title="Inline code">{'<>'}</B>
        <span style={S.fmtSep} />
        <B onClick={format.h2} title="Heading 2">H2</B>
        <B onClick={format.h3} title="Heading 3">H3</B>
        <B onClick={format.quote} title="Quote">❝</B>
        <B onClick={format.ul} title="Bullet list">• List</B>
        <B onClick={format.ol} title="Numbered list">1. List</B>
        <B onClick={format.codeBlock} title="Code block">Code</B>
        <B onClick={format.hr} title="Divider">— HR</B>
      </div>
    </div>
  );
}

function InsertToolbar({ onInsert, onError }) {
  const [open, setOpen] = useState(null);
  const [link, setLink] = useState({ url: '', text: '', nofollow: false, newTab: true });
  const [img, setImg] = useState({ url: '', alt: '', busy: false });

  async function onImgFile(e) {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    setImg((s) => ({ ...s, busy: true }));
    try {
      const url = await uploadImageFile(file);
      setImg((s) => ({ ...s, url, busy: false }));
    } catch (err) {
      setImg((s) => ({ ...s, busy: false }));
      onError(err.message);
    }
  }

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
          <input style={S.pInput} placeholder="https://example.com  or  /internal-page" value={link.url} onChange={(e) => setLink({ ...link, url: e.target.value })} />
          <input style={S.pInput} placeholder="Link text" value={link.text} onChange={(e) => setLink({ ...link, text: e.target.value })} />
          <label style={S.check}><input type="checkbox" checked={link.nofollow} onChange={(e) => setLink({ ...link, nofollow: e.target.checked })} /> nofollow {link.nofollow ? '' : '(dofollow)'}</label>
          <label style={S.check}><input type="checkbox" checked={link.newTab} onChange={(e) => setLink({ ...link, newTab: e.target.checked })} /> new tab</label>
          <button type="button" style={S.pInsert} onClick={insertLink}>Insert</button>
        </div>
      )}
      {open === 'image' && (
        <div style={S.panel}>
          <label style={S.filePick}>
            {img.busy ? 'Uploading…' : img.url ? 'Change image' : 'Choose image'}
            <input type="file" accept="image/*" style={{ display: 'none' }} onChange={onImgFile} disabled={img.busy} />
          </label>
          {img.url && <img src={img.url} alt="" style={S.miniThumb} />}
          <input style={S.pInput} placeholder="Alt text (required)" value={img.alt} onChange={(e) => setImg({ ...img, alt: e.target.value })} />
          <button type="button" style={S.pInsert} onClick={insertImage} disabled={img.busy}>Insert</button>
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
  urlState: { fontSize: 12, fontWeight: 600 },
  actions: { display: 'flex', gap: 8, flexWrap: 'wrap' },
  primary: { padding: '9px 16px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6, fontSize: 14, cursor: 'pointer' },
  primaryDisabled: { background: '#9db8e8', cursor: 'not-allowed' },
  warn: { padding: '9px 16px', background: '#fff', color: '#c33', border: '1px solid #e0a3a3', borderRadius: 6, fontSize: 14, cursor: 'pointer' },
  ghost: { padding: '9px 16px', background: '#fff', color: '#333', border: '1px solid #ccc', borderRadius: 6, fontSize: 14, cursor: 'pointer' },
  msg: { fontSize: 13, margin: '0 0 12px' },
  readiness: { background: '#fff', border: '1px solid #eee', borderRadius: 8, padding: '10px 14px', marginBottom: 14 },
  readList: { margin: '8px 0 0', paddingLeft: 18, color: '#c33', fontSize: 13 },
  thread: { background: '#fff', border: '1px solid #eee', borderRadius: 8, padding: 12, marginBottom: 16, display: 'flex', flexDirection: 'column', gap: 6 },
  commentRow: { display: 'flex', flexDirection: 'column', fontSize: 13, borderTop: '1px solid #f2f2f2', paddingTop: 6 },
  commentMeta: { color: '#888', fontSize: 11 },
  columns: { display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' },
  col: { flex: '1 1 460px', minWidth: 300 },
  colFull: { flex: '1 1 100%', minWidth: 300, maxWidth: 1000, margin: '0 auto' },
  imgField: { flex: '1 1 200px', minWidth: 180, border: '1px solid #eee', borderRadius: 8, padding: 10, background: '#fafbfc' },
  thumb: { width: '100%', height: 120, objectFit: 'cover', borderRadius: 6, display: 'block' },
  thumbEmpty: { width: '100%', height: 120, borderRadius: 6, background: '#eef1f5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aab', fontSize: 13 },
  fallbackNote: { fontSize: 11, color: '#8a94a6', marginTop: 4, fontStyle: 'italic' },
  filePick: { padding: '6px 12px', background: '#2563eb', color: '#fff', borderRadius: 6, fontSize: 13, cursor: 'pointer', display: 'inline-block' },
  clearBtn: { background: 'none', border: 'none', color: '#c33', fontSize: 13, cursor: 'pointer' },
  miniThumb: { width: 40, height: 40, objectFit: 'cover', borderRadius: 4 },
  copyWrap: { display: 'inline-flex', alignItems: 'center', gap: 8, background: '#f3f6fb', border: '1px solid #e0e8f4', borderRadius: 6, padding: '3px 3px 3px 10px', maxWidth: '100%' },
  urlText: { fontSize: 12, color: '#556', maxWidth: 360, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
  copyBtn: { padding: '4px 10px', background: '#fff', border: '1px solid #cdd8e8', borderRadius: 5, fontSize: 12, cursor: 'pointer', whiteSpace: 'nowrap' },
  autoBar: { display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 14 },
  chip: { background: '#f3f6fb', border: '1px solid #e0e8f4', borderRadius: 8, padding: '6px 12px', minWidth: 90 },
  chipLabel: { fontSize: 10, color: '#8090a5', textTransform: 'uppercase', letterSpacing: 0.4 },
  chipValue: { fontSize: 14, fontWeight: 600, color: '#2372bc' },
  fieldset: { border: 'none', padding: 0, margin: 0 },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 },
  label: { display: 'flex', flexDirection: 'column', gap: 4, fontSize: 12, color: '#444' },
  input: { padding: '8px 10px', border: '1px solid #ccc', borderRadius: 6, fontSize: 14, width: '100%', boxSizing: 'border-box' },
  meter: { marginTop: 6 },
  meterBarTrack: { height: 4, background: '#eee', borderRadius: 2, overflow: 'hidden' },
  meterBarFill: { height: '100%', transition: 'width 0.15s' },
  meterText: { fontSize: 11, marginTop: 3 },
  links: { display: 'flex', gap: 16, marginTop: 8, fontSize: 12, fontWeight: 600, flexWrap: 'wrap' },
  faqHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  faqRow: { display: 'flex', flexDirection: 'column', gap: 6, border: '1px solid #eee', borderRadius: 6, padding: 8, marginTop: 8 },
  smallBtn: { background: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: 6, fontSize: 12, padding: '4px 8px', cursor: 'pointer' },
  removeBtn: { alignSelf: 'flex-start', background: 'none', border: 'none', color: '#c33', fontSize: 12, cursor: 'pointer' },
  decision: { marginTop: 16, background: '#fff', border: '1px solid #eee', borderRadius: 8, padding: 14 },
  previewTitle: { fontSize: 14, fontWeight: 600, margin: '0 0 8px' },
  previewFrame: { border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden', background: '#f9f9f9' },
  toolBtn: { padding: '6px 10px', background: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: 6, fontSize: 13, cursor: 'pointer' },
  fmtBar: { display: 'flex', gap: 4, flexWrap: 'wrap', alignItems: 'center', padding: 6, background: '#f7f8fa', border: '1px solid #e5e7eb', borderRadius: 6 },
  fmtBtn: { minWidth: 30, padding: '5px 8px', background: '#fff', border: '1px solid #d8dde5', borderRadius: 5, fontSize: 13, cursor: 'pointer', lineHeight: 1 },
  fmtSep: { width: 1, alignSelf: 'stretch', background: '#dde2e9', margin: '0 2px' },
  pasteHint: { fontSize: 11, color: '#8a94a6', margin: '6px 0 0', fontStyle: 'italic' },
  panel: { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginTop: 8, padding: 10, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 6 },
  pInput: { flex: '1 1 160px', padding: '6px 8px', border: '1px solid #ccc', borderRadius: 6, fontSize: 13 },
  check: { display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: '#444' },
  pInsert: { padding: '6px 14px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6, fontSize: 13, cursor: 'pointer' },
};
