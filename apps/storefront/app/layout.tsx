import '../globals.css';
import '@digdir/designsystemet-css';
import '@digdir/designsystemet-theme';

import { Header } from '@repo/components';
import type { Metadata } from 'next';

import { VersionBanner } from '@components';
import { SkipLink } from '@digdir/designsystemet-react';
import { Footer } from '../components/Footer/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_GIT_COMMIT_REF !== 'main'
      ? 'https://designsystem.test.uppsala.se'
      : 'https://designsystem.uppsala.se',
  ),
  title: {
    template: '%s - Uppsala kommun',
    default: 'Designsystemet',
  },
  openGraph: {
    images: '/img/designsystemet-meta.png', // todo bytt ut
  },
};

const menu = [
  {
    name: 'Dokumentation',
    href: '/docs/basics',
  },
  {
    name: 'Komponenter',
    href: '/docs/komponenter',
  },
];

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='root'>
          <SkipLink href='#main'>Till sidans huvudinnehåll</SkipLink>
          <Header menu={menu} skipLink={false} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
