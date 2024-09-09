'use client';

import Link from "next/link";
import {
    Coins,
    Home, LucideMail,
    MonitorCog, PanelsTopLeft,
    Radio,
    Receipt,
    Server,
    Settings, ShieldHalf,
    ShoppingBasket,
    TicketIcon, Tickets,
    Users
} from "lucide-react";
import {usePathname} from "next/navigation";
import React from "react";
import {useSession} from "next-auth/react";
import Gate from "@/utils/gate";

export default function Sidebar() {
    const {data: session} = useSession();

    return (
        <div className="menu bg-base-100 text-base-content min-h-full w-72 p-4 flex flex-col justify-between">

            <ul className="space-y-1">
                {/* Name and logo */}
                <Link href={'/'} className="flex items-center space-x-2 mb-5 pb-3 border-b border-b-secondary">
                    <ShieldHalf className="w-8 h-8 text-primary"/>
                    <h1 className="text-2xl font-bold">CtrlPanel</h1>
                </Link>

                {/* User links */}
                <SidebarLink href={'/dashboard'} title={'Dashboard'} Icon={Home}/>
                <SidebarLink href={'/servers'} title={'Servers'} Icon={Server}/>
                <SidebarLink href={'/credits'} title={'Credits'} Icon={Coins}/>
                <SidebarLink href={'/tickets'} title={'Tickets'} Icon={TicketIcon}/>

                {/* Moderation */}
                <Gate roles={['mod', 'admin']}>
                    <>
                        <div className="divider py-5 text-sm">
                            Moderation
                        </div>
                        <SidebarLink href={'/dashboard#'} title={'Users'} Icon={Users}/>
                        <SidebarLink href={'/dashboard#'} title={'Servers'} Icon={Server}/>
                        <SidebarLink href={'/dashboard#'} title={'Tickets'} Icon={Tickets}/>
                    </>
                </Gate>

                {/* Admin */}
                <Gate roles={'admin'}>
                    <>
                        <div className="divider py-5 text-sm">
                            Administration
                        </div>
                        <SidebarLink href={'/dashboard#'} title={'Server Configs'} Icon={MonitorCog}/>
                        <SidebarLink href={'/dashboard#'} title={'Credit Store'} Icon={ShoppingBasket}/>
                        <SidebarLink href={'/dashboard#'} title={'Vouchers'} Icon={Receipt}/>
                        <SidebarLink href={'/dashboard#'} title={'Content'} Icon={PanelsTopLeft}/>
                        <SidebarLink href={'/dashboard#'} title={'Emails'} Icon={LucideMail}/>
                        <SidebarLink href={'/admin/settings/general'} title={'Settings'} Icon={Settings}/>
                    </>
                </Gate>
            </ul>
            <div>
                <Link href={"/profile"}
                      className="card flex flex-row p-5 items-center space-x-3 bg-base-200 hover:bg-base-content/10 transition">
                    <div className="avatar">
                        <div className="w-12 h-12 rounded-full">
                            <img src={session?.user?.image ?? "https://via.placeholder.com/150"} alt="Profile Picture"/>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-lg">{session?.user?.name}</p>
                        <div className="flex items-center font-bold">
                            <Coins className="w-5 h-5 mr-1 text-primary"/>
                            5000
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

function SidebarLink({
    href,
    title,
    Icon
}: { href: string, title: string, Icon: any }) {
    const pathname = usePathname();
    const isActive = pathname.includes(href)
        || pathname.includes('settings') && href.includes('settings');

    return (
        <li>
            <Link href={href} className={`${isActive ? 'bg-base-content/10 border-l-2 border-primary' : ''}`}>
                <Icon/>
                {title}
            </Link>
        </li>
    )
}