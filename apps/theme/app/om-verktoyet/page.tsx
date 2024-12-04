'use client';
import { Container } from '@repo/components';

import classes from './page.module.css';

export default function Home() {
  return (
    <div className={classes.page}>
      <main>
        <Container>
          <div className={classes.row}>
            <h1 className={classes.title}>Om verktøyet</h1>
            <p className={classes.ingress}>
              Dette er et test-verktøy som genererer farger basert på HSLUV
              fargespekteret og legger til RGB interpolasjon for å få
              menneskelige fine farger.
            </p>
          </div>
        </Container>
      </main>
    </div>
  );
}
