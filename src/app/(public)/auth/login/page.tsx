'use client';
import Link from "next/link";
import {useFormState} from "react-dom";
import login, {FieldErrors} from "@/app/(public)/auth/login/actions";
import FormInput from "@/components/ui/form/form-input";
import SubmitBtn from "@/components/ui/form/submit-btn";
import {ServerIcon} from "lucide-react";

export default function Login() {
    const [state, action] = useFormState<FieldErrors, FormData>(login, {});

    if (state?.success) {
        window.location.href = '/dashboard'
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-center text-4xl font-bold mb-4 text-primary">CtrlPanel</h2>
            <div className="card w-full max-w-md bg-base-100 shadow">
                <div className="card-body">
                    <h2 className="text-2xl font-bold mb-2">Login to Panel</h2>

                    <form action={action}>
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
                            value="hey this is secret!"
                            errorMessage={state?.password?.shift()}
                            required
                        />

                        <div className="form-control">
                            <span className="text-sm">
                                <Link href={"/auth/register"} className="text-secondary">
                                    Forgot your password?
                                </Link>
                            </span>
                        </div>

                        <div className="form-control mt-6">
                            <SubmitBtn label="Login" btnClass="w-full"/>
                        </div>

                        <div className="form-control mt-4">
                            <span className="text-sm">
                                Don't have an account?{' '}
                                <Link href={"/auth/register"} className="text-primary">
                                    Register
                                </Link>
                            </span>
                        </div>

                        <div className="divider text-secondary text-sm">
                            Login with socials
                        </div>

                        {/*TODO loop over socials :)*/}
                        <div className="flex flex-col gap-3">
                            <button className="btn w-fullflex items-center space-x-1 w-full">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="16"
                                     height="16"
                                     fill="currentColor"
                                     className="size-6"
                                     viewBox="0 0 16 16">
                                    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                                </svg>
                                <span>Login with Discord</span>
                            </button>

                            <button className="btn w-fullflex items-center space-x-1 w-full">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="16"
                                     height="16"
                                     fill="currentColor"
                                     className="size-6"
                                     viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                                </svg>
                                <span>Login with Google</span>
                            </button>
                        </div>

                    </form>

                    <div className="mt-4 text-center space-x-2 text-sm text-secondary">
                        <Link href={"/imprint"} className="link link-hover">Imprint</Link> |
                        <Link href={"/privacy"} className="link link-hover">Privacy</Link> |
                        <Link href={"/terms"} className="link link-hover">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}