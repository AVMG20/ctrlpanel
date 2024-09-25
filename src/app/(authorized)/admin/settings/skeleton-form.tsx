import Card from "@/components/ui/card";

// Skeleton form used to show loading state when fetching settings data
export default function SkeletonForm() {
    return (
        <Card title={'Loading settings'}>

            <div className="h-48 flex">
                <span className="loading m-auto loading-ring loading-lg"></span>
            </div>

            <div className="mt-4 flex justify-end">
                <div className="w-24 h-10 skeleton rounded"></div>
            </div>
        </Card>
    );
}