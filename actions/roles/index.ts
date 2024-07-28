"use server"
import { db } from "@/db"
import { roles } from "@/db/schema"
import { isEmpty } from "@/lib/utils"
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