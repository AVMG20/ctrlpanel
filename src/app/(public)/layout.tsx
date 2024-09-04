import type {Metadata} from "next";
import NavBar from "@/app/(public)/navbar";
import Footer from "@/app/footer";

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

        <div>
            <NavBar/>
                <main className={'bg-base-200'}>
                    {children}
                </main>
            <Footer/>
        </div>

    );
}


