import NextAuth, {Session, User} from "next-auth"
import {Role} from "@/types";



declare module "next-auth" {
    /**
     * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            id: string
            name: string
            email: string
            image: string
            role: Role
        }
    }

    interface User {
        id: string
        name: string
        email: string
        image: string
        role: Role
    }
}

declare module "next/server" {
    interface NextRequest {
        auth?: Session | null
    }
}