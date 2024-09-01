import type {Metadata} from "next";
import {Menu} from "lucide-react";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Overview of your account and services.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div>
            <div className="drawer lg:drawer-open">
                <input id="sidebar-drawer" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content bg-base-200 flex flex-col items-center justify-center">
                    <div className="w-full">
                        <label htmlFor="sidebar-drawer" className="btn btn-ghost drawer-button lg:hidden">
                            <Menu/>
                        </label>
                    </div>
                    <main>
                        {children}
                    </main>
                </div>
                <div className="drawer-side">
                    <label htmlFor="sidebar-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-100 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
}
