'use client';

import { Heading } from '@digdir/designsystemet-react';
import type { ColorInfo, ThemeInfo } from '@digdir/designsystemet/color';

import classes from './BackgroundSurface.module.css';

type BackgroundsProps = {
  theme1: ThemeInfo;
  theme2: ThemeInfo;
  theme3: ThemeInfo;
  theme4: ThemeInfo;
  theme5: ThemeInfo;
  theme6: ThemeInfo;
  theme7: ThemeInfo;
  theme8: ThemeInfo;
};

export const BackgroundSurface = ({
  theme1,
  theme2,
  theme3,
  theme4,
  theme5,
  theme6,
  theme7,
  theme8,
}: BackgroundsProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <Column
          title='Light'
          scales={[
            theme1.light,
            theme2.light,
            theme3.light,
            theme4.light,
            theme5.light,
            theme6.light,
            theme7.light,
            theme8.light,
          ]}
        />
        <Column
          title='Dark'
          scales={[
            theme1.dark,
            theme2.dark,
            theme3.dark,
            theme4.dark,
            theme5.dark,
            theme6.dark,
            theme7.dark,
            theme8.dark,
          ]}
        />
        <Column
          title='Contrast'
          scales={[
            theme1.contrast,
            theme2.contrast,
            theme3.contrast,
            theme4.contrast,
            theme5.contrast,
            theme6.contrast,
            theme7.contrast,
            theme8.contrast,
          ]}
        />
      </div>
    </div>
  );
};

type ColumnProps = {
  title: string;
  scales: ColorInfo[][];
};

const Column = ({ title, scales }: ColumnProps) => {
  return (
    <div className={classes.column}>
      <Heading className={classes.boxTitle} data-size='xs'>
        {title}
      </Heading>
      <div className={classes.boxes}>
        <Box colorScale={scales[0]} backgroundIndex={1} scales={scales} />
        <Box colorScale={scales[1]} backgroundIndex={1} scales={scales} />
        <Box colorScale={scales[5]} backgroundIndex={1} scales={scales} />
      </div>
    </div>
  );
};

type BoxProps = {
  colorScale: ColorInfo[];
  backgroundIndex: 0 | 1;
  scales: ColorInfo[][];
};

const Box = ({ colorScale, backgroundIndex, scales }: BoxProps) => {
  return (
    <div
      className={classes.box}
      style={{ backgroundColor: colorScale[backgroundIndex].hex }}
    >
      <div
        className={classes.surface}
        style={{ backgroundColor: scales[0][2].hex }}
      ></div>
      <div
        className={classes.surface}
        style={{ backgroundColor: scales[1][2].hex }}
      />
      <div
        className={classes.surface}
        style={{ backgroundColor: scales[2][2].hex }}
      />
      <div
        className={classes.surface}
        style={{ backgroundColor: scales[3][2].hex }}
      />
      <div
        className={classes.surface}
        style={{ backgroundColor: scales[4][2].hex }}
      />
      <div
        className={classes.surface}
        style={{ backgroundColor: scales[5][2].hex }}
      />
      <div
        className={classes.surface}
        style={{ backgroundColor: scales[6][2].hex }}
      />
      <div
        className={classes.surface}
        style={{ backgroundColor: scales[7][2].hex }}
      />
    </div>
  );
};
