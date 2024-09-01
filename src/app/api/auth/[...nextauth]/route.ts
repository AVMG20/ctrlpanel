import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [CredentialsProvider({
        name: 'Credentials',
        credentials: {
            username: {
                label: "Username",
                type: "text",
                placeholder: "jsmith"
            },
            password: {
                label: "Password",
                type: "password"
            }
        },
        async authorize(credentials, req) {

            const user = {
                id: '1',
                name: 'Testing',
                email: 'testing@hotmail.com'
            }
            return user;

            // Return null if user data could not be retrieved
            //return null
        },
    })],
})

export {handler as GET, handler as POST}