import PageTitle from "@/components/util/page-title";
import { prisma } from "@/prisma";
import { notFound } from "next/navigation";
import { VoucherForm } from "@/app/(authorized)/admin/vouchers/form";
import  settings  from "@/lib/settings";

export const revalidate = 360;

export async function generateStaticParams() {
    return [];
}

export const metadata = {
    title: 'Edit Voucher',
    description: 'Create or edit a Voucher'
}

export default async function Page({ params }: { params: { id?: string[] } }) {
    const creditName = await settings.get('creditsName', 'Credits') as string;
    let existingData = null;
    if (params.id && params.id.length > 0) {
        existingData = await prisma.voucher.findUnique({ where: { id: params.id[0] } });
        if (!existingData) notFound();
    }

    const title = existingData ? "Edit Voucher" : "Create Voucher";
    const description = existingData ? "Edit an existing voucher" : "Create a new voucher";

    return (
        <div>
            <PageTitle title={title} description={description} />
            <VoucherForm creditName={creditName} editValues={existingData} />
        </div>
    );
}