import Link from "next/link";
import Image from "next/image";
import {prisma} from "@/prisma";


export default async function Store() {
    const categories = await prisma.category.findMany();

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <Link href={`/service/${category.id}`}
                          key={category.id}
                          className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform">
                        <Image
                            src={category.image}
                            alt={category.name}
                            width={300}
                            height={200}
                            className="rounded-xl object-cover h-48 w-full"
                        />
                        <div className="card-body">
                            <h2 className="card-title text-primary">{category.name}</h2>
                            <div className="prose lg:prose-xl opacity-70">
                                <div>
                                    <p>Explore blocky worlds and unleash your creativity!</p>
                                </div>
                            </div>
                            {/*<div className="card-actions justify-end mt-2">*/}
                            {/*    <div className="badge badge-outline">Nest {category.nest}</div>*/}
                            {/*</div>*/}
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    );
}
