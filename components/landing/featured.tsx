import Image from "next/image";
import {TypographyH2} from "@/components/ui/typographyH2";
import {FeaturedImages} from "@/app/page";


export default function Featured({images}: {images:FeaturedImages }) {
    return <section className={'w-full relative'}>

        <div className={" grid grid-cols-3 gap-1 "}>
            {
                images.map((image) => (
                    <Image placeholder={"blur"} className={"w-full h-full object-cover "} key={image.id} alt={""}
                           src={image.img}/>
                ))
            }
        </div>

        <TypographyH2 className={'lg:text-6xl lg:-mt-20  md:text-4xl -mt-12  px-10 sm:px-20 left-0  absolute top-0'}>YOUR
            INDIE MOVIE <br/> HAVEN</TypographyH2>
        <TypographyH2 className={'lg:text-6xl lg:-mt-20 md:text-4xl text-right -mt-12  px-10 sm:px-20 md:-mt-16'}>TRUELY
            FOR THE <br/> CREATOR</TypographyH2>

    </section>
}