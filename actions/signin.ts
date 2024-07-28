"use server"
import { signIn } from "@/auth"
import { FormValues } from "@/components/magiclink"
import { redirect } from "next/navigation"


export const signinWithMagickLink = async (formData: FormValues) => {

    await signIn("resend", formData)

}
