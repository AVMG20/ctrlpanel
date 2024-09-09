'use client'
import React from 'react';
import Link from 'next/link';
import {usePathname} from "next/navigation";
import PageTitle from "@/components/util/page-title";


export default function SettingsLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <>
            <PageTitle title={'Settings'} description={'Configure the panels behaviour'} />
            <div className="tabs tabs-bordered mb-4">
                <Tab href="general" title="General" />
                <Tab href="account" title="Account" />
                <Tab href="notifications" title="Notification" />
                {/*<Link href="/settings/privacy" className="tab tab-bordered">*/}
                {/*    Privacy*/}
                {/*</Link>*/}
            </div>
            <div>{children}</div>
        </>
    );
}

function Tab({href, title}: {href: string; title: string}) {
    const pathname = usePathname();

    return <Link href={`/admin/settings/${href}`} className={`tab ${pathname.endsWith(href) ? 'tab-active' : ''}`}>
        {title}
    </Link>
}
