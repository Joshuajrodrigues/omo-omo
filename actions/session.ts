'use server'
import {auth} from "@/auth";

export async function checkIsAdmin(){

    let session = await auth()

    let isAdmin = session?.user.roles?.name === "Admin"

    if(!isAdmin){
        throw new Error("You not admin ")
    }
}