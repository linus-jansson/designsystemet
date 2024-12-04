import cl from 'clsx/lite';
import { forwardRef } from 'react';
import type { SelectHTMLAttributes } from 'react';
import type { DefaultProps } from '../../../types';
import type { MergeRight } from '../../../utilities';

export type SelectProps = MergeRight<
  Omit<DefaultProps, 'data-color'> &
    Omit<SelectHTMLAttributes<HTMLSelectElement>, 'multiple'>,
  {
    /** Defines if the select is readOnly
     * @default false
     */
    readOnly?: boolean;
    /** Defines the width of Select in count of characters.
     */
    size?: number;
  }
>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select({ className, onKeyDown, onMouseDown, ...rest }, ref) {
    return (
      <select
        className={cl('ds-input', className)}
        ref={ref}
        onKeyDown={(event) => {
          if (event.key === 'Tab') return;
          if (rest.readOnly) event.preventDefault(); // Make readonly work for select
          onKeyDown?.(event);
        }}
        onMouseDown={(event) => {
          if (rest.readOnly) event.preventDefault(); // Make readonly work for select
          onMouseDown?.(event);
        }}
        {...rest}
      />
    );
  },
);
