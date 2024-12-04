import type { CssColor } from '@adobe/leonardo-contrast-colors';
import { BackgroundColor, Color, Theme } from '@adobe/leonardo-contrast-colors';
import {
  calculateContrastOneColor,
  getBaseColor,
  getContrastFromLightness,
  getLightnessFromHex,
} from '@digdir/designsystemet/color';
import cl from 'clsx/lite';
import { useEffect, useState } from 'react';

import { ContrastBox } from '../ContrastBox/ContrastBox';

import classes from './FullBaseTest.module.css';
export const FullBaseTest = () => {
  const [blueColors, setBlueColors] = useState<CssColor[]>([]);

  useEffect(() => {
    const blue = GenerateColor('#0062BA');
    setBlueColors(blue);
  }, []);

  const GenerateColor = (color: CssColor) => {
    const leoBackgroundColor = new BackgroundColor({
      name: 'backgroundColor',
      colorKeys: ['#ffffff'],
      ratios: [1],
    });

    let lightnessScale: number[] = [];

    lightnessScale = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
      76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
      94, 95, 96, 97, 98, 99, 100,
    ];

    const getColorContrasts = (
      color: CssColor,
      lightnessScale: number[],
      backgroundColor: CssColor,
    ) => {
      return lightnessScale.map((lightness) =>
        getContrastFromLightness(lightness, color, backgroundColor),
      );
    };

    const leoColor = new Color({
      name: 'color',
      colorKeys: [color],
      ratios: [
        ...getColorContrasts(
          color,
          lightnessScale,
          leoBackgroundColor.colorKeys[0],
        ),
      ],
    });

    const theme = new Theme({
      colors: [leoColor],
      backgroundColor: leoBackgroundColor,
      lightness: 100,
    });

    return theme.contrastColorValues;
  };

  const Column = ({ color, index }: { color: CssColor; index: number }) => {
    return (
      <div className={classes.column}>
        <div className={classes.boxTitle}>{index + 1}</div>
        <div className={classes.textContrast}>
          <div>Hvit kontrast</div>
          <div>Svart kontrast</div>
        </div>
        <div className={classes.boxes}>
          <Box color={color} theme='light' />
          <Box color={color} theme='dark' />
          <Box color={color} theme='contrast' />
        </div>
      </div>
    );
  };

  const List = ({
    baseDefault,
    baseHover,
    baseActive,
    bgColor,
    active,
    theme,
  }: {
    baseDefault: CssColor;
    baseHover: CssColor;
    baseActive: CssColor;
    bgColor: CssColor;
    active: boolean;
    theme: 'light' | 'dark' | 'contrast';
  }) => {
    let bgDefault = blueColors[99];
    let bgSubtle = blueColors[95];

    if (theme === 'dark') {
      bgDefault = blueColors[9];
      bgSubtle = blueColors[13];
    } else if (theme === 'contrast') {
      bgDefault = blueColors[0];
      bgSubtle = blueColors[5];
    }

    return (
      <div className={cl(classes.list, active && classes.listActive)}>
        <Item mainColor={baseDefault} bgColor={bgColor} />
        <Item mainColor={baseHover} bgColor={bgColor} />
        <Item mainColor={baseActive} bgColor={bgColor} />
        <Item mainColor={bgDefault} bgColor={baseDefault} />
        <Item mainColor={bgSubtle} bgColor={baseDefault} />
      </div>
    );
  };

  const Box = ({
    color,
    theme,
  }: {
    color: CssColor;

    theme: 'light' | 'dark' | 'contrast';
  }) => {
    let lightness = Math.round(getLightnessFromHex(color));
    if (theme === 'dark' || theme === 'contrast') {
      color = getBaseColor(color);
      lightness = lightness <= 30 ? 70 : 100 - lightness;
    }

    let modifier = 8;

    //
    if (lightness <= 30) {
      modifier = -modifier;
    }
    // 49 is when the contrast flips from white to black, 65 is when the contrast flips from black to white
    if (lightness >= 49 && lightness <= 65) {
      modifier = -modifier;
    }

    const baseDefault = blueColors[lightness];
    const baseHover = blueColors[lightness - modifier];
    const baseActive = blueColors[lightness - modifier * 2];

    const contrastOneColor = calculateContrastOneColor(blueColors[lightness]);

    return (
      <div
        className={cl(
          classes.box,
          theme === 'dark' && classes.boxDark,
          theme === 'contrast' && classes.boxContrast,
        )}
      >
        <List
          bgColor='#ffffff'
          baseDefault={baseDefault}
          baseHover={baseHover}
          baseActive={baseActive}
          active={contrastOneColor === '#ffffff'}
          theme={theme}
        />
        <List
          bgColor='#000000'
          baseDefault={baseDefault}
          baseHover={baseHover}
          baseActive={baseActive}
          active={contrastOneColor === '#000000'}
          theme={theme}
        />
      </div>
    );
  };

  const Item = ({
    mainColor,
    bgColor,
  }: {
    mainColor: CssColor;
    bgColor: CssColor;
  }) => {
    return (
      <div className={classes.item}>
        <div
          className={classes.btn}
          style={{ backgroundColor: mainColor, color: bgColor }}
        >
          {ContrastBox(mainColor, bgColor)}
          Aa
        </div>
      </div>
    );
  };

  return (
    <div className={classes.content}>
      {blueColors.map(
        (color, index) =>
          index + 1 >= 20 &&
          index + 1 <= 80 && <Column key={index} color={color} index={index} />,
      )}
    </div>
  );
};
