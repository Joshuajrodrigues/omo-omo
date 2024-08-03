import { db } from '@/db'
import { roles, userRoles, users } from '@/db/schema'
import { eq } from 'drizzle-orm';

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
            email: users.email,
            roleId: roles.id,
            roleName: roles.name
        }).from(users).leftJoin(userRoles, eq(users.id, userRoles.userId))
            .leftJoin(roles, eq(userRoles.roleId, roles.id))
            .execute()


        const userMap = new Map()
        data.forEach(item => {
            userMap.set(item.id, {
                id: item.id,
                name: item.name,
                image: item.image,
                email: item.email,
                role: { name: item.roleName, id: item.roleId }
            })
        })
        return Array.from(userMap.values())
    } catch (error) {
        console.log("FATAL:", error);
        throw new Error('Failed to fetch data');
    }
}

export type RolesList = {
    id: string;
    name: string;
    createdOn: Date | null;
    isBaseRole: boolean | null;
}[]

export interface IRole {
    name: string;
    id: string;
}
export type UsersList = {
    id: string;
    name: string | null;
    image: string | null;
    email: string;
    role: IRole
}[]