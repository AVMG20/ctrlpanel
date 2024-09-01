import { auth } from "@/auth"
import {NextRequest} from "next/server";

export default auth((req : NextRequest) => {
    if (!req.auth && req.nextUrl.pathname !== "/api/auth/signin") {
        const newUrl = new URL("/api/auth/signin", req.nextUrl.origin)
        return Response.redirect(newUrl)
    }
})

export const config = {
    matcher: [
        "/dashboard",
        "/settings",
        "/admin"
    ],
}