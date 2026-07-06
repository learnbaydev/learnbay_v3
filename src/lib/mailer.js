// Shared mailer for editorial notifications.
//
// Extracted from the duplicated transport in
// src/pages/api/Database/{emailConfirmation,emailInvoice}.js so the CMS reuses
// the same Gmail SMTP setup. All sends are best-effort: a mail failure must not
// break the workflow transition that triggered it — callers log and continue.

import nodemailer from 'nodemailer';

const FROM = 'admissions@learnbay.co';
const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.learnbay.co';

let cached;
function getTransport() {
  if (cached) return cached;
  cached = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    secure: true,
  });
  return cached;
}

// Low-level send. Resolves to true on success, false on failure (never throws).
export async function sendMail({ to, subject, html }) {
  if (!to) return false;
  try {
    await getTransport().sendMail({ from: FROM, to, subject, html });
    return true;
  } catch (err) {
    console.error('[mailer] send failed:', err?.message || err);
    return false;
  }
}

function wrap(title, bodyHtml) {
  return `<div style="font-family:system-ui,sans-serif;max-width:560px">
    <h2 style="color:#2372bc">${title}</h2>
    ${bodyHtml}
    <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
    <p style="color:#888;font-size:12px">Learnbay Blog CMS</p>
  </div>`;
}

// A blogger submitted a post for review — notify reviewer(s)/admins.
export function notifySubmitted({ to, postTitle, authorName, reviewUrl }) {
  return sendMail({
    to,
    subject: `[Blog review] "${postTitle}" submitted by ${authorName}`,
    html: wrap('A post is awaiting review', `
      <p><strong>${authorName}</strong> submitted <strong>${postTitle}</strong> for review.</p>
      <p><a href="${SITE}${reviewUrl}">Open the review queue &rarr;</a></p>`),
  });
}

// An admin requested changes — notify the author with the comment.
export function notifyChangesRequested({ to, postTitle, reviewerName, comment, editUrl }) {
  return sendMail({
    to,
    subject: `[Blog] Changes requested on "${postTitle}"`,
    html: wrap('Changes requested', `
      <p><strong>${reviewerName}</strong> requested changes on <strong>${postTitle}</strong>:</p>
      <blockquote style="border-left:3px solid #2372bc;padding-left:12px;color:#444">${comment || ''}</blockquote>
      <p><a href="${SITE}${editUrl}">Edit your post &rarr;</a></p>`),
  });
}

// An admin accepted & published — notify the author.
export function notifyPublished({ to, postTitle, slug }) {
  return sendMail({
    to,
    subject: `[Blog] "${postTitle}" is published 🎉`,
    html: wrap('Your post is live', `
      <p><strong>${postTitle}</strong> has been approved and published.</p>
      <p><a href="${SITE}/blogs/${slug}">View it live &rarr;</a></p>`),
  });
}
