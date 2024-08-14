import { signOut } from "@/auth"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOutIcon } from "lucide-react"
import { ReactNode } from "react"
import { Button } from "../ui/button"
import Link from "next/link"

const Profile = ({
    children,
    isAdmin = false
}: {
    children: ReactNode,
    isAdmin: boolean
}) => {
    return (
        <DropdownMenu modal={false} >
            <DropdownMenuTrigger>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" mr-4 " align={"end"} alignOffset={-15} >
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuItem className={"sm:hidden"}>Browse films</DropdownMenuItem>
                <DropdownMenuItem className={"sm:hidden"}>My list</DropdownMenuItem>

                <DropdownMenuSeparator />
                {
                    isAdmin &&
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <span>Admin</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                    <Link href={'/admin/content'}>Update content</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href={'/admin/users'}>Manage users</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href={'/admin/roles'}>Manage roles</Link>
                                </DropdownMenuItem>

                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                }



                <DropdownMenuItem>
                    <form
                        action={async () => {
                            "use server"
                            await signOut()

                        }}
                    >
                        <Button className={"font-semibold p-0 text-destructive"} variant={"ghost"} type="submit"> <LogOutIcon /> Sign out</Button>
                    </form>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default Profile