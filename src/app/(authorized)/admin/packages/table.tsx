'use client';
import {ColumnDef} from "@tanstack/react-table";
import SelectColumn from "@/components/ui/table/columns/select-column";
import {DataTable} from "@/components/ui/table/data-table";
import {DeleteButton, EditButton} from "@/components/ui/table/action-buttons";

type PackageData = {
    id: string
    name: string
    description: string
    enabled: boolean
    memory: number
    swap: number
    disk: number
    io: number
    cpu: number
    databases: number
    allocations: number
    backups: number
    location: number
    nest: number
    createdAt: Date
    updatedAt: Date | null
}

const Columns: ColumnDef<PackageData>[] = [
    SelectColumn,
    {
        accessorKey: "id",
        header: "ID",
        enableGlobalFilter: false,
    },
    {
        header: "Name",
        accessorKey: "name",
    },
    {
        header: "Price",
        accessorKey: "price",
    },
    {
        header: "Description",
        accessorKey: "description",
    },
    {
        header: "Enabled",
        accessorKey: "enabled",
    },
    {
        header: "Memory",
        accessorKey: "memory",
    },
    {
        header: "Swap",
        accessorKey: "swap",
    },
    {
        header: "Disk",
        accessorKey: "disk",
    },
    {
        header: "IO",
        accessorKey: "io",
    },
    {
        header: "CPU",
        accessorKey: "cpu",
    },
    {
        header: "Databases",
        accessorKey: "databases",
    },
    {
        header: "Allocations",
        accessorKey: "allocations",
    },
    {
        header: "Backups",
        accessorKey: "backups",
    },
    {
        header: "Location",
        accessorKey: "location",
    },
    {
        header: "Nest",
        accessorKey: "nest",
    },
    {
        header: "Created At",
        accessorKey: "createdAt",
    },
    {
        header: "Updated At",
        accessorKey: "updatedAt",
    },
    {
        header: "Actions",
        cell: ({row}) => {
            return (
                <div className={'flex'}>
                    <EditButton onClick={() => {
                    }}/>
                    <DeleteButton onClick={() => {
                    }}/>
                </div>
            )
        }
    }
];

export default function Table({data}: { data: PackageData[] }) {
    return (
        <DataTable
            title={"Packages"}
            data={data}
            columns={Columns}
            visibilityState={{
                id: false,
                description: false,
                swap: false,
                io: false,
                databases: false,
                allocations: false,
                backups: false,
                createdAt: false,
                updatedAt: false,
            }}
        />
    )
}