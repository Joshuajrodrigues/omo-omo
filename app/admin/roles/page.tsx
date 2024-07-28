
import CreateRole from '@/components/createRole'
import RolesTable from '@/components/rolesTable'
import { getRolesData } from '@/db/queries'




const page = async () => {
    const roles = await getRolesData()
    return (
        <div className=' flex flex-col items-center'>
            <nav className=' ml-auto p-4'>
                <CreateRole />
            </nav>
            <div className=' w-full flex items-center '>
                <RolesTable roles={roles} />
            </div>
        </div>
    )
}

export default page