import { Heading } from '@digdir/designsystemet-react';
import { ComponentIcon, PaletteIcon, WrenchIcon } from '@navikt/aksel-icons';
import { Container } from '@repo/components';
import cn from 'clsx/lite';
import type React from 'react';

import { NavigationCard } from '@components';

import classes from './layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main id='main'>
      <div className={classes.header}>
        <div
          className={classes.content}
          /* We need this for firefox, because it focuses anything with overflow: hidden */
          tabIndex={-1}
        >
          <Container className={classes.container}>
            <div className={classes.text}>
              <div className={classes.betaTag}>Beta</div>
              <Heading data-size='lg'>
                Designsystemet hjälper dig att skapa bra digitala tjänster
              </Heading>
            </div>
            <div className={classes.cards}>
              <NavigationCard
                title='För designers'
                description='Lär dig hur du kommer igång med designsystemet som designer.'
                color='blue'
                url='/docs/basics/for-designers/getting-started'
                icon={<PaletteIcon fontSize={36} />}
                level={2}
              ></NavigationCard>

              <NavigationCard
                title='För utvecklare'
                description='Lär dig hur du kommer igång med designsystemet som utvecklare.'
                color='yellow'
                url='/docs/basics/for-developers/getting-started'
                icon={<WrenchIcon fontSize={36} />}
                level={2}
              ></NavigationCard>

              <NavigationCard
                title='Komponenter'
                description='Se översikten över UI-komponenterna som är skapade i React.'
                color='red'
                url='/docs/komponenter'
                icon={<ComponentIcon fontSize={34} />}
                level={2}
              ></NavigationCard>
            </div>
          </Container>
        </div>
      </div>
      {children}
    </main>
  );
};

export default Layout;
