import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' });

export default defineConfig({
    schema: './db/schema.ts',
    out: './supabase/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: `${process.env.DATABASE_URL!}`,
        // ssl: "verify-full",
        database: 'postgres',
        port: 6543,
        host: process.env.DATABASE_HOST!,
        user: process.env.DATABASE_USER!,
        password: process.env.DATABASE_PASSWORD!,
    },
});
