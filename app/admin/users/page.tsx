import UserTables from '@/components/users/userTables'
import { getUsersData } from '@/db/queries'
import React from 'react'

const page = async () => {
    const users = await getUsersData()
    return (
        <div>
            <UserTables users={users} />
        </div>
    )
}

export default page