import NextAuth, { User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

interface SingInProps {
  user: User;
}

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn({ user }: SingInProps) {
      try {
        console.log(user);
        return true;
      } catch {
        return false;
      }
    },
  },
});
