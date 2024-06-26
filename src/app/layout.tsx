import type {Metadata} from "next";
import {Inter as FontSans} from "next/font/google"
import "./globals.css";
import {ReactNode} from "react";
import {cn} from "@/lib/utils";
import {Toaster} from "@/components/ui/toaster";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: "Disaster recovery",
    description: "This is a POC for disaster recovery",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
            )}
        >
        {children}
        <Toaster/>
        </body>
        </html>
    );
}
