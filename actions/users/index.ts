"use server"
import { db } from "@/db"
import { roles, userRoles } from "@/db/schema"
import { eq } from "drizzle-orm"



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
