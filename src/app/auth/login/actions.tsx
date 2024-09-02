'use server';

import {signInSchema} from "@/auth";
import {ZodError} from "zod";
import {signIn} from "@/auth";
import {AuthError} from "next-auth";
import { redirect } from 'next/navigation'
import {revalidatePath} from "next/cache";

export type FieldErrors = {
    message?: string,
    email?: string[],
    password?: string[],
    username?: string[]
} | undefined

export default async function login(prevState: FieldErrors, formData: FormData) {
    try {
        let data = {
            email: formData.get('email'),
            password: formData.get('password'),
            username: formData.get('username') ?? 'AVMG'
        }

        await signInSchema.parseAsync(data)

        await signIn('credentials', data, {
            redirectUrl: '/dashboard'
        })

    } catch (error) {
        if (error instanceof ZodError) {
            return error.formErrors.fieldErrors
        }

        if (error instanceof AuthError) {
            return {
                message: error.message
            }
        }
    }

    revalidatePath('/')
    redirect('/dashboard');
}