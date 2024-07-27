import Image from "next/image"
import { Input } from "@/components/ui/input"

import login from '@/public/img/login.jpg'
import { Button } from "@/components/ui/button"
import { TypographyH1 } from "@/components/ui/typographyH1"
import { TypographyH2 } from "@/components/ui/typographyH2"
import { signIn } from "@/auth"
import SigninForm from "@/components/signin"
import OAuth from "@/components/oauth"
const page = () => {
    return (
        <div>
            <Image src={login} className="" fill objectFit="cover" placeholder="blur" alt="movie theater" />

            <div className="absolute space-y-8 text-white text-left inset-0 flex flex-col items-center justify-center">
                <TypographyH1>WELCOME TO OMO OMO</TypographyH1>
                <OAuth />
                <span>
                    --OR--
                </span>
                <SigninForm />
            </div>

        </div>
    )
}

export default page