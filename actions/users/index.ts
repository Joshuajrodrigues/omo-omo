"use server"
import { db } from "@/db"
import { roles, userRoles, users } from "@/db/schema"
import { eq } from "drizzle-orm"
import { IRole } from "../roles"


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



export const getUserRole = async ({
    userId
}: {
    userId: string
}) => {
    try {
        const role = await db.select().from(userRoles).where(eq(
            userRoles.userId, userId
        ))
            .leftJoin(roles, eq(userRoles.roleId, roles.id))
            .execute()
        const result = new Map()

        role.forEach(item => {
            result.set(item.userRoles.id, {
                id: item.roles?.id,
                name: item.roles?.name
            })
        })
        return Array.from(result.values())[0]
    } catch (error) {
        console.error("Failed to get user role", error)
    }
}

export const updateUserRole = async ({
    newRoleId, userId
}: {
    newRoleId: string, userId: string
}) => {
    try {
        const result = db.update(userRoles).set({
            roleId: newRoleId
        }).where(eq(userRoles.userId, userId)).returning()
        return result
    } catch (error) {
        console.log("Update user role failed", error);

    }
}


export type UsersList = {
    id: string;
    name: string | null;
    image: string | null;
    email: string;
    role: IRole
}[]