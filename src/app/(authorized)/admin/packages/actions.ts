'use server';
import { z } from 'zod';
import {getFormDataEntries, numericString} from '@/utils/util';
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';
import {BaseFormState} from "@/types";
import {prisma} from "@/prisma";

export async function createPackage(prevState: BaseFormState, formData: FormData) {
    const session = await auth();
    if (!session) return null; // there should always be a session here

    const { success, data, error } = z
        .object({
            name: z.string().min(3, 'Name must be at least 3 characters'),
            description: z.string().min(10, 'Description must be at least 10 characters'),
            enabled: z.boolean().default(true),
            memory: numericString(z.number().min(0)),
            swap: numericString(z.number().min(0)),
            disk: numericString(z.number().min(0)),
            io: numericString(z.number().min(0)),
            cpu: numericString(z.number().min(0)),
            databases: numericString(z.number().min(0)),
            allocations: numericString(z.number().min(0)),
            backups: numericString(z.number().min(0)),
            location: numericString(z.number()), //TODO: maybe store the location name in the database so we can display it in the backend UI
            nest: numericString(z.number()),  //TODO: maybe store the location name in the database so we can display it in the backend UI
        })
        .safeParse(getFormDataEntries(formData));

    if (!success) {
        return error.formErrors.fieldErrors;
    }

    try {
        await prisma.package.create({
            data: {
                name: data.name,
                description: data.description,
                location: data.location,
                enabled: data.enabled,
                memory: data.memory,
                swap: data.swap,
                disk: data.disk,
                io: data.io,
                cpu: data.cpu,
                databases: data.databases,
                allocations: data.allocations,
                backups: data.backups,
                nest: data.nest
            },
        });
    } catch (err) {
        console.error(err);
        return {message: 'An error occurred while creating the package'};
    }

    revalidatePath('/admin/packages');
    return { message: 'Package created successfully', success: true };
}
