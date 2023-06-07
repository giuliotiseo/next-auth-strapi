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
      
        const { user } = await res.json();
        console.log('Fammi vedere sto user', user);

        if (user) {
          return {
            ...user,
            name: user.username,
          }
        } else {
          return null
        }
      }
    })
  ],
})

export { handler as GET, handler as POST };