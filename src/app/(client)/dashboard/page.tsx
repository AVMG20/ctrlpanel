import {auth} from "@/auth";
import {ChartNoAxesColumnIncreasing, Coins, Server} from "lucide-react";
import PageTitle from "@/components/util/page-title";

export default async function Home() {
    const session = await auth()

    return (
        <>
            <PageTitle title="Dashboard" description="Overview of your account and services."/>
            <Stats/>
        </>
    );
}

function Stats() {
    const stats = [{
        title: 'Servers',
        value: '3',
        desc: 'Total servers',
        icon: <Server/>,
        color: 'text-primary'
    }, {
        title: 'Credits',
        value: '100',
        desc: 'Total credits owned',
        icon: <Coins/>,
        color: 'text-secondary'
    }, {
        title: 'Usage',
        value: '10',
        desc: 'Usage per month',
        icon: <ChartNoAxesColumnIncreasing/>,
        color: 'text-accent'
    }]

    //loop through stats and render them
    return (
        <div>
            <div className="grid gap-5 mb-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <div key={index} className="stat bg-base-300 rounded">
                        <div className={`stat-figure ${stat.color}`}>
                            {stat.icon}
                        </div>
                        <div className="stat-title">{stat.title}</div>
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-desc">{stat.desc}</div>
                    </div>
                ))}
            </div>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                {/* Large MOTD Card */}
                <div className="card shadow-lg bg-base-100 w-full h-64">
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Message of the Day</h2>
                        <div className="prose">
                            <p>⚡ Welcome to the platform! Here's what's new:</p>
                            <ul>
                                <li>🚀 New server regions added</li>
                                <li>🛠 Maintenance on Sept 25</li>
                                <li>🎉 Special promotion on server upgrades</li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* Recent Invoices & Payment History */}
                <div className="card shadow-lg bg-base-100 w-full h-64">
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Recent purchases</h2>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra w-full">
                                <thead>
                                <tr>
                                    <th>Invoice #</th>
                                    <th>Date</th>
                                    <th>Credits</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>INV-1001</td>
                                    <td>2024-09-10</td>
                                    <td>25000</td>
                                    <td>$50</td>
                                    <td className="text-success">Paid</td>
                                    <td><a href="#" className="link">View</a></td>
                                </tr>
                                <tr>
                                    <td>INV-1002</td>
                                    <td>2024-10-10</td>
                                    <td>32000</td>
                                    <td>$60</td>
                                    <td className="text-warning">Pending</td>
                                    <td>

                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
