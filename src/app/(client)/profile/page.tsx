import {auth} from "@/auth";
import PageTitle from "@/components/util/page-title";
import Card from "@/components/ui/card";

export default async function Page() {
    const session = await auth();

    return (
        <div>
            <PageTitle title="Profile" description="Edit your profile and settings."/>
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-5">
                {/* Profile Card */}
                <Card cardClass={'h-full'}>
                    <div className="flex items-center space-x-4">
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content w-20 rounded-full">
                                    <span className="text-3xl">
                                        {session?.user.name && session?.user.name.charAt(0)}
                                    </span>
                            </div>
                        </div>
                        <div>
                            <h2 className="card-title">{session?.user.name}</h2>
                            <p>{session?.user.email}</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
                            vestibulum.
                        </p>
                    </div>
                </Card>


                {/* Edit Profile Form */}
                <Card title="Edit profile" cardClass={'h-full'}>
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


                {/* Settings */}
                <Card title="Settings" cardClass={'h-full'}>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Email Notifications</span>
                            <input type="checkbox" className="toggle toggle-secondary"/>
                        </label>
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Notify when balance is below trashhold</span>
                            <span className="label-text text-neutral-content/50">Set to 0 or 100 to disable</span>
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


                {/*Change password*/}
                <Card title="Change password" cardClass={'h-full'}>
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
    );
};
