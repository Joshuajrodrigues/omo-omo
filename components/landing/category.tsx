import {CategoryHeader} from "@/components/landing/categoryHeader";
import {CategoryList} from "@/components/landing/categoryList";
import Link from "next/link";


export const Category=({categoryTitle,seeMore,listItems}:{categoryTitle:string, seeMore:string, listItems:string[]})=>{
    return<section className={"w-full p-20"}>
        <div className={"flex gap-3 items-center"}>
            <CategoryHeader children={categoryTitle}/> <Link className={" text-sm font-normal text-blue-400 underline"} href={seeMore}>SEE MORE </Link>

        </div>
        <CategoryList/>
    </section>
}