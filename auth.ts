import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { db } from "./db"
import Resend from "next-auth/providers/resend"
import { accounts, sessions, users, verificationTokens } from "./db/schema"

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
    session: { strategy: "jwt" },
})