import Link from 'next/link';
import {getServerSession} from "next-auth";

export default async function Home() {
    const session = await getServerSession()

    return (

        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p>Welcome {session?.user?.name}. Signed In As</p>
                    <p>{session?.user?.email}</p>
                    <Link href={'/store'} className="btn btn-primary">Get Started</Link>
                </div>
            </div>
        </div>

    );
}
