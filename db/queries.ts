import { db } from '@/db'
import { roles, users } from '@/db/schema'

export const getRolesData = async () => {
    try {
        const data = await db.select().from(roles).execute();
        return data;
    } catch (error) {
        console.log("FATAL:", error);
        throw new Error('Failed to fetch data');
    }
}

export const getUsersData = async () => {
    try {
        const data = await db.select({
            id: users.id,
            name: users.name,
            image: users.image,
            email: users.email
        }).from(users).execute()
        return data
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

export type UsersList = {
    id: string;
    name: string | null;
    image: string | null;
    email: string;
}[]