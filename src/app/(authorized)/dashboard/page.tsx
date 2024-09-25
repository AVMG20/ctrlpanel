import {ChartNoAxesColumn, ChartNoAxesColumnIncreasing, Coins, Server} from "lucide-react";
import PageTitle from "@/components/util/page-title";
import Card from "@/components/ui/card";
import settings from "@/lib/settings";

export const revalidate = 300;

export default async function Home() {
    const motd = await settings.get('motd') as string;

    return (
        <>
            <PageTitle title="Dashboard" description="Overview of your account and services."/>
            <Stats/>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                {/* MOTD Card */}
                <Card title="">
                    <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{__html: motd}}>

                    </div>
                </Card>


                {/* Recent Invoices & Payment History */}
                <Card title="Recent Invoices">
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
                </Card>
            </div>
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
    },
    {
        title: 'Uptime',
        value: '99.9%',
        desc: 'Average uptime',
        icon:<ChartNoAxesColumn />,
        color: 'text-success'
    }]

    //loop through stats and render them
    return (
        <div>
            <div className="grid gap-5 mb-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <div key={index} className="stat card shadow bg-base-100">
                        <div className={`stat-figure ${stat.color}`}>
                            {stat.icon}
                        </div>
                        <div className="stat-title">{stat.title}</div>
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-desc">{stat.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
