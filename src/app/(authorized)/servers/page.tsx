import PageTitle from "@/components/util/page-title";

export default async function Page() {
    return (
        <div>
            <PageTitle title="Comming soon" description="This page is currently under construction. Please check back later."/>

            {/* Comming soon hero something fancy */}
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-gray-800">Comming Soon</h1>
                    <p className="text-xl text-gray-600">This page is currently under construction. Please check back later.</p>
                </div>
            </div>

        </div>
    );
};
