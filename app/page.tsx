import { auth } from "@/auth";
import testImage1 from '@/public/test/Hero section flier 1.png'
import testImage2 from '@/public/test/Hero section flier 2.png'
import testImage3 from '@/public/test/Hero section flier 3.png'
import Link from "next/link";
import {TypographyH2} from "@/components/ui/typographyH2";
import Image from "next/image";

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className={'w-full relative'}>

            <div className={" grid grid-cols-3 gap-1 -ml-24 -mr-24"}>
            {
                images.map((image) => (
                    <Image className={"w-full h-full object-cover "} key={image.id} alt={""} src={image.img} />
                ))
            }
            </div>
            <TypographyH2 className={'text-6xl absolute top-0 -mt-20 '}>YOUR INDIE MOVIE <br/> HAVEN</TypographyH2>
            <TypographyH2 className={'text-6xl text-right -mt-20'}>TRUELY FOR THE <br/> CREATOR</TypographyH2>
        </section>

      {
        !session?.user ? <Link href={'/auth'}>Sign in</Link> : <Link href={'/admin'} > Admin</Link>
      }

    </main>
  );
}
