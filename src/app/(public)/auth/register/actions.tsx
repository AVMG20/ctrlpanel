'use server';

import {registerSchema} from "@/auth";
import {ZodError} from "zod";
import {AuthError} from "next-auth";
import {prisma} from "@/prisma";
import {saltAndHashPassword} from "@/lib/password";
import { Prisma } from '@prisma/client'

export type FieldErrors = {
    message?: string,
    email?: string[],
    password?: string[],
    passwordConfirm?: string[],
    username?: string[],
    terms?: string[],
    success?: boolean
} | undefined

export default async function register(prevState: FieldErrors, formData: FormData) {
    let data = {
        email: formData.get('email'),
        password: formData.get('password'),
        passwordConfirm: formData.get('password'),
        username: formData.get('username') ?? 'AVMG',
        terms: !!formData.get('terms')
    }

    try {
        const {email, username, password} = await registerSchema.parseAsync(data)

        await prisma.user.create({
            data: {
                email: email,
                name: username,
                password: saltAndHashPassword(password)
            }});

    } catch (error) {
        if (error instanceof ZodError) {
            return error.formErrors.fieldErrors
        }

        if (error instanceof AuthError) {
            return {message: error.message}
        }

        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            return {email: ['Email is already taken']}
        }

        return {message: 'An error occurred'}
    }

    return {
        success: true
    }
}