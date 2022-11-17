import { query } from 'faunadb';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import { fauna } from '../../../services/fauna';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user'
    }),
    // ...add more providers here
  ],
  jwt: {
    signinKey: process.env.SIGNIN_KEY
  },
  callbacks: {
    async signIn(user, account, profile) {
      const { user: { email } } = user;
      
      try {
        await fauna.query(
          query.Create(
            query.Collection('users'),
            {
              data: { email }
            }
          )
        )

        return true;
      } catch {
        return false;
      }
    }
  }
}
export default NextAuth(authOptions)