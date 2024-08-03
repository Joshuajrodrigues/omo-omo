import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { UsersList } from "@/db/queries";
const UserTables = ({ users }: { users: UsersList }) => {
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
                                {user.role.name}
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default UserTables