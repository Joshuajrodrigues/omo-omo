import Image from "next/image"

import hero from '@/public/img/maninflowers.png'
const page = () => {
    return (
        <>
            <Image fill src={hero} alt="" />
            Sign up
        </>
    )
}

export default page