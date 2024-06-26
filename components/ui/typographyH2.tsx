import { cn } from "@/lib/utils";
import { Typography } from "./typographyH1";

export function TypographyH2({ children, className }: Typography) {
    return (
        <h2 className={cn("scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>
            {children}
        </h2>
    )
}
