"use server"
import { db } from "@/db"
import { roles } from "@/db/schema"
import { isEmpty } from "@/lib/utils"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"


export const createRole = async ({ roleName }: { roleName: string }) => {
    if (isEmpty(roleName)) { throw new Error("Name cannot be empty"); }
    try {
        const role = await db.insert(roles).values({
            name: roleName
        }).returning()
        revalidatePath('/admin/roles')
        return role
    } catch (error) {

        console.log("FATAL:", error);
        throw error
    }
}
export const editRole = async ({ roleName, id }: { roleName: string, id: string }) => {
    if (isEmpty(roleName) || isEmpty(id)) { throw new Error("Name cannot be empty"); }
    try {
        const role = await db.update(roles).set({
            name: roleName
        }).where(eq(roles.id, id)).returning()
        revalidatePath('/admin/roles')
        return role
    } catch (error) {

        console.log("FATAL:", error);
        throw error
    }
}
export const deleteRole = async ({ id }: { id: string }) => {
    if (isEmpty(id)) { throw new Error("Id cannot be empty"); }

    try {
        const role = await db.delete(roles).where(eq(roles.id, id)).returning()
        revalidatePath('/admin/roles')
        return role
    } catch (error) {

        console.log("FATAL:", error);
        throw error
    }
}

