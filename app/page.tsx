import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await auth()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      omo omo :)

      {
        !session?.user ? <Link href={'/auth'}>Sign in</Link> : <Link href={'/admin'} > Admin</Link>
      }

    </main>
  );
}
