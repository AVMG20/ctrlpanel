import Card from "@/components/ui/card";

// Skeleton form used to show loading state when fetching settings data
export default function SkeletonForm() {
    return (
        <Card title={'General settings'}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                <div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text h-4 w-24 skeleton"></span>
                        </label>
                        <div className="w-full h-10 skeleton rounded"></div>
                    </div>

                    <div className="form-control w-full mt-4">
                        <label className="label">
                            <span className="label-text h-4 w-24 skeleton"></span>
                        </label>
                        <div className="w-full h-10 skeleton rounded"></div>
                    </div>
                </div>

                <div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text h-4 w-24 skeleton"></span>
                        </label>
                        <div className="w-full h-10 skeleton rounded"></div>
                    </div>
                </div>

            </div>

            <div className="mt-4 flex justify-end">
                <div className="w-32 h-10 skeleton rounded"></div>
            </div>
        </Card>
    );
}