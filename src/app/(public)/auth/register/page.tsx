import Link from "next/link";

export default function Register() {
    return (
        //<div className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("/path-to-background-image.jpg")' }}>
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-center text-4xl font-bold mb-4 text-primary">CtrlPanel</h2>
            <div className="card w-full max-w-md bg-base-100 shadow">
                <div className="card-body">
                    <h2 className="text-2xl font-bold mb-2">Create Account</h2>
                    <form>
                        <div className="form-control">
                            <label className="label" htmlFor="name">
                                <span className="label-text">Username</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Username"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="email">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="password">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="confirmPassword">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-4">
                            <label className="label flex justify-start cursor-pointer space-x-2">
                                <input type="checkbox" className="checkbox checkbox-primary" required/>
                                <span className="label-text">I agree to the <Link href={"/terms"}
                                                                                  className="text-primary">Terms of Service</Link></span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary w-full">Create Account</button>
                        </div>
                        <div className="text-center mt-4">
                            <span className="text-sm">Already have an account?{' '}
                                <Link href={"/auth/login"} className="text-primary">Login</Link>
                            </span>
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
    )
}
