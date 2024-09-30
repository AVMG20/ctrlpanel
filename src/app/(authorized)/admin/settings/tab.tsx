'use client';
import {usePathname} from "next/navigation";
import Link from "next/link";
import React from "react";

export default function Tab({href, title}: {href: string; title: string}) {
    const pathname = usePathname();

    return <Link href={`/admin/settings/${href}`} className={`tab ${pathname.endsWith(href) ? 'tab-active' : ''}`}>
        {title}
    </Link>
}
