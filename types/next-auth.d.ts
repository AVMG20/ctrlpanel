import NextAuth, {type DefaultSession, Session} from "next-auth"

interface User {
    role: string
}

declare module "next-auth" {
    /**
     * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: User & DefaultSession["user"]
    }
}

declare module "next/server" {
    interface NextRequest {
        auth?: Session | null
    }
}