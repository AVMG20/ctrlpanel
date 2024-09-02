'use client';
import Link from "next/link";
import {useFormState} from "react-dom";
import login, {FieldErrors} from "@/app/auth/login/actions";
import FormInput from "@/components/form/form-input";
import SubmitBtn from "@/components/submit-btn";

export default function Login() {
    const [state, action] = useFormState<FieldErrors, FormData>(login, {});

    if (state?.success) {
        window.location.href = '/dashboard'
    }

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center">

            <div className="card w-96 bg-base-100 shadow-xl">

                <figure className="px-10 pt-10">
                    <svg
                        className="w-20 h-20 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                </figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">Login</h2>

                    {state?.message && (
                        <div className="alert alert-error">
                            {state.message}
                        </div>
                    )}

                    <form action={action}>

                        <FormInput id={'email'}
                                   label={'Email'}
                                   type="email"
                                   errorMessage={state?.email?.shift()}
                                   required/>

                        <FormInput id={'password'}
                                   label={'Password'}
                                   type="password"
                                   errorMessage={state?.password?.shift()}
                                   required/>

                        <div className="form-control mt-6">
                            <span>
                                Don't have an account?{' '}
                                <Link href={"/auth/register"} className="text-primary">
                                    Register
                                </Link>
                            </span>
                        </div>

                        <SubmitBtn label={'Login'} btnClass={'w-full'}/>
                    </form>
                </div>
            </div>
        </div>
    )
}