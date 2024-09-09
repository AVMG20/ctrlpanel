import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/auth/session-wrapper";
import settings from "@/lib/settings";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "CtrlPanel",
    description: "New and improved billing panel for all your hosting needs.",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const theme = await settings.get('theme', 'ctrlpanel');

    return (
        <SessionWrapper>
            <html lang="en" data-theme={theme}>
                <body className={inter.className}>
                {children}
                </body>
            </html>
        </SessionWrapper>
    );
}