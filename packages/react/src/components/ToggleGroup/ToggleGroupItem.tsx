import { forwardRef } from 'react';

import { RovingFocusItem } from '../../utilities/RovingFocus/RovingFocusItem';
import { Button, type ButtonProps } from '../Button/Button';

import { useToggleGroupItem } from './useToggleGroupitem';

export type ToggleGroupItemProps = {
  /**
   * The value of the ToggleGroupItem.
   * Generates a random value if not set.
   **/
  value?: string;
} & Omit<ButtonProps, 'loading' | 'size' | 'value'>;

/**
 * A single item in a ToggleGroup.
 * @example
 * <ToggleGroup.Item value='1'>Toggle 1</ToggleGroup.Item>
 */
export const ToggleGroupItem = forwardRef<
  HTMLButtonElement,
  ToggleGroupItemProps
>(function ToggleGroupItem(rest, ref) {
  const { active, size = 'md', buttonProps, value } = useToggleGroupItem(rest);

  return (
    <RovingFocusItem asChild value={value}>
      <Button
        variant={active ? 'primary' : 'tertiary'}
        size={size}
        ref={ref}
        {...rest}
        {...buttonProps}
      />
    </RovingFocusItem>
  );
});
