import {auth} from "@/auth";
import PageTitle from "@/components/util/page-title";

export default async function Page() {
    const session = await auth();

    return (
        <div>
            <PageTitle title="Profile" description="Edit your profile and settings."/>
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-5">
                {/* Profile Card */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
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
                                {/*<p>{session?.user.email}</p>*/}
                            </div>
                        </div>
                        <div className="mt-4">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Edit Profile Form */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Edit Profile</h2>
                        <form>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full Name" className="input input-bordered" />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" />
                            </div>
                            <button className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>

                {/* Settings */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Settings</h2>
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
                    </div>
                </div>

                {/*Change password*/}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Change Password</h2>
                        <form>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Current Password</span>
                                </label>
                                <input type="password" placeholder="Current Password" className="input input-bordered" />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">New Password</span>
                                </label>
                                <input type="password" placeholder="New Password" className="input input-bordered" />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Confirm Password" className="input input-bordered" />
                            </div>
                            <button className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
};
