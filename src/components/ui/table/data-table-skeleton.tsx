import Card from "@/components/ui/card";
import {ChevronDown, ChevronFirst, ChevronLast, ChevronLeft, ChevronRight} from "lucide-react";
import {DeleteButton, EditButton} from "@/components/ui/table/action-buttons";
import * as React from "react";

export default function DataTableSkeleton() {
    return (
        <Card title="Loading table">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 py-4">
                <input
                    type="text"
                    placeholder="Search..."
                    disabled={true}
                    className="input input-bordered w-full sm:max-w-xs"
                />

                <div className="dropdown flex dropdown-end">
                    <button className="btn w-full sm:w-auto" disabled>
                        Columns <ChevronDown className="ml-2 h-4 w-4"/>
                    </button>
                </div>
            </div>


            <table className="table w-full">
                <thead>
                <tr>
                    <th className="w-1/12">Loading</th>
                    <th className="w-3/12">Loading</th>
                    <th className="w-4/12">Loading</th>
                    <th className="w-4/12">Loading</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td colSpan={3} className="text-center">
                        Loading...
                    </td>
                    <td className="flex justify-end space-x-2">
                        <EditButton/>
                        <DeleteButton/>
                    </td>
                </tr>
                </tbody>
            </table>

            <div>
                <div className="flex justify-end">
                    <div className="dropdown flex dropdown-end">
                        <label tabIndex={0} className="btn btn-sm w-full sm:w-auto">
                            Page size 10 <ChevronDown className="ml-2 h-4 w-4"/>
                        </label>
                        <ul tabIndex={0}
                            className="dropdown-content menu z-10 p-2 shadow bg-base-100 rounded-box w-52">
                            {[10, 20, 50, 100]
                                .map((pageSize) => {
                                    return (
                                        <li key={pageSize}>
                                            <label className="label cursor-pointer">
                                                <span className="label-text">{pageSize}</span>
                                                <input
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </label>
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>
                </div>

                <div className="flex items-center justify-between space-x-2 py-4">
                    <div className="text-sm text-base-content/50">
                        0 of 0 row(s) selected.
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-center">
                        <div className="flex gap-1 text-sm text-base-content/50">
                            <span>Page</span>
                            <strong>0 of 0</strong>
                        </div>

                        <div className="space-x-2 flex items-center">
                            <button
                                className="btn btn-sm"
                                disabled={true}
                            >
                                <ChevronFirst/>
                            </button>
                            <button
                                className="btn btn-sm"
                                disabled={true}
                            >
                                <ChevronLeft/>
                            </button>
                            <button
                                className="btn btn-sm"
                                disabled={true}
                            >
                                <ChevronRight/>
                            </button>
                            <button
                                className="btn btn-sm"
                                disabled={true}
                            >
                                <ChevronLast/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </Card>
    );
}
