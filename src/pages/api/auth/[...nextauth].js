import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn(e) {
      console.log('e', e)
      // 存用户数据到用户表
      return true
    },
  },
}
export default NextAuth(authOptions)
