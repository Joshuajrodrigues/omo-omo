import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { sql } from 'drizzle-orm';
config({ path: '.env' });

const client = postgres(process.env.DATABASE_URL!, {
    prepare: false,
});
export const db = drizzle(client);

async function createTrigger() {

    await db.execute(sql`
        
         -- Ensure the "normie" role exists
            INSERT INTO roles (name, isBaseRole) VALUES ('normie', TRUE) ON CONFLICT (name) DO NOTHING;
        -- Create a function to insert the default role
            CREATE OR REPLACE FUNCTION assign_default_role() RETURNS trigger AS $$
            BEGIN
                INSERT INTO userRoles (userId, roleId)
                VALUES (NEW.id, (SELECT id FROM roles WHERE name = 'normie'));
    
                RETURN NEW;
            END;
            $$ LANGUAGE plpgsql;
         -- Create the trigger to call the function on user insertion
            CREATE TRIGGER after_user_insert
            AFTER INSERT ON users
            FOR EACH ROW
            EXECUTE FUNCTION assign_default_role();
    
        `)
}

createTrigger().catch(console.error);