import NextAuth from "next-auth"
import {object, string, ZodError} from "zod";
import CredentialsProvider from "next-auth/providers/credentials";
import {saltAndHashPassword} from "@/utils/password";

export const signInSchema = object({
    email: string({ required_error: "Email is required" })
        .min(1, "Email is required")
        .email("Invalid email"),
    username: string({ required_error: "Username is required" })
        .min(3, "Username must be more than 3 characters")
        .max(32, "Username must be less than 32 characters"),
    password: string({ required_error: "Password is required" })
        .min(1, "Password is required")
        .min(8, "Password must be more than 8 characters")
        .max(32, "Password must be less than 32 characters"),
})


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [CredentialsProvider({
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
                let user = null

                const {username,  email, password } = await signInSchema.parseAsync(credentials)

                // logic to salt and hash password
                const pwHash = saltAndHashPassword(password)

                // logic to verify if the user exists
                // user = await getUserFromDb(email, pwHash)
                //
                // if (!user) {
                //     throw new Error("User not found.")
                // }

                // return JSON object with the user data
                return {
                    id: '1',
                    name: username,
                    email: email,
                    role: password
                }
            } catch (error) {
                if (error instanceof ZodError) {
                    // Return `null` to indicate that the credentials are invalid
                    return null
                }
            }

            return null;
        },
    })],
})