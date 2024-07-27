import Image from "next/image"

import { TypographyH1 } from "@/components/ui/typographyH1"
import login from '@/public/img/login.jpg'

import OAuth from "@/components/oauth"
import SigninForm from "@/components/signin"
import { TypographyP } from "@/components/ui/typographyP"
import { TypographyH4 } from "./ui/typographyH4"
import Link from "next/link"
export type CallToAction = 'Sign up' | 'Sign in'
const UserAuthForm = ({ callToAction }: { callToAction: CallToAction }) => {

    return (
        <div  >
            <Image src={login} fill className=" object-cover" placeholder="blur" alt="movie theater" />

            <div className="lg:pl-24 p-2 absolute space-y-8  w-full  text-white text-center inset-0 flex flex-col items-center justify-center lg:items-start lg:text-start lg:justify-end lg:mb-24 ">
                <TypographyH1>WELCOME TO <br /> OMO OMO</TypographyH1>
                <OAuth callToAction={callToAction} />
                <SigninForm callToAction={callToAction} />
                {
                    callToAction === "Sign in" ?
                        <TypographyH4>New here ? <Link className=" underline " href={'/signup'}>Sign up</Link> </TypographyH4> :
                        <TypographyH4>Already have an account ? <Link className=" underline " href={'/signin'}>Sign in</Link> </TypographyH4>
                }
                <TypographyP>
                    By clicking '{callToAction}' you are indicating that you have read and agree to the Terms of Service and Privacy
                </TypographyP>
            </div>

        </div>
    )
}

export default UserAuthForm