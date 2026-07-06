// One-time bootstrap: create the first ADMIN so there's someone to log in and
// provision the rest. Run manually:
//
//   SEED_ADMIN_EMAIL=you@learnbay.co SEED_ADMIN_PASSWORD='...' node scripts/seed-admin.mjs
//
// or put those in .env.local and run `node scripts/seed-admin.mjs`.
// Idempotent: re-running updates the password/role for that email.

import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

dotenv.config({ path: '.env' });
dotenv.config({ path: '.env.local', override: true });

const { MONGODB_URI, SEED_ADMIN_EMAIL, SEED_ADMIN_PASSWORD } = process.env;

if (!MONGODB_URI) {
  console.error('MONGODB_URI is not set.');
  process.exit(1);
}
if (!SEED_ADMIN_EMAIL || !SEED_ADMIN_PASSWORD) {
  console.error('Set SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD.');
  process.exit(1);
}

const email = SEED_ADMIN_EMAIL.toLowerCase();
const client = new MongoClient(MONGODB_URI);

try {
  await client.connect();
  const db = client.db('learnbay');
  const users = db.collection('users');
  const posts = db.collection('posts');

  await users.createIndex({ email: 1 }, { unique: true });
  await posts.createIndex({ slug: 1 }, { unique: true });
  await posts.createIndex({ status: 1, updatedAt: -1 });
  await posts.createIndex({ authorId: 1, status: 1 });

  const passwordHash = await bcrypt.hash(SEED_ADMIN_PASSWORD, 10);
  const now = new Date();
  await users.updateOne(
    { email },
    {
      $set: { email, passwordHash, role: 'ADMIN', active: true, provider: 'local', updatedAt: now },
      $setOnInsert: { name: 'Admin', createdAt: now },
    },
    { upsert: true }
  );

  console.log(`✅ ADMIN ready: ${email}`);
  console.log('   Indexes ensured on users + posts.');
} catch (err) {
  console.error('Seed failed:', err.message);
  process.exitCode = 1;
} finally {
  await client.close();
}
