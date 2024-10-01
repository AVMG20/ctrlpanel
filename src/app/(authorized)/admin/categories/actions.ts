'use server';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { prisma } from "@/prisma";
import { BaseFormState } from "@/types";
import { createSafeServerAction } from '@/lib/server-actions';

const categorySchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    description: z.string().min(10, 'Description must be at least 10 characters'),
    images: z.array(z.string().url('Must be a valid URL')).min(1, 'At least one image is required'),
    nest: z.number().int().positive('Nest must be a positive integer'),
});

type CreateCategoryData = z.infer<typeof categorySchema>;

const createCategoryAction = async (
    prevState: BaseFormState,
    data: CreateCategoryData
) => {
    try {
        await prisma.category.create({ data });
        revalidatePath('/admin/categories');
        return { message: 'Category created successfully', success: true };
    } catch (err) {
        console.error(err);
        return { message: 'An error occurred while creating the category' };
    }
};

export const createCategory = createSafeServerAction({
    schema: categorySchema,
    action: createCategoryAction,
    authenticated: true,
});