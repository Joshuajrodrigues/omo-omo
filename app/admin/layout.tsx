
import { auth } from "@/auth"
import { redirect } from "next/navigation"


export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const session = await auth()
    const isAdmin = session?.user.roles?.name === "Admin"
    if (!isAdmin) {
        redirect("/")
    }
    return (
        <section>
            {children}
        </section>
    )
}