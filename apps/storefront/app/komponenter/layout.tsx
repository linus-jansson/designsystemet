import { ComponentFillIcon } from '@navikt/aksel-icons';
import { Container } from '@repo/components';

import {
    Banner,
    BannerHeading,
    BannerIcon,
    BannerIngress,
} from 'components/Banner/Banner';

import classes from './layout.module.css';

export const metadata = {
    title: 'Komponenter',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main id='main' className={classes.page}>
            <Banner color='red'>
                <BannerIcon>
                    <ComponentFillIcon fontSize={'2.5rem'} />
                </BannerIcon>
                <BannerHeading>Komponenter</BannerHeading>
                <BannerIngress>
                    Designsystsemet innehåller grundläggande komponenter som kan kombineras på många olika sätt och i olika mönster.
                </BannerIngress>
            </Banner>
            <Container className={classes.grid}>{children}</Container>
        </main>
    );
};

export default Layout;
