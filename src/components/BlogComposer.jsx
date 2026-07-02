// src/components/BlogComposer.jsx
//
// Internal authoring tool for Learnbay blog posts.
// Outputs the exact `gray-matter` frontmatter + markdown body that
// src/pages/blogs/[slug].js consumes, and can write the file straight
// into src/blog/ (dev) via /api/blog routes.
//
// Rendered client-side only — import via next/dynamic with { ssr: false }.

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

/* ------------------------------------------------------------------ */
/* pure helpers                                                        */
/* ------------------------------------------------------------------ */

const slugify = (s) =>
  (s || '')
    .toLowerCase()
    .trim()
    .replace(/['"’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const wordCount = (s) => {
  const m = (s || '').trim().match(/\S+/g);
  return m ? m.length : 0;
};

// YAML single-quoted scalar; collapse newlines so it stays a valid single line
const yq = (v) => {
  v = (v == null ? '' : String(v)).replace(/\s*\n\s*/g, ' ').trim();
  return "'" + v.replace(/'/g, "''") + "'";
};

const toISO = (d) => {
  if (!d) return '';
  if (d.indexOf('T') !== -1) return d;
  const p = d.split('/');
  if (p.length !== 3) return '';
  const [day, mon, yr] = p;
  if (!day || !mon || !yr) return '';
  return `${yr}-${mon.padStart(2, '0')}-${day.padStart(2, '0')}T00:00:00+05:30`;
};

// Mirrors extractText() in [slug].js so preview anchor IDs match production
const extractText = (children) => {
  const toStr = (c) =>
    typeof c === 'string'
      ? c
      : Array.isArray(c)
        ? c.map(toStr).join('')
        : typeof c?.props?.children !== 'undefined'
          ? toStr(c.props.children)
          : '';
  return toStr(children)
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
};

const EMPTY = {
  title: '', slug: '', stitle: '', description: '', keywords: '',
  date: '', author: '', authorUrl: '', readTime: '',
  image: '', imagephone: '', alt: '', canonical: '',
};

function buildMarkdown(meta, faqs, appendFaq, body) {
  const L = ['---'];
  L.push('title: ' + yq(meta.title));
  L.push('Stitle: ' + yq(meta.stitle || meta.title));
  L.push('description: ' + yq(meta.description));
  L.push('keywords: ' + yq(meta.keywords.replace(/\s*,\s*/g, ',')));
  L.push('date: ' + yq(meta.date));
  L.push('author: ' + yq(meta.author));
  L.push('readTime: ' + yq(meta.readTime));
  L.push('image: ' + yq(meta.image));
  L.push('imagephone: ' + yq(meta.imagephone || meta.image));
  L.push('alt: ' + yq(meta.alt));
  if (meta.authorUrl) L.push('authorUrl: ' + yq(meta.authorUrl));
  if (meta.canonical) L.push('canonicalUrl: ' + yq(meta.canonical));
  L.push('publishedDate: ' + yq(toISO(meta.date)));

  const cleanFaqs = faqs.filter((f) => f.question || f.answer);
  if (cleanFaqs.length) {
    L.push('');
    L.push('faqs:');
    cleanFaqs.forEach((f) => {
      L.push('  - question: ' + yq(f.question));
      L.push('    answer: ' + yq(f.answer));
    });
  }
  L.push('---', '');

  let out = (body || '').trim();
  if (appendFaq && cleanFaqs.length) {
    const fq = ['', '## FAQs:', ''];
    cleanFaqs.forEach((f) => fq.push('### ' + f.question, '', '**Ans.** ' + f.answer, ''));
    out += '\n' + fq.join('\n');
  }
  L.push(out, '');
  return L.join('\n');
}

function validate(meta, body) {
  const miss = [];
  if (!meta.title) miss.push('title');
  if (!meta.slug) miss.push('slug');
  if (!meta.author) miss.push('author');
  if (!meta.date) miss.push('publish date');
  if (!meta.image) miss.push('banner image');
  if (!meta.alt) miss.push('alt text');
  if (!(body || '').trim()) miss.push('body');
  if (meta.date && !toISO(meta.date)) miss.push('valid date (DD/MM/YYYY)');
  return miss;
}

const DRAFT_KEY = 'lb_blog_composer_draft';

/* ------------------------------------------------------------------ */
/* component                                                           */
/* ------------------------------------------------------------------ */

export default function BlogComposer() {
  const [meta, setMeta] = useState(EMPTY);
  const [slugManual, setSlugManual] = useState(false);
  const [faqs, setFaqs] = useState([{ question: '', answer: '' }, { question: '', answer: '' }]);
  const [appendFaq, setAppendFaq] = useState(true);
  const [body, setBody] = useState('');
  const [tab, setTab] = useState('write');
  const [status, setStatus] = useState('Not saved');
  const [toast, setToast] = useState('');

  const bodyRef = useRef(null);
  const pendingSel = useRef(null);
  const toastTimer = useRef(null);

  /* ---- toast ---- */
  const flash = useCallback((msg) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 1900);
  }, []);

  /* ---- meta field updates ---- */
  const setField = (k, v) => {
    setMeta((m) => {
      const next = { ...m, [k]: v };
      if (k === 'title' && !slugManual) next.slug = slugify(v);
      return next;
    });
    setStatus('Unsaved changes');
  };
  const onSlugEdit = (v) => {
    setSlugManual(true);
    setField('slug', slugify(v));
  };

  /* ---- restore selection after a toolbar edit ---- */
  useEffect(() => {
    if (pendingSel.current && bodyRef.current) {
      const { start, end } = pendingSel.current;
      bodyRef.current.focus();
      bodyRef.current.setSelectionRange(start, end);
      pendingSel.current = null;
    }
  }, [body]);

  const applyEdit = (value, selStart, selEnd) => {
    pendingSel.current = { start: selStart, end: selEnd };
    setBody(value);
    setStatus('Unsaved changes');
  };

  const surround = (before, after, placeholder) => {
    const ta = bodyRef.current; if (!ta) return;
    const val = ta.value, s = ta.selectionStart, e = ta.selectionEnd;
    const sel = val.slice(s, e) || placeholder || '';
    const nv = val.slice(0, s) + before + sel + after + val.slice(e);
    applyEdit(nv, s + before.length, s + before.length + sel.length);
  };
  const linePrefix = (prefix) => {
    const ta = bodyRef.current; if (!ta) return;
    const val = ta.value, s = ta.selectionStart, e = ta.selectionEnd;
    const start = val.lastIndexOf('\n', s - 1) + 1;
    const numbered = prefix === '1. ';
    const block = val.slice(start, e).split('\n')
      .map((ln, i) => (numbered ? i + 1 + '. ' : prefix) + ln).join('\n');
    const nv = val.slice(0, start) + block + val.slice(e);
    applyEdit(nv, start, start + block.length);
  };
  const insertText = (txt) => {
    const ta = bodyRef.current; if (!ta) return;
    const val = ta.value, s = ta.selectionStart;
    const nv = val.slice(0, s) + txt + val.slice(ta.selectionEnd);
    applyEdit(nv, s + txt.length, s + txt.length);
  };

  const actions = {
    h2: () => linePrefix('## '),
    h3: () => linePrefix('### '),
    bold: () => surround('**', '**', 'bold text'),
    italic: () => surround('*', '*', 'italic text'),
    ul: () => linePrefix('- '),
    ol: () => linePrefix('1. '),
    quote: () => linePrefix('> '),
    code: () => surround('`', '`', 'code'),
    hr: () => insertText('\n\n---\n\n'),
    link: () => openLink(),
    image: () => openImage(),
  };
  const onBodyKey = (e) => {
    if (!(e.metaKey || e.ctrlKey)) return;
    const k = e.key.toLowerCase();
    if (k === 'b') { e.preventDefault(); actions.bold(); }
    else if (k === 'i') { e.preventDefault(); actions.italic(); }
    else if (k === 'k') { e.preventDefault(); actions.link(); }
  };

  /* ---- FAQs ---- */
  const setFaq = (i, k, v) => {
    setFaqs((f) => f.map((x, idx) => (idx === i ? { ...x, [k]: v } : x)));
    setStatus('Unsaved changes');
  };
  const addFaq = () => setFaqs((f) => [...f, { question: '', answer: '' }]);
  const removeFaq = (i) => setFaqs((f) => f.filter((_, idx) => idx !== i));

  /* ---- read time ---- */
  const estimateRead = () => {
    const mins = Math.max(1, Math.round(wordCount(body) / 200));
    setField('readTime', mins + ' min' + (mins === 1 ? '' : 's'));
  };

  /* ---- link modal ---- */
  const [linkOpen, setLinkOpen] = useState(false);
  const [link, setLink] = useState({ text: '', url: '', blank: true });
  const openLink = () => {
    const ta = bodyRef.current;
    const sel = ta ? ta.value.slice(ta.selectionStart, ta.selectionEnd) : '';
    setLink({ text: sel, url: '', blank: true });
    setLinkOpen(true);
  };
  const insertLink = () => {
    const text = link.text.trim() || link.url.trim();
    if (!link.url.trim()) return flash('Add a URL');
    const md = link.blank
      ? `<a href="${link.url.trim()}" target="_blank">${text}</a>`
      : `[${text}](${link.url.trim()})`;
    setLinkOpen(false);
    insertText(md);
  };

  /* ---- image modal ---- */
  const [imgOpen, setImgOpen] = useState(false);
  const [img, setImg] = useState({ mode: 'url', url: '', alt: '', full: true, data: '', name: '' });
  const fileRef = useRef(null);
  const openImage = () => {
    setImg({ mode: 'url', url: '', alt: '', full: true, data: '', name: '' });
    setImgOpen(true);
  };
  const readImgFile = (f) => {
    const r = new FileReader();
    r.onload = () => setImg((s) => ({ ...s, data: r.result, name: f.name }));
    r.readAsDataURL(f);
  };
  const insertImage = () => {
    const src = img.mode === 'url' ? img.url.trim() : img.data;
    if (!src) return flash(img.mode === 'url' ? 'Add an image URL' : 'Choose a file first');
    if (!img.alt.trim()) return flash('Add alt text');
    const md = img.full
      ? `\n<img src="${src}" alt="${img.alt.trim().replace(/"/g, '&quot;')}" style="width:100%" />\n`
      : `\n![${img.alt.trim()}](${src})\n`;
    setImgOpen(false);
    insertText(md);
  };

  /* ---- export modal ---- */
  const [exportOpen, setExportOpen] = useState(false);
  const built = useMemo(() => buildMarkdown(meta, faqs, appendFaq, body), [meta, faqs, appendFaq, body]);
  const missing = useMemo(() => validate(meta, body), [meta, body]);
  const filename = (meta.slug || 'post') + '.md';

  const download = (name, text) => {
    const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = name; document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
  };
  const copyMd = async () => {
    try { await navigator.clipboard.writeText(built); flash('Copied to clipboard'); }
    catch { flash('Copy failed'); }
  };

  /* ---- save to repo via API ---- */
  const [saving, setSaving] = useState(false);
  const saveToRepo = async (overwrite = false) => {
    const safe = slugify(meta.slug || meta.title);
    if (!safe) return flash('Need a slug first');
    setSaving(true);
    try {
      const res = await fetch(`/api/blog/${safe}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ markdown: built, overwrite }),
      });
      if (res.status === 409) {
        setSaving(false);
        if (window.confirm(`src/blog/${safe}.md already exists. Overwrite it?`)) {
          return saveToRepo(true);
        }
        return;
      }
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || `HTTP ${res.status}`);
      flash(`Saved → ${json.path}`);
      setStatus('Saved to repo');
    } catch (e) {
      flash('Save failed: ' + e.message);
    } finally {
      setSaving(false);
    }
  };

  /* ---- load existing ---- */
  const [loadOpen, setLoadOpen] = useState(false);
  const [slugs, setSlugs] = useState(null);
  const [loadErr, setLoadErr] = useState('');
  const [search, setSearch] = useState('');
  const openLoad = async () => {
    setLoadOpen(true); setLoadErr(''); setSlugs(null); setSearch('');
    try {
      const res = await fetch('/api/blog');
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to list');
      setSlugs(json.slugs || []);
    } catch (e) { setLoadErr(e.message); }
  };
  const restore = (data, content, fromFile) => {
    setMeta({
      title: data.title || '', slug: data.slug || slugify(data.title || ''),
      stitle: data.Stitle || '', description: data.description || '',
      keywords: data.keywords || '', date: data.date || '',
      author: data.author || '', authorUrl: data.authorUrl || '',
      readTime: data.readTime || '', image: data.image || '',
      imagephone: data.imagephone || '', alt: data.alt || '',
      canonical: data.canonicalUrl || '',
    });
    setFaqs((data.faqs && data.faqs.length) ? data.faqs : [{ question: '', answer: '' }]);
    // loaded posts often already contain a visible FAQ block — don't double it
    setAppendFaq(!fromFile);
    setSlugManual(true);
    setBody(content || '');
    setStatus(fromFile ? 'Loaded from repo' : 'Sample loaded');
  };
  const loadSlug = async (slug) => {
    try {
      const res = await fetch(`/api/blog/${slug}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to load');
      restore({ ...json.data, slug }, json.content, true);
      setLoadOpen(false);
      flash('Loaded ' + slug);
    } catch (e) { flash(e.message); }
  };

  /* ---- draft persistence (localStorage) ---- */
  const snapshot = () => JSON.stringify({ meta, faqs, appendFaq, body, slugManual });
  const saveDraft = () => {
    try {
      window.localStorage.setItem(DRAFT_KEY, snapshot());
      setStatus('Draft saved'); flash('Draft saved');
    } catch { flash('Could not save draft'); }
  };
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(DRAFT_KEY);
      if (raw) {
        const d = JSON.parse(raw);
        setMeta({ ...EMPTY, ...d.meta });
        setFaqs(d.faqs?.length ? d.faqs : [{ question: '', answer: '' }]);
        setAppendFaq(d.appendFaq !== false);
        setBody(d.body || '');
        setSlugManual(!!d.slugManual);
        setStatus('Draft loaded');
      }
    } catch { /* ignore */ }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const newPost = () => {
    if (status === 'Unsaved changes' && !window.confirm('Start a new post? Unsaved changes will be cleared.')) return;
    setMeta(EMPTY); setFaqs([{ question: '', answer: '' }]); setAppendFaq(true);
    setBody(''); setSlugManual(false); setStatus('Not saved');
  };

  /* ---- markdown components for faithful preview ---- */
  const mdComponents = useMemo(() => ({
    h1: ({ node, ...p }) => <h1 id={extractText(p.children)} {...p} />,
    h2: ({ node, ...p }) => <h2 id={extractText(p.children)} {...p} />,
    h3: ({ node, ...p }) => <h3 id={extractText(p.children)} {...p} />,
  }), []);

  const wc = wordCount(body);

  /* ---------------------------------------------------------------- */
  return (
    <div className="lbc">
      {/* top bar */}
      <div className="topbar">
        <div className="brand">
          <span className="mark">Learn<b>bay</b> Blog Composer</span>
          <span className="tag">markdown → src/blog/*.md</span>
        </div>
        <span className={'st ' + (status.includes('Saved') || status.includes('saved') || status.includes('Loaded') || status.includes('loaded') ? 'ok' : '')}>{status}</span>
        <button className="btn ghost" onClick={openLoad}>Load existing</button>
        <button className="btn ghost" onClick={newPost}>New</button>
        <button className="btn" onClick={saveDraft}>Save draft</button>
        <button className="btn primary" onClick={() => setExportOpen(true)}>Export / Save .md</button>
      </div>

      <div className="wrap">
        {/* LEFT */}
        <div className="pane meta">
          <div className="group">
            <div className="ghead">
              <h2 className="shead">Post details</h2>
              <p className="ssub">Becomes the YAML frontmatter at the top of the file.</p>
            </div>

            <div className="field">
              <label className="lab">Title <span className="req">*</span> <span className="hint">— shown as the H1</span></label>
              <input className="inp" value={meta.title} onChange={(e) => setField('title', e.target.value)} placeholder="8 Most Demanded Data Science Tools in 2026" />
            </div>

            <div className="field">
              <label className="lab">File slug <span className="req">*</span> <span className="hint">— /blogs/{meta.slug || 'slug'}</span></label>
              <input className="inp" value={meta.slug} onChange={(e) => onSlugEdit(e.target.value)} placeholder="8-most-demanded-data-science-tools" />
              <div className="cc">{slugManual ? 'Manual' : 'Auto from title · edit to override'}</div>
            </div>

            <div className="field">
              <label className="lab">SEO title (Stitle) <span className="hint">— tab / search result</span></label>
              <input className="inp" value={meta.stitle} onChange={(e) => setField('stitle', e.target.value)} placeholder="Top Data Science Tools You Should Learn | Learnbay" />
              <div className={'cc ' + (meta.stitle.length > 60 ? 'over' : '')}>{meta.stitle.length} chars · aim ≤ 60</div>
            </div>

            <div className="field">
              <label className="lab">Meta description <span className="hint">— search snippet</span></label>
              <textarea className="inp" rows={2} value={meta.description} onChange={(e) => setField('description', e.target.value)} placeholder="Discover the top 8 data science tools in 2026..." />
              <div className={'cc ' + (meta.description.length > 160 ? 'over' : '')}>{meta.description.length} chars · aim 150–160</div>
            </div>

            <div className="field">
              <label className="lab">Keywords <span className="hint">— comma separated</span></label>
              <textarea className="inp" rows={2} value={meta.keywords} onChange={(e) => setField('keywords', e.target.value)} placeholder="data science tools, data analytics tools, tableau" />
            </div>

            <div className="row2">
              <div className="field">
                <label className="lab">Author <span className="req">*</span></label>
                <input className="inp" value={meta.author} onChange={(e) => setField('author', e.target.value)} placeholder="Sonalisha Mohanty" />
              </div>
              <div className="field">
                <label className="lab">Author URL <span className="hint">— optional</span></label>
                <input className="inp" value={meta.authorUrl} onChange={(e) => setField('authorUrl', e.target.value)} placeholder="https://www.learnbay.co/" />
              </div>
            </div>

            <div className="row2">
              <div className="field">
                <label className="lab">Publish date <span className="req">*</span> <span className="hint">DD/MM/YYYY</span></label>
                <input className="inp" value={meta.date} onChange={(e) => setField('date', e.target.value)} placeholder="10/04/2026" />
              </div>
              <div className="field">
                <label className="lab">Read time</label>
                <div className="rt">
                  <input className="inp" value={meta.readTime} onChange={(e) => setField('readTime', e.target.value)} placeholder="7 mins" />
                  <button className="btn small" onClick={estimateRead} title="Estimate from body">Auto</button>
                </div>
              </div>
            </div>
            <p className="note">publishedDate (ISO) is generated automatically from the publish date.</p>
          </div>

          <div className="group">
            <div className="ghead"><h2 className="shead">Banner image</h2><p className="ssub">Hero image at the top of the post.</p></div>
            <div className="field">
              <label className="lab">Image URL <span className="req">*</span></label>
              <input className="inp" value={meta.image} onChange={(e) => setField('image', e.target.value)} placeholder="https://learnbay-s3.s3.us-east-2.amazonaws.com/.../banner.jpeg" />
            </div>
            <div className="field">
              <label className="lab">Mobile image URL <span className="hint">— optional, falls back to banner</span></label>
              <input className="inp" value={meta.imagephone} onChange={(e) => setField('imagephone', e.target.value)} placeholder="https://..." />
            </div>
            <div className="field">
              <label className="lab">Image alt text <span className="req">*</span></label>
              <textarea className="inp" rows={2} value={meta.alt} onChange={(e) => setField('alt', e.target.value)} placeholder="A banner image titled '8 Most Demanded Data Science Tools'..." />
            </div>
            <div className="field">
              <label className="lab">Canonical URL <span className="hint">— optional override</span></label>
              <input className="inp" value={meta.canonical} onChange={(e) => setField('canonical', e.target.value)} placeholder="https://www.learnbay.co/blogs/your-slug" />
            </div>
          </div>

          <div className="group">
            <div className="ghead">
              <div><h2 className="shead">FAQs</h2><p className="ssub">Feeds the FAQ JSON-LD schema.</p></div>
              <button className="btn small" onClick={addFaq}>+ Add FAQ</button>
            </div>
            {faqs.map((f, i) => (
              <div className="faq" key={i}>
                <div className="faqtop"><span className="faqn">FAQ {i + 1}</span><button className="x" onClick={() => removeFaq(i)} title="Remove">×</button></div>
                <input className="inp" value={f.question} onChange={(e) => setFaq(i, 'question', e.target.value)} placeholder="Question" />
                <textarea className="inp" rows={2} value={f.answer} onChange={(e) => setFaq(i, 'answer', e.target.value)} placeholder="Answer" style={{ marginTop: 8 }} />
              </div>
            ))}
            <label className="chk">
              <input type="checkbox" checked={appendFaq} onChange={(e) => { setAppendFaq(e.target.checked); setStatus('Unsaved changes'); }} />
              Also append a visible “FAQs” section to the body on export
            </label>
          </div>
        </div>

        {/* RIGHT */}
        <div className="pane bodyp">
          <div className="bhead">
            <div className="ghead">
              <div><h2 className="shead">Body</h2><p className="ssub">{wc} word{wc === 1 ? '' : 's'}</p></div>
              <div className="tabs">
                <button className={'tab ' + (tab === 'write' ? 'active' : '')} onClick={() => setTab('write')}>Write</button>
                <button className={'tab ' + (tab === 'preview' ? 'active' : '')} onClick={() => setTab('preview')}>Preview</button>
              </div>
            </div>
          </div>

          {tab === 'write' && (
            <div className="toolbar">
              <button className="tool mono" onClick={actions.h2} title="Heading 2 (section)">H2</button>
              <button className="tool mono" onClick={actions.h3} title="Heading 3">H3</button>
              <span className="div" />
              <button className="tool mono" onClick={actions.bold} title="Bold ⌘B">B</button>
              <button className="tool mono ital" onClick={actions.italic} title="Italic ⌘I">I</button>
              <span className="div" />
              <button className="tool" onClick={actions.link} title="Link ⌘K">🔗</button>
              <button className="tool" onClick={actions.image} title="Image">🖼</button>
              <span className="div" />
              <button className="tool mono" onClick={actions.ul} title="Bullet list">• —</button>
              <button className="tool mono" onClick={actions.ol} title="Numbered list">1.</button>
              <button className="tool mono" onClick={actions.quote} title="Quote">”</button>
              <button className="tool mono" onClick={actions.code} title="Inline code">&lt;/&gt;</button>
              <button className="tool mono" onClick={actions.hr} title="Divider">―</button>
            </div>
          )}

          <div className="escroll">
            {tab === 'write' ? (
              <textarea
                ref={bodyRef}
                className="bodyta"
                value={body}
                onChange={(e) => { setBody(e.target.value); setStatus('Unsaved changes'); }}
                onKeyDown={onBodyKey}
                placeholder="Write in Markdown. Use the toolbar, or type ## for a section heading.&#10;&#10;Raw HTML is allowed (rehype-raw): <b>bold</b>, <a href='...' target='_blank'>links</a>."
              />
            ) : (
              <div className="preview">
                <ReactMarkdown rehypePlugins={[rehypeRaw]} components={mdComponents}>
                  {body || '*Nothing to preview yet.*'}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* LINK MODAL */}
      {linkOpen && (
        <Overlay onClose={() => setLinkOpen(false)}>
          <div className="mhead"><h3>Insert link</h3><button className="x" onClick={() => setLinkOpen(false)}>×</button></div>
          <div className="mbody">
            <div className="field"><label className="lab">Link text</label><input className="inp" autoFocus value={link.text} onChange={(e) => setLink({ ...link, text: e.target.value })} placeholder="machine learning tool" /></div>
            <div className="field"><label className="lab">URL</label><input className="inp" value={link.url} onChange={(e) => setLink({ ...link, url: e.target.value })} placeholder="https://blog.learnbay.co/..." /></div>
            <label className="chk"><input type="checkbox" checked={link.blank} onChange={(e) => setLink({ ...link, blank: e.target.checked })} /> Open in new tab (raw &lt;a target="_blank"&gt;)</label>
          </div>
          <div className="mfoot"><button className="btn" onClick={() => setLinkOpen(false)}>Cancel</button><button className="btn primary" onClick={insertLink}>Insert link</button></div>
        </Overlay>
      )}

      {/* IMAGE MODAL */}
      {imgOpen && (
        <Overlay onClose={() => setImgOpen(false)}>
          <div className="mhead"><h3>Insert image</h3><button className="x" onClick={() => setImgOpen(false)}>×</button></div>
          <div className="mbody">
            <div className="seg">
              <button className={img.mode === 'url' ? 'on' : ''} onClick={() => setImg({ ...img, mode: 'url' })}>From URL</button>
              <button className={img.mode === 'file' ? 'on' : ''} onClick={() => setImg({ ...img, mode: 'file' })}>Upload file</button>
            </div>
            {img.mode === 'url' ? (
              <div className="field"><label className="lab">Image URL</label><input className="inp" autoFocus value={img.url} onChange={(e) => setImg({ ...img, url: e.target.value })} placeholder="https://learnbay-wb.s3.ap-south-1.amazonaws.com/.../image.jpg" /></div>
            ) : (
              <>
                <div className="dz" onClick={() => fileRef.current?.click()}
                  onDragOver={(e) => { e.preventDefault(); }}
                  onDrop={(e) => { e.preventDefault(); if (e.dataTransfer.files[0]) readImgFile(e.dataTransfer.files[0]); }}>
                  {img.data ? '✓ ' + img.name + ' ready' : 'Click to choose, or drop an image here'}
                  <input ref={fileRef} type="file" accept="image/*" hidden onChange={(e) => e.target.files[0] && readImgFile(e.target.files[0])} />
                </div>
                <p className="note warn">Uploaded files embed as base64 in the .md — bloats the file. For production, host on S3 and paste the URL.</p>
              </>
            )}
            <div className="field" style={{ marginTop: 14 }}><label className="lab">Alt text <span className="req">*</span></label><input className="inp" value={img.alt} onChange={(e) => setImg({ ...img, alt: e.target.value })} placeholder="Describe the image for SEO + accessibility" /></div>
            <label className="chk"><input type="checkbox" checked={img.full} onChange={(e) => setImg({ ...img, full: e.target.checked })} /> Full-width (raw &lt;img style="width:100%"&gt;)</label>
          </div>
          <div className="mfoot"><button className="btn" onClick={() => setImgOpen(false)}>Cancel</button><button className="btn primary" onClick={insertImage}>Insert image</button></div>
        </Overlay>
      )}

      {/* EXPORT MODAL */}
      {exportOpen && (
        <Overlay wide onClose={() => setExportOpen(false)}>
          <div className="mhead"><h3>Export Markdown</h3><button className="x" onClick={() => setExportOpen(false)}>×</button></div>
          <div className="mbody">
            <div className="fname">Saves as <code>{filename}</code> → <code>src/blog/</code></div>
            {missing.length > 0 && <p className="note warn" style={{ marginTop: 0 }}>Missing or invalid: {missing.join(', ')}. You can still export, but it may not render correctly.</p>}
            <pre className="exp">{built}</pre>
          </div>
          <div className="mfoot">
            <button className="btn" onClick={copyMd}>Copy</button>
            <button className="btn" onClick={() => download(filename, built)}>Download</button>
            <button className="btn primary" disabled={saving} onClick={() => saveToRepo(false)}>{saving ? 'Saving…' : 'Save to src/blog/'}</button>
          </div>
        </Overlay>
      )}

      {/* LOAD EXISTING MODAL */}
      {loadOpen && (
        <Overlay onClose={() => setLoadOpen(false)}>
          <div className="mhead"><h3>Load existing post</h3><button className="x" onClick={() => setLoadOpen(false)}>×</button></div>
          <div className="mbody">
            {loadErr && <p className="note warn" style={{ marginTop: 0 }}>{loadErr}</p>}
            {slugs === null && !loadErr && <p className="note">Loading…</p>}
            {slugs && (
              <>
                <input className="inp" placeholder="Filter…" value={search} onChange={(e) => setSearch(e.target.value)} style={{ marginBottom: 10 }} />
                <div className="slist">
                  {slugs.filter((s) => s.includes(search.toLowerCase())).map((s) => (
                    <button key={s} className="srow" onClick={() => loadSlug(s)}>{s}</button>
                  ))}
                  {slugs.filter((s) => s.includes(search.toLowerCase())).length === 0 && <p className="note">No matches.</p>}
                </div>
              </>
            )}
          </div>
          <div className="mfoot"><button className="btn" onClick={() => setLoadOpen(false)}>Close</button></div>
        </Overlay>
      )}

      {toast && <div className="toastbox">{toast}</div>}

      <style jsx>{`
        .lbc {
          --ink:#1a1c23; --ink-soft:#4a4f5c; --muted:#8a8f9c; --line:#e6e4dd;
          --line-strong:#d2cfc4; --paper:#faf9f5; --card:#fff; --blue:#2372bc;
          --blue-dark:#1b5b99; --blue-tint:#eef4fb; --warn:#b4690e; --ok:#2e7d4f;
          font-family:"Inter",system-ui,-apple-system,sans-serif; color:var(--ink);
          font-size:14px; line-height:1.5; background:var(--paper); min-height:100vh;
        }
        .lbc :global(*){ box-sizing:border-box; }
        .topbar{ position:sticky; top:0; z-index:30; display:flex; align-items:center; gap:12px;
          padding:12px 20px; background:rgba(250,249,245,.9); backdrop-filter:blur(8px);
          border-bottom:1px solid var(--line); }
        .brand{ display:flex; align-items:baseline; gap:10px; margin-right:auto; }
        .mark{ font-family:Georgia,"Times New Roman",serif; font-weight:600; font-size:18px; }
        .mark b{ color:var(--blue); }
        .tag{ font-size:11.5px; color:var(--muted); }
        .st{ font-size:11.5px; color:var(--muted); margin-right:4px; min-width:96px; text-align:right; }
        .st.ok{ color:var(--ok); }
        .btn{ border:1px solid var(--line-strong); background:var(--card); color:var(--ink-soft);
          padding:7px 13px; border-radius:8px; cursor:pointer; font-weight:500; font-family:inherit; white-space:nowrap;
          transition:border-color .15s,color .15s,background .15s; }
        .btn:hover{ border-color:var(--ink-soft); color:var(--ink); }
        .btn.primary{ background:var(--blue); border-color:var(--blue); color:#fff; }
        .btn.primary:hover{ background:var(--blue-dark); }
        .btn.primary:disabled{ opacity:.6; cursor:default; }
        .btn.ghost{ border-color:transparent; background:transparent; }
        .btn.ghost:hover{ background:#efece4; }
        .btn.small{ font-size:11px; padding:5px 10px; }

        .wrap{ display:grid; grid-template-columns:minmax(360px,460px) 1fr; height:calc(100vh - 57px); }
        .pane{ overflow-y:auto; height:100%; }
        .pane.meta{ border-right:1px solid var(--line); }
        .pane.bodyp{ background:var(--card); display:flex; flex-direction:column; }
        .group{ padding:18px 22px; border-bottom:1px solid var(--line); }
        .ghead{ display:flex; align-items:baseline; justify-content:space-between; margin-bottom:14px; gap:10px; }
        .shead{ font-family:Georgia,serif; font-weight:600; font-size:15px; margin:0; }
        .ssub{ font-size:11.5px; color:var(--muted); margin:2px 0 0; }
        .field{ margin-bottom:13px; }
        .lab{ display:block; font-size:11.5px; font-weight:600; color:var(--ink-soft); margin-bottom:5px; }
        .lab .hint{ font-weight:400; color:var(--muted); }
        .req{ color:var(--blue); }
        .inp{ width:100%; border:1px solid var(--line-strong); border-radius:8px; padding:8px 10px;
          background:var(--card); font-family:inherit; font-size:14px; color:var(--ink); transition:border-color .15s,box-shadow .15s; }
        .inp:focus{ outline:none; border-color:var(--blue); box-shadow:0 0 0 3px rgba(35,114,188,.12); }
        textarea.inp{ resize:vertical; line-height:1.55; }
        .row2{ display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        .rt{ display:flex; gap:6px; }
        .cc{ font-size:10.5px; color:var(--muted); margin-top:4px; text-align:right; }
        .cc.over{ color:var(--warn); }
        .note{ font-size:11.5px; color:var(--muted); margin-top:8px; line-height:1.5; }
        .note.warn{ color:var(--warn); }
        .chk{ display:flex; align-items:center; gap:8px; cursor:pointer; font-weight:500; font-size:12px; color:var(--ink-soft); }
        .chk input{ width:auto; }

        .faq{ border:1px solid var(--line); border-radius:10px; padding:12px; margin-bottom:10px; background:var(--card); }
        .faqtop{ display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
        .faqn{ font-size:11px; font-weight:700; color:var(--blue); }
        .x{ border:none; background:none; cursor:pointer; color:var(--muted); padding:2px 7px; border-radius:6px; font-size:17px; line-height:1; }
        .x:hover{ background:#f6ece9; color:#c0392b; }

        .bhead{ position:sticky; top:0; z-index:10; background:var(--card); padding:14px 24px 0; border-bottom:1px solid var(--line); }
        .bhead .ghead{ margin-bottom:12px; }
        .tabs{ display:flex; gap:4px; }
        .tab{ border:none; background:none; cursor:pointer; padding:8px 14px; font-weight:600; color:var(--muted);
          border-bottom:2px solid transparent; margin-bottom:-1px; font-family:inherit; font-size:14px; }
        .tab.active{ color:var(--blue); border-bottom-color:var(--blue); }
        .toolbar{ display:flex; flex-wrap:wrap; gap:3px; align-items:center; padding:8px 24px; border-bottom:1px solid var(--line); background:var(--paper); }
        .tool{ border:1px solid transparent; background:transparent; cursor:pointer; min-width:30px; height:30px; padding:0 7px;
          border-radius:7px; display:inline-flex; align-items:center; justify-content:center; color:var(--ink-soft); font-weight:600; font-family:inherit; }
        .tool:hover{ background:#fff; border-color:var(--line-strong); color:var(--ink); }
        .tool.mono{ font-family:"JetBrains Mono",ui-monospace,monospace; font-size:12px; }
        .tool.ital{ font-style:italic; }
        .div{ width:1px; height:20px; background:var(--line-strong); margin:0 4px; }
        .escroll{ flex:1; overflow-y:auto; }
        .bodyta{ width:100%; min-height:100%; border:none; outline:none; resize:none; padding:22px 26px;
          font-family:"JetBrains Mono",ui-monospace,monospace; font-size:13.5px; line-height:1.7; color:var(--ink); background:var(--card); display:block; }
        .preview{ padding:8px 30px 60px; max-width:760px; }
        .preview :global(h1){ font-size:2rem; color:var(--blue); line-height:1.25; }
        .preview :global(h2){ font-size:1.55rem; margin-top:1.8em; color:#333; line-height:1.25; }
        .preview :global(h3){ font-size:1.2rem; margin-top:1.2em; color:#333; }
        .preview :global(p), .preview :global(li){ font-size:1.02rem; line-height:1.8; color:#343434; }
        .preview :global(a){ color:var(--blue); font-weight:700; text-decoration:none; }
        .preview :global(a:hover){ text-decoration:underline; }
        .preview :global(img){ max-width:100%; border-radius:8px; margin:1em 0; }
        .preview :global(blockquote){ border-left:3px solid var(--blue); margin:1em 0; padding:.2em 1em; color:var(--ink-soft); background:var(--blue-tint); border-radius:0 8px 8px 0; }
        .preview :global(code){ background:#f0eee7; padding:.12em .4em; border-radius:4px; font-family:"JetBrains Mono",monospace; font-size:.9em; }
        .preview :global(hr){ border:none; border-top:1px solid var(--line-strong); margin:2em 0; }

        .mhead{ display:flex; align-items:center; justify-content:space-between; padding:16px 20px; border-bottom:1px solid var(--line); }
        .mhead h3{ margin:0; font-family:Georgia,serif; font-weight:600; font-size:16px; }
        .mbody{ padding:18px 20px; }
        .mfoot{ padding:14px 20px; border-top:1px solid var(--line); display:flex; gap:8px; justify-content:flex-end; }
        .seg{ display:flex; gap:6px; margin-bottom:14px; }
        .seg button{ flex:1; border:1px solid var(--line-strong); background:var(--card); padding:8px; border-radius:8px; cursor:pointer; font-weight:500; color:var(--ink-soft); font-family:inherit; }
        .seg button.on{ background:var(--blue-tint); border-color:var(--blue); color:var(--blue-dark); }
        .dz{ border:1.5px dashed var(--line-strong); border-radius:10px; padding:26px; text-align:center; color:var(--muted); cursor:pointer; }
        .dz:hover{ border-color:var(--blue); background:var(--blue-tint); color:var(--blue-dark); }
        .fname{ font-size:12.5px; margin-bottom:12px; }
        .fname code{ font-family:"JetBrains Mono",monospace; background:var(--blue-tint); color:var(--blue-dark); padding:4px 8px; border-radius:6px; }
        .exp{ font-family:"JetBrains Mono",monospace; font-size:12px; line-height:1.55; background:var(--paper); border:1px solid var(--line);
          border-radius:10px; padding:14px; overflow:auto; max-height:50vh; white-space:pre-wrap; word-break:break-word; margin:0; color:var(--ink); }
        .slist{ max-height:46vh; overflow-y:auto; display:flex; flex-direction:column; gap:4px; }
        .srow{ text-align:left; border:1px solid var(--line); background:var(--card); padding:9px 12px; border-radius:8px; cursor:pointer;
          font-family:"JetBrains Mono",monospace; font-size:12.5px; color:var(--ink-soft); }
        .srow:hover{ border-color:var(--blue); color:var(--blue-dark); background:var(--blue-tint); }
        .toastbox{ position:fixed; bottom:22px; left:50%; transform:translateX(-50%); background:var(--ink); color:#fff;
          padding:10px 18px; border-radius:999px; font-size:12.5px; font-weight:500; z-index:80; }

        @media (max-width:920px){
          .wrap{ grid-template-columns:1fr; height:auto; }
          .pane{ height:auto; overflow:visible; }
          .pane.meta{ border-right:none; border-bottom:1px solid var(--line); }
          .pane.bodyp{ min-height:70vh; }
          .bodyta{ min-height:420px; }
        }
      `}</style>
    </div>
  );
}

/* small overlay wrapper */
function Overlay({ children, wide, onClose }) {
  return (
    <div className="ov" onClick={(e) => { if (e.target.classList.contains('ov')) onClose(); }}>
      <div className={'modal' + (wide ? ' wide' : '')}>{children}</div>
      <style jsx>{`
        .ov{ position:fixed; inset:0; background:rgba(26,28,35,.42); z-index:50; display:flex;
          align-items:center; justify-content:center; padding:20px; }
        .modal{ background:#fff; border-radius:14px; box-shadow:0 10px 40px rgba(20,22,30,.18);
          width:100%; max-width:560px; max-height:86vh; overflow:auto; border:1px solid #e6e4dd; }
        .modal.wide{ max-width:760px; }
      `}</style>
    </div>
  );
}
