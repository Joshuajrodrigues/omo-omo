import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { db } from "./db"
import Resend from "next-auth/providers/resend"

const combinedProviders = [
    ...authConfig.providers,
    Resend({
        from: 'omoomo@joshuarodrigues.dev',
    }),
];
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: combinedProviders,
    adapter: DrizzleAdapter(db),
    session: { strategy: "jwt" },
})