import Link from 'next/link';

export default function Home() {

    const random = Math.floor(Math.random() * 1000);

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <p>{random}</p>
                        <Link href={'/store'} className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
