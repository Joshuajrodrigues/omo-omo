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

const Profile = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" mr-4">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <span>Admin</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem>
                                <span>Manage users</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <span>Manage roles</span>
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>

                <DropdownMenuItem>test</DropdownMenuItem>
                <DropdownMenuItem>test</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <form
                        action={async () => {
                            "use server"
                            await signOut()

                        }}
                    >
                        <Button variant={"destructive"} type="submit"> <LogOutIcon /> Sign out</Button>
                    </form>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default Profile