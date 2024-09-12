import PageTitle from "@/components/util/page-title";
import {prisma} from "@/prisma";
import UsersTable from "@/app/(authorized)/admin/users/table";

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
