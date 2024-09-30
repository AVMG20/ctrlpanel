'use client';
import { ColumnDef } from "@tanstack/react-table";
import SelectColumn from "@/components/ui/table/columns/select-column";
import { DataTable } from "@/components/ui/table/data-table";
import { DeleteButton, EditButton } from "@/components/ui/table/action-buttons";
import Link from "next/link";
import StatusBadge from "@/components/util/status-badge";

type TicketData = {
    id: string;
    title: string;
    priority: string;
    status: string;
    description: string;
    createdAt: Date;
    updatedAt: Date | null;
    user?: {
        id: string;
        email: string;
        name: string | null;
    };
};

const Columns: ColumnDef<TicketData>[] = [
    SelectColumn,
    {
        accessorKey: "id",
        header: "ID",
        enableGlobalFilter: false,
    },
    {
        header: "Title",
        accessorKey: "title",
    },
    // email
    {
        header: 'Email',
        accessorKey: 'user.email',
        cell: ({ row }) => {
            if (row.original.user) {
                const userId = row.original.user.id;
                const userEmail = row.original.user.email;
                return <Link href={`/admin/users/${userId}`} className="text-blue-600 hover:underline">{userEmail}</Link>;
            }
        }
    },
    {
        header: "User",
        accessorKey: "user.name",
        cell: ({ row }) => {
            if (row.original.user) {
                const userId = row.original.user.id;
                const userName = row.original.user.name || "Unknown";
                return <Link href={`/admin/users/${userId}`} className="text-blue-600 hover:underline">{userName}</Link>;
            }
        },
    },
    {
        header: "Priority",
        accessorKey: "priority",
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
        header: "Created At",
        accessorKey: "createdAt",
        cell: ({ row }) => new Date(row.getValue("createdAt")).toDateString(),
        sortingFn: (a, b) => {
            return new Date(a.original.createdAt).getTime() - new Date(b.original.createdAt).getTime();
        }
    },
    {
        header: "Updated At",
        accessorKey: "updatedAt",
        cell: ({row}) => {
            if (row.original.updatedAt) {
                return new Date(row.getValue("updatedAt")).toDateString();
            } else {
                return "N/A";
            }
        },
        sortingFn: (a, b) => {
            if (a.original.updatedAt === null || b.original.updatedAt === null) return 1;
            return new Date(a.original.updatedAt).getTime() - new Date(b.original.updatedAt).getTime();
        },
    },
    {
        header: "Actions",
        cell: ({ row }) => {
            return (
                <div className={'flex'}>
                    <EditButton onClick={() => {}} />
                    <DeleteButton onClick={() => {}} />
                </div>
            )
        }
    }
];

export default function TicketsTable({ data }: { data: TicketData[] }) {
    return (
        <DataTable
            title={"Tickets"}
            data={data}
            columns={Columns}
            visibilityState={{
                id: false,
                updatedAt: false,
                user_email: false,
            }}
        />
    )
}