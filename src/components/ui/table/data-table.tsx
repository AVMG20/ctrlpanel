"use client";

import {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import Card from "@/components/ui/card";
import {fetchSimpleTableData} from "@/lib/actions/datatable/actions";
import {PrismaClient} from "@prisma/client";
import {useQuery} from "@/lib/hooks/use-query";
import {ucFirst} from "@/utils/util";

interface DataTableProps<T> {
    title: string; // Table title
    model: keyof PrismaClient; // Model name passed as a prop
    columns: string[]; // Columns to display
    searchFields: string[]; // Fields to search on
    actions?: React.ReactNode; // Additional actions
}

export default function DataTable<T>({
    title,
    model,
    columns,
    searchFields,
    actions,
}: DataTableProps<T>) {
    const router = useRouter();
    const params = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);

    // Extract parameters from URL or use defaults
    const page = params.get("page") ? parseInt(params.get("page")!) : 1;
    const limit = params.get("limit") ? parseInt(params.get("limit")!) : 10;
    const search = params.get("search") || "";
    const sortBy = params.get("sortBy") || "id";
    const order = params.get("order") == 'asc' ? 'asc' : 'desc';

    // Fetch data using the useQuery hook
    let {data, status, execute} = useQuery(() => fetchSimpleTableData({
        model,
        page,
        limit,
        search,
        sortBy,
        order,
        searchFields, // Pass the dynamic search fields
    }));

    useEffect(() => {
        execute()
            .then(() => {
                setIsLoading(false);
            })
    }, [page, limit, search, sortBy, order]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true)
        const searchValue = (e.target as HTMLFormElement).search.value;
        router.push(`?search=${searchValue}&page=1&limit=${limit}&sortBy=${sortBy}&order=${order}`);
    };

    const handleSort = (column: string) => {
        const newOrder = order === "asc" ? "desc" : "asc";
        setIsLoading(true)
        router.push(`?search=${search}&page=${page}&limit=${limit}&sortBy=${column}&order=${newOrder}`);
    };

    const handlePagination = (newPage: number) => {
        setIsLoading(true)
        router.push(`?search=${search}&page=${newPage}&limit=${limit}&sortBy=${sortBy}&order=${order}`);
    };

    return (
        <Card title={title}>
            {/* Search Form */}

            <form onSubmit={handleSearch} className="mb-4 flex gap-3">
                <input
                    type="text"
                    name="search"
                    defaultValue={search}
                    placeholder="Search..."
                    className="input input-bordered w-full max-w-xs"
                />
                <button type="submit" className="btn">
                    Search
                </button>
            </form>

            <div className="overflow-x-auto">
                {/* Table */}
                <table className={`table w-full ${status === 'loading' || isLoading ? "skeleton opacity-25" : ""}`}>
                    <thead>
                    <tr>
                        {columns.map((col) => (
                            <th
                                key={col}
                                onClick={() => handleSort(col)}
                                className="cursor-pointer"
                            >
                                {ucFirst(col)} {sortBy === col ? (
                                order === "asc" ? "↑" : "↓"
                            ) : ""}
                            </th>
                        ))}
                        {/* Actions column */}
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.data?.map((row: any) => (
                        <tr key={row.id}>

                            {/* Values */}
                            {columns.map((col) => (
                                <td key={col}>{row[col]}</td>
                            ))}

                            {/* Action buttons */}
                            <td className="w-44 text-right">{actions}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between mt-6 p-3">


                {/* Page Info */}
                <div className="text-left">
                    <span className="text-md text-base-content/60">
                        Page <span className="font-bold">{page}</span> of <span className="font-bold">{Math.ceil((data?.totalCount ?? 0) / limit)}</span>
                    </span>
                    <div className="text-sm text-base-content/60">
                        Showing: <span className="font-bold">{limit > data?.totalCount ?? 0 ? data?.totalCount ?? 0 : limit}</span> of <span className="font-bold">{data?.totalCount ?? 0} </span>
                    </div>

                </div>

                <div className={'flex gap-3'}>
                    {/* Previous Button */}
                    <button
                        className="btn px-6 py-2 rounded-lg"
                        onClick={() => handlePagination(page - 1)}
                        disabled={page <= 1}
                    >
                        Previous
                    </button>

                    {/* Next Button */}
                    <button
                        className="btn px-6 py-2 rounded-lg"
                        onClick={() => handlePagination(page + 1)}
                        disabled={page * limit >= (
                            data?.totalCount ?? 0
                        )}
                    >
                        Next
                    </button>
                </div>
            </div>

        </Card>
    );
}
