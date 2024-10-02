'use client';
import React, { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import useToastEffect from '@/components/util/toaster';
import Card from '@/components/ui/card';
import FormInput from '@/components/ui/form/form-input';
import SubmitBtn from '@/components/ui/form/submit-btn';
import { createVoucher, editVoucher } from './actions';
import { BaseFormState } from "@/types";
import { useRouter } from 'next/navigation';
import { Voucher } from '@prisma/client';

interface VoucherFormProps {
    editValues?: Voucher | null;
    creditName: string;
}

export function VoucherForm({ editValues, creditName }: VoucherFormProps) {
    const router = useRouter();
    const [state, action] = useFormState<BaseFormState, FormData>(editValues ? editVoucher : createVoucher, {});
    const formRef = useRef<HTMLFormElement>(null);
    useToastEffect(state);

    useEffect(() => {
        if (state.success) router.push('/admin/vouchers');
    }, [state]);

    useEffect(() => {
        if (!editValues) {
            generateRandomCode();
        }
    }, []);

    const generateRandomCode = () => {
        const code = Math.random().toString(36).substring(2, 8).toUpperCase();
        if (formRef.current) {
            const codeInput = formRef.current.elements.namedItem('code') as HTMLInputElement;
            codeInput.value = code;
        }
    };

    return (
        <Card title={editValues ? "Edit Voucher" : "Create Voucher"}>
            <form ref={formRef} action={action}>
                {editValues?.id && <input type="hidden" name="id" value={editValues?.id} />}
                <FormInput
                    id="code"
                    label="Code"
                    required={true}
                    value={editValues?.code}
                    tooltip={'The code users will enter to redeem the voucher.'}
                    errorMessage={state?.code?.shift()}
                />
                <button type="button" className="btn btn-sm btn-secondary mb-2" onClick={generateRandomCode}>
                    Generate Random Code
                </button>
                <FormInput
                    id="amount"
                    label="Amount"
                    type="number"
                    required={true}
                    value={editValues?.amount.toString()}
                    tooltip={`The amount of ${creditName} this voucher will provide.`}
                    errorMessage={state?.amount?.shift()}
                />
                <FormInput
                    id="maxUses"
                    label="Max Uses"
                    type="number"
                    required={true}
                    value={editValues?.maxUses.toString()}
                    tooltip={'The maximum number of users that can redeem this voucher.'}
                    errorMessage={state?.maxUses?.shift()}
                />
                <FormInput
                    id="validUntil"
                    label="Valid Until"
                    type="datetime-local"
                    required={true}
                    value={editValues?.validUntil.toISOString().slice(0, 16)}
                    tooltip={'The date and time when this voucher will expire.'}
                    errorMessage={state?.validUntil?.shift()}
                />
                <div className="flex justify-end mt-3">
                    <SubmitBtn label={editValues ? 'Update Voucher' : 'Create Voucher'} />
                </div>
            </form>
        </Card>
    );
}