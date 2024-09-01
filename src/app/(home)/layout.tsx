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
        <>
            <main className={''}>
                {children}
            </main>
        </>
    );
}


