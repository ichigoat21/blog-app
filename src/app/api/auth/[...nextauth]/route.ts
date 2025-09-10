import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dotenv from "dotenv"

dotenv.config()

const handler = NextAuth({
    providers: [
        CredentialsProvider({
          name: "Admin Login",
          credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            const username = credentials?.username;
            const password = credentials?.password
      
            if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
                return { id: "1", name: "Admin", role: "admin" };
            } else {
              return null
            }
          }
        })
      ]
})


export {handler as GET, handler as POST}