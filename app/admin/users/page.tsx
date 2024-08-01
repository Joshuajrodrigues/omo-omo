import { getUsersData } from '@/db/queries'
import React from 'react'

const page = async () => {
    const users = await getUsersData()
    return (
        <div>
            <pre>{JSON.stringify(users, null, 2)}</pre>
        </div>
    )
}

export default page