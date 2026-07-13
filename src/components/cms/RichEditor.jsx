// RichEditor — a Notion/Word-style WYSIWYG built on TipTap. Formatting renders
// inline as you type (no separate preview). Content round-trips to MARKDOWN via
// tiptap-markdown, so it stays compatible with the .md storage, the TOC, and the
// SEO renderer. Tables/images/links are supported; for nofollow links or exotic
// raw HTML, authors can flip to "Source" mode in the parent editor.
//
// Rendered client-only (dynamic import with ssr:false) — TipTap needs the DOM.

import { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableHeader from '@tiptap/extension-table-header';
import TableCell from '@tiptap/extension-table-cell';
import { Markdown } from 'tiptap-markdown';

export default function RichEditor({ value, onChange, onUpload, onError, editable = true }) {
  const editor = useEditor({
    editable,
    immediatelyRender: false, // required for Next SSR to avoid hydration mismatch
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false, autolink: true, HTMLAttributes: { rel: 'noopener noreferrer', target: '_blank' } }),
      Image.configure({ inline: false }),
      Placeholder.configure({ placeholder: 'Write your post… paste a table from Sheets, or use the toolbar.' }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      Markdown.configure({ html: true, tightLists: true, linkify: false, breaks: false }),
    ],
    content: value || '',
    onUpdate: ({ editor: ed }) => {
      onChange?.(ed.storage.markdown.getMarkdown());
    },
  });

  useEffect(() => {
    if (editor) editor.setEditable(editable);
  }, [editable, editor]);

  if (!editor) return <div style={S.loading}>Loading editor…</div>;

  async function pickImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      try {
        const url = await onUpload(file);
        const alt = window.prompt('Alt text for this image (SEO/accessibility):', '') || '';
        editor.chain().focus().setImage({ src: url, alt }).run();
      } catch (err) {
        onError?.(err.message);
      }
    };
    input.click();
  }

  function setLink() {
    const prev = editor.getAttributes('link').href || '';
    const url = window.prompt('Link URL:', prev);
    if (url === null) return;
    if (url === '') return editor.chain().focus().unsetLink().run();
    const nofollow = window.confirm('nofollow this link?  OK = nofollow, Cancel = normal (dofollow).');
    const rel = nofollow ? 'nofollow noopener noreferrer' : 'noopener noreferrer';
    editor.chain().focus().extendMarkRange('link').setLink({ href: url, rel, target: '_blank' }).run();
  }

  const inTable = editor.isActive('table');
  const B = ({ cmd, active, title, children }) => (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()}
      onClick={cmd}
      title={title}
      style={{ ...S.btn, ...(active ? S.btnActive : {}) }}
    >
      {children}
    </button>
  );

  return (
    <div className="lb-rich" style={S.wrap}>
      <RichStyles />
      {editable && (
        <div style={S.toolbar}>
          <B cmd={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')} title="Bold"><b>B</b></B>
          <B cmd={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')} title="Italic"><i>I</i></B>
          <B cmd={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive('strike')} title="Strikethrough"><s>S</s></B>
          <B cmd={() => editor.chain().focus().toggleCode().run()} active={editor.isActive('code')} title="Inline code">{'<>'}</B>
          <span style={S.sep} />
          <B cmd={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })} title="Heading 2">H2</B>
          <B cmd={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive('heading', { level: 3 })} title="Heading 3">H3</B>
          <B cmd={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')} title="Bullet list">• List</B>
          <B cmd={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive('orderedList')} title="Numbered list">1. List</B>
          <B cmd={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive('blockquote')} title="Quote">❝</B>
          <B cmd={() => editor.chain().focus().toggleCodeBlock().run()} active={editor.isActive('codeBlock')} title="Code block">Code</B>
          <B cmd={() => editor.chain().focus().setHorizontalRule().run()} title="Divider">— HR</B>
          <span style={S.sep} />
          <B cmd={setLink} active={editor.isActive('link')} title="Link">🔗</B>
          <B cmd={pickImage} title="Image">🖼️</B>
          <B cmd={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()} title="Insert table">▦ Table</B>
          {inTable && (
            <>
              <span style={S.sep} />
              <B cmd={() => editor.chain().focus().addColumnAfter().run()} title="Add column">+Col</B>
              <B cmd={() => editor.chain().focus().addRowAfter().run()} title="Add row">+Row</B>
              <B cmd={() => editor.chain().focus().deleteColumn().run()} title="Delete column">−Col</B>
              <B cmd={() => editor.chain().focus().deleteRow().run()} title="Delete row">−Row</B>
              <B cmd={() => editor.chain().focus().deleteTable().run()} title="Delete table">✕ Table</B>
            </>
          )}
        </div>
      )}
      <EditorContent editor={editor} />
    </div>
  );
}

