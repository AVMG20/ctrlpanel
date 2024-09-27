import NextAuth, {Session, User} from "next-auth"



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
            role: 'admin' | 'mod' | 'user'
        }
    }

    interface User {
        id: string
        name: string
        email: string
        image: string
        role: 'admin' | 'mod' | 'user'
    }
}

declare module "next/server" {
    interface NextRequest {
        auth?: Session | null
    }
}