import PageTitle from "@/components/util/page-title";
import DataTableSkeleton from "@/components/ui/table/data-table-skeleton";

export default async function Loading() {
    return (
        <div>
            <PageTitle title={"Users"} description={"Manage users in the system"}/>
            <DataTableSkeleton/>
        </div>
    )
}
