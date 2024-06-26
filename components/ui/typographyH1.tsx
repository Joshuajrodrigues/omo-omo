import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type Typography = { children: ReactNode, className?: string }

export function TypographyH1({ children, className }: Typography) {
    return (
        <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>
            {children}
        </h1>
    )
}
