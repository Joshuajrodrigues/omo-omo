import { auth, signOut } from "@/auth"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Profile from "./profile"
import { redirect } from "next/navigation"

const Navbar = async () => {
  const session = await auth()


  const isAdmin = session?.user.roles?.name === "Admin"

  return (
    <header className="flex px-20 py-7 items-center justify-between  ">
      <Link href={'/'} className=" text-2xl font-bold ">
        OMO OMO
      </Link>
      <nav className=" ml-auto text-sm font-normal ">
        <ul className="flex items-center justify-between space-x-6 ">
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
                  <Profile isAdmin={isAdmin}>
                    <Avatar className=" cursor-pointer">
                      <AvatarImage src={session.user.image || ""} />
                      <AvatarFallback>{session.user.name || ""}</AvatarFallback>
                    </Avatar>
                  </Profile>
                </li>

              </>
          }
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
