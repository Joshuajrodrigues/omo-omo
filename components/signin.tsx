"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signinWithMagickLink } from "@/actions/signin"
import { TypographyH2 } from "@/components/ui/typographyH2"
import { TypographyH3 } from "./ui/typographyH3"
import { CallToAction } from "./userAuthForm"
const formSchema = z.object({
    email: z.string().min(2).max(50),
})

export type FormValues = z.infer<typeof formSchema>

const SigninForm = ({ callToAction }: { callToAction: CallToAction }) => {
    const cta = callToAction === "Sign in" ? "SIGN IN" : "SIGN UP"
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })
    async function onSubmit(values: FormValues) {

    }
    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-center lg:text-start  w-full   ">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="flex flex-col justify-center items-center lg:flow-root">
                            <FormLabel className=" text-start">
                                <TypographyH3>
                                    {cta} NOW
                                </TypographyH3>
                            </FormLabel>
                            <FormControl >
                                <Input size={1} className="bg-white text-black max-w-[400px] lg:max-w-[680px]   " placeholder="Email address" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className=" text-base font-bold" type="submit">SIGN UP</Button>
            </form>
        </Form>
    )
}

export default SigninForm

