import PageTitle from "@/components/util/page-title";
import { prisma } from "@/prisma";
import type { Metadata } from "next";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import VoucherTable from "./table";

export const revalidate = 300;

export const metadata: Metadata = {
    title: "Admin | Vouchers",
};

export default async function Page() {
    const vouchers = await prisma.voucher.findMany();

    return (
        <div>
            <PageTitle
                title={"Vouchers"}
                description={"Manage vouchers in the system"}
                actions={
                    <Link href="/admin/vouchers/edit">
                        <button className="btn btn-sm btn-secondary">
                            <PlusIcon />
                            Create Voucher
                        </button>
                    </Link>
                }
            />
            <VoucherTable data={vouchers} />
        </div>
    );
}