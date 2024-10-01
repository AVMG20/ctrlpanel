'use client';
import React, { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import useToastEffect from '@/components/util/toaster';
import Card from '@/components/ui/card';
import FormInput from '@/components/ui/form/form-input';
import FormSelect from '@/components/ui/form/form-select';
import SubmitBtn from '@/components/ui/form/submit-btn';
import { createCategory } from './actions'; // Adjust the import path as needed
import { BaseFormState } from "@/types";
import FormRichEditor from "@/components/ui/form/form-rich-editor";
import { Nest } from "@/lib/pterodactyl/types";
import { useRouter } from 'nextjs-toploader/app';

interface CategoryFormProps {
    nests: Nest[]
}

export function CategoryForm({ nests }: CategoryFormProps) {
    const router = useRouter();
    const [state, action] = useFormState<BaseFormState, FormData>(createCategory, {});
    const formRef = useRef<HTMLFormElement>(null);
    useToastEffect(state);

    useEffect(() => {
        if (state.success) {
            formRef.current?.reset();
            router.push('/admin/categories');
        }
    }, [state]);

    const nestOptions = nests.map(nest => ({
        value: nest.attributes.id,
        label: nest.attributes.name,
    }));

    return (
        <Card title="Create Category">
            <form ref={formRef} action={action}>
                <FormInput
                    id="name"
                    label="Name"
                    required={true}
                    tooltip={'The name of the category as it will appear to users.'}
                    errorMessage={state?.name?.shift()}
                />
                <FormRichEditor
                    id={'description'}
                    label={'Description'}
                    errorMessage={state?.description?.shift()}
                />
                <FormInput
                    id="images"
                    label="Images"
                    type="text"
                    required={true}
                    tooltip={'Enter image URLs separated by commas'}
                    errorMessage={state?.images?.shift()}
                />
                <FormSelect
                    id="nest"
                    label="Nest"
                    options={nestOptions}
                    required={true}
                    errorMessage={state?.nest?.shift()}
                />

                <div className="flex justify-end mt-3">
                    <SubmitBtn label="Create Category"/>
                </div>
            </form>
        </Card>
    );
}