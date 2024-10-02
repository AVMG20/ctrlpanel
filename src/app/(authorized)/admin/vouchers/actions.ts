'use server';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { createSafeServerAction } from '@/lib/server-actions';
import { prisma } from '@/prisma';
import {numericString} from "@/lib/util";

const voucherSchema = z.object({
    code: z.string().min(6, 'Code must be at least 6 characters'),
    amount: numericString(z.number().int().positive('Amount must be a positive integer')),
    maxUses: numericString(z.number().int().positive('Max uses must be a positive integer')),
    validUntil: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: 'Invalid date format',
    }),
});

type VoucherData = z.infer<typeof voucherSchema>;

const editVoucherSchema = voucherSchema.extend({
    id: z.string(),
});

type EditVoucherData = z.infer<typeof editVoucherSchema>;

export const createVoucher = createSafeServerAction({
    schema: voucherSchema,
    authenticated: true,
    action: async (data: VoucherData) => {
        try {
            await prisma.voucher.create({
                data: {
                    ...data,
                    validUntil: new Date(data.validUntil),
                },
            });

            revalidatePath('/admin/vouchers');
            return { message: 'Voucher created successfully', success: true };
        } catch (err) {
            console.error(err);
            return { message: 'An error occurred while creating the voucher' };
        }
    },
});

export const editVoucher = createSafeServerAction({
    schema: editVoucherSchema,
    authenticated: true,
    action: async (data: EditVoucherData) => {
        try {
            const { id, ...updateData } = data;
            await prisma.voucher.update({
                where: { id },
                data: {
                    ...updateData,
                    validUntil: new Date(updateData.validUntil),
                },
            });

            revalidatePath('/admin/vouchers');
            revalidatePath(`/admin/vouchers/edit/${id}`);
            return { message: 'Voucher updated successfully', success: true };
        } catch (err) {
            console.error(err);
            return { message: 'An error occurred while updating the voucher' };
        }
    },
});

export const deleteVoucher = createSafeServerAction({
    schema: z.object({ id: z.string() }),
    authenticated: true,
    action: async (data: { id: string }) => {
        try {
            await prisma.voucher.delete({ where: { id: data.id } });

            revalidatePath('/admin/vouchers');
            return { message: 'Voucher deleted successfully', success: true };
        } catch (err) {
            console.error(err);
            return { message: 'An error occurred while deleting the voucher' };
        }
    },
});