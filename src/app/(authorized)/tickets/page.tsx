import { auth } from "@/auth";
import PageTitle from "@/components/util/page-title";
import { prisma } from "@/prisma";
import TicketsTable from "./table";
import { TicketForm } from "@/app/(authorized)/tickets/form";
import Card from "@/components/ui/card";

export default async function Page() {
    const session = await auth();
    if (!session) return null; // There should always be a session here

    const tickets = await prisma.ticket.findMany({
        where: {
            userId: session.user.id,
        },
        select: {
            id: true,
            title: true,
            createdAt: true,
            status: true,
            priority: true,
        },
        orderBy: [
            {
                status: 'asc',
            },
            {
                createdAt: 'desc',
            }
        ]
    });

    return (
        <div>
            <PageTitle title="Tickets" description="Create a new ticket or view existing ones." />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                {/* No tickets found */}
                {tickets.length === 0 && (
                    <Card title={'My Tickets'}>
                        <div className="text-center flex items-center text-gray-500">
                            You have no tickets yet. Create a new ticket to get started.
                        </div>
                    </Card>
                )}

                {/* Tickets List */}
                {tickets.length > 0 && (
                    <TicketsTable data={tickets}/>
                )}

                {/* New Ticket Form */}
                <TicketForm/>
            </div>
        </div>
    );
}
