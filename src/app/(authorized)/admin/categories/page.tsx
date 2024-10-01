import PageTitle from "@/components/util/page-title";
import {prisma} from "@/prisma";
import type {Metadata} from "next";
import Link from "next/link";
import Table from "@/app/(authorized)/admin/categories/table";
import {PlusIcon} from "lucide-react";

export const revalidate = 300;

export const metadata: Metadata = {
    title: "Admin | Categories",
};

export default async function Page() {
    const data = await prisma.category.findMany();

    return (
        <div>
            <PageTitle
                title={"Categories"}
                description={"Manage store categories in the system"}
                actions={
                    <Link href="/admin/categories/edit">
                        <button className="btn btn-sm btn-secondary">
                            <PlusIcon/>
                            Create Category
                        </button>
                    </Link>
                }
            />
            <Table data={data} />
        </div>
    )
}