"use client"
import { IRole, RolesList } from "@/actions/roles"
import { updateUserRole, UsersList } from "@/actions/users"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



export const RoleSelect = ({ defaultValue, roles, userId }: { defaultValue: IRole, roles: RolesList, userId: UsersList[number]['id'] }) => {
    return (
        <Select defaultValue={defaultValue.id} onValueChange={(value) => {
            updateUserRole({
                userId,
                newRoleId: value
            })
        }} >
            <SelectTrigger className="w-[180px]">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {
                    roles.map((role) => (
                        <SelectItem key={role.id} value={role.id}>{role.name}</SelectItem>
                    ))
                }

            </SelectContent>
        </Select>

    )
}
