import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const { handlers, auth } = NextAuth({
  providers: [
    Google({
      profile(profile) {
        return { role: profile.role ?? "user", ... }
      },
    })
  ],
})