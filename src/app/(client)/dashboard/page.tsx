import {auth} from "@/auth";
import {ChartNoAxesColumnIncreasing, Coins, DownloadIcon, GrabIcon, Server} from "lucide-react";
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
    const stats = [
        {
            title: 'Servers',
            value: '3',
            desc: 'Total servers',
            icon: <Server/>,
            color: 'text-primary'
        },
        {
            title: 'Credits',
            value: '100',
            desc: 'Total credits owned',
            icon: <Coins />,
            color: 'text-secondary'
        },
        {
            title: 'Usage',
            value: '10',
            desc: 'Usage per month',
            icon: <ChartNoAxesColumnIncreasing />,
            color: 'text-accent'
        }
    ]

    //loop through stats and render them
    return (
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
    )
}
