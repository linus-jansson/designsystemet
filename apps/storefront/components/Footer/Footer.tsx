import { Heading, Link, Paragraph } from '@digdir/designsystemet-react';
import { EnvelopeClosedIcon } from '@navikt/aksel-icons';
import { Container } from '@repo/components';
import cl from 'clsx/lite';
import Image from 'next/image';
import NextLink from 'next/link';
import type { ReactNode } from 'react';

import classes from './Footer.module.css';


type LinkListItemProps = {
    text: string;
    url: string;
    prefix?: ReactNode;
};


const centerLinks = [

] as LinkListItemProps[];

const rightLinks = [

] as LinkListItemProps[];

const getCurrentYear = () => {
    const date = new Date();
    return date.getFullYear();
};

const LinkList = (links: LinkListItemProps[]) => {
    return (
        <ul className={classes.links}>
            {links?.map((item, index) => (
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

const Footer = ({ }) => {
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
                    <div></div>
                </Container>
            </div>
        </footer>
    );
};

export { Footer };