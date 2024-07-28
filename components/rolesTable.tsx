import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { RolesList } from '@/db/queries';
import { format } from "date-fns";
const RolesTable = ({ roles }: { roles: RolesList }) => {
    return (
        <Table>
            <TableCaption>A list of all available roles.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Role</TableHead>
                    <TableHead>Created on</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    roles.map((role) => (
                        <TableRow key={role.id}>
                            <TableCell>{role.name}</TableCell>
                            {
                                role?.createdOn &&
                                <TableCell>{format(role.createdOn, "dd/MM/yyyy")}</TableCell>
                            }
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>

    )
}

export default RolesTable