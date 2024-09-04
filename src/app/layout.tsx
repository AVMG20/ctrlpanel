import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/auth/session-wrapper";

const inter = Inter({subsets: ["latin"]});

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
        <SessionWrapper>
            <html lang="en" data-theme="ctrlpanel">
                <body className={inter.className}>
                {children}
                </body>
            </html>
        </SessionWrapper>
    );
}