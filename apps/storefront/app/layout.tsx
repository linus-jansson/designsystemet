import type { Metadata } from "next";
import "./globals.css";
import '@digdir/designsystemet-theme';
import '@digdir/designsystemet-css';

import { Header } from '@repo/components';
import { Footer } from "@components";

export const metadata: Metadata = {
    title: {
        template: '%s - Uppsala Kommun',
        default: 'Designsystemet',
    },
    openGraph: {
        images: '/img/designsystemet-meta.png',
    },
};


const menuItems = [
    {
        name: 'För Designers',
        href: '/for-designers',
    },
    {
        name: 'För utvecklare',
        href: '/for-developers',
    },
    {
        name: 'Komponenter',
        href: '/components',
    },
];

const FooterItems = [

]

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className='root'>
                    <Header menu={menuItems}></Header>
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
