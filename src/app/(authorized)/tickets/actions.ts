'use server';

import { BaseFormState } from '@/types';
import { prisma } from '@/prisma';
import { z } from 'zod';
import { getFormDataEntries } from '@/utils/util';
import {auth} from "@/auth";
import {revalidatePath} from "next/cache";

export async function createTicket(prevState: BaseFormState, formData: FormData) {
    const session = await auth();
    if (!session) return null; // there should always be a session here

    // Validate data using Zod
    const { success, data, error } = z
        .object({
            title: z.string().min(3, 'Title must be at least 3 characters'),
            priority: z.enum(['normal', 'medium', 'high']),
            description: z.string().min(10, 'Description must be at least 10 characters'),
        })
        .safeParse(getFormDataEntries(formData));

    if (!success) {
        return error.formErrors.fieldErrors;
    }

    try {
        // Create a new ticket in the database
        await prisma.ticket.create({
            data: {
                title: data.title,
                priority: data.priority,
                description: data.description,
                status: "Open",
                userId: session.user.id,
            },
        });
    } catch (err) {
        console.error(err);
        return { message: 'An error occurred while creating the ticket' };
    }

    //revalidate path
    revalidatePath('/tickets');

    // Return a success message
    return {
        message: 'Ticket created successfully',
        success: true,
    };
}
