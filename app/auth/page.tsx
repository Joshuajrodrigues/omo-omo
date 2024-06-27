import Image from "next/image"
import { Input } from "@/components/ui/input"

import hero from '@/public/img/maninflowers.png'
import { Button } from "@/components/ui/button"
import { TypographyH1 } from "@/components/ui/typographyH1"
import { TypographyH2 } from "@/components/ui/typographyH2"
const page = () => {
    return (
        <div >
            <div className="relative top-0 bottom-0 min-h-svh">
                <Image className=" brightness-50" fill src={hero} alt="" placeholder="blur" />
            </div>

            <div className="absolute p-5 md:p-24 w-full bottom-32 flex flex-col gap-y-6 text-white ">
                <TypographyH1 className="">WELCOME TO <br /> OMO OMO</TypographyH1>
                <TypographyH2 className="  text-xl md:text-2xl">SIGN UP NOW</TypographyH2>
                <Input className="bg-white w-[80%] md:w-[40%]" placeholder="Email address" />
                <Button className=" w-24 font-semibold">SIGN UP</Button>
                <p className=" max-w-[550px] ">By clicking 'Sign Up' you are indicating that you have read and agree to the Terms of Service and Privacy</p>
            </div>


        </div>
    )
}

export default page