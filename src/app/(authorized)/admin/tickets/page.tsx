import PageTitle from "@/components/util/page-title";
import { prisma } from "@/prisma";
import TicketsTable from "@/app/(authorized)/admin/tickets/table";
import type { Metadata } from "next";

// Next.js will invalidate the cache when a
// request comes in, at most once every 5 minutes.
export const revalidate = 300;

export const metadata: Metadata = {
    title: "Tickets",
};

export default async function TicketsPage() {
    const data = await prisma.ticket.findMany({
        select: {
            id: true,
            title: true,
            priority: true,
            status: true,
            description: true,
            createdAt: true,
            updatedAt: true,
            user: {
                select: {
                    id: true,
                    email: true,
                    name: true,
                },
            },
        },
    });

    return (
        <div>
            <PageTitle title={"Tickets"} description={"Manage tickets in the system"} />
            <TicketsTable data={data} />
        </div>
    )
}