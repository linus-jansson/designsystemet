import '../globals.css';
import '@digdir/designsystemet-css';
import '@digdir/designsystemet-theme';

import { Figma, Github, Header, Slack } from '@repo/components';
import type { Metadata } from 'next';

import { VersionBanner } from '@components';
import { SkipLink } from '@digdir/designsystemet-react';
import Script from 'next/script';
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

const centerLinks = [
  {
    text: 'Om designsystemet',
    url: '/grunnleggende/introduksjon/om-designsystemet',
  },
  {
    text: 'Personvernerklæring',
    url: '/grunnleggende/personvernerklaering',
  },
  {
    text: 'Tilgjengelighetserklæring',
    url: 'https://uustatus.no/nb/erklaringer/publisert/faeb324d-9b3f-40b0-b715-92cac356a916',
  },
];

const rightLinks = [
  {
    text: 'designsystem@digdir.no',
    url: 'mailto:designsystem@digdir.no',
    prefix: <EnvelopeClosedIcon aria-hidden='true' fontSize='1.5em' />,
  },
  {
    text: 'Bli invitert til slack',
    url: 'https://join.slack.com/t/designsystemet/shared_invite/zt-2438eotl3-a4266Vd2IeqMWO8TBw5PrQ',
    prefix: <Slack />,
  },
  {
    text: 'Github',
    url: 'https://github.com/digdir/designsystemet',
    prefix: <Github />,
  },
  {
    text: 'Figma',
    url: 'https://www.figma.com/@designsystemet',
    prefix: <Figma />,
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
    <html lang='en' data-color-scheme='auto'>
      <body>
        <div className='root'>
          <SkipLink href='#main'>Hopp til hovedinnhold</SkipLink>
          <VersionBanner />
          <Header menu={menu} skipLink={false} />
          {children}
          <Footer />
          {process.env.VERCEL_ENV === 'production' && (
            <Script src='https://siteimproveanalytics.com/js/siteanalyze_6255470.js' />
          )}
        </div>
      </body>
    </html>
  );
}
