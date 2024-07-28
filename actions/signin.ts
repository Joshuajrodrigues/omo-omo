"use server"
import { signIn } from "@/auth"
import { FormValues } from "@/components/magiclink"



export const signinWithMagickLink = async (formData: FormValues) => {

    await signIn("resend", { ...formData, redirect: true, redirectTo: "/" })

}
