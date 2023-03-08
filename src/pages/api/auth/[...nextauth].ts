import NextAuth from "next-auth";
import providers from "next-auth/providers";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
};
export default NextAuth(authOptions);
