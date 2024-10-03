'use server';
import { z } from 'zod';
import { numericString } from '@/lib/util';
import { revalidatePath } from 'next/cache';
import { prisma } from "@/prisma";
import { createSafeServerAction } from '@/lib/server-actions';

const packageSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    description: z.string().min(10, 'Description must be at least 10 characters'),
    price: numericString(z.number().min(0)),
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

const updatePackageSchema = packageSchema.extend({
    id: z.string(),
});

type UpdatePackageData = z.infer<typeof updatePackageSchema>;
type CreatePackageData = z.infer<typeof packageSchema>;

export const createPackage = createSafeServerAction({
    schema: packageSchema,
    action: async (data: CreatePackageData) => {
        try {
            await prisma.package.create({ data });
            revalidatePath('/admin/packages');
            return { message: 'Package created successfully', success: true };
        } catch (err) {
            console.error(err);
            return { message: 'An error occurred while creating the package' };
        }
    },
    authenticated: true,
});

export const updatePackage = createSafeServerAction({
    schema: updatePackageSchema,
    action: async (data: UpdatePackageData) => {
        try {
            const { id, ...updateData } = data;
            await prisma.package.update({
                where: { id },
                data: updateData,
            });
            revalidatePath('/admin/packages');
            revalidatePath(`/admin/packages/edit/${id}`);
            return { message: 'Package updated successfully', success: true };
        } catch (err) {
            console.error(err);
            return { message: 'An error occurred while updating the package' };
        }
    },
    authenticated: true,
});