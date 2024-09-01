'use client';

import {useFormState} from 'react-dom';
import {createMessage} from "@/app/(client)/test/actions";
import SubmitBtn from "@/components/submit-btn";


export default function Test() {
    // @ts-ignore
    const [formState, action] = useFormState(createMessage, undefined);

    return (
        <div>
            <form action={action} className={'flex flex-col gap-3 mt-5'}>

                <input type="text" name="title" placeholder="Type here" className="input input-bordered w-full"/>

                <input type="text" name="description" placeholder="Type here" className="input input-bordered w-full"/>

                <span className="font-bold">{formState?.message}</span>

                <SubmitBtn/>
            </form>
        </div>
    );
}
