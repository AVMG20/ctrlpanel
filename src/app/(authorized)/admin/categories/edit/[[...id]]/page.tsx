import PageTitle from "@/components/util/page-title";
import client from "@/lib/pterodactyl/pterodactyl";
import { prisma } from "@/prisma";
import { notFound } from "next/navigation";
import {CategoryForm} from "@/app/(authorized)/admin/categories/form";

export const revalidate = 360;

// Empty array will allow us to build the static pages dynamically without pre-rendering during build time
export async function generateStaticParams() {
    return [];
}

export const metadata = {
    title: 'Edit Category',
    description: 'Create or edit a Category'
}

export default async function Page({ params }: { params: { id?: string[] } }) {
    const [nestsResponse] = await Promise.all([
        client.getNests(),
    ]);

    let existingData = null;
    if (params.id && params.id.length > 0) {
        existingData = await prisma.category.findUnique({where: { id: params.id[0] }})
        if (!existingData) notFound();
    }

    const title = existingData ? "Edit Category" : "Create Category";
    const description = existingData ? "Edit an existing category" : "Create a new category";

    return (
        <div>
            <PageTitle title={title} description={description} />
            <CategoryForm nests={nestsResponse.data} editValues={existingData}/>
        </div>
    );
}