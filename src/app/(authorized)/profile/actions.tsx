'use client';
import {signOut} from "next-auth/react";

export function SignOutButton() {
    return <button onClick={() => signOut({callbackUrl: '/'})} className="btn btn-accent btn-outline btn-sm">Logout</button>
}