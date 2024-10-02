'use client';
import { ColumnDef } from "@tanstack/react-table";
import SelectColumn from "@/components/ui/table/columns/select-column";
import { DataTable } from "@/components/ui/table/data-table";
import { DeleteButton, EditLink } from "@/components/ui/table/action-buttons";
import { deleteVoucher } from "./actions";

type VoucherData = {
    id: string
    code: string
    amount: number
    maxUses: number
    usedCount: number
    validUntil: Date
    createdAt: Date
    updatedAt: Date
}

const Columns: ColumnDef<VoucherData>[] = [
    SelectColumn,
    {
        accessorKey: "id",
        header: "ID",
        enableGlobalFilter: false,
    },
    {
        header: "Code",
        accessorKey: "code",
    },
    {
        header: "Amount",
        accessorKey: "amount",
    },
    {
        header: "Max Uses",
        accessorKey: "maxUses",
    },
    {
        header: "Used Count",
        accessorKey: "usedCount",
    },
    {
        header: "Valid Until",
        accessorKey: "validUntil",
        cell: ({ row }) => new Date(row.original.validUntil).toUTCString(),
    },
    {
        header: "Valid",
        accessorKey: "valid",
        cell: ({ row }) => {
            const isValid =
                row.original.usedCount < row.original.maxUses &&
                new Date() < new Date(row.original.validUntil);

            return (
                <div className={`badge ${isValid ? 'badge-success' : 'badge-error'}`}>
                    {isValid ? 'Valid' : 'Invalid'}
                </div>
            );
        },
        sortingFn: (a, b) => {
            const aValid =
                a.original.usedCount < a.original.maxUses &&
                new Date() < new Date(a.original.validUntil);

            const bValid =
                b.original.usedCount < b.original.maxUses &&
                new Date() < new Date(b.original.validUntil);

            return aValid && !bValid ? -1 : !aValid && bValid ? 1 : 0;
        }
    },
    {
        header: "Created At",
        accessorKey: "createdAt",
        cell: ({ row }) => new Date(row.original.createdAt).toUTCString(),
    },
    {
        header: "Updated At",
        accessorKey: "updatedAt",
        cell: ({ row }) => row.original.updatedAt ? new Date(row.original.updatedAt).toUTCString() : '-',
    },
    {
        header: "Actions",
        cell: ({ row }) => {
            return (
                <div className={'flex'}>
                    <EditLink href={`/admin/vouchers/edit/${row.original.id}`}/>
                    <DeleteButton onClick={async () => {
                        //TODO make model popup and loader etc...
                        if (confirm('Are you sure you want to delete this voucher?')) {
                            const data = new FormData();
                            data.append('id', row.original.id);
                            await deleteVoucher({}, data);
                        }
                    }}/>
                </div>
            )
        }
    }
];

export default function VoucherTable({ data }: { data: VoucherData[] }) {
    return (
        <DataTable
            title={"Vouchers"}
            data={data}
            columns={Columns}
            visibilityState={{
                id: false,
                createdAt: false,
                updatedAt: false,
            }}
        />
    )
}