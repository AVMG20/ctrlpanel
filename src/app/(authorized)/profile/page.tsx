import {auth} from "@/auth";
import PageTitle from "@/components/util/page-title";
import Card from "@/components/ui/card";
import {SignOutButton} from "@/app/(authorized)/profile/actions";
import {Coins} from "lucide-react";
import React from "react";

export default async function Page() {
    const session = await auth();

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
                        <div className="flex items-start space-x-4">
                            <div className="avatar">
                                <div className="w-12 h-12 rounded-full">
                                    <img src={session?.user.image ?? "https://via.placeholder.com/150"} alt="Profile Picture"/>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-lg">{session?.user.name}</p>
                                <p className="font-semibold">{session?.user.email}</p>
                                <div className="flex items-center font-bold mt-2">
                                    <Coins className="w-5 h-5 mr-1 text-primary"/>
                                    5000
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Settings */}
                    <Card title="Settings">
                        <div className="form-control max-w-72">
                            <label className="label cursor-pointer">
                                <span className="label-text">Email notifications</span>
                                <input type="checkbox" className="toggle toggle-primary" defaultChecked/>
                            </label>
                        </div>

                        <div className="form-control max-w-72">
                            <label className="label cursor-pointer">
                                <span className="label-text">Discord notifications</span>
                                <input type="checkbox" className="toggle toggle-primary" defaultChecked/>
                            </label>
                        </div>

                        <div className="form-control my-5">
                            <label className="label">
                                <span className="label-text">Notify when balance is below trashhold</span>
                                <span className="label-text text-secondary">Set to 0 or 100 to disable</span>
                            </label>
                            <input type="range" min="0" max="100" className="range" step="10"/>
                            <div className="hidden sm:flex w-full justify-between px-2 text-xs">
                                <span>0%</span>
                                <span>10%</span>
                                <span>20%</span>
                                <span>30%</span>
                                <span>40%</span>
                                <span>50%</span>
                                <span>60%</span>
                                <span>70%</span>
                                <span>80%</span>
                                <span>90%</span>
                                <span>100%</span>
                            </div>
                        </div>
                    </Card>
                </div>


                <div className={'gap-5 flex flex-col'}>
                    {/* Edit Profile Form */}
                    <Card title="Edit profile">
                        <form>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full Name" className="input input-bordered"/>
                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered"/>
                            </div>
                            <button className="btn btn-primary">Save</button>
                        </form>
                    </Card>


                    {/*Change password*/}
                    <Card title="Change password">
                        <form>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Current Password</span>
                                </label>
                                <input type="password" placeholder="Current Password" className="input input-bordered"/>
                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">New Password</span>
                                </label>
                                <input type="password" placeholder="New Password" className="input input-bordered"/>
                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Confirm Password" className="input input-bordered"/>
                            </div>
                            <button className="btn btn-primary">Save</button>
                        </form>
                    </Card>
                </div>


            </div>
        </div>
    );
};
