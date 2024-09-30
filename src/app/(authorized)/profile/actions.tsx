'use server';

import {BaseFormState} from "@/types";
import {prisma} from "@/prisma";
import {z} from 'zod';
import {Prisma} from "@prisma/client";
import {revalidatePath} from "next/cache";
import {getFormDataEntries} from "@/lib/util";

export async function editProfile(prevState: BaseFormState, formData: FormData) {
    // validate data
    const {success, data, error} = z.object({
        id: z.string(),
        name: z.string().min(3, 'Name must be at least 3 characters'),
        email: z.string().email('Invalid email')
    }).safeParse(getFormDataEntries(formData));

    if (!success) return error.formErrors.fieldErrors

    try {
        // update user
        const user = await prisma.user.update({
            where: {id: data.id},
            data: {
                name: data.name,
                email: data.email
            }
        });

        //revalidate /admin/users
        revalidatePath('/admin/users')
        revalidatePath(`/admin/users/${user.id}`)

    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            return {email: ['Email is already taken']}
        }

        return {message: 'An error occurred'}
    }

    // return a success message
    return {
        message: 'Profile updated successfully',
        success: true
    }
}

export async function revalidateProfilePage() {
    revalidatePath('/profile')
}