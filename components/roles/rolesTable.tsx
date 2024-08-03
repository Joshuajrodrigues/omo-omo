import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { format } from "date-fns";
import { Edit } from "lucide-react";
import CreateRole from "./createRole";
import { RolesList } from "@/actions/roles";

const RolesTable = ({ roles }: { roles: RolesList }) => {
    return (
        <Table>
            <TableCaption>A list of all available roles.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Role</TableHead>
                    <TableHead>Created on</TableHead>
                    <TableHead></TableHead>
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
                            {
                                !role.isBaseRole &&
                                <TableCell>
                                    <CreateRole id={role.id} initialValue={role.name} trigger={<Edit />} action={"Edit"} title={"Edit role name"} />
                                </TableCell>
                            }
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>

    )
}

export default RolesTable