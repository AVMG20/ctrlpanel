'use client';

import Card from "@/components/ui/card";
import React, {useEffect} from "react";
import {useFormState} from "react-dom";
import {BaseFormState} from "@/types";
import {editProfile, revalidateProfilePage} from "@/app/(authorized)/profile/actions";
import FormInput from "@/components/ui/form/form-input";
import SubmitBtn from "@/components/ui/form/submit-btn";
import {Session} from "next-auth";
import useToastEffect from "@/components/util/toaster";
import {signOut, useSession} from "next-auth/react";


export function EditProfileForm({session} : { session: Session }) {
    const { update } = useSession()
    const [state, action] = useFormState<BaseFormState, FormData>(editProfile, {});
    useToastEffect(state)

    //we need this to update the session data.
    //we only need this cuss we edit user data
    useEffect(() => {
        if (state.success) {
            update({username: 'username'}).then(async data => {
                await revalidateProfilePage()
            })
        }
    }, [state])

    return <Card title="Edit profile">
        <form action={action}>
            <input type="hidden" name="id" value={session.user.id}/>
            <FormInput id={'name'} label={'Full Name'} value={session.user.name} required={true} errorMessage={state?.name?.shift()} />
            <FormInput id={'email'} label={'Email'} type={'email'} value={session.user.email} required={true} errorMessage={state?.email?.shift()} />
            <SubmitBtn label={'Save Changes'}/>
        </form>
    </Card>;
}

export function SignOutButton() {
    return <button onClick={() => signOut({callbackUrl: '/'})} className="btn btn-accent btn-outline btn-sm">Logout</button>
}