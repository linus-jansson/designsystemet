import cl from 'clsx/lite';
import { type HTMLAttributes, type ReactNode, forwardRef } from 'react';
import type { Color } from '../../colors';
import type { DefaultProps } from '../../types';
import type { MergeRight } from '../../utilities';

export type BadgeProps = MergeRight<
  DefaultProps & HTMLAttributes<HTMLSpanElement>,
  {
    /**
     * The color of the badge. If left unspecified, the color is inherited from the nearest ancestor with data-color.
     */
    'data-color'?: Color;
    /**
     * The number to display in the badge
     */
    count?: number;
    /**
     * The maximum number to display in the badge, when the count exceeds this number, the badge will display `{max}+`
     */
    maxCount?: number;
    /**
     * The placement of the badge
     *
     * @default top-right
     */
    placement?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    /**
     * Use when badge is floating to change the position of the badge
     *
     * @default rectangle
     */
    overlap?: 'circle' | 'rectangle';
    /**
     * The badge will float on top of the children
     */
    children?: ReactNode;
  }
>;

/**
 * `Badge` is a non-interactive component for displaying status with or without numbers.
 *
 * @example without children
 * ```jsx
 * <Badge color='accent' count={5} />
 * ```
 *
 * @example with children
 * ```jsx
 * <Badge color='accent'>
 *  <Icon />
 * </Badge>
 * ```
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  {
    className,
    count,
    maxCount,
    overlap = 'rectangle',
    placement = 'top-right',
    ...rest
  },
  ref,
) {
  return (
    <span
      className={cl('ds-badge', className)}
      data-count={
        count && maxCount && count > maxCount ? `${maxCount}+` : count
      }
      data-overlap={rest.children ? overlap : null}
      data-placement={rest.children ? placement : null}
      ref={ref}
      {...rest}
    />
  );
});
