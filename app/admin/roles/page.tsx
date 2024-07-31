
import CreateRole from '@/components/roles/createRole'
import RolesTable from '@/components/roles/rolesTable'
import { getRolesData } from '@/db/queries'




const page = async () => {
    const roles = await getRolesData()
    return (
        <div className=' flex flex-col items-center p-4 space-y-4'>
            <nav className=' ml-auto '>
                <CreateRole trigger={"Create new role"} action={"Create"} title={"Role name"} />
            </nav>
            <div className=' w-full flex items-center '>
                <RolesTable roles={roles} />
            </div>
        </div>
    )
}

export default page