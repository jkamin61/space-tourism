import type {Metadata} from "next";
import {Barlow, Barlow_Condensed, Bellefair} from "next/font/google";
import "./globals.css";

const barlow = Barlow({subsets: ["latin"], weight: "400"}); // Regular Barlow

export const metadata: Metadata = {
    title: "Space tourism",
    description: "Space tourism web application",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={barlow.className}>{children}</body>
        </html>
    );
}
