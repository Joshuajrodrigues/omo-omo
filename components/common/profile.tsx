import { signOut } from "@/auth"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
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
                <DropdownMenuItem>test</DropdownMenuItem>
                <DropdownMenuItem>test</DropdownMenuItem>
                <DropdownMenuItem>test</DropdownMenuItem>
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