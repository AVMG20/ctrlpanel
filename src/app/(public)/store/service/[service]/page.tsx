import Link from "next/link";

export const revalidate = 3600;

export async function generateStaticParams() {
    return [];
}

const configurations = [
    { id: 1, name: 'Bargain 1', ram: '1 GB', price: '0.85', vCore: 0.5, databases: 1, storage: 10240 }, // 10 GB
    { id: 2, name: 'Bargain 2', ram: '2 GB', price: '1.70', vCore: 1, databases: 2, storage: 20480 }, // 20 GB
    { id: 3, name: 'Bargain 3', ram: '3 GB', price: '2.55', vCore: 1, databases: 2, storage: 30720 }, // 30 GB
    { id: 4, name: 'Premium 1', ram: '5 GB', price: '4.25', vCore: 2, databases: 3, storage: 51200 }, // 50 GB
    { id: 5, name: 'Premium 2', ram: '6 GB', price: '5.10', vCore: 2, databases: 4, storage: 61440 }, // 60 GB
    { id: 6, name: 'Premium 3', ram: '8 GB', price: '6.80', vCore: 3, databases: 5, storage: 81920 }, // 80 GB
    { id: 7, name: 'Deluxe 1', ram: '9 GB', price: '7.65', vCore: 4, databases: 6, storage: 92160 }, // 90 GB
    { id: 8, name: 'Deluxe 2', ram: '10 GB', price: '8.50', vCore: 4, databases: 8, storage: 102400 }, // 100 GB
];

export default function PricingCards({ params }: { params: { service: string } }) {
    return (
        <>
            <div className={'p-5 text-center'}>
               <h1 className={'text-2xl'}> Minecraft Server Hosting</h1>
                <p>Money Back Guarantee | 24/7 + Hundreds of Features | Minecraft Hosting from $0.85/mo</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                {configurations.map((config) => (
                    <div key={config.id}
                         className="card w-full max-w-sm mx-auto bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        <div className="card-body text-center">
                            <h2 className="card-title text-2xl font-bold text-primary justify-center">
                                {config.name}
                            </h2>
                            <div className="mb-4">
                                <p className="text-4xl font-bold text-primary">${config.price}</p>
                                <p className="text-sm text-base-content/70">USD per month</p>
                            </div>
                            <ul className="space-y-2">
                                <li className="flex items-center justify-center">
                                    {config.vCore} vCore
                                </li>
                                <li className="flex items-center justify-center">
                                    {config.ram} RAM
                                </li>
                                <li className="flex items-center justify-center">
                                    {config.databases} Database{config.databases > 1 ? 's' : ''}
                                </li>
                                <li className="flex items-center justify-center">
                                    {config.storage} MB Storage
                                </li>
                                <li className="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="h-5 w-5 mr-2 text-success"
                                         viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    Unlimited Player Slots
                                </li>
                                <li className="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="h-5 w-5 mr-2 text-success"
                                         viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    Unlimited Bandwidth
                                </li>
                            </ul>
                            <div className="card-actions justify-center mt-4">
                                <Link href={`${params.service}/config/${config.id}/checkout`}
                                      className="btn btn-primary w-full">ORDER NOW</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
