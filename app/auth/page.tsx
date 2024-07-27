import Image from "next/image"
import { Input } from "@/components/ui/input"

import login from '@/public/img/login.jpg'
import { Button } from "@/components/ui/button"
import { TypographyH1 } from "@/components/ui/typographyH1"

import { signIn } from "@/auth"
import SigninForm from "@/components/signin"
import OAuth from "@/components/oauth"
import { TypographyP } from "@/components/ui/typographyP"
import { TypographyH3 } from "@/components/ui/typographyH3"
import { TypographyH4 } from "@/components/ui/typographyH4"
const page = () => {
    return (
        <div  >
            <Image src={login} fill className=" object-cover" placeholder="blur" alt="movie theater" />

            <div className="lg:pl-24 p-2 absolute space-y-8  w-full  text-white text-center inset-0 flex flex-col items-center justify-center lg:items-start lg:text-start lg:justify-end lg:mb-24 ">
                <TypographyH1>WELCOME TO <br /> OMO OMO</TypographyH1>
                <OAuth />
                <SigninForm />
                <TypographyP>
                    By clicking 'Get Started' you are indicating that you have read and agree to the Terms of Service and Privacy
                </TypographyP>
            </div>

        </div>
    )
}

export default page