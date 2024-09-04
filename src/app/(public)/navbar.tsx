'use client';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import {Session} from "next-auth";

export default function NavBar() {
    const {data: session} = useSession();

    return (
        <div className="navbar border-b border-base-200 flex flex-row justify-between">
            <div className="">
                <Link href={'/'} className="btn btn-ghost text-xl">
                    CtrlPanel
                </Link>
            </div>

            <div>
                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-none">
                    <div className="flex flex-row gap-3">
                        <NavigationLinks session={session}/>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="dropdown dropdown-end md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost">Menu</div>
                    <ul tabIndex={0} className="menu dropdown-content flex flex-col gap-3 bg-base-100 z-10 w-52 p-2 shadow mr-3">
                        <NavigationLinks session={session}/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

const NavigationLinks = ({ session }: {session: Session | null}) => (
    <>
        <Link className={'btn btn-ghost'} href={'/store'}>Store</Link>
        {session ? (
            <>
                <Link className={'btn btn-ghost'} href={'/profile'}>Profile</Link>
                <button
                    type="button"
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="btn btn-ghost w-full text-left"
                >
                    Sign Out
                </button>
            </>
        ) : (
            <>
                <Link className={'btn btn-ghost'} href={'/auth/login'}>Login</Link>
                <Link className={'btn btn-ghost'} href={'/auth/register'}>Register</Link>
            </>
        )}
    </>
);