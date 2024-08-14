import {ReactNode} from "react";
import {TypographyH3} from "@/components/ui/typographyH3";

export const CategoryHeader = ({children}:{children:ReactNode}) => {
    return<TypographyH3 className={"font-bold"}>{children}</TypographyH3>
}