import { db } from '@/db'
import { roles } from '@/db/schema'

export const getRolesData = async () => {
    try {
        const data = await db.select().from(roles).execute();
        return data;
    } catch (error) {
        console.log("FATAL:", error);
        throw new Error('Failed to fetch data');
    }
}

export type RolesList = {
    id: string;
    name: string;
    createdOn: Date | null;
}[]