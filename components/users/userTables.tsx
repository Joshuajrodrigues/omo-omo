import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { RoleSelect } from "../roles/roleSelect";
import { UsersList } from "@/actions/users";
import { RolesList } from "@/actions/roles";
const UserTables = ({ users, roles }: { users: UsersList, roles: RolesList }) => {
    return (
        <Table>
            <TableCaption>A list of all available roles.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            {
                                user?.email &&
                                <TableCell>{user.email}</TableCell>
                            }
                            <TableCell>
                                <RoleSelect userId={user.id} defaultValue={user.role} roles={roles} />

                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default UserTables