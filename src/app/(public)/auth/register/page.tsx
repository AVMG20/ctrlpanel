'use client';
import Link from "next/link";
import SubmitBtn from "@/components/ui/form/submit-btn";
import FormInput from "@/components/ui/form/form-input";
import {useFormState} from "react-dom";
import register, {FieldErrors} from "@/app/(public)/auth/register/actions";
import React from "react";
import {useRouter} from "next/navigation";

export default function Register() {
    const [state, action] = useFormState<FieldErrors, FormData>(register, {});
    const router = useRouter();

    if (state?.success) {
        router.push('/auth/login')
    }

    return (
        //<div className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("/path-to-background-image.jpg")' }}>
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-center text-4xl font-bold mb-4 text-primary">CtrlPanel</h2>
            <div className="card w-full max-w-md bg-base-100 shadow">
                <div className="card-body">
                    <h2 className="text-2xl font-bold mb-2">Create Account</h2>
                    <form action={action}>
                        <FormInput
                            id="username"
                            label="Username"
                            type="username"
                            value="AVMG"
                            errorMessage={state?.username?.shift()}
                            required
                        />

                        <FormInput
                            id="email"
                            label="Email"
                            type="email"
                            value="testing@ctrlpanel.gg"
                            errorMessage={state?.email?.shift()}
                            required
                        />

                        <FormInput
                            id="password"
                            label="Password"
                            type="password"
                            value="this is very secret"
                            errorMessage={state?.password?.shift()}
                            required
                        />

                        <FormInput
                            id="passwordConfirm"
                            label="Password Confirm"
                            type="passwordConfirm"
                            value="this is very secret"
                            errorMessage={state?.passwordConfirm?.shift()}
                            required
                        />

                        <div className="form-control mt-4">
                            <label className="label flex justify-start cursor-pointer space-x-2">
                                <input type="checkbox" name="terms" className="checkbox checkbox-primary" required/>
                                <span className="label-text">I agree to the
                                    <Link href={"/terms"} className="text-primary ml-1">Terms of Service</Link></span>
                            </label>
                            <span className="text-error">{state?.terms?.shift()}</span>
                        </div>

                        <div className="form-control mt-6">
                            <SubmitBtn label="Create Account" btnClass="w-full"/>
                        </div>

                        <div className="text-center mt-4">
                            <span className="text-sm">Already have an account?{' '}
                                <Link href={"/auth/login"} className="text-primary">Login</Link>
                            </span>
                        </div>

                    </form>

                    <div className="mt-4 text-center space-x-2 text-sm text-secondary">
                        <Link href={"/imprint"} className="link link-hover link-primary">Imprint</Link> |
                        <Link href={"/privacy"} className="link link-hover link-primary">Privacy</Link> |
                        <Link href={"/terms"} className="link link-hover link-primary">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
