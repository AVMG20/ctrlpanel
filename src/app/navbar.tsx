'use client';
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";

export default function NavBar() {
    const {data: session} = useSession();


    return (
        <div className="navbar border-b border-base-200">
            <div className="flex-1">
                <Link href={'/'} className="btn btn-ghost text-xl">CtrlPanel</Link>
            </div>
            <div className="flex-none">
                <Link href={'/store'} className="btn btn-ghost">Store</Link>

                {/* No session found */}
                {!session && (
                    <>
                        <Link href={'/auth/login'} className="btn btn-ghost">Login</Link>
                        <Link href={'/auth/register'} className="btn btn-ghost">Register</Link>
                    </>
                )}

                {/* Session found */}
                {session && (
                    <>
                        <Link href={'/dashboard'} className="btn btn-ghost">Dashboard</Link>
                        <Link href={'/profile'} className="btn btn-ghost">Profile</Link>
                        <button type="button" onClick={() => signOut({callbackUrl: '/'})} className="btn btn-ghost">Sign Out</button>
                    </>
                )}

            </div>
        </div>
    )
}