'use client'
import * as React from "react";

const SelectColumn = {
    id: "select",
    // @ts-ignore
    header: ({table}) => (
        <input
            type="checkbox"
            className="checkbox"
            checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
            onChange={(e) => table.toggleAllPageRowsSelected(e.target.checked)}
            aria-label="Select all"
        />
    ),
    // @ts-ignore
    cell: ({row}) => (
        <input
            type="checkbox"
            className="checkbox"
            checked={row.getIsSelected()}
            onChange={(e) => row.toggleSelected(e.target.checked)}
            aria-label="Select row"
        />
    ),
    enableSorting: false,
    enableHiding: false,
}

export default SelectColumn;