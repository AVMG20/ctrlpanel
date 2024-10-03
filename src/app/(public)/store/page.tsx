import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/prisma";

export const revalidate = 3600;

export default async function Store() {
    const categories = await prisma.category.findMany();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {categories.map((category) => (
                    <Link href={`/store/service/${category.id}`}
                          key={category.id}
                          className="card bg-base-100 shadow-lg hover:shadow hover:shadow-secondary transition-shadow duration-200 overflow-hidden">
                        <div className="relative">
                            <Image
                                src={`/${category.image}?size=store`}
                                alt={category.name}
                                width={512}
                                height={256}
                                priority={true}
                                className="w-full"
                            />
                        </div>
                        <div className="card-body p-4">
                            <h2 className="card-title text-primary text-xl">{category.name}</h2>
                            {/*{category.description && (*/}
                            {/*    <div className="prose prose-sm overflow-y-auto">*/}
                            {/*        <div className={'text-wrap'} dangerouslySetInnerHTML={{__html: category.description}} />*/}
                            {/*    </div>*/}
                            {/*)}*/}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}