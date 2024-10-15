import { Heading, Link, Paragraph } from '@digdir/designsystemet-react';
import { EnvelopeClosedIcon } from '@navikt/aksel-icons';
import { Container } from '@repo/components';
import cl from 'clsx/lite';
import Image from 'next/image';
import NextLink from 'next/link';
import type { ReactNode } from 'react';

import classes from './Footer.module.css';

const centerLinks = [
  {
    text: 'Om designsystemet',
    url: '/grunnleggende/introduksjon/om-designsystemet',
  },
  {
    text: 'Tillgänglighetsredogörelse',
    url: 'https://www.uppsala.se/lankar-i-sidfoten/tillganglighetsredogorelse/',
  },
];

const rightLinks = [
  {
    text: 'designsystemet@uppsala.se',
    url: 'mailto:designsystemet@digdir.se',
    prefix: <EnvelopeClosedIcon aria-hidden='true' fontSize='1.5em' />,
  },
  {
    text: 'Github',
    url: 'https://github.com/digdir/designsystemet',
    prefix: (
      <Image
        height={20}
        width={20}
        alt=''
        src='/img/logos/github-negative.png'
      />
    ),
  },
];

type LinkListItemProps = {
  text: string;
  url: string;
  prefix?: ReactNode;
};

const getCurrentYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const LinkList = (links: LinkListItemProps[]) => {
  return (
    <ul className={classes.links}>
      {links.map((item, index) => (
        <li key={index}>
          <Link href={item.url} color='neutral' className={classes.link}>
            {item.prefix}
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  return (
    <footer className={classes.footer} data-ds-color-mode='dark'>
      <div className={classes.top}>
        <Container className={classes.container}>
          <div>
            <Heading size='xs' level={2} className={classes.title}>
              Om webbplatsen
            </Heading>
            {LinkList(centerLinks)}
          </div>
          <div>
            <Heading size='xs' level={2} className={classes.title}>
              Kom i kontakt med oss
            </Heading>
            {LinkList(rightLinks)}
          </div>
          <div>
            <Image
              src={'/img/logos/uppsala-logo-yellow.svg'}
              alt='Uppsala kommun logotyp'
              width={300}
              height={100}
            />
          </div>
        </Container>
      </div>
    </footer>
  );
};

export { Footer };
