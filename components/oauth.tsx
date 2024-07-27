import { signIn } from '@/auth'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { Github } from 'lucide-react';
const OAuth = () => {
    return (
        <div className=' space-y-2 w-full  '>
            <form
                action={async () => {
                    "use server"
                    await signIn("google", {
                        redirect: true,
                        redirectTo: "/"
                    })

                }}
            >
                <Button className=' space-x-2 text-base font-semibold w-64' type="submit">
                    <Image
                        src={"https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"}
                        alt='google'
                        width={24}
                        height={24}
                    />
                    <span>
                        Sign in with Google
                    </span>
                </Button>
            </form>

            <form
                action={async () => {
                    "use server"
                    await signIn("github", {
                        redirect: true,
                        redirectTo: "/"
                    })
                }}
            >
                <Button className=' space-x-2 text-base font-semibold        w-64' type="submit">
                    <Github />
                    <span>

                        Sign in with Github
                    </span>

                </Button>
            </form>
        </div>
    )
}

export default OAuth