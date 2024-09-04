export default function Page() {

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left side - Form */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">VPS Configuration</h2>
                    <form className="space-y-4">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Server Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter server name"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <select
                                className="select select-bordered w-full"
                            >
                                <option>Random Location</option>
                                <option>North America</option>
                                <option>Europe</option>
                                <option>Asia</option>
                            </select>
                        </div>

                        <div className="divider"></div>
                        <h2 className="text-lg font-bold mb-4">Service Configuration</h2>
                        <p className={'text-sm'}>No worries, you can always change this later :)</p>

                        <div className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Minecraft Version</span>
                                </label>
                                <select
                                    className="select select-bordered w-full"
                                >
                                    <option>Java Edition</option>
                                    <option>Spigot</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Right side - Summary */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                    <div className="bg-base-200 p-6">
                        <h3 className="text-xl font-semibold mb-2">Bargain-2 Ptero</h3>
                        <p className="text-lg mb-4">Bargain Minecraft Hosting [Ptero]</p>
                        <div className="space-y-2">
                        <p className="flex justify-between">
                                <span>Bargain-2 Ptero</span>
                                <span>$5.10 USD</span>
                            </p>
                        </div>
                        <div className="divider"></div>
                        <div className="space-y-2">
                            <p className="flex justify-between font-semibold">
                                <span>Setup Fees:</span>
                                <span>$0.00 USD</span>
                            </p>
                            <p className="flex justify-between font-semibold">
                                <span>Monthly:</span>
                                <span>$5.10 USD</span>
                            </p>
                        </div>
                        <div className="divider"></div>
                        <p className="flex justify-between text-xl font-bold">
                            <span>Total Due Today</span>
                            <span>$5.10 USD</span>
                        </p>
                    </div>
                    <button className="btn btn-primary w-full mt-4">Proceed to Payment</button>
                </div>
            </div>
        </div>
    )
}