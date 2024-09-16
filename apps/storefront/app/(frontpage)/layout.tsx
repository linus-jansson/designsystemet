import { Paragraph } from "@digdir/designsystemet-react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main id="main">
            {children}
        </main>
    );
}
