import cl from 'clsx/lite';
import { forwardRef } from 'react';
import type { TableHTMLAttributes } from 'react';
import type { DefaultProps } from '../../types';

export type TableProps = {
  /**
   * If true, the table will have zebra striping
   * @default false
   */
  zebra?: boolean;
  /**
   * If true, the table will have a sticky header
   * @default false
   */
  stickyHeader?: boolean;
  /**
   * If true, the table will have a rounded border
   * @default false
   */
  border?: boolean;
  /**
   * If true, the table will have a hover effect on rows
   * @default false
   */
  hover?: boolean;
} & Omit<TableHTMLAttributes<HTMLTableElement>, 'border'> &
  DefaultProps;

export const Table = forwardRef<HTMLTableElement, TableProps>(function Table(
  {
    zebra = false,
    stickyHeader = false,
    border = false,
    hover = false,
    className,
    children,
    ...rest
  },
  ref,
) {
  return (
    <table
      className={cl('ds-table', className)}
      data-border={border || undefined}
      data-hover={hover || undefined}
      data-sticky-header={stickyHeader || undefined}
      data-zebra={zebra || undefined}
      ref={ref}
      {...rest}
    >
      {children}
    </table>
  );
});
