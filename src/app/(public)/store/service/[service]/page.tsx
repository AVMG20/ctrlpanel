import settings from "@/lib/settings";
import {prisma} from "@/prisma";
import Link from "next/link";
import {notFound} from "next/navigation";

export const revalidate = 3600;

export async function generateStaticParams() {
    return [];
}

export default async function PricingCards({params}: { params: { service: string } }) {
    const creditName = await settings.get('creditsName', 'Credits') as string;

    const categoryId = params.service
    const category = await prisma.category.findFirst({
        where: {
            id: categoryId
        },
    });

    if (!category) notFound()

    const packages = await prisma.package.findMany({
        where: {
            nest: category.nest
        },
        orderBy: {
            price: 'asc'
        }
    });

    return (
        <>
            {category.description && (
                <div className='prose min-w-full text-center lg:prose-lg' dangerouslySetInnerHTML={{__html: category.description}} />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                {packages.map((pack) => (
                    <div key={pack.id}
                         className="card w-full max-w-sm mx-auto bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        <div className="card-body flex flex-col justify-between">
                            <div>
                                <h2 className="card-title  text-center text-2xl font-bold text-primary justify-center">
                                    {pack.name}
                                </h2>
                                <div className="my-4 text-center">
                                    <p className="text-2xl mb-0 font-bold text-accent">{pack.price}</p>
                                    <p className="text-sm text-base-content/70">{creditName} per month</p>
                                </div>
                                <div className='prose lg:prose-lg min-w-full' dangerouslySetInnerHTML={{__html: pack.description}}>
                                </div>
                            </div>
                            <div className="card-actions justify-center mt-4">
                                <Link href={`/store/service/${params.service}/config/${pack.id}/checkout`}
                                      className="btn btn-primary w-full">
                                    ORDER NOW
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
