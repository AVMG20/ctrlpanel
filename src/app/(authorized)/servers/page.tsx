import PageTitle from "@/components/util/page-title";
import {ShoppingCart} from "lucide-react";
import React from "react";
import Link from "next/link";

export default async function Page() {
    return (
        <div>
            <PageTitle title="Coming soon" description="This page is currently under construction. Please check back later."/>
            <Link href={'/store'}>Store</Link>

            {/* Coming soon hero something fancy */}
            <div className="flex items-center justify-center h-screen">


                <div className="text-center">
                    <h1 className="text-5xl font-bold text-gray-800">Coming Soon</h1>
                    <p className="text-xl text-gray-600">This page is currently under construction. Please check back later.</p>
                </div>
            </div>

        </div>
    );
};
