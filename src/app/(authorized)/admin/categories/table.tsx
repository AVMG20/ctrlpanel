'use client';
import {ColumnDef} from "@tanstack/react-table";
import SelectColumn from "@/components/ui/table/columns/select-column";
import {DataTable} from "@/components/ui/table/data-table";
import {DeleteButton, EditButton, EditLink} from "@/components/ui/table/action-buttons";
import Image from 'next/image'
import {deleteCategory} from "@/app/(authorized)/admin/categories/actions";

type CategoryData = {
    id: string
    name: string
    description: string|null
    image: string
    nest: number
    createdAt: Date
    updatedAt: Date | null
}

const Columns: ColumnDef<CategoryData>[] = [
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
        header: "Description",
        accessorKey: "description",
    },
    {
        header: "Image",
        accessorKey: "image",
        cell: ({row}) => <Image src={`/${row.original.image}?size=thumbnail`}
                                alt={`/${row.original.name}`}
                                width={32}
                                height={32}
                                style={{
                                    width: '24px',
                                    height: '24px',
                                }}
                                priority={true}/>
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
                    <EditLink href={`/admin/categories/edit/${row.original.id}`}/>
                    <DeleteButton onClick={async () => {
                        //TODO make model popup and loader etc...
                        const data = new FormData();
                        data.append('id', row.original.id);
                        await deleteCategory({}, data);
                    }}/>
                </div>
            )
        }
    }
];

export default function Table({data}: { data: CategoryData[] }) {
    return (
        <DataTable
            title={"Categories"}
            data={data}
            columns={Columns}
            visibilityState={{
                id: false,
                description: false,
                createdAt: false,
                updatedAt: false,
            }}
        />
    )
}