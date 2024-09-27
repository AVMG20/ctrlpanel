'use client';

import Link from "next/link";
import {
    Boxes,
    Coins,
    Home,
    LucideMail,
    PanelsTopLeft,
    Receipt,
    Server,
    Settings,
    ShieldHalf,
    ShoppingBasket,
    TicketIcon,
    Tickets,
    Users
} from "lucide-react";
import {usePathname} from "next/navigation";
import React from "react";
import {useSession} from "next-auth/react";
import Gate from "@/components/util/gate";

export default function Sidebar() {
    const {data: session} = useSession();

    return (
        <div className="menu bg-base-100 text-base-content min-h-full w-72 p-4 flex flex-col justify-between">

            <ul className="space-y-1">
                {/* Name and logo */}
                <Link href={'/'} className="flex items-center space-x-2">
                    <ShieldHalf className="w-8 h-8 text-primary"/>
                    <h1 className="text-2xl font-bold">CtrlPanel</h1>
                </Link>

                <div className="divider h-8"></div>

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
                        <SidebarLink href={'/admin/users'} title={'Users'} Icon={Users}/>
                        <SidebarLink href={'/dashboard#'} title={'X Servers'} Icon={Server}/>
                        <SidebarLink href={'/dashboard#'} title={'X Tickets'} Icon={Tickets}/>
                    </>
                </Gate>

                {/* Admin */}
                <Gate roles={'admin'}>
                    <>
                        <div className="divider py-5 text-sm">
                            Administration
                        </div>
                        <SidebarLink href={'/admin/packages'} title={'Packages'} Icon={Boxes}/>
                        <SidebarLink href={'/dashboard#'} title={'X Credit Store'} Icon={ShoppingBasket}/>
                        <SidebarLink href={'/dashboard#'} title={'X Vouchers'} Icon={Receipt}/>
                        <SidebarLink href={'/dashboard#'} title={'X Content'} Icon={PanelsTopLeft}/>
                        <SidebarLink href={'/dashboard#'} title={'X Emails'} Icon={LucideMail}/>
                        <SidebarLink href={'/admin/settings/general'} title={'Settings'} Icon={Settings}/>
                    </>
                </Gate>
            </ul>
            <div>
                <Link href={"/profile"}
                      className="card flex flex-row p-5 items-center space-x-3 bg-base-200 hover:bg-base-content/10 transition">
                    <div className="avatar">
                        <div className="w-12 h-12 rounded-full">
                            <img src={session?.user?.image ?? "https://placehold.co/150"} alt="Profile Picture"/>
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