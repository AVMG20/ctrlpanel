import type {Metadata} from "next";
import {Menu} from "lucide-react";
import Sidebar from "@/app/(authorized)/sidebar";
import Footer from "@/app/footer";
import NextTopLoader from 'nextjs-toploader';

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
        <>
            <NextTopLoader
                template={"<div id=\"nprogress\">\n" +
                    "    <div\n" +
                    "            class=\"bg-primary fixed z-[1600] top-0 left-0 w-full h-[3px]\"\n" +
                    "            role=\"bar\"\n" +
                    "            style=\"transform: translate3d(-80.557%, 0px, 0px); transition: all 200ms ease 0s;\"\n" +
                    "    >\n" +
                    "        <div class=\"peg\"></div>\n" +
                    "    </div>\n" +
                    "    <div class=\"spinner\" role=\"spinner\">\n" +
                    "        <div\n" +
                    "                class=\"w-[18px] h-[18px] box-border border-2 border-transparent border-t-primary border-l-primary rounded-full animate-spin\"\n" +
                    "                role=\"spinner-icon\"\n" +
                    "        ></div>\n" +
                    "    </div>\n" +
                    "</div>"}
            />
            <div className="drawer lg:drawer-open">
                <input id="sidebar-drawer" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content h-auto bg-base-200">
                    <div className="w-full">
                        <label htmlFor="sidebar-drawer" className="btn btn-ghost drawer-button lg:hidden">
                            <Menu/>
                        </label>
                    </div>
                    <main className={'p-3 mb-8 md:p-8 min-h-screen'}>
                        <div>
                            {children}
                        </div>
                    </main>
                    <Footer/>
                </div>
                <div className="drawer-side min-h-[calc(100vh-65px)]">
                    <label htmlFor="sidebar-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <Sidebar/>
                </div>
            </div>
        </>
    );
}

