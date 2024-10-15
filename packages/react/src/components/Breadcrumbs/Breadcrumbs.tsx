import cl from 'clsx/lite';
import { type HTMLAttributes, forwardRef } from 'react';

export type BreadcrumbsProps = {
  /**
   * Sets the screen reader label for the Breadcrumbs area
   * @default 'Du er her'
   */
  'aria-label'?: string;
  /**
   * Sets the size of the component
   * @default md
   */
  size?: 'sm' | 'md' | 'lg';
} & HTMLAttributes<HTMLElement>;

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  (
    { 'aria-label': ariaLabel = 'Du er her:', className, size, ...rest },
    ref,
  ) => (
    <nav
      aria-label={ariaLabel}
      className={cl('ds-breadcrumbs', className)}
      data-size={size}
      ref={ref}
      {...rest}
    />
  ),
);
