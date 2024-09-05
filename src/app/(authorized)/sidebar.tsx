'use client';

import Link from "next/link";
import {Coins, Home, Server, ShoppingCart, TicketIcon} from "lucide-react";
import {usePathname} from "next/navigation";
import React from "react";

export default function Sidebar() {
    return (
        <div className="menu bg-base-100 text-base-content min-h-full w-72 p-4 flex flex-col justify-between">
            <ul className="space-y-1">
                <SidebarLink href={'/dashboard'} title={'Dashboard'} Icon={Home}/>
                <SidebarLink href={'/servers'} title={'Servers'} Icon={Server}/>
                <SidebarLink href={'/credits'} title={'Credits'} Icon={Coins}/>
                <SidebarLink href={'/tickets'} title={'Tickets'} Icon={TicketIcon}/>
            </ul>
            <div>
                <Link href={"/profile"} className="card flex flex-row p-5 items-center space-x-3 bg-base-200 hover:bg-base-content/10 transition">
                    <div className="avatar">
                        <div className="w-12 h-12 rounded-full">
                            <img src="https://via.placeholder.com/150" alt="Profile Picture"/>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-lg">John Doe</p>
                        <div className="flex items-center text-sm text-secondary ">
                            <Coins className="w-5 h-5 mr-1 text-secondary"/>
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
    return (
        <li>
            <Link href={href} className={`${pathname === href ? 'bg-base-content/10 border-l-2 border-primary' : ''}`}>
                <Icon/>
                {title}
            </Link>
        </li>
    )
}