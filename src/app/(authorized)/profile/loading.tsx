import PageTitle from "@/components/util/page-title";
import Card from "@/components/ui/card";
import {SignOutButton} from "@/app/(authorized)/profile/actions";
import React from "react";

export default async function Page() {

    return (
        <div>
            <PageTitle title="Profile" description="Edit your profile and settings."/>
            <div className="flex justify-end mb-5">
                <SignOutButton/>
            </div>

            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-5">

                <div className="gap-5 flex flex-col">
                    {/* Profile card */}
                    <Card title="Profile" cardClass={'h-fit'}>
                        <div className="h-32 skeleton">

                        </div>
                    </Card>

                    {/* Settings */}
                    <Card title="Settings">
                        <div className="h-72 skeleton">

                        </div>
                    </Card>
                </div>


                <div className={'gap-5 flex flex-col'}>
                    {/* Edit Profile Form */}
                    <Card title="Edit profile">
                        <div className="h-72 skeleton">

                        </div>
                    </Card>


                    {/*Change password*/}
                    <Card title="Change password">
                        <div className="h-72 skeleton">

                        </div>
                    </Card>
                </div>


            </div>
        </div>
    );
};
