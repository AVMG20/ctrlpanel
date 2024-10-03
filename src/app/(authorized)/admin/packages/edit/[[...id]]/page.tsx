import PageTitle from "@/components/util/page-title";
import { ServerConfigurationForm } from "@/app/(authorized)/admin/packages/form";
import client from "@/lib/pterodactyl/pterodactyl";
import { prisma } from "@/prisma";
import { notFound } from "next/navigation";
import settings from "@/lib/settings";

export const revalidate = 360;

// Empty array will allow us to build the static pages dynamically without pre-rendering during build time
export async function generateStaticParams() {
    return [];
}

export const metadata = {
    title: 'Edit Package',
    description: 'Create or edit a package'
}

export default async function Page({ params }: { params: { id?: string[] } }) {
    const creditsName = await settings.get('creditsName', 'Credits') as string;

    const [nestsResponse, locationsResponse] = await Promise.all([
        client.getNests(),
        client.getLocations()
    ]);

    let existingData = null;
    if (params.id && params.id.length > 0) {
        const id = params.id[0];  // Take the first element of the array
        existingData = await prisma.package.findUnique({
            where: { id }
        });
        if (!existingData) notFound();
    }

    const title = existingData ? "Edit Server Configuration" : "Create Server Configuration";
    const description = existingData ? "Edit an existing server configuration" : "Create a new server configuration";

    return (
        <div>
            <PageTitle title={title} description={description} />
            <ServerConfigurationForm
                creditsName={creditsName}
                nests={nestsResponse.data}
                locations={locationsResponse.data}
                //existingData={existingData}
            />
        </div>
    );
}