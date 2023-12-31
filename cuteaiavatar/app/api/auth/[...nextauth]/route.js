import User from "@/models/User";
import connect from "@/utils/db";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id:"credentials",
      name:"Credentials",
      async authorize(credentials) {

        await connect();

        try {
          const user = await User.findOne({email: credentials.email});

          if (user) {
            // check password
            const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

            if (isPasswordValid)
              return user;
            else
              throw new Error("Invalid credentials");

          } else {
            throw new Error("User not found");
          }

        } catch (error) {
          throw new Error(error.message);
        }
      }}),
    ],
    pages: {
      error: "/dashboard/login"
    }
});

export {handler as GET, handler as POST};