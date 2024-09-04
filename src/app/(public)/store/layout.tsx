import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Store",
    description: "Browse all services available",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
            <div className="bg-base-200 py-8">
                <div className="container m-auto">
                    {children}
                </div>
            </div>
    );
}

