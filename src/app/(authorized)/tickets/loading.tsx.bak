import PageTitle from "@/components/util/page-title";
import DataTableSkeleton from "@/components/ui/table/data-table-skeleton";
import Card from "@/components/ui/card";
import { TicketForm } from "@/app/(authorized)/tickets/form";

export default function Loading() {
    return (
        <div>
            <PageTitle title="Tickets" description="Create a new ticket or view existing ones." />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Tickets List Skeleton */}
                <DataTableSkeleton />


                {/* New Ticket Form */}
                <TicketForm />
            </div>
        </div>
    );
}
