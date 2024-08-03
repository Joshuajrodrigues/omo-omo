"use server"
import { db } from "@/db"
import { userRoles } from "@/db/schema"
import { eq } from "drizzle-orm"



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

    }
}
