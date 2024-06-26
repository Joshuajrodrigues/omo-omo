import Image from "next/image"
import { Input } from "@/components/ui/input"

import hero from '@/public/img/maninflowers.png'
import { Button } from "@/components/ui/button"
import { TypographyH1 } from "@/components/ui/typographyH1"
import { TypographyH2 } from "@/components/ui/typographyH2"
const page = () => {
    return (
        <div >
            <div className="relative top-0 bottom-0 min-h-screen">
                <Image className="brightness-50" fill src={hero} alt="" placeholder="blur" />
            </div>

            <div className="absolute p-5 w-full bottom-10 flex flex-col gap-y-6 ">
                <TypographyH1 className="text-white">WELCOME TO <br /> OMO OMO</TypographyH1>
                <TypographyH2 className=" text-white">SIGN UP NOW</TypographyH2>
                <Input className="bg-white w-full md:w-[60%]" placeholder="Email address" />
                <Button className=" w-24">SIGN UP</Button>
            </div>


        </div>
    )
}

export default page