import { auth } from "@/auth"
import {NextRequest} from "next/server";

export default auth((req : NextRequest) => {
    if (!req.auth && req.nextUrl.pathname !== "/auth/login") {
        debugger;
        const newUrl = new URL("/auth/login", req.nextUrl.origin)
        return Response.redirect(newUrl)
    }
})

export const config = {
    matcher: [
        "/dashboard",
        "/profile",
        "/tickets",
        "/servers",
        "/credits",
        "/admin/(.*)"
    ],
}