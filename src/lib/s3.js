// S3 upload helper for blog images. Reuses your existing AWS creds
// (AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY) and defaults to the same bucket/
// region as uploadS3.mjs. Everything is overridable via env so you can point it
// at a different bucket / CloudFront distribution.
//
// Env:
//   AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY   (required)
//   BLOG_S3_BUCKET       default "learnbay-s3"
//   BLOG_S3_REGION       default "us-east-2"
//   BLOG_S3_PREFIX       default "blog/uploads/"   (key prefix)
//   BLOG_S3_PUBLIC_BASE  default "https://<bucket>.s3.<region>.amazonaws.com"
//                        set to your CloudFront URL for public delivery

import AWS from 'aws-sdk';
import { slugify } from '@/lib/markdown';

const BUCKET = process.env.BLOG_S3_BUCKET || 'learnbay-s3';
const REGION = process.env.BLOG_S3_REGION || 'us-east-2';
const PREFIX = (process.env.BLOG_S3_PREFIX || 'blog/uploads/').replace(/^\/+/, '');
const PUBLIC_BASE = (
  process.env.BLOG_S3_PUBLIC_BASE || `https://${BUCKET}.s3.${REGION}.amazonaws.com`
).replace(/\/+$/, '');

export function s3Configured() {
  return Boolean(process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY && BUCKET);
}

let cached;
function client() {
  if (cached) return cached;
  cached = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: REGION,
  });
  return cached;
}

// Build a collision-resistant, human-readable key for an uploaded image.
export function keyForImage(filename = 'image') {
  const base = slugify(String(filename).replace(/\.[^.]+$/, '')) || 'image';
  const rand = Math.random().toString(36).slice(2, 8);
  return `${PREFIX}${base}-${Date.now()}-${rand}.webp`;
}

export function publicUrl(key) {
  return `${PUBLIC_BASE}/${key}`;
}

// Upload a buffer and return its public URL.
export async function uploadBuffer(buffer, key, contentType = 'image/webp') {
  const params = {
    Bucket: BUCKET,
    Key: key,
    Body: buffer,
    ContentType: contentType,
    CacheControl: 'public, max-age=31536000, immutable',
  };
  // Optional: set an object ACL (e.g. "public-read") if your bucket has ACLs
  // ENABLED (Object Ownership = "Bucket owner preferred"). Leave BLOG_S3_ACL
  // unset when serving via CloudFront or a bucket policy (the recommended paths).
  if (process.env.BLOG_S3_ACL) params.ACL = process.env.BLOG_S3_ACL;
  await client().upload(params).promise();
  return publicUrl(key);
}
