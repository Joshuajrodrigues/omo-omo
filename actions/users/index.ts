"use server"
import { db } from "@/db"
import { userRoles } from "@/db/schema"
import { eq } from "drizzle-orm"



export const getUserRole = async ({
    userRole
}: {
    userRole: string
}) => {
    try {
        const role = await db.select().from(userRoles).where(eq(
            userRoles.userId, userRole
        )).execute()
        return role
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
