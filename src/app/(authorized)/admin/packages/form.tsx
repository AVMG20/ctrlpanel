'use client';
import React, {useEffect, useRef} from 'react';
import {useFormState} from 'react-dom';
import useToastEffect from '@/components/util/toaster';
import Card from '@/components/ui/card';
import FormInput from '@/components/ui/form/form-input';
import FormSelect from '@/components/ui/form/form-select';
import SubmitBtn from '@/components/ui/form/submit-btn';
import {createPackage} from '@/app/(authorized)/admin/packages/actions';
import {BaseFormState} from "@/types";
import FormRichEditor from "@/components/ui/form/form-rich-editor";
import {Nest, Location} from "@/lib/pterodactyl/types";
import { useRouter } from 'nextjs-toploader/app';

interface ServerConfigurationFormProps {
    nests: Nest[],
    locations: Location[]
}
export function ServerConfigurationForm({
    nests,
    locations
}: ServerConfigurationFormProps) {
    const router = useRouter();
    const [state, action] = useFormState<BaseFormState, FormData>(createPackage, {});
    const formRef = useRef<HTMLFormElement>(null);
    useToastEffect(state);

    useEffect(() => {
        if (state.success) {
            formRef.current?.reset();
            router.push('/admin/packages');
        }
    }, [state]);

    const nestOptions = nests.map(nest => ({
        value: nest.attributes.id,
        label: nest.attributes.name,
    }));

    const locationOptions = locations.map(location => ({
        value: location.attributes.id,
        label: location.attributes.short,
    }));

    return (
        <Card title="Create Package">
            <form ref={formRef} action={action}>

                <FormInput
                    id="name"
                    label="Name"
                    required={true}
                    tooltip={'The name of the package as it will appear to users.'}
                    errorMessage={state?.name?.shift()}
                />
                <FormRichEditor
                    id={'description'}
                    label={'Description'}
                    errorMessage={state?.description?.shift()}
                />
                <FormSelect
                    id="location"
                    label="Location"
                    tooltip={'The location where this package will be available.'}
                    options={locationOptions}
                    required={true}
                    errorMessage={state?.location?.shift()}
                />
                <FormSelect
                    id="nest"
                    label="Nest"
                    options={nestOptions}
                    required={true}
                    errorMessage={state?.nest?.shift()}
                />

                <div className="divider my-8">Resource limits</div>
                <div className="grid grid-cols-2 gap-4">
                    <FormInput
                        id="memory"
                        label="Memory (MB)"
                        type="number"
                        required={true}
                        errorMessage={state?.memory?.shift()}
                    />
                    <FormInput
                        id="swap"
                        label="Swap (MB)"
                        type="number"
                        required={true}
                        errorMessage={state?.swap?.shift()}
                    />
                    <FormInput
                        id="disk"
                        label="Disk (MB)"
                        type="number"
                        required={true}
                        errorMessage={state?.disk?.shift()}
                    />
                    <FormInput
                        id="io"
                        label="IO"
                        type="number"
                        required={true}
                        value={500}
                        errorMessage={state?.io?.shift()}
                    />
                    <FormInput
                        id="cpu"
                        label="CPU"
                        type="number"
                        required={true}
                        value={100}
                        errorMessage={state?.cpu?.shift()}
                    />
                </div>

                <div className="divider my-8">Feature limits</div>
                <div className="grid grid-cols-3 gap-4">
                    <FormInput
                        id="databases"
                        label="Databases"
                        type="number"
                        value={1}
                        required={true}
                        errorMessage={state?.databases?.shift()}
                    />
                    <FormInput
                        id="allocations"
                        label="Allocations"
                        type="number"
                        value={1}
                        required={true}
                        errorMessage={state?.allocations?.shift()}
                    />
                    <FormInput
                        id="backups"
                        label="Backups"
                        type="number"
                        value={1}
                        required={true}
                        errorMessage={state?.feature_limits?.backups?.shift()}
                    />
                </div>

                <div className="flex justify-end mt-3">
                    <SubmitBtn label="Save Package"/>
                </div>

            </form>
        </Card>
    );
}
