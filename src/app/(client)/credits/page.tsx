import PageTitle from "@/components/util/page-title";

export default async function Page() {
    const packages = [
        { id: 1, credits: 100, price: 10, image: "https://via.placeholder.com/100", description: "Ideal for beginners" },
        { id: 2, credits: 500, price: 45, image: "https://via.placeholder.com/100", description: "Great value for growing projects" },
        { id: 3, credits: 1000, price: 85, image: "https://via.placeholder.com/100", description: "Best value for scaling" },
        { id: 4, credits: 5000, price: 400, image: "https://via.placeholder.com/100", description: "Perfect for enterprise use" },
    ];

    return (
        <div className="min-h-screen bg-base-200 py-10">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold">Buy More Credits</h1>
                <p className="text-xl mt-4 text-gray-600">Choose the package that best suits your needs</p>
            </div>

            {/* Grid of Packages */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl">
                {packages.map((pkg) => (
                    <div key={pkg.id}
                         className="card bg-base-100 border border-base-300 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 duration-300 ease-in-out rounded-xl">
                        <figure className="p-6">
                            <img src={pkg.image}
                                 alt={`${pkg.credits} Credits`}
                                 className="rounded-full w-32 h-32 mx-auto object-cover shadow-sm"/>
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="text-center w-full text-3xl font-extrabold tracking-wide">{pkg.credits} Credits</h2>
                            <p className="text-base-content text-md mt-3 italic">{pkg.description}</p>
                            <div className="flex justify-center mt-4">
                                <span className="badge badge-neutral badge-lg px-4 py-2 font-semibold">${pkg.price.toFixed(
                                    2)}</span>
                            </div>
                            <button className="btn btn-accent btn-block mt-6 rounded-lg">
                                Purchase Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>


            {/* Voucher Redemption Section */}
            <div className="mt-16 mx-auto max-w-md shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-bold text-center mb-4">Have a Voucher?</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter your voucher code</span>
                    </label>
                    <div className="flex items-center space-x-4">
                        <input type="text" placeholder="Voucher Code" className="input input-bordered flex-1"/>
                        <button className="btn btn-secondary">Redeem</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

