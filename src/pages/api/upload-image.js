// POST /api/upload-image  (ADMIN/BLOGGER)
//   body: { data: <base64 or data-URL>, filename }
//   -> converts to WebP (sharp), uploads to S3, returns { url }
//
// Bloggers pick a file; the client base64-encodes it and posts here. Conversion
// happens server-side so output is always optimized WebP regardless of source.

import sharp from 'sharp';
import { requireRole, ROLES } from '@/lib/auth';
import { s3Configured, uploadBuffer, keyForImage } from '@/lib/s3';

// Allow reasonably large source images (base64 inflates ~33%).
export const config = { api: { bodyParser: { sizeLimit: '15mb' } } };

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed.' });
  }
  if (!s3Configured()) {
    return res.status(500).json({ error: 'Image upload is not configured (missing S3 / AWS env).' });
  }

  const { data, filename } = req.body || {};
  if (!data) return res.status(400).json({ error: 'No image data provided.' });

  try {
    const base64 = String(data).replace(/^data:[^;]+;base64,/, '');
    const input = Buffer.from(base64, 'base64');
    if (!input.length) return res.status(400).json({ error: 'Empty image.' });

    // .rotate() honors EXIF orientation before stripping metadata.
    const webp = await sharp(input).rotate().webp({ quality: 82 }).toBuffer();
    const key = keyForImage(filename || 'image');
    const url = await uploadBuffer(webp, key, 'image/webp');
    return res.status(200).json({ url });
  } catch (err) {
    return res.status(500).json({ error: `Upload failed: ${err.message}` });
  }
}

export default requireRole([ROLES.ADMIN, ROLES.BLOGGER], handler);
