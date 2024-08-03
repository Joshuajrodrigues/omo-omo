import { getRolesData } from '@/actions/roles'
import { getUsersData } from '@/actions/users'
import UserTables from '@/components/users/userTables'

import React from 'react'

const page = async () => {
    const users = await getUsersData()
    const roles = await getRolesData()
    return (
        <div>
            <UserTables roles={roles} users={users} />
        </div>
    )
}

export default page