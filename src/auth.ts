import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// TODO: Remplacer par PrismaAdapter quand la DB est connectée

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        // TODO: Vérifier dans la DB
        // - Chercher user par email
        // - Comparer passwordHash avec bcrypt
        // - Si twoFactorEnabled, vérifier le code TOTP
        // - Retourner user ou null
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 8 * 60 * 60, // 8h
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.twoFactorEnabled = (user as any).twoFactorEnabled;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
        (session.user as any).twoFactorEnabled = token.twoFactorEnabled;
      }
      return session;
    },
  },
});