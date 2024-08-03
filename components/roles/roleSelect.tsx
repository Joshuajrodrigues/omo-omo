import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { IRole, RolesList } from "@/db/queries"


export const RoleSelect = ({ defaultValue, roles }: { defaultValue: IRole, roles: RolesList }) => {
    return (
        <Select defaultValue={defaultValue.id} >
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
