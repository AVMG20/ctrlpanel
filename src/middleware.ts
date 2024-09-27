import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

// This only applies to normal routes, NOT API routes
const protectedRoutes = [
    //all routes that are not defined are public

    //User
    { path: /^\/dashboard.*/, roles: ["user", "mod", "admin"] },
    { path: /^\/servers.*/, roles: ["user", "mod", "admin"] },
    { path: /^\/credits.*/, roles: ["user", "mod", "admin"] },
    { path: /^\/tickets.*/, roles: ["user", "mod", "admin"] },
    { path: /^\/profile.*/, roles: ["user", "mod", "admin"] },

    // Moderation
    { path: /^\/admin\/users.*/, roles: ["mod", "admin"] },
    { path: /^\/admin\/servers.*/, roles: ["mod", "admin"] },
    { path: /^\/admin\/tickets.*/, roles: ["mod", "admin"] },

    //Admin
    { path: /^\/admin\/packages.*/, roles: ["admin"] },
    { path: /^\/admin\/store.*/, roles: ["admin"] },
    { path: /^\/admin\/packages.*/, roles: ["admin"] },
    { path: /^\/admin\/settings.*/, roles: ["admin"] },
];

export default auth(async (req: NextRequest) => {
    const { pathname } = req.nextUrl;

    // Check if the current route is protected
    const matchedRoute = protectedRoutes.find(route => route.path.test(pathname));

    // If route is protected, require authentication and role check
    if (matchedRoute) {
        // If user is not authenticated, redirect to login
        if (!req.auth) {
            const loginUrl = new URL("/auth/login", req.nextUrl.origin);
            return NextResponse.redirect(loginUrl);
        }

        // Check if user's role is allowed for the matched route
        if (!matchedRoute.roles.includes(req.auth.user.role)) {
            console.log("Forbidden")
            console.log(req.auth.user.role, matchedRoute)
            const forbiddenUrl = new URL("/403", req.nextUrl.origin); // Redirect to 403 Forbidden
            return NextResponse.redirect(forbiddenUrl);
        }
    }

    // If route is not protected or the user is authorized, continue with the request
    return NextResponse.next();
});

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}