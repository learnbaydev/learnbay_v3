// The DB <-> file handoff that makes "published == a .md file exists" true.
//
// publish:   working DB doc  -> write src/blog/<slug>.md, mark DB doc published
// unpublish: src/blog/<slug>.md -> DB doc (status unpublished), delete the file
//
// Durability note (per plan §9): we KEEP the DB doc marked `published` rather
// than deleting it, so the .md is a regenerable artifact — a redeploy that wipes
// runtime-written files can be healed from the DB. The published SET consumed by
// the renderer/index/sitemap is still "which .md files exist", so this retention
// changes nothing publicly.

import {
  STATUS,
  postsCollection,
  findPostBySlug,
  readPublished,
  writePublishedFile,
  deletePublishedFile,
  publishedExists,
} from '@/lib/posts';
import { istDateDDMMYYYY } from '@/lib/dateIST';

// Ordering matters: write the file first (the public artifact), then update the
// DB. If the DB update throws, we roll the file back so the two stores can't
// disagree.
export async function publishPost(post) {
  if (!post?.slug) throw new Error('Post has no slug.');
  const existedBefore = publishedExists(post.slug);

  // Publish date is set automatically in IST on FIRST publish; a republish
  // preserves the original date so an unpublish→publish round-trip is lossless.
  const publishedDate = post.publishedDate || istDateDDMMYYYY();
  const stamped = {
    ...post,
    publishedDate,
    date: post.date || publishedDate,
    // Mobile image falls back to the cover image so the .md always has both.
    imagephone: post.imagephone || post.image,
  };

  writePublishedFile(stamped);
  try {
    const posts = await postsCollection();
    await posts.updateOne(
      { _id: post._id },
      {
        $set: {
          status: STATUS.PUBLISHED,
          publishedDate,
          date: stamped.date,
          publishedAt: new Date(),
          updatedAt: new Date(),
        },
      }
    );
  } catch (err) {
    if (!existedBefore) deletePublishedFile(post.slug); // rollback new file
    throw err;
  }
  return { slug: post.slug, url: `/blogs/${post.slug}` };
}

// Reverse the handoff. Works for both CMS posts (DB doc exists) and legacy
// posts that only ever existed as a file.
export async function unpublishPost(slug, user) {
  const file = readPublished(slug);
  if (!file) throw new Error(`No published file for "${slug}".`);

  const posts = await postsCollection();
  const existing = await findPostBySlug(slug);
  const now = new Date();

  if (existing) {
    // Preserve workflow metadata; refresh content from the file in case it was
    // edited on disk, and flip to unpublished.
    await posts.updateOne(
      { _id: existing._id },
      {
        $set: {
          status: STATUS.UNPUBLISHED,
          content: file.content,
          ...file.frontmatter,
          unpublishedAt: now,
          updatedAt: now,
        },
      }
    );
  } else {
    // Legacy file with no DB doc — rehydrate one.
    await posts.insertOne({
      slug,
      status: STATUS.UNPUBLISHED,
      ...file.frontmatter,
      content: file.content,
      authorId: user?.userId || null,
      reviewerId: user?.userId || null,
      comments: [],
      revisions: [],
      version: 1,
      migratedFrom: `${slug}.md`,
      createdAt: now,
      updatedAt: now,
      unpublishedAt: now,
    });
  }

  // Only remove the file once the DB reflects the unpublished state.
  deletePublishedFile(slug);
  return { slug };
}
