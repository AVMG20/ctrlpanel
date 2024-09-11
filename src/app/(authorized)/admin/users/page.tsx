import DataTable from "@/components/ui/table/data-table";
import PageTitle from "@/components/util/page-title";
import {Suspense} from "react";
import DataTableSkeleton from "@/components/ui/table/data-table-skeleton";
import {Cog, EditIcon, Trash} from "lucide-react";

export default async function UsersPage() {
    return (
        <div>
            <PageTitle title={"Users"} description={"Manage users in the system"}/>

            <Suspense fallback={<DataTableSkeleton/>}>
                <DataTable
                    title={"Users Table"}
                    model="user" // Prisma model
                    columns={["name", "email", "role"]} // Fields to display in table
                    searchFields={["name", "email"]} // Fields to search
                    actions={(
                        <div className={'flex'}>
                            <button className="btn btn-xs btn-outline btn-info border-0"><EditIcon/></button>
                            <button className="btn btn-xs btn-outline btn-error border-0"><Trash/></button>
                            <button className="btn btn-xs btn-outline btn-warning border-0"><Cog/></button>
                        </div>
                    )}
                />
            </Suspense>
        </div>
    )
}
