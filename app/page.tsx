import { auth } from "@/auth";
import testImage1 from '@/app/test/Hero1.png'
import testImage2 from '@/app/test/Hero3.png'
import testImage3 from '@/app/test/Hero2.png'
import Link from "next/link";
import  {StaticImageData} from "next/image";
import Featured from "@/components/landing/featured";

export type FeaturedImages ={ id: number ;  img: StaticImageData }[]
export default async function Home() {
  const session = await auth()
    let images = [
        {
            id:1,
            img:testImage1
        },{
            id:2,
            img:testImage2
        },
        {
            id:3,
            img:testImage3
        }
    ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
       <Featured images={images}/>

      {
        !session?.user ? <Link href={'/auth'}>Sign in</Link> : <Link href={'/admin'} > Admin</Link>
      }

    </main>
  );
}
