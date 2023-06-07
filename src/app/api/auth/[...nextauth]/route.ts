import { Session } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: { label: "Email", type: "text", placeholder: "jsmith@prova.it" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXT_FRONTEND_API}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            identifier: credentials?.identifier,
            password: credentials?.password
          })
        });
      
        const user = await res.json();
        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user:any }) {
      return {
        ...token,
        ...user
      }
    },
    async session({ session, token }: { session:Session, token:any}) {
      session.user = {
        id: token.user.id,
        username: token.user.username,
        email: token.user.email,
        accessToken: token.jwt
      }

      return session;
    }
  }
})

export { handler as GET, handler as POST };