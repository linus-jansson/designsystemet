import { omit } from '@digdir/designsystemet-react';
import type { ColorInfo } from '@digdir/designsystemet/color';
import { SunIcon } from '@navikt/aksel-icons';
import cl from 'clsx/lite';
import { forwardRef } from 'react';

import { useThemeStore } from '../../store';
import type { ThemeColors } from '../../types';

import classes from './Color.module.css';

type ColorProps = {
  colorNumber: number;
  color: ColorInfo;
  contrast?: string;
  lightness?: string;
  featured?: boolean;
  hex?: string;
  showColorMeta?: boolean;
  type: ThemeColors;
} & Omit<React.HTMLAttributes<HTMLButtonElement>, 'color'>;

const Color = forwardRef<HTMLButtonElement, ColorProps>(
  (
    {
      color,
      contrast,
      featured,
      lightness,
      hex,
      showColorMeta = true,
      type,
      ...rest
    },
    ref,
  ) => {
    const setSelectedColor = useThemeStore((state) => state.setSelectedColor);
    return (
      <>
        <button
          ref={ref}
          onClick={() => {
            setSelectedColor(
              {
                hex: color.hex,
                number: color.number,
                name: color.name,
              },
              type,
            );
          }}
          style={{ backgroundColor: color.hex }}
          className={cl(classes.box, featured && classes.featured, 'ds-focus')}
          aria-label={`${type} farge ${color.number}, ${color.name}`}
          type='button'
          {...omit(['colorNumber'], rest)}
        ></button>

        {showColorMeta && (
          <>
            <div className={classes.hex}>{hex}</div>
            <div className={classes.contrast}>
              <div className={classes.colorTest}></div>
              {contrast}
            </div>
            <div className={classes.lightness}>
              <SunIcon title='a11y-title' fontSize='1.3rem' />
              {lightness}
            </div>
          </>
        )}
      </>
    );
  },
);

export { Color };
