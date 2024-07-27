import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type Typography = { children: ReactNode, className?: string }

export function TypographyH1({ children, className }: Typography) {
    return (
        <h1 className={cn("scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl text-wrap", className)}>
            {children}
        </h1>
    )
}
