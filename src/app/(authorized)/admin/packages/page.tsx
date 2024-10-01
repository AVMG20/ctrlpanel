import PageTitle from "@/components/util/page-title";
import {prisma} from "@/prisma";
import type {Metadata} from "next";
import Link from "next/link";
import Table from "@/app/(authorized)/admin/packages/table";
import {PlusIcon} from "lucide-react";

// Next.js will invalidate the cache when a
// request comes in, at most once every 5 minutes.
export const revalidate = 300;

export const metadata: Metadata = {
    title: "Admin | Server configurations",
};

export default async function Page() {
    const data = await prisma.package.findMany();

    return (
        <div>
            <PageTitle title={"Server Configurations"}
                       description={"Manage users in the system"}
                       actions={<>
                           <Link href="/admin/packages/edit">
                               <button className="btn btn-sm btn-secondary">
                                   <PlusIcon/>
                                   Create Package
                               </button>
                           </Link>
                       </>}
            />
            <Table data={data} />
        </div>
    )
}
