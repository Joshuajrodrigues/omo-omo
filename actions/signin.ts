"use server"
import { signIn } from "@/auth"
import { FormValues } from "@/components/auth/magiclink"



export const signinWithMagickLink = async (formData: FormValues) => {

    await signIn("resend", { ...formData, redirect: true, redirectTo: "/" })

}
