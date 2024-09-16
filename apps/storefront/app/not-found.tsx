import { UaLogo } from '@repo/components/src/Header/logos/ua-logo';
import { Container } from '@repo/components';

import { Heading, Link, Paragraph } from '@digdir/designsystemet-react';

import type { Metadata } from 'next';
import NextLink from 'next/link';

import classes from './not-found.module.css';

export const metadata: Metadata = {
    title: 'Sidan kunde inte hittas',
};

const NotFound = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={classes.content}>
            <Container className={classes.container}>
                <div className={classes.imgContainer}>
                    <UaLogo className={classes.img} />
                </div>
                <div className={classes.textContainer}>
                    <Heading spacing size='md'>
                        Denna sida finns inte
                    </Heading>
                    <Paragraph spacing>
                        Ursäkta, vi kan inte hitta sidan du begärde.
                        Sidan kan ha flyttats eller raderats.
                    </Paragraph>
                    <Link asChild>
                        <NextLink href='/' prefetch={false}>
                            Gå till startsidan
                        </NextLink>
                    </Link>
                </div>
                {children}
            </Container>
        </div>
    );
};

export default NotFound;