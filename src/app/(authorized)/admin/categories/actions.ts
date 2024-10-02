'use server';
import {z} from 'zod';
import {revalidatePath} from 'next/cache';
import {createSafeServerAction} from '@/lib/server-actions';
import {numericString} from "@/lib/util";
import ImageService from "@/lib/image-service";
import { prisma } from '@/prisma';

const categorySchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    description: z.string().min(10, 'Description must be at least 10 characters').nullish(),
    image: z
        .any()
        .nullish()
        .refine((file) => {
            if (!file) return true;
            else return file?.size <= 5000000;
        }, 'Max image size is 5MB.')
        .refine((file) => {
            if (!file) return true;
            else return ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(file?.type)}, "Only .jpg, .jpeg, .png and .webp formats are supported."),
    nest: numericString(z.number()),
});

type CategoryData = z.infer<typeof categorySchema>;

const editCategorySchema = categorySchema.extend({
    id: z.string(),
});

type EditCategoryData = z.infer<typeof editCategorySchema>;

const createCategoryAction = async (
    data: CategoryData
) => {
    try {
        const imagePath = await ImageService.storeImage(data.image) as string;

        await prisma.category.create({
            data: {
                ...data,
                image: imagePath
            }
        });

        revalidatePath('/admin/categories');
        revalidatePath('/store');

        return { message: 'Category created successfully', success: true };
    } catch (err) {
        console.error(err);
        return { message: 'An error occurred while creating the category' };
    }
};

const editCategoryAction = async (
    data: EditCategoryData
) => {
    try {
        const { id, image, ...updateData } = data;

        // Store the image if it exists
        let imagePath;
        if (image) {
            //fetch previous image path and delete previous image
            const previousCategory = await prisma.category.findUnique({ where: { id } });
            if (previousCategory?.image) await ImageService.deleteImage(previousCategory.image).catch(() => console.error('Failed to delete previous image'));

            // Store the new image
            imagePath = await ImageService.storeImage(image) as string;
        }

        await prisma.category.update({
            where: { id },
            data: {
                ...updateData,
                ...(imagePath && { image: imagePath }),
            }
        });

        revalidatePath('/admin/categories');
        revalidatePath(`/admin/categories/${id}`);
        revalidatePath('/store');

        return { message: 'Category updated successfully', success: true };
    } catch (err) {
        console.error(err);
        return { message: 'An error occurred while updating the category' };
    }
};

const deleteCategoryAction = async (data: { id: string }) => {
    try {
        const result = await prisma.category.delete({ where: { id: data.id } });

        await ImageService.deleteImage(result.image).catch(() => console.error('Failed to delete previous image'));

        revalidatePath('/admin/categories');
        revalidatePath(`/admin/categories/${data.id}`);
        revalidatePath('/store');

        return { message: 'Category deleted successfully', success: true };
    } catch (err) {
        console.error(err);
        return { message: 'An error occurred while deleting the category' };
    }
}

export const createCategory = createSafeServerAction({
    schema: categorySchema,
    action: createCategoryAction,
    authenticated: true,
});

export const editCategory = createSafeServerAction({
    schema: editCategorySchema,
    action: editCategoryAction,
    authenticated: true,
});

export const deleteCategory = createSafeServerAction({
    schema: z.object({ id: z.string() }),
    action: deleteCategoryAction,
    authenticated: true,
});