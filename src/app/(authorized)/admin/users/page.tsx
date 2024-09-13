import PageTitle from "@/components/util/page-title";
import {prisma} from "@/prisma";
import UsersTable from "@/app/(authorized)/admin/users/table";
import type {Metadata} from "next";
import {Suspense} from "react";
import DataTableSkeleton from "@/components/ui/table/data-table-skeleton";

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

export const metadata: Metadata = {
    title: "Admin | Users",
};

export default async function UsersPage() {
    const data = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            accounts: {
                select: {
                    provider: true,
                },
            }
        },
    });

    return (
        <div>
            <PageTitle title={"Users"} description={"Manage users in the system"}/>
            {/*<Suspense fallback={<DataTableSkeleton/>}>*/}
                <UsersTable data={data} />
            {/*</Suspense>*/}
        </div>
    )
}
