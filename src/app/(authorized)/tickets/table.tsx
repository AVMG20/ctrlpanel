"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/table/data-table";
import {ViewButton} from "@/components/ui/table/action-buttons";
import Date from "@/components/util/date";
import StatusBadge from "@/components/util/status-badge";

type TicketData = {
    id: string;
    title: string;
    createdAt: Date;
    status: string;
    priority: string;
};

const Columns: ColumnDef<TicketData>[] = [
    {
        accessorKey: "id",
        header: "ID",
        enableGlobalFilter: false,
    },
    {
        header: "Title",
        accessorKey: "title",
    },
    {
        header: "Priority",
        accessorKey: "priority",
    },
    {
        header: "Date",
        accessorKey: "createdAt",
        cell: ({ row }) => {
            const value = row.getValue("createdAt") as Date;
            return <Date date={value} />;
        },
    },
    {
        header: "Status",
        accessorKey: "status",
        cell: ({ row }) => {
            const value = row.getValue("status") as string;
            return <StatusBadge status={value} />;
        },
    },
    {
        header: "Actions",
        cell: ({ row }) => {
            return (
                <div className="flex">
                    <ViewButton onClick={() => {}} />
                </div>
            );
        },
    },
];

export default function TicketsTable({ data }: { data: TicketData[] }) {
    return (
        <DataTable
            title={'My Tickets'}
            data={data}
            columns={Columns}
            visibilityState={{
                id: false,
            }}
        />
    );
}
