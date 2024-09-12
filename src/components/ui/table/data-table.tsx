"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    PaginationState,
    SortingState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table"
import {ArrowUpDown, ChevronDown, MoreHorizontal} from "lucide-react"
import Card from "@/components/ui/card";

interface DataTableProps<TData, TValue> {
    title: string,
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    visibilityState?: VisibilityState
}

export function DataTable<TData, TValue>({title, columns, data, visibilityState = {id: false}}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>(visibilityState)
    const [rowSelection, setRowSelection] = React.useState({})
    const [globalFilter, setGlobalFilter] = React.useState('')
    const [pagination, setPagination] = React.useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    })

    const table = useReactTable({
        data,
        columns,
        enableHiding: true,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        onPaginationChange: setPagination,
        state: {
            sorting,
            pagination,
            columnFilters,
            columnVisibility,
            rowSelection,
            globalFilter,
        },
    })

    return (
        <Card title={title}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 py-4">
                <input
                    type="text"
                    placeholder="Search..."
                    value={globalFilter ?? ""}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    className="input input-bordered w-full sm:max-w-xs"
                />

                <div className="">
                    <div className="dropdown flex dropdown-end">
                        <label tabIndex={0} className="btn w-full sm:w-auto">
                            Columns <ChevronDown className="ml-2 h-4 w-4"/>
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu z-10 p-2 shadow bg-base-100 rounded-box w-52">
                            {table
                                .getAllColumns()
                                .filter((column) => column.getCanHide())
                                .map((column) => {
                                    return (
                                        <li key={column.id}>
                                            <label className="label cursor-pointer">
                                                <span className="label-text">{typeof column.columnDef.header == 'string' ? column.columnDef.header : column.id}</span>
                                                <input
                                                    type="checkbox"
                                                    className="checkbox"
                                                    checked={column.getIsVisible()}
                                                    onChange={(e) => column.toggleVisibility(e.target.checked)}
                                                />
                                            </label>
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-sm">
                    <thead>
                        {table.getHeaderGroups()
                            .map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th key={header.id}>
                                            {header.isPlaceholder ? null : (
                                                <>
                                                    {header.column.getCanSort() ? (
                                                        <button
                                                            className="btn flex-nowrap flex btn-sm btn-ghost"
                                                            onClick={() => header.column.toggleSorting(header.column.getIsSorted() === "asc")}
                                                        >
                                                            {flexRender(header.column.columnDef.header, header.getContext())}

                                                            {header.column.getIsSorted() === "asc" && (
                                                                <ChevronDown className="ml-1 h-4 w-4"/>
                                                            )}
                                                            {header.column.getIsSorted() === "desc" && (
                                                                <ChevronDown className="ml-1 h-4 w-4 rotate-180"/>
                                                            )}
                                                            {header.column.getIsSorted() === false && (
                                                                <ArrowUpDown className="ml-1 h-4 w-4"/>
                                                            )}
                                                        </button>
                                                    ) : (
                                                        flexRender(header.column.columnDef.header, header.getContext())
                                                    )}
                                                </>
                                            )}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                    </thead>
                    <tbody>
                    {table.getRowModel().rows.length ? (
                        table.getRowModel()
                            .rows
                            .map((row) => (
                                <tr key={row.id} className={row.getIsSelected() ? "selected" : ""}>
                                    {row.getVisibleCells()
                                        .map((cell) => (
                                            <td key={cell.id}>{flexRender(cell.column.columnDef.cell,
                                                cell.getContext())}</td>
                                        ))}
                                </tr>
                            ))
                    ) : (
                        <tr>
                        <td colSpan={columns.length} className="text-center">
                                No results.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-between space-x-2 py-4">
                <div className="text-sm text-base-content/50">
                    {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s)
                    selected.
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-center">
                    <div className="flex gap-1 text-sm text-base-content/50">
                        <span>Page</span>
                        <strong>{table.getState().pagination.pageIndex + 1} of{' '}{table.getPageCount()
                            .toLocaleString()}</strong>
                    </div>

                    <div className="space-x-2 flex items-center">
                        <button
                            className="btn btn-outline btn-sm"
                            onClick={() => table.firstPage()}
                        >
                            &lt;|
                        </button>
                        <button
                            className="btn btn-outline btn-sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            Previous
                        </button>
                        <button
                            className="btn btn-outline btn-sm"
                            onClick={() => {
                                table.nextPage();
                                console.log(1)
                            }}
                            disabled={!table.getCanNextPage()}
                        >
                            Next
                        </button>
                        <button
                            className="btn btn-outline btn-sm"
                            onClick={() => table.lastPage()}
                        >
                            &gt;|
                        </button>
                    </div>
                </div>
            </div>

        </Card>
    )
}
