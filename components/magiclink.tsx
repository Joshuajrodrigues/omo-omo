"use client"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { TypographyH3 } from "./ui/typographyH3"
import { CallToAction } from "./userAuthForm"
const formSchema = z.object({
    email: z.string().email(),
})

export type FormValues = z.infer<typeof formSchema>

const MagicLink = ({ callToAction }: { callToAction: CallToAction }) => {
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
                <Button className=" text-base font-bold" type="submit">{cta}</Button>
            </form>
        </Form>
    )
}

export default MagicLink

