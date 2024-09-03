'use client';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function NavBar() {
    const { data: session } = useSession();

    return (
        <div className="navbar border-b border-base-200">
            <div className="flex-1">
                <Link href={'/'} className="btn btn-ghost text-xl">
                    CtrlPanel
                </Link>
            </div>
            <div className="flex-none hidden md:flex">
                <Link href={'/store'} className="btn btn-ghost">
                    Store
                </Link>

                {/* No session found */}
                {!session && (
                    <>
                        <Link href={'/auth/login'} className="btn btn-ghost">
                            Login
                        </Link>
                        <Link href={'/auth/register'} className="btn btn-ghost">
                            Register
                        </Link>
                    </>
                )}

                {/* Session found */}
                {session && (
                    <>
                        <Link href={'/dashboard'} className="btn btn-ghost">
                            Dashboard
                        </Link>
                        <Link href={'/profile'} className="btn btn-ghost">
                            Profile
                        </Link>
                        <button
                            type="button"
                            onClick={() => signOut({ callbackUrl: '/' })}
                            className="btn btn-ghost"
                        >
                            Sign Out
                        </button>
                    </>
                )}
            </div>

            {/* Mobile Menu */}
            <div className="dropdown dropdown-end md:hidden">
                <div tabIndex={0} role="button" className="btn btn-ghost">Menu</div>
                <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow mr-3">
                    <li>
                        <Link href={'/store'}>Store</Link>
                    </li>
                    {!session && (
                        <>
                            <li>
                                <Link href={'/auth/login'}>Login</Link>
                            </li>
                            <li>
                                <Link href={'/auth/register'}>Register</Link>
                            </li>
                        </>
                    )}
                    {session && (
                        <>
                            <li>
                                <Link href={'/dashboard'}>Dashboard</Link>
                            </li>
                            <li>
                                <Link href={'/profile'}>Profile</Link>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => signOut({ callbackUrl: '/' })}
                                    className="w-full text-left"
                                >
                                    Sign Out
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}
