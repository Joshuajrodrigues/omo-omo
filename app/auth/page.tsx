import Image from "next/image"
import { Input } from "@/components/ui/input"

import hero from '@/public/img/maninflowers.png'
import { Button } from "@/components/ui/button"
const page = () => {
    return (
        <>
            <Image className="brightness-50" fill src={hero} alt="" />
            <div className="absolute bottom-32">
                Welcome to omo omo
                <p>SIGN UP NOW</p>
                <Input className="bg-white" placeholder="Email address" />
                <Button>SIGN UP</Button>

            </div>

        </>
    )
}

export default page