// Doc-like styling for the editing surface, roughly matching the published blog.
function RichStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
      .lb-rich .ProseMirror { min-height: 420px; padding: 24px 28px; background:#fff; border:1px solid #e5e7eb; border-top:none; border-radius:0 0 8px 8px; outline:none; font-family:"Segoe UI",system-ui,sans-serif; color:#343434; line-height:2rem; }
      .lb-rich .ProseMirror:focus { border-color:#c9d6ea; }
      .lb-rich .ProseMirror > * + * { margin-top: 0.85em; }
      .lb-rich .ProseMirror h1 { font-size:2rem; color:#2372bc; font-weight:700; }
      .lb-rich .ProseMirror h2 { font-size:1.8rem; color:#333; margin-top:1.4em; }
      .lb-rich .ProseMirror h3 { font-size:1.4rem; color:#333; }
      .lb-rich .ProseMirror p { font-size:1.15rem; }
      .lb-rich .ProseMirror a { color:#2372bc; font-weight:700; }
      .lb-rich .ProseMirror ul, .lb-rich .ProseMirror ol { padding-left:1.4rem; }
      .lb-rich .ProseMirror li { padding:0.2rem 0; }
      .lb-rich .ProseMirror blockquote { border-left:3px solid #2372bc; padding-left:14px; color:#555; }
      .lb-rich .ProseMirror img { max-width:100%; height:auto; border-radius:6px; }
      .lb-rich .ProseMirror pre { background:#0d1117; color:#e6edf3; padding:14px; border-radius:8px; overflow:auto; }
      .lb-rich .ProseMirror code { background:#f0f2f5; padding:2px 5px; border-radius:4px; font-size:0.95em; }
      .lb-rich .ProseMirror table { border-collapse:collapse; width:100%; margin:20px 0; font-family:Arial,sans-serif; }
      .lb-rich .ProseMirror th, .lb-rich .ProseMirror td { border:1px solid #000; padding:12px; position:relative; }
      .lb-rich .ProseMirror th { background:#f5f5f5; text-align:left; }
      .lb-rich .ProseMirror .selectedCell:after { background:rgba(35,114,188,0.12); content:""; position:absolute; inset:0; pointer-events:none; }
      .lb-rich .ProseMirror p.is-editor-empty:first-child::before { content:attr(data-placeholder); color:#aab; float:left; height:0; pointer-events:none; }
    `,
      }}
    />
  );
}

const S = {
  wrap: { border: 'none' },
  loading: { padding: 24, color: '#888', border: '1px solid #e5e7eb', borderRadius: 8, background: '#fff' },
  toolbar: { display: 'flex', flexWrap: 'wrap', gap: 4, alignItems: 'center', padding: 8, background: '#f7f8fa', border: '1px solid #e5e7eb', borderRadius: '8px 8px 0 0', position: 'sticky', top: 0, zIndex: 2 },
  btn: { minWidth: 30, padding: '6px 9px', background: '#fff', border: '1px solid #d8dde5', borderRadius: 5, fontSize: 13, cursor: 'pointer', lineHeight: 1 },
  btnActive: { background: '#2372bc', color: '#fff', borderColor: '#2372bc' },
  sep: { width: 1, alignSelf: 'stretch', background: '#dde2e9', margin: '0 3px' },
};
