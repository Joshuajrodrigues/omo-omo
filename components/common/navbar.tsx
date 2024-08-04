import { auth, signOut } from "@/auth"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Profile from "./profile"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

const Navbar = async () => {
  const session = await auth()
  const isAdmin = session?.user.roles?.name === "Admin"

  return (
    <header className="flex  px-10 sm:px-20 py-7 items-center justify-between  ">
      <Link href={'/'} className=" text-2xl font-bold ">
        OMO OMO
      </Link>
      <nav className=" ml-auto text-sm font-normal ">
        <ul className="flex items-center justify-between space-x-3 font-semibold sm:space-x-6 ">
          <NavbarLinks children={" BROWSE FILMS"} />
          {
            !session?.user ? <>
              <NavbarLinks children={<Link href={'/signin'}>
                SIGN IN
              </Link>} />
              <NavbarLinks children={<Link href={'/signup'}>
                SIGN UP
              </Link>} />
            </>
              :
              <>
                <NavbarLinks children={"MY LIST"} />
                <NavbarLinks children={
                  <Profile isAdmin={isAdmin}>
                    <Avatar className=" cursor-pointer">
                      <AvatarImage src={session.user.image || ""} />
                      <AvatarFallback>{session.user.name || ""}</AvatarFallback>
                    </Avatar>
                  </Profile>
                } />
              </>
          }
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

const NavbarLinks = ({ children }: { children: ReactNode }) => {
  return (
    <li className="hover:bg-gradient-to-tr hover:from-hoverstart hover:to-hoverend hover:text-transparent hover:bg-clip-text hover:cursor-pointer ">
      {children}
    </li>
  )
}
