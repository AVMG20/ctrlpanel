import {auth} from "@/auth";
import Card from "@/components/ui/card";
import PageTitle from "@/components/util/page-title";
import Date from "@/components/util/date";
import {prisma} from "@/prisma";
import React from "react";
import StatusBadge from "@/components/util/status-badge";
import {TicketForm} from "@/app/(authorized)/tickets/form";

export default async function Page() {
    const session = await auth();
    if (!session) return null; // there should always be a session here

    const tickets = await prisma.ticket.findMany({
        where: {
            userId: session.user.id,
        }
    });

    return (
        <div>
            <PageTitle title="Tickets" description="Create a new ticket or view existing ones."/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Tickets List */}
                <Card title="My tickets">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Priority</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {tickets.map((ticket) => (
                                <tr key={ticket.ticketId}>

                                    <td>{ticket.title}</td>
                                    <td>Normal</td>
                                    <td>{<Date date={ticket.createdAt}/>}</td>
                                    <td>{<StatusBadge status={ticket.status}/>}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </Card>

                {/* New Ticket Form */}
                <TicketForm/>
            </div>
        </div>
    );
};
