import type {Metadata} from "next";
import {Menu} from "lucide-react";
import Sidebar from "@/app/(client)/dashboard/sidebar";

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
                <div className="drawer-content h-auto bg-base-200">
                    <div className="w-full">
                        <label htmlFor="sidebar-drawer" className="btn btn-ghost drawer-button lg:hidden">
                            <Menu/>
                        </label>
                    </div>
                    <main className={'p-3 md:p-8'}>
                        <div>
                            {children}
                        </div>
                    </main>
                </div>
                <div className="drawer-side min-h-[calc(100vh-65px)]">
                    <label htmlFor="sidebar-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <Sidebar/>
                </div>
            </div>
        </div>

    );
}
