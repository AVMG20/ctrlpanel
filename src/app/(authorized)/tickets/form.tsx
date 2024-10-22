'use client';
import React, {useEffect, useRef} from 'react';
import { BaseFormState } from '@/types';
import {useFormState} from "react-dom";
import useToastEffect from "@/components/util/toaster";
import Card from "@/components/ui/card";
import FormInput from "@/components/ui/form/form-input";
import FormSelect from "@/components/ui/form/form-select";
import FormTextarea from "@/components/ui/form/form-textarea";
import SubmitBtn from "@/components/ui/form/submit-btn";
import {createTicket} from "@/app/(authorized)/tickets/actions";


export function TicketForm() {
    const [state, action] = useFormState<BaseFormState, FormData>(createTicket, {});
    const formRef = useRef<HTMLFormElement>(null);
    useToastEffect(state);

    useEffect(() => {
        if (state.success) {
            formRef.current?.reset();
        }
    }, [state]);

    const priorityOptions = [
        { value: 'low', label: 'Low' },
        { value: 'medium', label: 'Medium' },
        { value: 'high', label: 'High' },
    ];

    return (
        <Card title="Create Ticket">
            <form ref={formRef} action={action}>
                <FormInput
                    id="title"
                    label="Title"
                    required={true}
                    errorMessage={state?.title?.shift()}
                />
                <FormSelect
                    id="priority"
                    label="Priority"
                    options={priorityOptions}
                    required={true}
                    errorMessage={state?.priority?.shift()}
                />
                <FormTextarea
                    id="description"
                    label="Description"
                    required={true}
                    errorMessage={state?.description?.shift()}
                />
                <SubmitBtn label="Submit Ticket" />
            </form>
        </Card>
    );
}
