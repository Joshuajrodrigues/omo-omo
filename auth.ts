import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { db } from "./db"
import Resend from "next-auth/providers/resend"
import { accounts, sessions, users, verificationTokens } from "./db/schema"
import { getUserRole } from "./actions/users"
import { AdapterUser } from "next-auth/adapters"
import { IRole } from "./actions/roles"

declare module 'next-auth' {
    interface Session {
        user: AdapterUser & {
            roles?: IRole; // Adjust the type as needed
        };
    }
}
const combinedProviders = [
    ...authConfig.providers,
    Resend({
        from: 'omoomo@joshuarodrigues.dev',
    }),
];
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: combinedProviders,
    adapter: DrizzleAdapter(db, {
        usersTable: users,
        accountsTable: accounts,
        sessionsTable: sessions,
        verificationTokensTable: verificationTokens,
    }),
    callbacks: {
        async session({ session, token }) {
            const roles = await getUserRole({ userId: token.sub! })
            session.user.roles = roles;
            return session;
        }
    },
    session: { strategy: "jwt" },
})