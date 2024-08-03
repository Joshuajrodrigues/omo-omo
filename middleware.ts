
import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { NextResponse } from "next/server";

export const { auth } = NextAuth(authConfig)


export default auth((req) => {

    const isLoggedIn = !!req.auth;

    if (!isLoggedIn && req.nextUrl.pathname.startsWith("/admin")) {

        const newUrl = new URL("/signin", req.nextUrl.origin);


        return Response.redirect(newUrl.href);
    }

    // Allow the request to proceed if it doesn't match the protected route
    return NextResponse.next();
})


export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)", // dont run middleware here
        "/admin/:path*" // run middleware here
    ],
}