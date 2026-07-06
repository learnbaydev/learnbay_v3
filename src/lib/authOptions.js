// NextAuth configuration, kept in lib/ so both the API route
// (src/pages/api/auth/[...nextauth].js) and the server-side session helpers
// (src/lib/auth.js) can import it without a circular dependency.
//
// Two providers, one users collection:
//   - Credentials: email + bcrypt password.
//   - Google: OAuth, but sign-in is DENIED unless the email already exists in
//     `users` with active:true (onboarding is admin-provisioned; no public
//     signup).
// JWT session strategy is required because the Credentials provider cannot use
// database sessions. Role/userId are injected into the token and surfaced on the
// session so pages/APIs can authorize.

import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import bcrypt from 'bcryptjs';
import { usersCollection } from '@/lib/posts';

async function findActiveUserByEmail(email) {
  if (!email) return null;
  const users = await usersCollection();
  return users.findOne({ email: String(email).toLowerCase(), active: true });
}

export const authOptions = {
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: '/login' },
  providers: [
    CredentialsProvider({
      name: 'Email and password',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await findActiveUserByEmail(credentials?.email);
        if (!user || !user.passwordHash) return null;
        const ok = await bcrypt.compare(credentials.password || '', user.passwordHash);
        if (!ok) return null;
        return {
          id: String(user._id),
          email: user.email,
          name: user.name || user.email,
          role: user.role,
        };
      },
    }),
    ...(process.env.GOOGLE_CLIENT_ID
      ? [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          }),
        ]
      : []),
  ],
  callbacks: {
    // Gate Google sign-in to pre-provisioned users. Credentials already
    // validated in authorize().
    async signIn({ account, user }) {
      if (account?.provider === 'google') {
        return Boolean(await findActiveUserByEmail(user?.email));
      }
      return true;
    },
    // Attach role/userId to the token on initial sign-in (both providers).
    async jwt({ token, user }) {
      if (user?.role && user?.id) {
        token.role = user.role;
        token.userId = user.id;
        token.name = user.name;
      } else if (!token.role && token.email) {
        const dbUser = await findActiveUserByEmail(token.email);
        if (dbUser) {
          token.role = dbUser.role;
          token.userId = String(dbUser._id);
          token.name = dbUser.name || dbUser.email;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role || null;
        session.user.userId = token.userId || null;
        session.user.name = token.name || session.user.name;
      }
      return session;
    },
  },
};

export default authOptions;
