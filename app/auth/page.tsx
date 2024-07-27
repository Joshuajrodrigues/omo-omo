import Image from "next/image"
import { Input } from "@/components/ui/input"

import hero from '@/public/img/maninflowers.png'
import { Button } from "@/components/ui/button"
import { TypographyH1 } from "@/components/ui/typographyH1"
import { TypographyH2 } from "@/components/ui/typographyH2"
import { signIn } from "@/auth"
const page = () => {
    return (
        <div >

            <form
                action={async () => {
                    "use server"
                    await signIn("google")
                }}
            >
                <button type="submit">Signin with Google</button>
            </form>

            <form
                action={async () => {
                    "use server"
                    await signIn("github")
                }}
            >
                <button type="submit">Signin with Github</button>
            </form>
        </div>
    )
}

export default page