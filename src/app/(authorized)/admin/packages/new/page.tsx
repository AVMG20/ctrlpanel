import PageTitle from "@/components/util/page-title";
import {ServerConfigurationForm} from "@/app/(authorized)/admin/packages/form";
import client from "@/lib/pterodactyl/pterodactyl";

export const revalidate = 360;

export default async function Page() {
    const [nestsResponse, locationsResponse] = await Promise.all([
        client.getNests(),
        client.getLocations()
    ]);

    return (
        <div>
            <PageTitle title={"Create Server Configuration"} description={"Create a new server configuration"}/>
            <ServerConfigurationForm nests={nestsResponse.data.data} locations={locationsResponse.data.data}/>
        </div>
    )
}
