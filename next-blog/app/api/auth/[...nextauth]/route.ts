import NextAuth, { Account, User } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from '@prisma/client';
import { AdapterUser } from "next-auth/adapters";

const prisma = new PrismaClient();

const handler = NextAuth({
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      allowDangerousEmailAccountLinking: true,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) {
        token.id = user.id;
      }
      return token;
    },
    async signIn({
      user,
      account,
      profile,
    }: {
      user: User | AdapterUser;
      account: Account | null;
      profile?: any;
    }) {
      let imageUrl;

      if (account?.provider === 'google') {
        imageUrl = profile.image;
      } else if (account?.provider === 'github') {
        imageUrl = profile.avatar_url;
      }

      if (imageUrl) {
        await prisma.user.update({
          where: { id: parseInt(user.id) },
          data: { image: imageUrl },
        });
      }

      return true;
    },
  },
  secret: process.env.NEXTAUTH_URLSecret as string,
  debug: true,
});

export { handler as GET, handler as POST };
