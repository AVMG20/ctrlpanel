'use client';
import React, { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import useToastEffect from '@/components/util/toaster';
import Card from '@/components/ui/card';
import FormInput from '@/components/ui/form/form-input';
import FormSelect from '@/components/ui/form/form-select';
import SubmitBtn from '@/components/ui/form/submit-btn';
import { createCategory, editCategory } from '@/app/(authorized)/admin/categories/actions';
import { BaseFormState } from "@/types";
import FormRichEditor from "@/components/ui/form/form-rich-editor";
import { Nest } from "@/lib/pterodactyl/types";
import { useRouter } from 'nextjs-toploader/app';
import { Category } from '@prisma/client';
import FormFileInput from "@/components/ui/form/form-file";
import Image from "next/image";

interface CategoryFormProps {
    nests: Nest[]
    editValues?: Category|null
}

export function CategoryForm({ nests, editValues }: CategoryFormProps) {
    const router = useRouter();
    const [state, action] = useFormState<BaseFormState, FormData>(editValues ? editCategory : createCategory , {});
    const formRef = useRef<HTMLFormElement>(null);
    useToastEffect(state);

    useEffect(() => {
        if (state.success) router.push('/admin/categories');
    }, [state]);

    const nestOptions = nests.map(nest => ({
        value: nest.attributes.id,
        label: nest.attributes.name,
    }));

    return (
        <Card title="Create Category">
            <form ref={formRef} action={action}>
                {editValues?.id && <input type="hidden" name="id" value={editValues?.id}/>}
                <FormInput
                    id="name"
                    label="Name"
                    required={true}
                    value={editValues?.name}
                    tooltip={'The name of the category as it will appear to users.'}
                    errorMessage={state?.name?.shift()}
                />
                <FormRichEditor
                    id={'description'}
                    label={'Description'}
                    value={editValues?.description || ''}
                    errorMessage={state?.description?.shift()}
                />
                {/* remove image if a new one is uploaded */}
                <div className="flex gap-3">
                    {editValues?.image && (
                        <div className="flex flex-col mb-3">
                            <p className={'text-secondary'}>Current image</p>
                            <Image src={`/${editValues?.image}?size=preview`}
                                   alt={`/${editValues?.name}`}
                                   width={128}
                                   height={64}
                                   style={{
                                       width: '128px',
                                       height: '64px',
                                   }}
                                   priority={true}/>
                        </div>
                    )}
                    <FormFileInput
                        id="image"
                        label={editValues?.image ? 'Replace Image' : 'Image'}
                        accept={'image/*'}
                        errorMessage={state?.image?.shift()}
                    />
                </div>
                <FormSelect
                    id="nest"
                    label="Nest"
                    options={nestOptions}
                    value={editValues?.nest}
                    required={true}
                    errorMessage={state?.nest?.shift()}
                />

                <div className="flex justify-end mt-3">
                    <SubmitBtn label={editValues ? 'Update Category' : 'Create Category'} />
                </div>
            </form>
        </Card>
    );
}