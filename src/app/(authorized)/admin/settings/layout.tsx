import React from 'react';
import Link from 'next/link';
import {usePathname} from "next/navigation";
import PageTitle from "@/components/util/page-title";
import type {Metadata} from "next";
import Tab from "@/app/(authorized)/admin/settings/tab";

export const metadata: Metadata = {
    title: "Settings",
};

export default async function SettingsLayout({
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

