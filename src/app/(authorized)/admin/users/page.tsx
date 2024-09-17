import PageTitle from "@/components/util/page-title";
import {prisma} from "@/prisma";
import UsersTable from "@/app/(authorized)/admin/users/table";
import type {Metadata} from "next";

// Next.js will invalidate the cache when a
// request comes in, at most once every 5 minutes.
export const revalidate = 300;

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
            <UsersTable data={data} />
        </div>
    )
}
