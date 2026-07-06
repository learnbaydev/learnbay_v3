// On-demand ISR helper. Regenerates the affected blog page + the index so
// publish/unpublish is reflected without a full rebuild. Best-effort: a target
// that isn't statically generated (or a transient error) must not fail the
// workflow transition that triggered it.

export async function revalidateBlog(res, slug) {
  const targets = ['/blogs'];
  if (slug) targets.push(`/blogs/${slug}`);
  const results = {};
  for (const target of targets) {
    try {
      await res.revalidate(target);
      results[target] = 'ok';
    } catch (err) {
      results[target] = `skipped: ${err?.message || err}`;
      console.warn(`[revalidate] ${target}:`, err?.message || err);
    }
  }
  return results;
}
