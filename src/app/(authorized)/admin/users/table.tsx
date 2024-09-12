'use client';
import {ColumnDef} from "@tanstack/react-table";
import SelectColumn from "@/components/ui/table/columns/select-column";
import {DataTable} from "@/components/ui/table/data-table";
import {DeleteButton, EditButton} from "@/components/ui/table/action-buttons";

type UserData = {
    id: string,
    name: string | null,
    email: string,
    role: string
    accounts: {
        provider: string
    }[]
};

const Columns: ColumnDef<UserData>[] = [
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
        header: "Email",
        accessorKey: "email",
    },
    {
        header: "Providers",
        accessorKey: "accounts",
        cell: ({row}) => {
            const values = row.getValue("accounts") as {provider: string}[];
            return values.map((value) => value.provider).join(", ");
        },
    },
    {
        header: "Role",
        accessorKey: "role",
    },
    {
        header: "Actions",
        cell: ({row}) => {
            return (
                <div className={'flex'}>
                    <EditButton onClick={() => {}}/>
                    <DeleteButton onClick={() => {}}/>
                </div>
            )
        }
    }
];

export default function UsersTable({data}: {data: UserData[]}) {
    return (
        <DataTable
            title={"Users"}
            data={data}
            columns={Columns}
            visibilityState={{
                id: false,
                accounts: false,
            }}
        />
    )
}