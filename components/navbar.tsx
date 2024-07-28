import { auth, signOut } from "@/auth"
import Link from "next/link"
import { toast } from "sonner"

const Navbar = async () => {
    const session = await auth()
    return (
        <header className="flex p-2">
            <span>
                OMO OMO
            </span>
            <nav className=" ml-auto">
                <ul className="flex space-x-4 ">
                    <li>
                        BROWSE FILMS
                    </li>
                    {
                        !session?.user ? <>
                            <li>
                                <Link href={'/signin'}>
                                    SIGN IN
                                </Link>
                            </li>
                            <li>
                                <Link href={'/signup'}>
                                    SIGN UP
                                </Link>
                            </li>
                        </>

                            :
                            <>
                                <li>
                                    MY LIST
                                </li>
                                <li>

                                    <form
                                        action={async () => {
                                            "use server"
                                            await signOut()

                                        }}
                                    >
                                        <button type="submit">SIGN OUT</button>
                                    </form>
                                </li>
                            </>
                    }


                </ul>
            </nav>
        </header>
    )
}

export default Navbar