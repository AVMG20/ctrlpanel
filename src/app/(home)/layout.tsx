import Link from "next/link";
import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "Store",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NavBar/>
            <main className={''}>
                {children}
            </main>
        </>
    );
}

function NavBar() {
    return (
        <div className="navbar border-b border-base-200">
            <div className="flex-1">
                <Link href={'/'} className="btn btn-ghost text-xl">CtrlPanel</Link>
            </div>
            <div className="flex-none">
                <Link href={'/store'} className="btn btn-ghost">Store</Link>
                <Link href={'/login'} className="btn btn-ghost">Login</Link>
                <Link href={'/register'} className="btn btn-ghost">Register</Link>
            </div>
        </div>
    )
}
