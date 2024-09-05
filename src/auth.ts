import NextAuth from "next-auth"
import Discord from "next-auth/providers/discord"
import {boolean, object, string, ZodError} from "zod";
import CredentialsProvider from "next-auth/providers/credentials";
import {comparePassword} from "@/utils/password";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {prisma} from "@/prisma";

export const signInSchema = object({
    email: string({required_error: "Email is required"})
        .min(1, "Email is required")
        .email("Invalid email"),
    password: string({required_error: "Password is required"})
        .min(1, "Password is required")
        .min(8, "Password must be more than 8 characters")
        .max(32, "Password must be less than 32 characters"),
})

export const registerSchema = object({
    email: string({required_error: "Email is required"})
        .min(1, "Email is required")
        .email("Invalid email"),
    username: string({required_error: "Username is required"})
        .min(3, "Username must be more than 3 characters")
        .max(32, "Username must be less than 32 characters"),
    password: string({required_error: "Password is required"})
        .min(1, "Password is required")
        .min(8, "Password must be more than 8 characters")
        .max(32, "Password must be less than 32 characters"),
    passwordConfirm: string({required_error: "Password confirmation is required"}),
    terms: boolean({required_error: "You must agree to the terms"})
}).refine((data) => data.password === data.passwordConfirm, {
        message: "Passwords must match",
        path: ["confirmPassword"],
    })

export const {handlers, signIn, signOut, auth} = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    providers: [Discord, CredentialsProvider({
        name: 'Credentials',
        credentials: {
            username: {
                label: "Username",
                type: "text",
            },
            email: {
                label: "Email",
                type: "email",
            },
            password: {
                label: "Password",
                type: "password"
            }
        },
        authorize: async (credentials) => {
            try {
                const {email, password} = await signInSchema.parseAsync(credentials)

                const user = await prisma.user.findFirst({
                    where: {
                        email: email,
                    }
                })

                if (!user) throw Error("User not found")
                if (!user.password) throw Error("User has no password") // should never happen

                //check if the password is correct
                if (!comparePassword(password, user.password)) {
                    throw Error("Password is incorrect")
                }

                // Return a user object if the credentials are valid.
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: 'user'
                }
            } catch (error) {
                if (error instanceof ZodError) {
                    // Return `null` to indicate that the credentials are invalid
                    return null
                }

                throw error;
            }
        },
    })
    ],
    pages: {
        signIn: '/auth/login',
        signOut: '/auth/logout',
    },
})