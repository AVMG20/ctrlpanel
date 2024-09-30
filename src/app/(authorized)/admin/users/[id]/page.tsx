import { prisma } from "@/prisma";
import { notFound } from "next/navigation";
import Card from "@/components/ui/card";
import Image from "next/image";
import TicketsTable from "@/app/(authorized)/admin/tickets/table";
import type {Metadata} from "next";

export const revalidate = 300;

export const metadata: Metadata = {
    title: "View user",
};

// Empty array will allow us to build the static pages dynamically without pre-rendering during build time
export async function generateStaticParams() {
    return [];
}

async function getUserData(id: string) {
    const user = await prisma.user.findUnique({
        where: { id },
        include: {
            Ticket: true,
        },
    });

    if (!user) notFound();

    return user;
}

export default async function UserOverviewPage({ params }: { params: { id: string } }) {
    const user = await getUserData(params.id);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">User Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card title="User Details">
                    <div className="flex items-center space-x-4">
                        {user.image && (
                            <Image
                                src={user.image}
                                alt={user.name || "User"}
                                width={64}
                                height={64}
                                className="rounded-full"
                            />
                        )}
                        <div>
                            <p><strong>Name:</strong> {user.name || "N/A"}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Role:</strong> {user.role}</p>
                            <p><strong>Created At:</strong> {user.createdAt.toLocaleString()}</p>
                            <p><strong>Last Updated:</strong> {user.updatedAt.toLocaleString()}</p>
                        </div>
                    </div>
                </Card>

                <Card title="Account Status">
                    <p><strong>Email Verified:</strong> {user.emailVerified ? "Yes" : "No"}</p>
                    <p><strong>Password Set:</strong> {user.password ? "Yes" : "No"}</p>
                </Card>
            </div>

            <div className="mt-8">
                <TicketsTable data={user.Ticket} />
            </div>
        </div>
    );
}