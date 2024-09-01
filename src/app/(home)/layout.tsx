import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "CtrlPanel",
    description: "New and improved billing panel for all your hosting needs.",
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


