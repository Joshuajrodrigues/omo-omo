import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { sql } from 'drizzle-orm';
config({ path: '.env' });

const client = postgres(process.env.DATABASE_URL!, {
    prepare: false,
});
export const db = drizzle(client);

