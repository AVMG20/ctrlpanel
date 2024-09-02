'use client';

import Link from "next/link";
import {Coins, Home, Server, TicketIcon} from "lucide-react";
import {usePathname} from "next/navigation";
import React from "react";

export default function Sidebar() {
    return (
        <ul className="menu bg-base-100 text-base-content min-h-full w-72 p-4 space-y-1">
            <SidebarLink href={'/dashboard'} title={'Dashboard'} Icon={Home}/>
            <SidebarLink href={'/servers'} title={'Servers'} Icon={Server}/>
            <SidebarLink href={'/credits'} title={'Credits'} Icon={Coins}/>
            <SidebarLink href={'/tickets'} title={'Tickets'} Icon={TicketIcon}/>
        </ul>
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
            <Link href={href} className={`${pathname === href ? 'bg-secondary/50' : ''}`}>
                <Icon/>
                {title}
            </Link>
        </li>
    )
}