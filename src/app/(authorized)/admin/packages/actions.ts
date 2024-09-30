'use server';
import { z } from 'zod';
import { numericString } from '@/utils/util';
import { revalidatePath } from 'next/cache';
import { prisma } from "@/prisma";
import { BaseFormState } from "@/types";
import { createSafeServerAction } from '@/lib/server-actions';

const createPackageSchema = z.object({
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
    location: numericString(z.number()),
    nest: numericString(z.number()),
});

type CreatePackageData = z.infer<typeof createPackageSchema>;

const createPackageAction = async (
    prevState: BaseFormState,
    data: CreatePackageData
) => {
    try {
        await prisma.package.create({ data });
        revalidatePath('/admin/packages');
        return { message: 'Package created successfully', success: true };
    } catch (err) {
        console.error(err);
        return { message: 'An error occurred while creating the package' };
    }
};

export const createPackage = createSafeServerAction({
    schema: createPackageSchema,
    action: createPackageAction,
    authenticated: true,
});